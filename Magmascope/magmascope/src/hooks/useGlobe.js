import { useEffect, useRef } from 'react';
import { filterVolcanoes } from './useSearch';
import { t, tFallback } from '../data/i18n';
import { createEruption } from '../three/eruptionEffects';
import { getEruptionProfile } from '../data/eruptionProfile';
import { useGlobeContext } from '../context/GlobeContext';
import { useLanguage } from '../context/LanguageContext';

export function useGlobe(mountRef, volcanoes, _ctx, _lang) {
  const ctx = useGlobeContext();
  const { currentLang: lang } = useLanguage();

  const globeRef = useRef(null);
  const helpersRef = useRef(null);
  const previousLockedRef = useRef(null);
  const tooltipElRef = useRef(null);
  const activeClusterPopupRef = useRef(null);

  const ctxRef = useRef(ctx);
  useEffect(() => { ctxRef.current = ctx; }, [ctx]);

  const langRef = useRef(lang);
  useEffect(() => { langRef.current = lang; }, [lang]);

  const eruptionRef = useRef(null);
  const eruptionFrameRef = useRef(null);
  const eruptionStartTimeRef = useRef(null);
  const eruptionVolcanoIdRef = useRef(null);
  const setClusterMarkersVisible = (visible) => {
    const htmlEls = document.querySelectorAll('.cluster-marker');
    htmlEls.forEach(el => { el.style.display = visible ? '' : 'none'; });
  };

  const updateVolcanoVisibility = (selectedId, hideOthers) => {
    const globe = globeRef.current;
    if (!globe) return;
    globe.scene().traverse((obj) => {
      if (!obj.userData) return;
      if (obj.userData._isClusterCone) {
        obj.visible = !hideOthers;
        return;
      }
      if (obj.userData.id !== undefined) {
        obj.visible = !hideOthers || obj.userData.id === selectedId;
      }
    });
    setClusterMarkersVisible(!hideOthers);
  };
  // ── MOUNT-ONCE EFFECT ────────────────────────────────────────────────────
  useEffect(() => {
    if (!mountRef.current || globeRef.current) return;

    const Globe = window.Globe;
    const THREE = window.THREE;

    const bodyMaterial = new THREE.MeshLambertMaterial({
      color: 0x3a1f12,
      emissive: 0x2a0d05,
      emissiveIntensity: 0.45,
      flatShading: true,
    });

    const craterRimMaterial = new THREE.MeshLambertMaterial({
      color: 0x1a0904,
      emissive: 0x3a1208,
      emissiveIntensity: 0.6,
      flatShading: true,
    });

    const STATUS_PALETTE = {
      Active:  { core: 0xff5722, glow: 0xff8c42 },
      Dormant: { core: 0x00e5ff, glow: 0x4dd0e1 },
      Extinct: { core: 0x9e9e9e, glow: 0xbdbdbd },
    };
    const LOCKED_PEAK = { core: 0xffeb3b, glow: 0xff5722 };

    function makePeakMaterials(palette) {
      return {
        core: new THREE.MeshBasicMaterial({ color: palette.core, transparent: true, opacity: 0.95 }),
        glow: new THREE.MeshBasicMaterial({ color: palette.glow, transparent: true, opacity: 0.45, side: THREE.BackSide }),
      };
    }

    const STATUS_MATERIALS = Object.fromEntries(
      Object.entries(STATUS_PALETTE).map(([k, v]) => [k, makePeakMaterials(v)])
    );
    const LOCKED_MATERIALS = makePeakMaterials(LOCKED_PEAK);

    const importanceFactor = (d) => {
      const veiBoost = Math.pow((d.vei || 0) + 1, 1.4) * 0.18;
      const baseSize = d.notable ? 0.5 : 0.32;
      return baseSize + veiBoost;
    };

    function buildVolcanoMarker(d) {
      const group = new THREE.Group();
      group.userData = { ...d };
      group.userData._importance = importanceFactor(d);
      const importance = group.userData._importance;
      const bodyHeight = 1.15 * importance;
      const bodyRadiusBottom = 0.46 * importance;
      const bodyRadiusTop = 0.16 * importance;
      const mats = STATUS_MATERIALS[d.status] || STATUS_MATERIALS.Active;

      // Truncated cone — flat-topped crater profile, faceted via flat shading
      const body = new THREE.Mesh(
        new THREE.CylinderGeometry(bodyRadiusTop, bodyRadiusBottom, bodyHeight, 10, 1, false),
        bodyMaterial
      );
      body.position.y = bodyHeight / 2;
      group.add(body);

      // Dark crater rim sitting flush with the body's flat top
      const rim = new THREE.Mesh(
        new THREE.TorusGeometry(bodyRadiusTop * 0.95, bodyRadiusTop * 0.22, 6, 18),
        craterRimMaterial
      );
      rim.position.y = bodyHeight;
      rim.rotation.x = Math.PI / 2;
      group.add(rim);

      // Glowing core (lava) seated in the crater
      const peak = new THREE.Mesh(new THREE.SphereGeometry(bodyRadiusTop * 0.85, 12, 12), mats.core);
      peak.position.y = bodyHeight + bodyRadiusTop * 0.15;
      peak.userData._role = 'peak';
      group.add(peak);

      // Atmospheric halo
      const halo = new THREE.Mesh(new THREE.SphereGeometry(0.34 * importance, 16, 16), mats.glow);
      halo.position.y = bodyHeight + bodyRadiusTop * 0.15;
      halo.userData._role = 'halo';
      group.add(halo);

      return group;
    }

    const globe = Globe()(mountRef.current)
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
      .backgroundImageUrl(`${import.meta.env.BASE_URL}night-sky.png`)
      .atmosphereColor('#ffb38a')
      .atmosphereAltitude(0.16)
      .showGraticules(false);

    globeRef.current = globe;

    function computeZoomFactor() {
      const camDist = globe.camera().position.length() / 100;
      if (!isFinite(camDist) || camDist <= 0) return 1;
      return Math.max(1, Math.min(4.5, camDist));
    }

    globe
      .customLayerData(volcanoes)
      .customThreeObject(buildVolcanoMarker)
      .customThreeObjectUpdate((obj, d) => {
        if (!d || d.lat === undefined || d.lng === undefined) return;
        const coords = globe.getCoords(d.lat, d.lng, 0.005);
        if (!coords || !isFinite(coords.x)) return;
        Object.assign(obj.position, coords);
        obj.lookAt(0, 0, 0);
        obj.rotateX(-Math.PI / 2);
      })
      .onCustomLayerClick((d) => {
        if (d) ctxRef.current.lockVolcano(d);
      });

    let zoomRefreshQueued = false;
    globe.controls().addEventListener('change', () => {
      if (zoomRefreshQueued) return;
      zoomRefreshQueued = true;
      requestAnimationFrame(() => {
        zoomRefreshQueued = false;
        updateClusterVisibility();
      });
    });

    const RING_STYLE = (d) => {
      const v = d.vei || 0;
      if (v >= 7) return { color: [255, 87, 34],  radius: 6.0, speed: 3.5, period: 1100, alphaMax: 1.0 };
      if (v >= 4) return { color: [255, 193, 7],  radius: 3.5, speed: 2.2, period: 1700, alphaMax: 0.85 };
      return            { color: [255, 255, 255], radius: 1.8, speed: 1.4, period: 2400, alphaMax: 0.4 };
    };

    globe
      .ringsData([])
      .ringLat('lat').ringLng('lng')
      .ringMaxRadius(d => RING_STYLE(d).radius)
      .ringPropagationSpeed(d => RING_STYLE(d).speed)
      .ringRepeatPeriod(d => RING_STYLE(d).period)
      .ringColor(d => {
        const s = RING_STYLE(d);
        const [r, g, b] = s.color;
        return tt => `rgba(${r}, ${g}, ${b}, ${(1 - tt) * s.alphaMax})`;
      })
      .ringAltitude(0.005);

    function haversineKm(lat1, lng1, lat2, lng2) {
      const toRad = d => d * Math.PI / 180;
      const R = 6371;
      const dLat = toRad(lat2 - lat1);
      const dLng = toRad(lng2 - lng1);
      const a = Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
      return 2 * R * Math.asin(Math.sqrt(a));
    }

    function buildClusters(volcs, thresholdKm = 400) {
      const clusters = [];
      for (const v of volcs) {
        const existing = clusters.find(c => haversineKm(c.lat, c.lng, v.lat, v.lng) < thresholdKm);
        if (existing) {
          existing.members.push(v);
          let sumX = 0, sumY = 0, sumZ = 0, totalW = 0;
          existing.members.forEach(m => {
            const w = (m.vei || 0) + 1;
            const latRad = m.lat * Math.PI / 180;
            const lngRad = m.lng * Math.PI / 180;
            sumX += w * Math.cos(latRad) * Math.cos(lngRad);
            sumY += w * Math.cos(latRad) * Math.sin(lngRad);
            sumZ += w * Math.sin(latRad);
            totalW += w;
          });
          const avgX = sumX / totalW;
          const avgY = sumY / totalW;
          const avgZ = sumZ / totalW;
          existing.lng = Math.atan2(avgY, avgX) * 180 / Math.PI;
          existing.lat = Math.atan2(avgZ, Math.sqrt(avgX * avgX + avgY * avgY)) * 180 / Math.PI;
        } else {
          clusters.push({ lat: v.lat, lng: v.lng, members: [v] });
        }
      }

      const labelCounts = {};
      for (const c of clusters.filter(c => c.members.length > 1)) {
        const regions = {};
        const countries = {};
        for (const m of c.members) {
          regions[m.region] = (regions[m.region] || 0) + 1;
          countries[m.country] = (countries[m.country] || 0) + 1;
        }
        const topRegion = Object.entries(regions).sort((a, b) => b[1] - a[1])[0][0];
        const topCountry = Object.entries(countries).sort((a, b) => b[1] - a[1])[0][0];
        const primary = topRegion || topCountry;
        labelCounts[primary] = (labelCounts[primary] || 0) + 1;
        // Store raw values so the displayed label can be re-translated on the
        // fly when the language changes.
        c.topRegion = topRegion;
        c.topCountry = topCountry;
        c.disambiguateWithCountry = labelCounts[primary] > 1;
      }
      return clusters.filter(c => c.members.length > 1);
    }

    function clusterLabel(c, lang) {
      const region = c.topRegion ? tFallback('region', c.topRegion, lang) : null;
      const country = tFallback('country', c.topCountry, lang);
      const primary = region || country;
      return c.disambiguateWithCountry ? `${primary} (${country})` : primary;
    }

    const CLUSTERS = buildClusters(volcanoes, 400);

    // IDs of every volcano that belongs to a cluster — these are hidden when
    // their cluster cone is visible so they don't double-up as extra sprites.
    const clusteredVolcanoIds = new Set(CLUSTERS.flatMap(c => c.members.map(m => m.id)));

    const clusterCones = [];
    for (const cluster of CLUSTERS) {
      const group = new THREE.Group();
      group.userData._isClusterCone = true;
      group.userData.lat = cluster.lat;
      group.userData.lng = cluster.lng;

      const sizeFactor = 1.5 + Math.log(cluster.members.length) * 1.4;
      const bodyHeight = 1.15 * sizeFactor;
      const bodyRadiusBottom = 0.46 * sizeFactor;
      const bodyRadiusTop = 0.16 * sizeFactor;

      const body = new THREE.Mesh(
        new THREE.CylinderGeometry(bodyRadiusTop, bodyRadiusBottom, bodyHeight, 10, 1, false),
        bodyMaterial
      );
      body.position.y = bodyHeight / 2;
      group.add(body);

      const rim = new THREE.Mesh(
        new THREE.TorusGeometry(bodyRadiusTop * 0.95, bodyRadiusTop * 0.22, 6, 18),
        craterRimMaterial
      );
      rim.position.y = bodyHeight;
      rim.rotation.x = Math.PI / 2;
      group.add(rim);

      const dominantMember = cluster.members.slice().sort((a, b) => (b.vei || 0) - (a.vei || 0))[0];
      const mats = STATUS_MATERIALS[dominantMember.status] || STATUS_MATERIALS.Active;

      const peak = new THREE.Mesh(new THREE.SphereGeometry(bodyRadiusTop * 0.85, 12, 12), mats.core);
      peak.position.y = bodyHeight + bodyRadiusTop * 0.15;
      peak.userData._role = 'peak';
      group.add(peak);

      const halo = new THREE.Mesh(new THREE.SphereGeometry(0.34 * sizeFactor, 16, 16), mats.glow);
      halo.position.y = bodyHeight + bodyRadiusTop * 0.15;
      halo.userData._role = 'halo';
      group.add(halo);

      const coords = globe.getCoords(cluster.lat, cluster.lng, 0.005);
      Object.assign(group.position, coords);
      group.lookAt(0, 0, 0);
      group.rotateX(-Math.PI / 2);
      globe.scene().add(group);
      clusterCones.push({ group, cluster });
    }

    function buildClusterEl(cluster) {
      const el = document.createElement('div');
      el.className = 'cluster-marker';
      const maxVei = Math.max(...cluster.members.map(m => m.vei || 0));
      el.classList.add(maxVei >= 5 ? 'cluster-major' : 'cluster-minor');
      el.innerHTML = `
        <div class="cluster-count">${cluster.members.length}</div>
        <div class="cluster-label">${clusterLabel(cluster, langRef.current)}</div>
      `;
      // Pair this DOM element with its cluster so the label can be refreshed
      // when the language changes without rebuilding the marker.
      el._cluster = cluster;
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        openClusterPopup(cluster, el);
      });
      return el;
    }

    globe
      .htmlElementsData(CLUSTERS)
      .htmlLat('lat').htmlLng('lng').htmlAltitude(0.01)
      .htmlElement(buildClusterEl);

    function updateClusterVisibility() {
      const cam = globe.camera();
      const camDist = cam.position.length() / 100;
      const opacity = Math.max(0, Math.min(1, (camDist - 1.0) / 1.0));

      const isErupting = ctxRef.current && ctxRef.current.eruptionPhase !== 'idle';

      // Cluster badges fade in at zoom-out as selection helpers; never shown during eruption.
      const htmlEls = document.querySelectorAll('.cluster-marker');
      htmlEls.forEach(el => {
        el.style.opacity = isErupting ? 0 : opacity;
        el.style.pointerEvents = (isErupting || opacity === 0) ? 'none' : 'auto';
      });

      // 3D cluster cones are never shown — individual markers are always visible.
      clusterCones.forEach(({ group }) => {
        group.visible = false;
      });

      // Restore individual marker visibility after eruption ends.
      if (!isErupting) {
        globe.scene().traverse((obj) => {
          if (!obj.userData || obj.userData._isClusterCone) return;
          if (obj.userData.id !== undefined && clusteredVolcanoIds.has(obj.userData.id)) {
            obj.visible = true;
          }
        });
      }
    }

    const raycaster = new THREE.Raycaster();
    const mouseNDC = new THREE.Vector2();
    let hoveredVolcano = null;

    const tooltipEl = document.createElement('div');
    tooltipEl.className = 'globe-tooltip-container';
    tooltipEl.style.cssText = 'position:fixed;pointer-events:none;z-index:5;display:none;';
    document.body.appendChild(tooltipEl);
    tooltipElRef.current = tooltipEl;

    function pickVolcano(clientX, clientY) {
      const rect = mountRef.current.getBoundingClientRect();
      mouseNDC.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouseNDC.y = -((clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouseNDC, globe.camera());
      const hits = raycaster.intersectObjects(globe.scene().children, true);
      for (const hit of hits) {
        let obj = hit.object;
        while (obj) {
          if (obj.userData && obj.userData.lat !== undefined && obj.userData.id !== undefined && !obj.userData._isClusterCone) {
            return obj.userData;
          }
          obj = obj.parent;
        }
      }
      return null;
    }

    function paintMarker(volcano, mats) {
      globe.scene().traverse((obj) => {
        if (!obj.userData || obj.userData.lat !== volcano.lat ||
            obj.userData.lng !== volcano.lng || obj.userData.id !== volcano.id) return;
        obj.children.forEach(child => {
          if (child.userData?._role === 'peak') child.material = mats.core;
          if (child.userData?._role === 'halo') child.material = mats.glow;
        });
      });
    }

    function handleVolcanoClick(volcano) {
      ctxRef.current.lockVolcano(volcano);
    }

    function openClusterPopup(cluster, anchorEl) {
      closeClusterPopup();
      const popup = document.createElement('div');
      popup.className = 'cluster-popup';
      const sorted = [...cluster.members].sort((a, b) => (b.vei || 0) - (a.vei || 0) || a.name.localeCompare(b.name));
      const lang = langRef.current;
      popup.innerHTML = `
        <div class="cluster-popup-header">
          <span class="cluster-popup-title">${clusterLabel(cluster, lang)}</span>
          <span class="cluster-popup-count">${cluster.members.length} ${t('cluster.sites', lang)}</span>
          <button class="cluster-popup-close" aria-label="${t('legend.close', lang)}">×</button>
        </div>
        <ul class="cluster-popup-list">
          ${sorted.map((v, i) => `
            <li class="cluster-popup-item" data-index="${i}">
              <span class="cluster-popup-icon"></span>
              <div class="cluster-popup-text">
                <div class="cluster-popup-name">${v.name}</div>
                <div class="cluster-popup-meta">${tFallback('type', v.type, lang)} · VEI ${v.vei || 0} · ${tFallback('status', v.status, lang)}</div>
              </div>
            </li>
          `).join('')}
        </ul>
      `;
      document.body.appendChild(popup);
      const rect = anchorEl.getBoundingClientRect();
      const popupW = 280;
      const goLeft = rect.right + popupW + 16 > window.innerWidth;
      popup.style.left = (goLeft ? rect.left - popupW - 12 : rect.right + 12) + 'px';
      popup.style.top = Math.max(20, rect.top - 8) + 'px';
      requestAnimationFrame(() => popup.classList.add('visible'));
      popup.querySelector('.cluster-popup-close').addEventListener('click', closeClusterPopup);
      popup.querySelectorAll('.cluster-popup-item').forEach(li => {
        li.addEventListener('click', () => {
          const v = sorted[Number(li.dataset.index)];
          closeClusterPopup();
          handleVolcanoClick(v);
        });
      });
      popup._cluster = cluster;
      activeClusterPopupRef.current = popup;
    }

    function closeClusterPopup() {
      const p = activeClusterPopupRef.current;
      if (!p) return;
      activeClusterPopupRef.current = null;
      p.classList.remove('visible');
      setTimeout(() => p.remove(), 200);
    }

    const docClickHandler = (e) => {
      if (activeClusterPopupRef.current &&
          !activeClusterPopupRef.current.contains(e.target) &&
          !e.target.closest('.cluster-marker')) {
        closeClusterPopup();
      }
    };
    document.addEventListener('click', docClickHandler);

    const onMouseMove = (e) => {
      if (e.target.closest('.cluster-marker') || e.target.closest('.cluster-popup')) {
        if (hoveredVolcano) { hoveredVolcano = null; tooltipEl.style.display = 'none'; }
        return;
      }
      const v = pickVolcano(e.clientX, e.clientY);
      if (v) {
        hoveredVolcano = v;
        mountRef.current.style.cursor = 'pointer';
        tooltipEl.style.display = 'block';
        tooltipEl.style.left = (e.clientX + 14) + 'px';
        tooltipEl.style.top = (e.clientY - 8) + 'px';
        tooltipEl.innerHTML = `<div class="globe-tooltip"><span class="tt-label">${t(v.notable ? 'tooltip.notable' : 'tooltip.regular', langRef.current)}</span> ${v.name}</div>`;
      } else if (hoveredVolcano) {
        hoveredVolcano = null;
        mountRef.current.style.cursor = 'grab';
        tooltipEl.style.display = 'none';
      }
    };
    const onMount = mountRef.current;
    const canvas = globe.renderer().domElement;

    canvas.addEventListener('mousemove', onMouseMove);

    // Fallback click detection for cluster cones (which aren't in customLayerData
    // so onCustomLayerClick won't fire for them) and as a redundant mechanism
    // for individual volcanoes. Listen on window — pointer events bubble up
    // regardless of OrbitControls' preventDefault on canvas-level pointerdown.
    let downX = 0, downY = 0, downActive = false, downPointerId = -1;
    const onPointerDown = (e) => {
      if (e.target !== canvas) return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      downX = e.clientX;
      downY = e.clientY;
      downActive = true;
      downPointerId = e.pointerId;
    };
    const onPointerUp = (e) => {
      if (!downActive || e.pointerId !== downPointerId) return;
      downActive = false;
      const dx = e.clientX - downX;
      const dy = e.clientY - downY;
      if (dx * dx + dy * dy > 36) return;
      const v = pickVolcano(downX, downY);
      if (v) handleVolcanoClick(v);
    };
    const onPointerCancel = () => { downActive = false; };
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerCancel);

    const onMouseLeave = () => {
      tooltipEl.style.display = 'none';
      hoveredVolcano = null;
    };
    canvas.addEventListener('mouseleave', onMouseLeave);

    const fillLight = new THREE.DirectionalLight(0xffd9b3, 0.4);
    fillLight.position.set(-1, -0.5, -1);
    globe.scene().add(fillLight);

    const controls = globe.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.35;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 110;
    controls.maxDistance = 800;

    let userHasInteracted = false;
    const stopRotation = () => {
      if (userHasInteracted) return;
      userHasInteracted = true;
      controls.autoRotate = false;
    };
    // OrbitControls fires 'start' when user begins interacting (rotate/pan/zoom)
    // — works regardless of preventDefault on pointerdown.
    controls.addEventListener('start', stopRotation);
    onMount.addEventListener('wheel', stopRotation);

    const resize = () => {
      globe.width(window.innerWidth);
      globe.height(window.innerHeight);
    };
    resize();
    window.addEventListener('resize', resize);

    globe.pointOfView({ lat: 20, lng: 30, altitude: 2.4 });

    requestAnimationFrame(() => {
      updateClusterVisibility();
      requestAnimationFrame(() => {
        updateClusterVisibility();
        setTimeout(() => ctxRef.current.setIsLoaded(true), 600);
      });
    });

    helpersRef.current = { paintMarker, closeClusterPopup, STATUS_MATERIALS, LOCKED_MATERIALS, controls, updateClusterVisibility, clusterLabel };

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerCancel);
      document.removeEventListener('click', docClickHandler);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      controls.removeEventListener('start', stopRotation);
      onMount.removeEventListener('wheel', stopRotation);
      if (tooltipElRef.current) tooltipElRef.current.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-label cluster markers (and re-render an open cluster popup) when the
  // language changes, without rebuilding any 3D state.
  useEffect(() => {
    const helpers = helpersRef.current;
    if (!helpers || !helpers.clusterLabel) return;
    document.querySelectorAll('.cluster-marker').forEach(el => {
      const cluster = el._cluster;
      if (!cluster) return;
      const labelEl = el.querySelector('.cluster-label');
      if (labelEl) labelEl.textContent = helpers.clusterLabel(cluster, lang);
    });
    const popup = activeClusterPopupRef.current;
    if (popup && popup._cluster) {
      const titleEl = popup.querySelector('.cluster-popup-title');
      if (titleEl) titleEl.textContent = helpers.clusterLabel(popup._cluster, lang);
    }
  }, [lang]);

  useEffect(() => {
    if (!globeRef.current) return;
    const globe = globeRef.current;
    const volcano = ctx.eruptingVolcano;
    const phase = ctx.eruptionPhase;
    const sameVolcano = eruptionVolcanoIdRef.current === volcano?.id;

    function haversineKm(lat1, lng1, lat2, lng2) {
      const toRad = d => d * Math.PI / 180;
      const R = 6371;
      const dLat = toRad(lat2 - lat1);
      const dLng = toRad(lng2 - lng1);
      const a = Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
      return 2 * R * Math.asin(Math.sqrt(a));
    }

    function cleanupEruption() {
      if (eruptionFrameRef.current) {
        cancelAnimationFrame(eruptionFrameRef.current);
        eruptionFrameRef.current = null;
      }
      if (eruptionRef.current) {
        eruptionRef.current.dispose();
        eruptionRef.current = null;
      }
      eruptionStartTimeRef.current = null;
      eruptionVolcanoIdRef.current = null;
      updateVolcanoVisibility(null, false);
      ctxRef.current.setAffectedCities([]);
      // Re-apply cluster visibility so clustered markers hide again if still zoomed out.
      helpersRef.current?.updateClusterVisibility?.();
    }

    if (!volcano || phase === 'idle') {
      cleanupEruption();
      return undefined;
    }

    const profile = getEruptionProfile(volcano);
    if (!profile) {
      cleanupEruption();
      return undefined;
    }

    if (!sameVolcano || !eruptionRef.current) {
      cleanupEruption();
      const effect = createEruption(window.THREE, globe, volcano, profile);
      
      // Ensure any generated cities are placed in the right spots on the 3D globe
      if (effect && effect.cities) {
        // Only include cities in simulations for volcanoes that are VEI 5 or above
        if ((volcano.vei || 0) < 5) {
          effect.cities.forEach(city => {
            if (city.mesh) {
              city.mesh.visible = false;
              if (city.mesh.parent) city.mesh.parent.remove(city.mesh);
            }
            if (city.element) {
              city.element.style.display = 'none';
              if (city.element.parentNode) city.element.parentNode.removeChild(city.element);
            }
          });
      effect.cities = [];
        }

        const MIN_VOLCANO_DIST_KM = 35; // Keep cities off the volcano cone
        const MIN_CITY_DIST_KM = 25;    // Keep cities from overlapping each other
        
        for (let iter = 0; iter < 10; iter++) {
          effect.cities.forEach((city, i) => {
            if (city.lat === undefined || city.lng === undefined) return;
            const cosLat = Math.max(0.1, Math.abs(Math.cos(city.lat * Math.PI / 180)));
            
            // Push away from volcano
            let distV = haversineKm(volcano.lat, volcano.lng, city.lat, city.lng);
            if (distV === 0) {
              city.lat += 0.01; city.lng += 0.01;
              distV = haversineKm(volcano.lat, volcano.lng, city.lat, city.lng);
            }
            if (distV < MIN_VOLCANO_DIST_KM) {
              const push = (MIN_VOLCANO_DIST_KM - distV) / distV * 0.1;
              city.lat += (city.lat - volcano.lat) * push;
              city.lng += (city.lng - volcano.lng) * push / cosLat;
            }

            // Push away from other cities
            effect.cities.forEach((other, j) => {
              if (i === j || other.lat === undefined || other.lng === undefined) return;
              let distC = haversineKm(other.lat, other.lng, city.lat, city.lng);
              if (distC === 0) {
                city.lat += 0.01; city.lng += 0.01;
                distC = haversineKm(other.lat, other.lng, city.lat, city.lng);
              }
              if (distC < MIN_CITY_DIST_KM) {
                const push = (MIN_CITY_DIST_KM - distC) / distC * 0.05;
                city.lat += (city.lat - other.lat) * push;
                city.lng += (city.lng - other.lng) * push / cosLat;
              }
            });
          });
        }

        effect.cities.forEach((city, i) => {
          if (city.lat !== undefined && city.lng !== undefined) {
            city.distance = haversineKm(volcano.lat, volcano.lng, city.lat, city.lng);
            
            // Find closest neighbor distance to scale buildings down if they are still crowded
            let minNeighborDist = Infinity;
            effect.cities.forEach((other, j) => {
              if (i !== j && other.lat !== undefined && other.lng !== undefined) {
                 const dist = haversineKm(city.lat, city.lng, other.lat, other.lng);
                 if (dist < minNeighborDist) minNeighborDist = dist;
              }
            });

            if (city.mesh) {
              const coords = globe.getCoords(city.lat, city.lng, 0.001);
              Object.assign(city.mesh.position, coords);
              const normal = new window.THREE.Vector3(coords.x, coords.y, coords.z).normalize();
              city.mesh.quaternion.setFromUnitVectors(new window.THREE.Vector3(0, 1, 0), normal);
              city.mesh.rotateOnAxis(new window.THREE.Vector3(0, 1, 0), city.angleRad || (i * 1.234));
            }
          }
        });
      }

      eruptionRef.current = effect;
      eruptionVolcanoIdRef.current = volcano.id;
      eruptionStartTimeRef.current = performance.now();
      updateVolcanoVisibility(volcano.id, true);
      globe.pointOfView({ lat: volcano.lat, lng: volcano.lng, altitude: 0.15 }, 1500);
    }

    function animate() {
      if (!eruptionRef.current || !eruptionStartTimeRef.current) return;
      
      const elapsedS = (performance.now() - eruptionStartTimeRef.current) / 1000;
      eruptionRef.current.update(elapsedS);
      if (elapsedS >= profile.durationS && ctxRef.current.eruptionPhase === 'erupting') {
        if ((volcano.vei || 0) >= 5) {
          ctxRef.current.markEruptionAftermath();
        }
      }

      if (eruptionRef.current.cities && eruptionRef.current.cities.length > 0) {
        if ((volcano.vei || 0) < 5) {
          // Continually hide and remove any cities dynamically spawned by the simulation for VEI < 5
          eruptionRef.current.cities.forEach(city => {
            if (city.mesh) {
              city.mesh.visible = false;
              if (city.mesh.parent) city.mesh.parent.remove(city.mesh);
            }
            if (city.element) {
              city.element.style.display = 'none';
              if (city.element.parentNode) city.element.parentNode.removeChild(city.element);
            }
            if (city.line) {
              city.line.style.display = 'none';
              if (city.line.parentNode) city.line.parentNode.removeChild(city.line);
            }
          });
          eruptionRef.current.cities = [];
          ctxRef.current.setAffectedCities([]);
        } else {
          const engulfedCount = eruptionRef.current.cities.filter(c => c.status === 'Engulfed').length;
          const totalCount = eruptionRef.current.cities.length;
          if (eruptionRef.current._lastEngulfed !== engulfedCount || eruptionRef.current._lastTotal !== totalCount) {
              eruptionRef.current._lastEngulfed = engulfedCount;
              eruptionRef.current._lastTotal = totalCount;
              ctxRef.current.setAffectedCities([...eruptionRef.current.cities]);
          }
        }
      }
      eruptionFrameRef.current = requestAnimationFrame(animate);
    }

    if (!eruptionFrameRef.current) {
      animate();
    }

    return () => {
      cleanupEruption();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx.eruptingVolcano]);

  // ── SELECTION EFFECT ──────────────────────────────────────────────────────
  const { selectedVolcano } = ctx;
  useEffect(() => {
    if (!globeRef.current || !helpersRef.current) return;
    const { paintMarker, STATUS_MATERIALS, LOCKED_MATERIALS, closeClusterPopup, controls } = helpersRef.current;

    closeClusterPopup();

    if (previousLockedRef.current && previousLockedRef.current !== selectedVolcano) {
      paintMarker(
        previousLockedRef.current,
        STATUS_MATERIALS[previousLockedRef.current.status] || STATUS_MATERIALS.Active
      );
    }

    if (selectedVolcano) {
      paintMarker(selectedVolcano, LOCKED_MATERIALS);
      controls.autoRotate = false;
      globeRef.current.pointOfView({ lat: selectedVolcano.lat, lng: selectedVolcano.lng, altitude: 0.25 }, 2000);
    }

    // Immediately sync cluster cone / individual marker visibility for the new selection
    // so the selected marker appears (and its cluster cone hides) without waiting for a
    // camera-change event. Also handles the deselect case (reverts to zoom-based state).
    helpersRef.current.updateClusterVisibility();

    previousLockedRef.current = selectedVolcano;
  }, [selectedVolcano]);

  // ── SEARCH EFFECT ─────────────────────────────────────────────────────────
  const { searchQuery, eruptionPhase } = ctx;
  useEffect(() => {
    if (!globeRef.current || eruptionPhase !== 'idle') return;
    const term = searchQuery.trim().toLowerCase();
    const matchedIds = term
      ? new Set(filterVolcanoes(volcanoes, term, lang).map(v => v.id))
      : null;

    globeRef.current.scene().traverse((obj) => {
      const ud = obj.userData;
      if (!ud || ud._importance === undefined || !ud.id) return;
      obj.visible = !matchedIds || matchedIds.has(ud.id);
    });
  }, [searchQuery, volcanoes, lang, eruptionPhase]);
}
