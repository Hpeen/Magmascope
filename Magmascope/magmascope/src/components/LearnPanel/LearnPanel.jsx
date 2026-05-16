import { useState, useRef, useCallback } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { t } from '../../data/i18n';
import './LearnPanel.css';

/* ─── Tab content ─────────────────────────────────────────────── */

function FormationContent({ lang }) {
  return (
    <div className="lp-content">
      <div className="lp-lead">{t('learn.form.lead', lang)}</div>

      <div className="lp-diagram">
        <div className="fd-sky">
          <div className="fd-cone-wrap">
            <div className="fd-cone" />
            <div className="fd-plume" />
            <div className="fd-glow" />
          </div>
          <span className="fd-tag fd-tag-top">{t('learn.form.tag.vent', lang)}</span>
        </div>
        <div className="fd-crust">
          <span className="fd-tag">{t('learn.form.tag.crust', lang)}</span>
          <div className="fd-conduit" />
        </div>
        <div className="fd-mantle">
          <span className="fd-tag">{t('learn.form.tag.mantle', lang)}</span>
          <div className="fd-blob b1" /><div className="fd-blob b2" /><div className="fd-blob b3" />
        </div>
        <div className="fd-chamber">
          <span className="fd-tag">{t('learn.form.tag.chamber', lang)}</span>
          <div className="fd-conduit fd-conduit-lo" />
        </div>
      </div>

      <div className="lp-steps">
        {[
          ['01', t('learn.form.step1.title', lang), t('learn.form.step1.body', lang)],
          ['02', t('learn.form.step2.title', lang), t('learn.form.step2.body', lang)],
          ['03', t('learn.form.step3.title', lang), t('learn.form.step3.body', lang)],
          ['04', t('learn.form.step4.title', lang), t('learn.form.step4.body', lang)],
        ].map(([n, title, body]) => (
          <div className="lp-step" key={n}>
            <div className="lp-step-num">{n}</div>
            <div className="lp-step-body">
              <div className="lp-step-title">{title}</div>
              <p>{body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="lp-statrow">
        {[
          [t('learn.form.stat1.val', lang), t('learn.form.stat1.key', lang)],
          [t('learn.form.stat2.val', lang), t('learn.form.stat2.key', lang)],
          [t('learn.form.stat3.val', lang), t('learn.form.stat3.key', lang)],
        ].map(([v, k]) => (
          <div className="lp-stat" key={k}>
            <div className="lp-stat-val">{v}</div>
            <div className="lp-stat-key">{k}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LifecycleContent({ lang }) {
  const stages = [
    { color: '#4a5e8a', label: t('learn.life.stage1.label', lang), desc: t('learn.life.stage1.desc', lang) },
    { color: '#ff5722', label: t('learn.life.stage2.label', lang), desc: t('learn.life.stage2.desc', lang) },
    { color: '#a0713a', label: t('learn.life.stage3.label', lang), desc: t('learn.life.stage3.desc', lang) },
    { color: '#44444e', label: t('learn.life.stage4.label', lang), desc: t('learn.life.stage4.desc', lang) },
  ];

  return (
    <div className="lp-content">
      <div className="lp-lead">{t('learn.life.lead', lang)}</div>

      <div className="lp-stages">
        {stages.map((s, i) => (
          <div className="lp-stage" key={s.label} style={{ '--sc': s.color }}>
            <div className="lp-stage-head">
              <div className="lp-stage-dot" />
              {i < stages.length - 1 && <div className="lp-stage-line" />}
              <span className="lp-stage-label">{s.label}</span>
            </div>
            <p className="lp-stage-desc">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="lp-callout">
        <span className="lp-callout-icon">◈</span>
        <div>
          <strong>{t('learn.life.callout', lang)}</strong>{' '}
          {t('learn.life.calloutBody', lang)}
        </div>
      </div>

      <div className="lp-subsection">{t('learn.life.subsection', lang)}</div>
      <div className="lp-ebar-wrap">
        {[
          { key: 'style1', vei: 'VEI 0–1', h: 28,  c: '#ffb627' },
          { key: 'style2', vei: 'VEI 1–2', h: 52,  c: '#ff8c42' },
          { key: 'style3', vei: 'VEI 2–3', h: 84,  c: '#ff5722' },
          { key: 'style4', vei: 'VEI 4–7', h: 128, c: '#c62a00' },
        ].map(({ key, vei, h, c }) => (
          <div className="lp-ebar-col" key={key}>
            <div className="lp-ebar" style={{ height: h, background: c }} />
            <div className="lp-ebar-name">{t(`learn.life.${key}`, lang)}</div>
            <div className="lp-ebar-vei">{vei}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VolcanoSVG({ type, color }) {
  const p = { width: 52, height: 42, viewBox: '0 0 52 42' };
  const c = color;
  switch (type) {
    case 'shield': return (
      <svg {...p}><path d="M2 38 Q26 10 50 38Z" fill={c} opacity=".18" stroke={c} strokeWidth="1"/><path d="M10 38 Q26 18 42 38Z" fill={c} opacity=".45"/><circle cx="26" cy="18" r="4" fill={c} opacity=".9"/><circle cx="26" cy="18" r="7" fill={c} opacity=".15"/></svg>
    );
    case 'strato': return (
      <svg {...p}><path d="M6 40 L26 4 L46 40Z" fill={c} opacity=".18" stroke={c} strokeWidth="1"/><path d="M14 40 L26 10 L38 40Z" fill={c} opacity=".55"/><circle cx="26" cy="4" r="3.5" fill={c}/></svg>
    );
    case 'cinder': return (
      <svg {...p}><path d="M12 40 L26 14 L40 40Z" fill={c} opacity=".22" stroke={c} strokeWidth="1"/><path d="M18 40 L26 20 L34 40Z" fill={c} opacity=".65"/><line x1="26" y1="14" x2="26" y2="4" stroke={c} strokeWidth="2.5"/><circle cx="26" cy="4" r="3" fill={c}/></svg>
    );
    case 'caldera': return (
      <svg {...p}><ellipse cx="26" cy="26" rx="22" ry="12" fill={c} opacity=".12" stroke={c} strokeWidth="1"/><ellipse cx="26" cy="26" rx="14" ry="7" fill={c} opacity=".18"/><ellipse cx="26" cy="26" rx="7" ry="3.5" fill={c} opacity=".6"/><path d="M4 26Q4 12 11 9M48 26Q48 12 41 9" stroke={c} strokeWidth="1.5" fill="none" opacity=".5"/></svg>
    );
    case 'dome': return (
      <svg {...p}><path d="M4 36 Q26 6 48 36Z" fill={c} opacity=".18" stroke={c} strokeWidth="1"/><path d="M12 36 Q26 14 40 36Z" fill={c} opacity=".45"/><ellipse cx="26" cy="16" rx="10" ry="6" fill={c} opacity=".75"/></svg>
    );
    case 'sub': return (
      <svg {...p}><rect x="2" y="24" width="48" height="16" fill="#1a3a6a" opacity=".35" rx="2"/><path d="M12 24 L26 8 L40 24Z" fill={c} opacity=".38" stroke={c} strokeWidth="1"/><path d="M18 24 L26 12 L34 24Z" fill={c} opacity=".7"/><text x="3" y="36" fontSize="7" fill="#60a0e0" opacity=".7" fontFamily="monospace">~ ~ ~ ~ ~ ~ ~</text></svg>
    );
    default: return null;
  }
}

function TypesContent({ lang }) {
  const types = [
    { icon: 'shield', color: '#ffb627', nk: 'shield',  ek: 'shield' },
    { icon: 'strato', color: '#ff5722', nk: 'strato',  ek: 'strato' },
    { icon: 'cinder', color: '#ff8c42', nk: 'cinder',  ek: 'cinder' },
    { icon: 'caldera',color: '#e53935', nk: 'caldera', ek: 'caldera'},
    { icon: 'dome',   color: '#8b6a3a', nk: 'dome',    ek: 'dome'   },
    { icon: 'sub',    color: '#2979ff', nk: 'sub',     ek: 'sub'    },
  ];
  return (
    <div className="lp-content">
      <div className="lp-lead">{t('learn.types.lead', lang)}</div>
      <div className="lp-types">
        {types.map(({ icon, color, nk }) => (
          <div className="lp-type" key={nk} style={{ '--tc': color }}>
            <div className="lp-type-top">
              <VolcanoSVG type={icon} color={color} />
              <div>
                <div className="lp-type-name">{t(`learn.types.${nk}.name`, lang)}</div>
                <div className="lp-type-vei">{t(`learn.types.${nk}.vei`, lang)}</div>
              </div>
            </div>
            <p className="lp-type-desc">{t(`learn.types.${nk}.desc`, lang)}</p>
            <div className="lp-type-eg">{t('learn.types.eg', lang)} {t(`learn.types.${nk}.eg`, lang)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const PAGES = [FormationContent, LifecycleContent, TypesContent];
const TAB_KEYS = ['formation', 'lifecycle', 'types'];

/* ─── Main component ──────────────────────────────────────────── */

export default function LearnPanel({ onClose }) {
  const { currentLang: lang } = useLanguage();
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const bodyRef = useRef(null);
  const total = TAB_KEYS.length;

  const go = useCallback((next) => {
    if (next === idx) return;
    const delta = next - idx;
    const dir = delta > 0
      ? (delta > total / 2 ? -1 : 1)
      : (delta < -total / 2 ? 1 : -1);
    setDirection(dir);
    setIdx(next);
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  }, [idx, total]);

  const prev = useCallback(() => go((idx - 1 + total) % total), [go, idx, total]);
  const next = useCallback(() => go((idx + 1) % total),         [go, idx, total]);

  const prevKey = TAB_KEYS[(idx - 1 + total) % total];
  const nextKey = TAB_KEYS[(idx + 1) % total];
  const Page = PAGES[idx];

  return (
    <div className="lp-backdrop" onClick={onClose}>
      <div className="lp-panel" onClick={e => e.stopPropagation()}>

        {/* Arrow bubbles — inside panel edges */}
        <button className="lp-arrow lp-arrow-l" onClick={prev} aria-label="Previous">‹</button>
        <button className="lp-arrow lp-arrow-r" onClick={next} aria-label="Next">›</button>

        {/* Close */}
        <button className="lp-x" onClick={onClose} aria-label="Close">×</button>

        {/* Tab strip */}
        <div className="lp-tabs" style={{ '--lp-active-idx': idx, '--lp-total': total }}>
          <button className="lp-tab lp-tab-side" onClick={prev}>
            <span className="lp-tab-label">{t(`learn.tab.${prevKey}`, lang)}</span>
            <span className="lp-tab-sub">{t(`learn.tab.${prevKey}.sub`, lang)}</span>
          </button>

          <div className="lp-tab lp-tab-active" key={idx}>
            <span className="lp-tab-label">{t(`learn.tab.${TAB_KEYS[idx]}`, lang)}</span>
            <span className="lp-tab-sub">{t(`learn.tab.${TAB_KEYS[idx]}.sub`, lang)}</span>
          </div>

          <button className="lp-tab lp-tab-side" onClick={next}>
            <span className="lp-tab-label">{t(`learn.tab.${nextKey}`, lang)}</span>
            <span className="lp-tab-sub">{t(`learn.tab.${nextKey}.sub`, lang)}</span>
          </button>

          <div className="lp-tab-underline" aria-hidden="true" />
        </div>

        {/* Dot progress */}
        <div className="lp-pips">
          {TAB_KEYS.map((k, i) => (
            <button
              key={k}
              className={`lp-pip${i === idx ? ' on' : ''}`}
              onClick={() => go(i)}
              aria-label={t(`learn.tab.${k}`, lang)}
            />
          ))}
        </div>

        {/* Scrollable content */}
        <div className="lp-body" ref={bodyRef}>
          <div
            className={`lp-page lp-page--${direction > 0 ? 'in-right' : 'in-left'}`}
            key={idx}
          >
            <Page lang={lang} />
          </div>
        </div>

      </div>
    </div>
  );
}
