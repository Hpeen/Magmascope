// Builds and animates the 3D eruption effects on the globe surface for
// a given volcano. Returns a controller with update(elapsedS) and
// dispose(). All Three.js objects live inside one group anchored to the
// vent so disposal is just `scene.remove(group)`.
//
// Coordinate convention matches the existing markers in useGlobe.js: the
// group is positioned at globe.getCoords(lat, lng, ε), then `lookAt(0,0,0)`
// + rotateX(-π/2) makes local +Y point radially outward from the globe.

import { visualPlumeUnits, visualLavaUnits } from '../data/eruptionProfile.js';

const CURATED_CITIES = {
  vesuvius: [
    { name: 'Pompeii', lat: 40.7510, lng: 14.4889, distKm: 8, angleRad: 2.2, pop: 0, desc: 'Ancient Roman city', desc_ro: 'Oraș antic roman', damage: 'Total burial by ash.', damage_ro: 'Îngropat total sub cenușă.' },
    { name: 'Torre del Greco', lat: 40.7861, lng: 14.3728, distKm: 6, angleRad: 3.5, pop: 85000, desc: 'Coastal city', desc_ro: 'Oraș de coastă', damage: 'Exposed to pyroclastic flows.', damage_ro: 'Expus curgerilor piroclastice.' },
    { name: 'Naples', lat: 40.8518, lng: 14.2681, distKm: 12, angleRad: 4.7, pop: 3000000, desc: 'Major metropolitan area', desc_ro: 'Zonă metropolitană majoră', damage: 'Severe structural damage from ash.', damage_ro: 'Daune structurale severe.' },
    { name: 'Salerno', lat: 40.6824, lng: 14.7681, distKm: 45, angleRad: 2.0, pop: 133000, desc: 'Key cultural hub', desc_ro: 'Centru cultural cheie', damage: 'Heavy ash accumulation.', damage_ro: 'Acumulare masivă de cenușă.' },
    { name: 'Rome', lat: 41.9028, lng: 12.4964, distKm: 225, angleRad: 5.5, pop: 2800000, desc: 'Capital of Italy', desc_ro: 'Capitala Italiei', damage: 'Air traffic paralyzed.', damage_ro: 'Trafic aerian paralizat.' }
  ],
  'st-helens': [
    { name: 'Spirit Lake', lat: 46.2670, lng: -122.1510, distKm: 8, angleRad: 0.1, pop: 0, desc: 'Recreation area', desc_ro: 'Zonă de recreere', damage: 'Destroyed completely.', damage_ro: 'Distrus complet.' },
    { name: 'Castle Rock', lat: 46.2750, lng: -122.9010, distKm: 30, angleRad: 4.2, pop: 2100, desc: 'River valley town', desc_ro: 'Oraș pe valea râului', damage: 'Severe lahars.', damage_ro: 'Laharuri severe.' },
    { name: 'Portland', lat: 45.5051, lng: -122.6750, distKm: 85, angleRad: -2.0, pop: 650000, desc: 'Major city in Oregon', desc_ro: 'Oraș major în Oregon', damage: 'City paralyzed.', damage_ro: 'Oraș paralizat.' },
    { name: 'Vancouver', lat: 45.6387, lng: -122.6615, distKm: 110, angleRad: -2.1, pop: 190000, desc: 'Washington city', desc_ro: 'Oraș în Washington', damage: 'Heavy ashfall.', damage_ro: 'Căderi masive de cenușă.' },
    { name: 'Seattle', lat: 47.6062, lng: -122.3321, distKm: 150, angleRad: 1.5, pop: 730000, desc: 'Major Washington hub', desc_ro: 'Centru principal în Washington', damage: 'Flights grounded.', damage_ro: 'Zboruri anulate.' }
  ],
  kilauea: [
    { name: 'Volcano Village', lat: 19.4320, lng: -155.2350, distKm: 5, angleRad: -2.0, pop: 2500, desc: 'Summit community', desc_ro: 'Comunitate la summit', damage: 'Lava flows.', damage_ro: 'Curgeri de lavă.' },
    { name: 'Leilani Estates', lat: 19.4610, lng: -154.9170, distKm: 12, angleRad: 1.8, pop: 1100, desc: 'Residential area', desc_ro: 'Zonă rezidențială', damage: 'Residential destruction.', damage_ro: 'Distrugeri rezidențiale.' },
    { name: 'Pāhoa', lat: 19.4970, lng: -154.9440, distKm: 15, angleRad: 1.5, pop: 940, desc: 'Historic town', desc_ro: 'Oraș istoric', damage: 'Toxic gas.', damage_ro: 'Gaz toxic.' },
    { name: 'Hilo', lat: 19.7297, lng: -155.0900, distKm: 40, angleRad: -0.5, pop: 45000, desc: 'Largest city on island', desc_ro: 'Cel mai mare oraș de pe insulă', damage: 'Ash and smog.', damage_ro: 'Cenușă și smog.' },
    { name: 'Honolulu', lat: 21.3069, lng: -157.8583, distKm: 340, angleRad: -0.8, pop: 345000, desc: 'State capital', desc_ro: 'Capitala statului', damage: 'Regional haze.', damage_ro: 'Ceață regională.' }
  ],
  krakatoa: [
    { name: 'Carita', lat: -6.3120, lng: 105.8830, distKm: 45, angleRad: 1.3, pop: 10000, desc: 'Tourist destination', desc_ro: 'Destinație turistică', damage: 'Tsunami zone.', damage_ro: 'Zonă de tsunami.' },
    { name: 'Anyer', lat: -6.0378, lng: 105.9133, distKm: 50, angleRad: 1.2, pop: 30000, desc: 'Coastal town', desc_ro: 'Oraș de coastă', damage: 'Complete destruction.', damage_ro: 'Distrugere completă.' },
    { name: 'Kalianda', lat: -5.7239, lng: 105.5753, distKm: 40, angleRad: 3.5, pop: 90000, desc: 'Sumatran city', desc_ro: 'Oraș din Sumatra', damage: 'Severe tsunami damage.', damage_ro: 'Daune severe de tsunami.' },
    { name: 'Bandar Lampung', lat: -5.3971, lng: 105.2668, distKm: 80, angleRad: 3.0, pop: 1160000, desc: 'Major port city', desc_ro: 'Oraș portuar major', damage: 'Coastal flooding.', damage_ro: 'Inundații de coastă.' },
    { name: 'Jakarta', lat: -6.2088, lng: 106.8456, distKm: 155, angleRad: 1.7, pop: 10500000, desc: 'Capital of Indonesia', desc_ro: 'Capitala Indoneziei', damage: 'Ashfall.', damage_ro: 'Căderi de cenușă.' }
  ],
  tambora: [
    { name: 'Pekat', lat: -8.3580, lng: 117.7320, distKm: 30, angleRad: 3.0, pop: 30000, desc: 'Local settlement', desc_ro: 'Așezare locală', damage: 'Buried.', damage_ro: 'Îngropată.' },
    { name: 'Dompu', lat: -8.5376, lng: 118.4613, distKm: 70, angleRad: 2.0, pop: 110000, desc: 'Agricultural center', desc_ro: 'Centru agricol', damage: 'Heavy ash.', damage_ro: 'Cenușă masivă.' },
    { name: 'Bima', lat: -8.4570, lng: 118.7169, distKm: 100, angleRad: 1.6, pop: 142000, desc: 'Largest city on Sumbawa', desc_ro: 'Cel mai mare oraș din Sumbawa', damage: 'Crop failure.', damage_ro: 'Culturi distruse.' },
    { name: 'Mataram', lat: -8.5769, lng: 116.1197, distKm: 250, angleRad: -3.1, pop: 400000, desc: 'Capital of West Nusa Tenggara', desc_ro: 'Capitala regiunii Nusa Tenggara', damage: 'Structural collapse.', damage_ro: 'Colaps structural.' },
    { name: 'Surabaya', lat: -7.2575, lng: 112.7521, distKm: 550, angleRad: -2.8, pop: 2800000, desc: 'Major Javanese city', desc_ro: 'Oraș major din Java', damage: 'Aviation halted.', damage_ro: 'Aviație oprită.' }
  ],
  pinatubo: [
    { name: 'Angeles City', lat: 15.1450, lng: 120.5890, distKm: 25, angleRad: 1.0, pop: 462000, desc: 'Major urban center', desc_ro: 'Centru urban major', damage: 'Buried in ash.', damage_ro: 'Îngropat în cenușă.' },
    { name: 'Olongapo', lat: 14.8292, lng: 120.2818, distKm: 35, angleRad: 3.5, pop: 260000, desc: 'Coastal city', desc_ro: 'Oraș de coastă', damage: 'Lahar floods.', damage_ro: 'Inundații de lahar.' },
    { name: 'San Fernando', lat: 15.0284, lng: 120.6905, distKm: 40, angleRad: 1.2, pop: 354000, desc: 'Provincial capital', desc_ro: 'Capitală de provincie', damage: 'Severe disruption.', damage_ro: 'Perturbare severă.' },
    { name: 'Manila', lat: 14.5995, lng: 120.9842, distKm: 90, angleRad: 1.8, pop: 14000000, desc: 'Megacity', desc_ro: 'Megapolis', damage: 'Gridlock.', damage_ro: 'Blocaj total.' },
    { name: 'Cebu City', lat: 10.3157, lng: 123.8854, distKm: 540, angleRad: 2.2, pop: 960000, desc: 'Regional hub', desc_ro: 'Centru regional', damage: 'Flight delays.', damage_ro: 'Întârzieri aeriene.' }
  ],
  fuji: [
    { name: 'Fujinomiya', lat: 35.22, lng: 138.61, distKm: 15, angleRad: -2.0, pop: 130000, desc: 'Southwestern base', desc_ro: 'Baza de sud-vest', damage: 'Direct fallout.', damage_ro: 'Căderi directe.' },
    { name: 'Gotemba', lat: 35.30, lng: 138.93, distKm: 20, angleRad: 0.5, pop: 88000, desc: 'Eastern gateway town', desc_ro: 'Oraș poartă de est', damage: 'Pyroclastic risk.', damage_ro: 'Risc piroclastic.' },
    { name: 'Shizuoka', lat: 34.97, lng: 138.38, distKm: 50, angleRad: -2.5, pop: 690000, desc: 'Prefectural capital', desc_ro: 'Capitală de prefectură', damage: 'Heavy ash.', damage_ro: 'Cenușă masivă.' },
    { name: 'Yokohama', lat: 35.44, lng: 139.63, distKm: 80, angleRad: 1.0, pop: 3770000, desc: 'Major port', desc_ro: 'Port major', damage: 'Supply chains cut.', damage_ro: 'Lanțuri de aprovizionare întrerupte.' },
    { name: 'Tokyo', lat: 35.68, lng: 139.76, distKm: 100, angleRad: 0.8, pop: 14000000, desc: 'Global financial hub', desc_ro: 'Centru financiar global', damage: 'Grid failure.', damage_ro: 'Pană de curent.' }
  ],
  etna: [
    { name: 'Nicolosi', lat: 37.61, lng: 15.02, distKm: 15, angleRad: -1.2, pop: 7000, desc: 'Gateway to Etna', desc_ro: 'Poarta către Etna', damage: 'Lava threat.', damage_ro: 'Amenințare de lavă.' },
    { name: 'Catania', lat: 37.50, lng: 15.09, distKm: 30, angleRad: -1.0, pop: 311000, desc: 'Major coastal city', desc_ro: 'Oraș major de coastă', damage: 'Airport closed.', damage_ro: 'Aeroport închis.' },
    { name: 'Taormina', lat: 37.85, lng: 15.28, distKm: 40, angleRad: 0.5, pop: 11000, desc: 'Tourist destination', desc_ro: 'Destinație turistică', damage: 'Evacuations.', damage_ro: 'Evacuări.' },
    { name: 'Messina', lat: 38.19, lng: 15.55, distKm: 70, angleRad: 0.8, pop: 230000, desc: 'Transit hub', desc_ro: 'Nod de tranzit', damage: 'Ash blankets.', damage_ro: 'Pături de cenușă.' },
    { name: 'Palermo', lat: 38.11, lng: 13.36, distKm: 150, angleRad: 1.5, pop: 670000, desc: 'Regional capital', desc_ro: 'Capitală regională', damage: 'Flight disruption.', damage_ro: 'Perturbări aeriene.' }
  ],
  yellowstone: [
    { name: 'West Yellowstone', lat: 44.6612, lng: -111.0999, distKm: 50, angleRad: -2.8, pop: 1200, desc: 'Gateway town', desc_ro: 'Oraș de acces', damage: 'Incinerated.', damage_ro: 'Incinerat.' },
    { name: 'Jackson', lat: 43.4799, lng: -110.7624, distKm: 80, angleRad: -1.5, pop: 10000, desc: 'Valley town', desc_ro: 'Oraș de vale', damage: 'Total destruction.', damage_ro: 'Distrugere totală.' },
    { name: 'Bozeman', lat: 45.6770, lng: -111.0429, distKm: 120, angleRad: 1.2, pop: 50000, desc: 'Regional hub', desc_ro: 'Centru regional', damage: 'Roof collapses.', damage_ro: 'Acoperișuri prăbușite.' },
    { name: 'Salt Lake City', lat: 40.7608, lng: -111.8910, distKm: 420, angleRad: -2.0, pop: 200000, desc: 'Major metro area', desc_ro: 'Zonă metropolitană majoră', damage: 'Water contaminated.', damage_ro: 'Apă contaminată.' },
    { name: 'Denver', lat: 39.7392, lng: -104.9903, distKm: 700, angleRad: -0.8, pop: 715000, desc: 'Colorado capital', desc_ro: 'Capitala statului', damage: 'Economic halt.', damage_ro: 'Oprire economică.' }
  ],
  'campi-flegrei': [
    { name: 'Pozzuoli', lat: 40.8246, lng: 14.1228, distKm: 5, angleRad: 3.0, pop: 80000, desc: 'Center of caldera', desc_ro: 'Centrul calderei', damage: 'Obliterated.', damage_ro: 'Obliterat.' },
    { name: 'Bacoli', lat: 40.7931, lng: 14.0850, distKm: 8, angleRad: 3.5, pop: 26000, desc: 'Coastal town', desc_ro: 'Oraș de coastă', damage: 'Pyroclastic flows.', damage_ro: 'Curgeri piroclastice.' },
    { name: 'Giugliano', lat: 40.9281, lng: 14.1954, distKm: 10, angleRad: 1.0, pop: 120000, desc: 'Populous suburb', desc_ro: 'Suburbie populată', damage: 'Mass evacuations.', damage_ro: 'Evacuări masive.' },
    { name: 'Naples', lat: 40.8518, lng: 14.2681, distKm: 15, angleRad: 0.5, pop: 3000000, desc: 'Dense metropolis', desc_ro: 'Metropolă densă', damage: 'Widespread collapse.', damage_ro: 'Colaps extins.' },
    { name: 'Rome', lat: 41.9028, lng: 12.4964, distKm: 180, angleRad: 4.5, pop: 2800000, desc: 'Capital of Italy', desc_ro: 'Capitala Italiei', damage: 'Transport halted.', damage_ro: 'Transport oprit.' }
  ],
  taal: [
    { name: 'Talisay', lat: 14.1150, lng: 121.0028, distKm: 10, angleRad: -2.0, pop: 46000, desc: 'Lakeside town', desc_ro: 'Oraș pe malul lacului', damage: 'Base surges.', damage_ro: 'Valuri de bază.' },
    { name: 'Tagaytay', lat: 14.1153, lng: 120.9621, distKm: 15, angleRad: 1.0, pop: 85000, desc: 'Tourist city', desc_ro: 'Oraș turistic', damage: 'Mudfall.', damage_ro: 'Căderi de noroi.' },
    { name: 'Lipa', lat: 13.9411, lng: 121.1632, distKm: 30, angleRad: 2.5, pop: 330000, desc: 'Major city', desc_ro: 'Oraș major', damage: 'Heavy ash.', damage_ro: 'Cenușă grea.' },
    { name: 'Batangas City', lat: 13.7565, lng: 121.0583, distKm: 40, angleRad: 3.0, pop: 350000, desc: 'Major port', desc_ro: 'Port major', damage: 'Port closed.', damage_ro: 'Port închis.' },
    { name: 'Manila', lat: 14.5995, lng: 120.9842, distKm: 60, angleRad: 1.6, pop: 14000000, desc: 'Capital region', desc_ro: 'Regiunea capitalei', damage: 'Aviation lockdown.', damage_ro: 'Blocaj aviatic.' }
  ],
  merapi: [
    { name: 'Kaliurang', lat: -7.6057, lng: 110.4244, distKm: 10, angleRad: -1.2, pop: 5000, desc: 'Resort town', desc_ro: 'Oraș stațiune', damage: 'Wiped out.', damage_ro: 'Șters de pe hartă.' },
    { name: 'Magelang', lat: -7.4720, lng: 110.2174, distKm: 25, angleRad: 3.5, pop: 120000, desc: 'Western city', desc_ro: 'Oraș vestic', damage: 'Heavy ash.', damage_ro: 'Cenușă masivă.' },
    { name: 'Yogyakarta', lat: -7.7972, lng: 110.3689, distKm: 30, angleRad: -1.5, pop: 422000, desc: 'Cultural capital', desc_ro: 'Capitală culturală', damage: 'Infrastructure impaired.', damage_ro: 'Infrastructură afectată.' },
    { name: 'Klaten', lat: -7.7063, lng: 110.6093, distKm: 35, angleRad: -0.5, pop: 115000, desc: 'Agricultural hub', desc_ro: 'Centru agricol', damage: 'Crop destruction.', damage_ro: 'Culturi distruse.' },
    { name: 'Surabaya', lat: -7.2575, lng: 112.7521, distKm: 260, angleRad: 0.2, pop: 2800000, desc: 'Major port city', desc_ro: 'Oraș portuar', damage: 'Flight cancellations.', damage_ro: 'Anulări de zboruri.' }
  ],
  nyiragongo: [
    { name: 'Goma', lat: -1.6793, lng: 29.2228, distKm: 15, angleRad: -1.5, pop: 2000000, desc: 'Major border city', desc_ro: 'Oraș de frontieră', damage: 'Bisected by lava.', damage_ro: 'Secționat de lavă.' },
    { name: 'Gisenyi', lat: -1.7003, lng: 29.2583, distKm: 18, angleRad: -1.2, pop: 106000, desc: 'Rwandan border city', desc_ro: 'Oraș rwandez', damage: 'Toxic gas.', damage_ro: 'Gaz toxic.' },
    { name: 'Sake', lat: -1.5753, lng: 28.9972, distKm: 25, angleRad: -2.5, pop: 45000, desc: 'Evacuation point', desc_ro: 'Punct de evacuare', damage: 'Refugee crisis.', damage_ro: 'Criză de refugiați.' },
    { name: 'Kigali', lat: -1.9441, lng: 30.0619, distKm: 100, angleRad: -0.5, pop: 1100000, desc: 'Rwanda capital', desc_ro: 'Capitala Rwandei', damage: 'Acid rain.', damage_ro: 'Ploaie acidă.' },
    { name: 'Bujumbura', lat: -3.3869, lng: 29.3644, distKm: 110, angleRad: -2.5, pop: 380000, desc: 'Major Burundi city', desc_ro: 'Oraș major din Burundi', damage: 'Minor ash.', damage_ro: 'Cenușă minoră.' }
  ],
  popocatepetl: [
    { name: 'Amecameca', lat: 19.1228, lng: -98.7710, distKm: 25, angleRad: 2.5, pop: 50000, desc: 'Gateway town', desc_ro: 'Oraș de acces', damage: 'Lahar damage.', damage_ro: 'Daune de lahar.' },
    { name: 'Cholula', lat: 19.0641, lng: -98.3019, distKm: 35, angleRad: 1.5, pop: 100000, desc: 'Historic city', desc_ro: 'Oraș istoric', damage: 'Heavy fallout.', damage_ro: 'Căderi masive.' },
    { name: 'Puebla', lat: 19.0414, lng: -98.2063, distKm: 40, angleRad: 1.0, pop: 1500000, desc: 'Major city', desc_ro: 'Oraș major', damage: 'Airport closed.', damage_ro: 'Aeroport închis.' },
    { name: 'Cuernavaca', lat: 18.9242, lng: -99.2345, distKm: 60, angleRad: -2.0, pop: 340000, desc: 'City of Eternal Spring', desc_ro: 'Orașul Eternei Primăveri', damage: 'Ash accumulation.', damage_ro: 'Acumulare de cenușă.' },
    { name: 'Mexico City', lat: 19.4326, lng: -99.1332, distKm: 70, angleRad: 3.0, pop: 22000000, desc: 'Megacity', desc_ro: 'Megapolis', damage: 'Respiratory crisis.', damage_ro: 'Criză respiratorie.' }
  ],
  sakurajima: [
    { name: 'Kagoshima', lat: 31.5966, lng: 130.5571, distKm: 10, angleRad: 3.0, pop: 600000, desc: 'City across the bay', desc_ro: 'Oraș peste golf', damage: 'Evacuations.', damage_ro: 'Evacuări.' },
    { name: 'Tarumizu', lat: 31.4822, lng: 130.7091, distKm: 15, angleRad: -0.5, pop: 14000, desc: 'Neighboring town', desc_ro: 'Oraș învecinat', damage: 'Direct blasts.', damage_ro: 'Explozii directe.' },
    { name: 'Kirishima', lat: 31.7407, lng: 130.7631, distKm: 35, angleRad: 1.0, pop: 125000, desc: 'Transport hub', desc_ro: 'Nod de transport', damage: 'Ash inundation.', damage_ro: 'Inundat de cenușă.' },
    { name: 'Kumamoto', lat: 32.8032, lng: 130.7079, distKm: 140, angleRad: 0.5, pop: 740000, desc: 'Major Kyushu city', desc_ro: 'Oraș din Kyushu', damage: 'Trains suspended.', damage_ro: 'Trenuri suspendate.' },
    { name: 'Fukuoka', lat: 33.5904, lng: 130.4017, distKm: 200, angleRad: 0.2, pop: 1600000, desc: 'Regional capital', desc_ro: 'Capitală regională', damage: 'Aviation halted.', damage_ro: 'Aviație oprită.' }
  ],
  unzen: [
    { name: 'Shimabara', lat: 32.7801, lng: 130.3700, distKm: 8, angleRad: 0.5, pop: 43000, desc: 'City rebuilt after disaster', desc_ro: 'Oraș reconstruit', damage: 'Decimated.', damage_ro: 'Decimat.' },
    { name: 'Isahaya', lat: 32.8436, lng: 130.0545, distKm: 30, angleRad: 2.5, pop: 135000, desc: 'Inland city', desc_ro: 'Oraș interior', damage: 'Lahar threat.', damage_ro: 'Amenințare de lahar.' },
    { name: 'Nagasaki', lat: 32.7503, lng: 129.8777, distKm: 40, angleRad: 3.0, pop: 400000, desc: 'Major port city', desc_ro: 'Oraș portuar', damage: 'Transit failures.', damage_ro: 'Eșecuri de tranzit.' },
    { name: 'Kumamoto', lat: 32.8032, lng: 130.7079, distKm: 45, angleRad: -2.5, pop: 740000, desc: 'Kyushu hub', desc_ro: 'Nod în Kyushu', damage: 'Tsunami waves.', damage_ro: 'Valuri tsunami.' },
    { name: 'Fukuoka', lat: 33.5904, lng: 130.4017, distKm: 110, angleRad: -0.5, pop: 1600000, desc: 'Regional capital', desc_ro: 'Capitală regională', damage: 'Flight delays.', damage_ro: 'Întârzieri aeriene.' }
  ],
  galeras: [
    { name: 'Pasto', lat: 1.2136, lng: -77.2811, distKm: 10, angleRad: -2.0, pop: 390000, desc: 'Large city at base', desc_ro: 'Oraș mare la bază', damage: 'Bombarded.', damage_ro: 'Bombardat.' },
    { name: 'Consacá', lat: 1.2028, lng: -77.4614, distKm: 15, angleRad: 2.5, pop: 10000, desc: 'Agricultural town', desc_ro: 'Oraș agricol', damage: 'Pyroclastic flows.', damage_ro: 'Curgeri piroclastice.' },
    { name: 'Sandoná', lat: 1.2853, lng: -77.4700, distKm: 20, angleRad: 2.0, pop: 25000, desc: 'Western town', desc_ro: 'Oraș vestic', damage: 'Ash fallout.', damage_ro: 'Căderi de cenușă.' },
    { name: 'Quito', lat: -0.1807, lng: -78.4678, distKm: 200, angleRad: -2.5, pop: 2000000, desc: 'Ecuador capital', desc_ro: 'Capitala Ecuadorului', damage: 'Airspace closed.', damage_ro: 'Spațiu aerian închis.' },
    { name: 'Cali', lat: 3.4516, lng: -76.5320, distKm: 260, angleRad: 0.5, pop: 2200000, desc: 'Major economic hub', desc_ro: 'Centru economic', damage: 'Haze.', damage_ro: 'Ceață.' }
  ],
  'santa-maria': [
    { name: 'El Palmar', lat: 14.6747, lng: -91.6478, distKm: 12, angleRad: -1.5, pop: 30000, desc: 'Vulnerable town', desc_ro: 'Oraș vulnerabil', damage: 'Repeated damage.', damage_ro: 'Daune repetate.' },
    { name: 'Quetzaltenango', lat: 14.8455, lng: -91.5196, distKm: 15, angleRad: 1.0, pop: 180000, desc: 'Major city', desc_ro: 'Oraș major', damage: 'Economic collapse.', damage_ro: 'Colaps economic.' },
    { name: 'Retalhuleu', lat: 14.5365, lng: -91.6818, distKm: 25, angleRad: -2.0, pop: 90000, desc: 'Coastal plain city', desc_ro: 'Oraș de coastă', damage: 'Massive lahars.', damage_ro: 'Laharuri masive.' },
    { name: 'Mazatenango', lat: 14.5302, lng: -91.5021, distKm: 45, angleRad: -1.8, pop: 100000, desc: 'Commercial center', desc_ro: 'Centru comercial', damage: 'Heavy ash.', damage_ro: 'Cenușă grea.' },
    { name: 'Guatemala City', lat: 14.6349, lng: -90.5069, distKm: 110, angleRad: 1.5, pop: 3000000, desc: 'Capital city', desc_ro: 'Capitală', damage: 'Gridlock.', damage_ro: 'Blocaj.' }
  ],
  pelee: [
    { name: 'Saint-Pierre', lat: 14.7392, lng: -61.1783, distKm: 8, angleRad: -2.5, pop: 4000, desc: 'Former capital', desc_ro: 'Fostă capitală', damage: 'Incinerated.', damage_ro: 'Incinerat.' },
    { name: 'Le Morne-Rouge', lat: 14.7611, lng: -61.1428, distKm: 15, angleRad: -1.5, pop: 5000, desc: 'Highland town', desc_ro: 'Oraș montan', damage: 'Nuée ardente.', damage_ro: 'Nor arzător.' },
    { name: 'Fort-de-France', lat: 14.6037, lng: -61.0744, distKm: 25, angleRad: -1.0, pop: 80000, desc: 'Current capital', desc_ro: 'Capitală curentă', damage: 'Refugee crisis.', damage_ro: 'Criză de refugiați.' },
    { name: 'Castries (St. Lucia)', lat: 14.0101, lng: -60.9875, distKm: 80, angleRad: -2.0, pop: 20000, desc: 'Neighboring island', desc_ro: 'Insulă vecină', damage: 'Ash drift.', damage_ro: 'Derivare de cenușă.' },
    { name: 'Roseau (Dominica)', lat: 15.3017, lng: -61.3882, distKm: 100, angleRad: 2.0, pop: 15000, desc: 'Neighboring island', desc_ro: 'Insulă vecină', damage: 'Air travel disrupted.', damage_ro: 'Zboruri perturbate.' }
  ],
  ruapehu: [
    { name: 'Ohakune', lat: -39.4225, lng: 175.4025, distKm: 20, angleRad: -2.0, pop: 1000, desc: 'Ski town', desc_ro: 'Oraș stațiune de schi', damage: 'Lahar floods.', damage_ro: 'Inundații de lahar.' },
    { name: 'Turangi', lat: -39.0057, lng: 175.8004, distKm: 25, angleRad: 1.5, pop: 3000, desc: 'Base town', desc_ro: 'Oraș de bază', damage: 'Bridges destroyed.', damage_ro: 'Poduri distruse.' },
    { name: 'Waiouru', lat: -39.4833, lng: 175.6667, distKm: 30, angleRad: 1.0, pop: 700, desc: 'Military camp', desc_ro: 'Bază militară', damage: 'Transit hub cut.', damage_ro: 'Nod de tranzit tăiat.' },
    { name: 'Wellington', lat: -41.2865, lng: 174.7762, distKm: 230, angleRad: -2.5, pop: 215000, desc: 'New Zealand capital', desc_ro: 'Capitala Noii Zeelande', damage: 'Airport closed.', damage_ro: 'Aeroport închis.' },
    { name: 'Auckland', lat: -36.8509, lng: 174.7645, distKm: 280, angleRad: 1.0, pop: 1650000, desc: 'Largest NZ city', desc_ro: 'Cel mai mare oraș', damage: 'Supply chains hit.', damage_ro: 'Lanțuri de aprovizionare afectate.' }
  ],
  agung: [
    { name: 'Besakih', lat: -8.3749, lng: 115.4523, distKm: 6, angleRad: 2.5, pop: 7000, desc: 'Temple complex', desc_ro: 'Complex de temple', damage: 'Severe ash and pyroclastic flows.', damage_ro: 'Cenușă severă și curgeri piroclastice.' },
    { name: 'Amlapura', lat: -8.4534, lng: 115.6096, distKm: 15, angleRad: 1.0, pop: 35000, desc: 'Regional capital', desc_ro: 'Capitală regională', damage: 'Ash accumulation and lahars.', damage_ro: 'Acumulare de cenușă și laharuri.' },
    { name: 'Klungkung', lat: -8.5388, lng: 115.3987, distKm: 20, angleRad: 3.5, pop: 28000, desc: 'Historic town', desc_ro: 'Oraș istoric', damage: 'Heavy ashfall.', damage_ro: 'Căderi masive de cenușă.' },
    { name: 'Denpasar', lat: -8.6705, lng: 115.2126, distKm: 50, angleRad: 3.8, pop: 900000, desc: 'Provincial capital', desc_ro: 'Capitală provincială', damage: 'Aviation halted, ashfall.', damage_ro: 'Aviație oprită, căderi de cenușă.' },
    { name: 'Singaraja', lat: -8.1119, lng: 115.0877, distKm: 55, angleRad: -0.5, pop: 150000, desc: 'Northern city', desc_ro: 'Oraș nordic', damage: 'Ash cloud coverage.', damage_ro: 'Acoperit de nori de cenușă.' }
  ],
  'el-chichon': [
    { name: 'Francisco León', lat: 17.2719, lng: -93.0914, distKm: 8, angleRad: -2.0, pop: 0, desc: 'Destroyed village', desc_ro: 'Sat distrus', damage: 'Obliterated in 1982.', damage_ro: 'Obliterat în 1982.' },
    { name: 'Chapultenango', lat: 17.2922, lng: -93.1564, distKm: 12, angleRad: 1.5, pop: 7500, desc: 'Nearby municipality', desc_ro: 'Municipalitate apropiată', damage: 'Pyroclastic surge threat.', damage_ro: 'Amenințare de valuri piroclastice.' },
    { name: 'Pichucalco', lat: 17.5103, lng: -93.1178, distKm: 25, angleRad: 1.0, pop: 30000, desc: 'Regional town', desc_ro: 'Oraș regional', damage: 'Heavy ash burial.', damage_ro: 'Îngropat în cenușă masivă.' },
    { name: 'Villahermosa', lat: 17.9894, lng: -92.9475, distKm: 70, angleRad: 0.5, pop: 830000, desc: 'State capital', desc_ro: 'Capitala statului', damage: 'Severe infrastructure disruption.', damage_ro: 'Perturbări severe de infrastructură.' },
    { name: 'Tuxtla Gutiérrez', lat: 16.7516, lng: -93.1156, distKm: 80, angleRad: 3.0, pop: 600000, desc: 'Major city', desc_ro: 'Oraș major', damage: 'Aviation and grid impacts.', damage_ro: 'Impact asupra aviației și rețelei.' }
  ],
  kelud: [
    { name: 'Sugihwaras', lat: -7.8631, lng: 112.2764, distKm: 8, angleRad: 1.5, pop: 4500, desc: 'Village on the slopes', desc_ro: 'Sat pe pante', damage: 'Direct lahar path.', damage_ro: 'Cale directă de lahar.' },
    { name: 'Blitar', lat: -8.0954, lng: 112.1609, distKm: 25, angleRad: -2.0, pop: 150000, desc: 'Southern city', desc_ro: 'Oraș sudic', damage: 'Ash and mudflows.', damage_ro: 'Cenușă și curgeri de noroi.' },
    { name: 'Kediri', lat: -7.8190, lng: 112.0186, distKm: 30, angleRad: 2.8, pop: 300000, desc: 'Major urban center', desc_ro: 'Centru urban major', damage: 'Severe ashfall.', damage_ro: 'Căderi severe de cenușă.' },
    { name: 'Malang', lat: -7.9811, lng: 112.6307, distKm: 45, angleRad: 0.5, pop: 820000, desc: 'Eastern city', desc_ro: 'Oraș estic', damage: 'Flight cancellations.', damage_ro: 'Anulări de zboruri.' },
    { name: 'Surabaya', lat: -7.2575, lng: 112.7521, distKm: 90, angleRad: 1.0, pop: 2800000, desc: 'Provincial capital', desc_ro: 'Capitală provincială', damage: 'Regional aviation halted.', damage_ro: 'Aviație regională oprită.' }
  ],
  galunggung: [
    { name: 'Linggawangi', lat: -7.3100, lng: 108.1080, distKm: 6, angleRad: 1.2, pop: 5000, desc: 'Closest village', desc_ro: 'Cel mai apropiat sat', damage: 'Destroyed by pyroclastic flows.', damage_ro: 'Distrus de curgeri piroclastice.' },
    { name: 'Tasikmalaya', lat: -7.3506, lng: 108.2207, distKm: 15, angleRad: 1.8, pop: 715000, desc: 'Major city', desc_ro: 'Oraș major', damage: 'Massive ash accumulation.', damage_ro: 'Acumulare masivă de cenușă.' },
    { name: 'Garut', lat: -7.2270, lng: 107.9009, distKm: 25, angleRad: -2.5, pop: 130000, desc: 'Valley city', desc_ro: 'Oraș în vale', damage: 'Thick ash blanket.', damage_ro: 'Pătură groasă de cenușă.' },
    { name: 'Bandung', lat: -6.9175, lng: 107.6191, distKm: 70, angleRad: -2.0, pop: 2500000, desc: 'Provincial capital', desc_ro: 'Capitală provincială', damage: 'Air quality crisis.', damage_ro: 'Criză a calității aerului.' },
    { name: 'Jakarta', lat: -6.2088, lng: 106.8456, distKm: 180, angleRad: -1.5, pop: 10500000, desc: 'Capital city', desc_ro: 'Capitala', damage: 'Aviation disrupted.', damage_ro: 'Aviație perturbată.' }
  ],
  chaiten: [
    { name: 'Chaitén town', lat: -42.9167, lng: -72.7000, distKm: 10, angleRad: -1.5, pop: 5000, desc: 'Evacuated settlement', desc_ro: 'Așezare evacuată', damage: 'Buried by lahars and ash.', damage_ro: 'Îngropată de laharuri și cenușă.' },
    { name: 'Futaleufú', lat: -43.1875, lng: -71.8694, distKm: 70, angleRad: 1.2, pop: 2600, desc: 'River town', desc_ro: 'Oraș pe râu', damage: 'Extreme ashfall.', damage_ro: 'Căderi extreme de cenușă.' },
    { name: 'Palena', lat: -43.6050, lng: -71.8217, distKm: 85, angleRad: 1.5, pop: 1700, desc: 'Border town', desc_ro: 'Oraș de graniță', damage: 'Water contamination.', damage_ro: 'Contaminarea apei.' },
    { name: 'Esquel', lat: -42.9092, lng: -71.3167, distKm: 110, angleRad: 1.6, pop: 32000, desc: 'Argentine city', desc_ro: 'Oraș argentinian', damage: 'Flight suspensions.', damage_ro: 'Suspendări de zboruri.' },
    { name: 'Puerto Montt', lat: -41.4693, lng: -72.9397, distKm: 200, angleRad: -2.8, pop: 245000, desc: 'Regional capital', desc_ro: 'Capitală regională', damage: 'Ash drift.', damage_ro: 'Derivare de cenușă.' }
  ],
  novarupta: [
    { name: 'Valley of 10k Smokes', lat: 58.5000, lng: -155.0000, distKm: 10, angleRad: 2.0, pop: 0, desc: 'Volcanic landscape', desc_ro: 'Peisaj vulcanic', damage: 'Deep ignimbrite burial.', damage_ro: 'Îngropare adâncă în ignimbrit.' },
    { name: 'King Salmon', lat: 58.6880, lng: -156.6625, distKm: 70, angleRad: -1.5, pop: 300, desc: 'Gateway community', desc_ro: 'Comunitate poartă', damage: 'Heavy ashfall.', damage_ro: 'Căderi masive de cenușă.' },
    { name: 'Naknek', lat: 58.7283, lng: -156.9891, distKm: 90, angleRad: -1.2, pop: 500, desc: 'Coastal town', desc_ro: 'Oraș de coastă', damage: 'Waterways choked.', damage_ro: 'Căi navigabile blocate.' },
    { name: 'Kodiak', lat: 57.7900, lng: -152.4072, distKm: 160, angleRad: 2.2, pop: 6000, desc: 'Island city', desc_ro: 'Oraș insular', damage: 'Days of complete darkness.', damage_ro: 'Zile de întuneric total.' },
    { name: 'Anchorage', lat: 61.2181, lng: -149.9003, distKm: 450, angleRad: 0.5, pop: 290000, desc: 'Major city', desc_ro: 'Oraș major', damage: 'North Pacific aviation shut down.', damage_ro: 'Aviația din Pacificul de Nord închisă.' }
  ],
  rabaul: [
    { name: 'Rabaul town', lat: -4.1958, lng: 152.1852, distKm: 4, angleRad: -0.5, pop: 4000, desc: 'Former provincial capital', desc_ro: 'Fostă capitală provincială', damage: 'Destroyed by ash and mud.', damage_ro: 'Distrus de cenușă și noroi.' },
    { name: 'Matupit', lat: -4.2350, lng: 152.2067, distKm: 6, angleRad: 1.2, pop: 2000, desc: 'Island community', desc_ro: 'Comunitate insulară', damage: 'Tsunami and pyroclastic surge.', damage_ro: 'Tsunami și val piroclastic.' },
    { name: 'Kokopo', lat: -4.3527, lng: 152.2619, distKm: 20, angleRad: 2.5, pop: 26000, desc: 'New provincial capital', desc_ro: 'Noua capitală provincială', damage: 'Heavy ash accumulation.', damage_ro: 'Acumulare masivă de cenușă.' },
    { name: 'Kavieng', lat: -2.5741, lng: 150.7967, distKm: 250, angleRad: -1.0, pop: 20000, desc: 'Northern port', desc_ro: 'Port nordic', damage: 'Ashfall disruption.', damage_ro: 'Perturbare prin cenușă.' },
    { name: 'Port Moresby', lat: -9.4438, lng: 147.1803, distKm: 800, angleRad: -2.5, pop: 380000, desc: 'National capital', desc_ro: 'Capitală națională', damage: 'Flights grounded.', damage_ro: 'Zboruri anulate.' }
  ],
  puyehue: [
    { name: 'Entre Lagos, Chile', lat: -40.67, lng: -72.60, distKm: 40, angleRad: -2.0, pop: 4000, desc: 'Ground Zero', desc_ro: 'Zona zero', damage: 'Buried under meters of pumice and heavy ash, destroying the lakeside town\'s infrastructure.', damage_ro: 'Îngropat sub metri de piatră ponce și cenușă grea, distrugând infrastructura orașului.' },
    { name: 'Lago Ranco, Chile', lat: -40.33, lng: -72.40, distKm: 45, angleRad: 1.5, pop: 5000, desc: 'Heavy Ash Fall', desc_ro: 'Căderi severe de cenușă', damage: 'Severe pumice accumulation destroys agriculture and poisons the local water basin.', damage_ro: 'Acumularea severă de piatră ponce distruge agricultura și otrăvește bazinul local de apă.' },
    { name: 'San Carlos de Bariloche, Argentina', lat: -41.13, lng: -71.31, distKm: 90, angleRad: 1.8, pop: 135000, desc: 'Severe Ash Fall', desc_ro: 'Căderi severe de cenușă', damage: 'Thick ash paralyzes the resort city, halting aviation and crashing the tourism economy for months.', damage_ro: 'Cenușa groasă paralizează orașul turistic, oprind aviația și distrugând economia pe luni de zile.' },
    { name: 'Osorno, Chile', lat: -40.57, lng: -73.13, distKm: 95, angleRad: -2.5, pop: 160000, desc: 'Moderate Ash Zone', desc_ro: 'Zona de cenușă moderată', damage: 'Blanketed by ash leading to major respiratory crises and halting local transportation networks.', damage_ro: 'Acoperit de cenușă ducând la crize respiratorii majore și oprind rețelele de transport locale.' },
    { name: 'Valdivia, Chile', lat: -39.81, lng: -73.24, distKm: 130, angleRad: -1.5, pop: 165000, desc: 'Distant Ash Plume', desc_ro: 'Pană de cenușă distantă', damage: 'Ash drift causes prolonged air quality warnings and disrupts regional supply chains.', damage_ro: 'Deriva de cenușă cauzează avertismente prelungite privind calitatea aerului și perturbă lanțurile de aprovizionare.' }
  ],
  'tonga-hunga': [
    { name: 'Mango Island, Tonga', lat: -20.450, lng: -174.650, distKm: 70, angleRad: -0.5, pop: 50, desc: 'Ground Zero', desc_ro: 'Zona zero', damage: 'Completely engulfed by tsunami waves and pyroclastic density currents that cross open water, washing the low-lying island entirely clean of inhabitants and structures.', damage_ro: 'Complet înghițit de tsunami și curenți piroclastici peste apă, măturând complet insula.' },
    { name: 'Nuku\'alofa, Tonga', lat: -21.139, lng: -175.205, distKm: 65, angleRad: 0.5, pop: 23000, desc: 'Tsunami & Blast Zone', desc_ro: 'Zona de șoc și tsunami', damage: 'Battered by multiple tsunami waves up to 15 meters, a powerful atmospheric shockwave, and thick ash fall that disrupts all communications and crushes the capital\'s infrastructure.', damage_ro: 'Bătut de tsunamiuri de până la 15 metri, o undă de șoc atmosferică și cenușă groasă care taie comunicațiile.' },
    { name: 'Suva, Fiji', lat: -18.141, lng: 178.441, distKm: 830, angleRad: -2.5, pop: 93000, desc: 'Tsunami Zone', desc_ro: 'Zona de tsunami', damage: 'Struck by tsunami waves of 1–3 meters that flood coastal districts, displace tens of thousands, and cause widespread damage to Fiji\'s Pacific-facing port infrastructure.', damage_ro: 'Lovit de valuri tsunami de 1-3 metri care inundă zonele de coastă și avariază porturile.' },
    { name: 'Auckland, New Zealand', lat: -36.852, lng: 174.763, distKm: 2100, angleRad: 2.8, pop: 1650000, desc: 'Ash & Pressure Wave Zone', desc_ro: 'Zona de presiune și cenușă', damage: 'Rattled by a powerful atmospheric pressure wave strong enough to set off burglar alarms, while receiving measurable ash fall that disrupts aviation for several days.', damage_ro: 'Zguduit de o undă de șoc puternică și cenușă măsurabilă care perturbă aviația zile întregi.' },
    { name: 'Sydney, Australia', lat: -33.869, lng: 151.209, distKm: 3200, angleRad: 2.5, pop: 5300000, desc: 'Distant Plume Zone', desc_ro: 'Pană de cenușă distantă', damage: 'Experiences a faint haze and detectable pressure wave, with minor ash fall affecting air quality monitoring stations but causing no significant structural damage or disruption.', damage_ro: 'Experimentează o ceață fină și undă de șoc detectabilă, cu cenușă minoră afectând aerul.' }
  ],
  shiveluch: [
    { name: 'Klyuchi', lat: 56.3152, lng: 160.8406, distKm: 45, angleRad: -1.5, pop: 5000, desc: 'Nearest town', desc_ro: 'Cel mai apropiat oraș', damage: 'Severe ashfall.', damage_ro: 'Căderi severe de cenușă.' },
    { name: 'Ust-Kamchatsk', lat: 56.2222, lng: 162.4631, distKm: 85, angleRad: 1.0, pop: 4000, desc: 'Coastal settlement', desc_ro: 'Așezare de coastă', damage: 'Ash drift and river mud.', damage_ro: 'Derivare de cenușă și noroi.' },
    { name: 'Kozyrevsk', lat: 56.0455, lng: 159.8780, distKm: 110, angleRad: 0.8, pop: 1200, desc: 'Village', desc_ro: 'Sat', damage: 'Heavy ash blanketing.', damage_ro: 'Pătură groasă de cenușă.' },
    { name: 'Petropavlovsk-Kamchatsky', lat: 53.0452, lng: 158.6556, distKm: 430, angleRad: -2.0, pop: 180000, desc: 'Regional capital', desc_ro: 'Capitală regională', damage: 'Aviation disrupted.', damage_ro: 'Aviație perturbată.' }
  ],
  awu: [
    { name: 'Tahuna', lat: 3.6072, lng: 125.4833, distKm: 15, angleRad: -2.0, pop: 35000, desc: 'Island capital', desc_ro: 'Capitala insulei', damage: 'Severe ash and pyroclastic risk.', damage_ro: 'Risc sever de cenușă și curgeri piroclastice.' },
    { name: 'Manganitu', lat: 3.7122, lng: 125.5283, distKm: 20, angleRad: 1.5, pop: 15000, desc: 'Coastal town', desc_ro: 'Oraș de coastă', damage: 'Tsunami and ashfall.', damage_ro: 'Tsunami și căderi de cenușă.' },
    { name: 'Tamako', lat: 3.5267, lng: 125.5433, distKm: 25, angleRad: 2.8, pop: 12000, desc: 'Southern town', desc_ro: 'Oraș sudic', damage: 'Heavy ash accumulation.', damage_ro: 'Acumulare masivă de cenușă.' },
    { name: 'Manado', lat: 1.4931, lng: 124.8413, distKm: 250, angleRad: -1.0, pop: 430000, desc: 'Regional capital', desc_ro: 'Capitală regională', damage: 'Aviation disruption.', damage_ro: 'Perturbarea aviației.' }
  ],
  askja: [
    { name: 'Reykjahlíð', lat: 65.6450, lng: -16.9156, distKm: 60, angleRad: -2.5, pop: 300, desc: 'Lake Mývatn settlement', desc_ro: 'Așezare pe lacul Mývatn', damage: 'Heavy pumice and ashfall.', damage_ro: 'Căderi masive de piatră ponce și cenușă.' },
    { name: 'Egilsstaðir', lat: 65.2667, lng: -14.3911, distKm: 90, angleRad: 1.0, pop: 2500, desc: 'Eastern hub', desc_ro: 'Centru estic', damage: 'Severe ash cloud coverage.', damage_ro: 'Acoperit de nori severi de cenușă.' },
    { name: 'Akureyri', lat: 65.6851, lng: -18.1059, distKm: 110, angleRad: -1.5, pop: 19000, desc: 'Northern capital', desc_ro: 'Capitală nordică', damage: 'Air quality crisis.', damage_ro: 'Criză a calității aerului.' },
    { name: 'Reykjavík', lat: 64.1265, lng: -21.8174, distKm: 280, angleRad: -2.8, pop: 130000, desc: 'National capital', desc_ro: 'Capitală națională', damage: 'Flight suspensions.', damage_ro: 'Suspendări de zboruri.' }
  ],
  'cerro-hudson': [
    { name: 'Puerto Ingeniero Ibáñez', lat: -46.2864, lng: -71.9403, distKm: 50, angleRad: -2.0, pop: 2500, desc: 'Nearby town', desc_ro: 'Oraș din apropiere', damage: 'Lahar and mudflows.', damage_ro: 'Lahar și curgeri de noroi.' },
    { name: 'Puerto Aysén', lat: -45.4018, lng: -72.6975, distKm: 65, angleRad: -1.5, pop: 27000, desc: 'Coastal city', desc_ro: 'Oraș de coastă', damage: 'Severe ashfall.', damage_ro: 'Căderi severe de cenușă.' },
    { name: 'Coyhaique', lat: -45.5712, lng: -72.0689, distKm: 80, angleRad: -1.0, pop: 60000, desc: 'Regional capital', desc_ro: 'Capitală regională', damage: 'Aviation halted, thick ash.', damage_ro: 'Aviație oprită, cenușă groasă.' },
    { name: 'Chile Chico', lat: -46.5369, lng: -71.7286, distKm: 100, angleRad: 1.5, pop: 5000, desc: 'Border town', desc_ro: 'Oraș de graniță', damage: 'Ash drift.', damage_ro: 'Derivare de cenușă.' },
    { name: 'Comodoro Rivadavia', lat: -45.8654, lng: -67.4820, distKm: 400, angleRad: 1.2, pop: 200000, desc: 'Argentine coastal city', desc_ro: 'Oraș de coastă argentinian', damage: 'Heavy ash blanketing.', damage_ro: 'Pătură groasă de cenușă.' }
  ],
  hudson: [
    { name: 'Puerto Ingeniero Ibáñez', lat: -46.2864, lng: -71.9403, distKm: 50, angleRad: -2.0, pop: 2500, desc: 'Nearby town', desc_ro: 'Oraș din apropiere', damage: 'Lahar and mudflows.', damage_ro: 'Lahar și curgeri de noroi.' },
    { name: 'Puerto Aysén', lat: -45.4018, lng: -72.6975, distKm: 65, angleRad: -1.5, pop: 27000, desc: 'Coastal city', desc_ro: 'Oraș de coastă', damage: 'Severe ashfall.', damage_ro: 'Căderi severe de cenușă.' },
    { name: 'Coyhaique', lat: -45.5712, lng: -72.0689, distKm: 80, angleRad: -1.0, pop: 60000, desc: 'Regional capital', desc_ro: 'Capitală regională', damage: 'Aviation halted, thick ash.', damage_ro: 'Aviație oprită, cenușă groasă.' },
    { name: 'Chile Chico', lat: -46.5369, lng: -71.7286, distKm: 100, angleRad: 1.5, pop: 5000, desc: 'Border town', desc_ro: 'Oraș de graniță', damage: 'Ash drift.', damage_ro: 'Derivare de cenușă.' },
    { name: 'Comodoro Rivadavia', lat: -45.8654, lng: -67.4820, distKm: 400, angleRad: 1.2, pop: 200000, desc: 'Argentine coastal city', desc_ro: 'Oraș de coastă argentinian', damage: 'Heavy ash blanketing.', damage_ro: 'Pătură groasă de cenușă.' }
  ],
  bezymianny: [
    { name: 'Kozyrevsk', lat: 56.0455, lng: 159.8780, distKm: 45, angleRad: -2.0, pop: 1200, desc: 'Village', desc_ro: 'Sat', damage: 'Severe ashfall.', damage_ro: 'Căderi severe de cenușă.' },
    { name: 'Klyuchi', lat: 56.3152, lng: 160.8406, distKm: 50, angleRad: 1.0, pop: 5000, desc: 'Nearest town', desc_ro: 'Cel mai apropiat oraș', damage: 'Heavy ash and mudflows.', damage_ro: 'Cenușă și curgeri de noroi.' },
    { name: 'Ust-Kamchatsk', lat: 56.2222, lng: 162.4631, distKm: 120, angleRad: 1.5, pop: 4000, desc: 'Coastal settlement', desc_ro: 'Așezare de coastă', damage: 'Ash cloud coverage.', damage_ro: 'Acoperit de nori de cenușă.' },
    { name: 'Petropavlovsk-Kamchatsky', lat: 53.0452, lng: 158.6556, distKm: 350, angleRad: -2.5, pop: 180000, desc: 'Regional capital', desc_ro: 'Capitală regională', damage: 'Aviation disrupted.', damage_ro: 'Aviație perturbată.' }
  ],
  okataina: [
    { name: 'Rotorua', lat: -38.1368, lng: 176.2497, distKm: 25, angleRad: -2.0, pop: 72000, desc: 'Major tourist city', desc_ro: 'Oraș turistic major', damage: 'Severe ashfall and disruption.', damage_ro: 'Căderi severe de cenușă și perturbări.' },
    { name: 'Kawerau', lat: -38.0833, lng: 176.7000, distKm: 30, angleRad: 1.5, pop: 7000, desc: 'Industrial town', desc_ro: 'Oraș industrial', damage: 'Ash accumulation.', damage_ro: 'Acumulare de cenușă.' },
    { name: 'Whakatāne', lat: -37.9531, lng: 176.9904, distKm: 50, angleRad: 1.0, pop: 38000, desc: 'Coastal hub', desc_ro: 'Centru de coastă', damage: 'Water contamination.', damage_ro: 'Contaminarea apei.' },
    { name: 'Tauranga', lat: -37.6878, lng: 176.1651, distKm: 70, angleRad: -1.0, pop: 150000, desc: 'Major port city', desc_ro: 'Oraș portuar major', damage: 'Air quality crisis.', damage_ro: 'Criză a calității aerului.' },
    { name: 'Auckland', lat: -36.8509, lng: 174.7645, distKm: 220, angleRad: -2.5, pop: 1650000, desc: 'Largest NZ city', desc_ro: 'Cel mai mare oraș', damage: 'Flight suspensions.', damage_ro: 'Suspendări de zboruri.' }
  ],
  tarawera: [
    { name: 'Rotorua', lat: -38.1368, lng: 176.2497, distKm: 25, angleRad: -2.0, pop: 72000, desc: 'Major tourist city', desc_ro: 'Oraș turistic major', damage: 'Severe ashfall and disruption.', damage_ro: 'Căderi severe de cenușă și perturbări.' },
    { name: 'Kawerau', lat: -38.0833, lng: 176.7000, distKm: 30, angleRad: 1.5, pop: 7000, desc: 'Industrial town', desc_ro: 'Oraș industrial', damage: 'Ash accumulation.', damage_ro: 'Acumulare de cenușă.' },
    { name: 'Whakatāne', lat: -37.9531, lng: 176.9904, distKm: 50, angleRad: 1.0, pop: 38000, desc: 'Coastal hub', desc_ro: 'Centru de coastă', damage: 'Water contamination.', damage_ro: 'Contaminarea apei.' },
    { name: 'Tauranga', lat: -37.6878, lng: 176.1651, distKm: 70, angleRad: -1.0, pop: 150000, desc: 'Major port city', desc_ro: 'Oraș portuar major', damage: 'Air quality crisis.', damage_ro: 'Criză a calității aerului.' },
    { name: 'Auckland', lat: -36.8509, lng: 174.7645, distKm: 220, angleRad: -2.5, pop: 1650000, desc: 'Largest NZ city', desc_ro: 'Cel mai mare oraș', damage: 'Flight suspensions.', damage_ro: 'Suspendări de zboruri.' }
  ],
  ksudach: [
    { name: 'Ozernovsky', lat: 51.5040, lng: 156.5000, distKm: 70, angleRad: -2.0, pop: 2000, desc: 'Coastal town', desc_ro: 'Oraș de coastă', damage: 'Severe ashfall.', damage_ro: 'Căderi severe de cenușă.' },
    { name: 'Pauzhetka', lat: 51.4596, lng: 156.7996, distKm: 80, angleRad: -1.5, pop: 500, desc: 'Geothermal settlement', desc_ro: 'Așezare geotermală', damage: 'Ash and mudflows.', damage_ro: 'Cenușă și curgeri de noroi.' },
    { name: 'Petropavlovsk-Kamchatsky', lat: 53.0452, lng: 158.6556, distKm: 150, angleRad: 1.0, pop: 180000, desc: 'Regional capital', desc_ro: 'Capitală regională', damage: 'Aviation halted, thick ash.', damage_ro: 'Aviație oprită, cenușă groasă.' },
    { name: 'Yelizovo', lat: 53.1840, lng: 158.3780, distKm: 160, angleRad: 1.2, pop: 39000, desc: 'Airport city', desc_ro: 'Oraș aeroport', damage: 'Flights grounded.', damage_ro: 'Zboruri anulate.' }
  ],
  cosiguina: [
    { name: 'Potosí', lat: 12.9467, lng: -87.5764, distKm: 15, angleRad: -2.0, pop: 3000, desc: 'Peninsula town', desc_ro: 'Oraș peninsular', damage: 'Extreme ash and tsunami risk.', damage_ro: 'Cenușă extremă și risc de tsunami.' },
    { name: 'El Viejo', lat: 12.6611, lng: -87.1644, distKm: 50, angleRad: 1.5, pop: 85000, desc: 'Major municipality', desc_ro: 'Municipalitate majoră', damage: 'Severe ashfall.', damage_ro: 'Căderi severe de cenușă.' },
    { name: 'Chinandega', lat: 12.6331, lng: -87.1226, distKm: 60, angleRad: 1.2, pop: 135000, desc: 'Regional hub', desc_ro: 'Centru regional', damage: 'Infrastructure disruption.', damage_ro: 'Perturbarea infrastructurii.' },
    { name: 'León', lat: 12.4379, lng: -86.8792, distKm: 100, angleRad: 1.0, pop: 200000, desc: 'Historic city', desc_ro: 'Oraș istoric', damage: 'Air quality crisis.', damage_ro: 'Criză a calității aerului.' },
    { name: 'Managua', lat: 12.1364, lng: -86.2514, distKm: 180, angleRad: 1.2, pop: 1000000, desc: 'Capital city', desc_ro: 'Capitală', damage: 'Aviation and grid impacts.', damage_ro: 'Impact asupra aviației și rețelei.' }
  ],
  okmok: [
    { name: 'Nikolski', lat: 52.9380, lng: -168.8740, distKm: 70, angleRad: -2.5, pop: 40, desc: 'Island village', desc_ro: 'Sat insular', damage: 'Heavy ash blanketing.', damage_ro: 'Pătură groasă de cenușă.' },
    { name: 'Unalaska', lat: 53.8740, lng: -166.5350, distKm: 100, angleRad: 1.0, pop: 4500, desc: 'Major Aleutian port', desc_ro: 'Port major', damage: 'Severe ashfall, maritime disrupted.', damage_ro: 'Cenușă severă, trafic maritim perturbat.' },
    { name: 'Dutch Harbor', lat: 53.8910, lng: -166.5470, distKm: 105, angleRad: 1.1, pop: 4500, desc: 'Fishery hub', desc_ro: 'Centru de pescuit', damage: 'Flights grounded.', damage_ro: 'Zboruri anulate.' },
    { name: 'Akutan', lat: 54.1350, lng: -165.7780, distKm: 150, angleRad: 1.2, pop: 1000, desc: 'Processing town', desc_ro: 'Oraș de procesare', damage: 'Ash cloud coverage.', damage_ro: 'Acoperit de nori de cenușă.' }
  ],
  spurr: [
    { name: 'Tyonek', lat: 61.0660, lng: -151.1390, distKm: 60, angleRad: -1.0, pop: 200, desc: 'Native village', desc_ro: 'Sat indigen', damage: 'Heavy ashfall and mudflows.', damage_ro: 'Căderi masive de cenușă și noroi.' },
    { name: 'Beluga', lat: 61.2110, lng: -151.0510, distKm: 65, angleRad: -0.5, pop: 20, desc: 'Energy hub', desc_ro: 'Centru energetic', damage: 'Infrastructure damage.', damage_ro: 'Daune de infrastructură.' },
    { name: 'Kenai', lat: 60.5510, lng: -151.2580, distKm: 100, angleRad: -2.0, pop: 7000, desc: 'Coastal city', desc_ro: 'Oraș de coastă', damage: 'Ash drift.', damage_ro: 'Derivare de cenușă.' },
    { name: 'Anchorage', lat: 61.2181, lng: -149.9003, distKm: 130, angleRad: 0.5, pop: 290000, desc: 'Major city', desc_ro: 'Oraș major', damage: 'Aviation halted, thick ash.', damage_ro: 'Aviație oprită, cenușă groasă.' }
  ],
  katmai: [
    { name: 'Valley of 10k Smokes', lat: 58.5000, lng: -155.0000, distKm: 10, angleRad: 2.0, pop: 0, desc: 'Volcanic landscape', desc_ro: 'Peisaj vulcanic', damage: 'Deep ignimbrite burial.', damage_ro: 'Îngropare adâncă în ignimbrit.' },
    { name: 'King Salmon', lat: 58.6880, lng: -156.6625, distKm: 70, angleRad: -1.5, pop: 300, desc: 'Gateway community', desc_ro: 'Comunitate poartă', damage: 'Heavy ashfall.', damage_ro: 'Căderi masive de cenușă.' },
    { name: 'Naknek', lat: 58.7283, lng: -156.9891, distKm: 90, angleRad: -1.2, pop: 500, desc: 'Coastal town', desc_ro: 'Oraș de coastă', damage: 'Waterways choked.', damage_ro: 'Căi navigabile blocate.' },
    { name: 'Kodiak', lat: 57.7900, lng: -152.4072, distKm: 160, angleRad: 2.2, pop: 6000, desc: 'Island city', desc_ro: 'Oraș insular', damage: 'Days of complete darkness.', damage_ro: 'Zile de întuneric total.' },
    { name: 'Anchorage', lat: 61.2181, lng: -149.9003, distKm: 450, angleRad: 0.5, pop: 290000, desc: 'Major city', desc_ro: 'Oraș major', damage: 'North Pacific aviation shut down.', damage_ro: 'Aviația din Pacificul de Nord închisă.' }
  ],
  aniakchak: [
    { name: 'Port Heiden', lat: 56.9600, lng: -158.6360, distKm: 30, angleRad: 1.5, pop: 100, desc: 'Coastal village', desc_ro: 'Sat de coastă', damage: 'Severe ashfall and tsunami risk.', damage_ro: 'Cenușă severă și risc de tsunami.' },
    { name: 'Meshik', lat: 56.9800, lng: -158.7000, distKm: 35, angleRad: 1.6, pop: 100, desc: 'Historical site', desc_ro: 'Sit istoric', damage: 'Heavy ash blanketing.', damage_ro: 'Pătură groasă de cenușă.' },
    { name: 'Chignik', lat: 56.2960, lng: -158.3890, distKm: 60, angleRad: -2.0, pop: 300, desc: 'Fishing community', desc_ro: 'Comunitate de pescari', damage: 'Ash cloud coverage.', damage_ro: 'Acoperit de nori de cenușă.' },
    { name: 'Kodiak', lat: 57.7900, lng: -152.4072, distKm: 350, angleRad: -0.5, pop: 6000, desc: 'Island city', desc_ro: 'Oraș insular', damage: 'Aviation disruption.', damage_ro: 'Perturbarea aviației.' }
  ],
  veniaminof: [
    { name: 'Perryville', lat: 55.9130, lng: -159.1560, distKm: 35, angleRad: -1.5, pop: 100, desc: 'Native village', desc_ro: 'Sat indigen', damage: 'Severe ashfall.', damage_ro: 'Căderi severe de cenușă.' },
    { name: 'Chignik Lake', lat: 56.2540, lng: -158.7740, distKm: 50, angleRad: 1.0, pop: 70, desc: 'Lake settlement', desc_ro: 'Așezare pe lac', damage: 'Water contamination.', damage_ro: 'Contaminarea apei.' },
    { name: 'Ivanof Bay', lat: 55.8930, lng: -159.4820, distKm: 60, angleRad: -2.5, pop: 10, desc: 'Coastal outpost', desc_ro: 'Punct de coastă', damage: 'Heavy ash blanketing.', damage_ro: 'Pătură groasă de cenușă.' },
    { name: 'Sand Point', lat: 55.3370, lng: -160.5030, distKm: 120, angleRad: -2.8, pop: 1000, desc: 'Island hub', desc_ro: 'Centru insular', damage: 'Ash drift and flight delays.', damage_ro: 'Derivare de cenușă și zboruri întârziate.' }
  ],
  makushin: [
    { name: 'Unalaska', lat: 53.8740, lng: -166.5350, distKm: 25, angleRad: 1.0, pop: 4500, desc: 'Major Aleutian port', desc_ro: 'Port major', damage: 'Severe ashfall, maritime disrupted.', damage_ro: 'Cenușă severă, trafic maritim perturbat.' },
    { name: 'Dutch Harbor', lat: 53.8910, lng: -166.5470, distKm: 28, angleRad: 1.1, pop: 4500, desc: 'Fishery hub', desc_ro: 'Centru de pescuit', damage: 'Flights grounded.', damage_ro: 'Zboruri anulate.' },
    { name: 'Akutan', lat: 54.1350, lng: -165.7780, distKm: 70, angleRad: 1.5, pop: 1000, desc: 'Processing town', desc_ro: 'Oraș de procesare', damage: 'Ash cloud coverage.', damage_ro: 'Acoperit de nori de cenușă.' },
    { name: 'Nikolski', lat: 52.9380, lng: -168.8740, distKm: 150, angleRad: -2.5, pop: 40, desc: 'Island village', desc_ro: 'Sat insular', damage: 'Light ashfall.', damage_ro: 'Căderi ușoare de cenușă.' }
  ],
  komagatake: [
    { name: 'Shikabe', lat: 42.0380, lng: 140.8320, distKm: 10, angleRad: 1.5, pop: 4000, desc: 'Coastal town', desc_ro: 'Oraș de coastă', damage: 'Pumice and heavy ash.', damage_ro: 'Piatră ponce și cenușă.' },
    { name: 'Mori', lat: 42.1050, lng: 140.5760, distKm: 15, angleRad: -1.0, pop: 15000, desc: 'Bay settlement', desc_ro: 'Așezare în golf', damage: 'Pyroclastic surge threat.', damage_ro: 'Amenințare de valuri piroclastice.' },
    { name: 'Nanae', lat: 41.8950, lng: 140.6820, distKm: 20, angleRad: 2.5, pop: 28000, desc: 'Southern town', desc_ro: 'Oraș sudic', damage: 'Severe ash accumulation.', damage_ro: 'Acumulare severă de cenușă.' },
    { name: 'Hakodate', lat: 41.7690, lng: 140.7290, distKm: 35, angleRad: 2.8, pop: 260000, desc: 'Major city', desc_ro: 'Oraș major', damage: 'Aviation halted, thick ash.', damage_ro: 'Aviație oprită, cenușă groasă.' },
    { name: 'Sapporo', lat: 43.0621, lng: 141.3544, distKm: 130, angleRad: -2.0, pop: 1900000, desc: 'Prefectural capital', desc_ro: 'Capitală de prefectură', damage: 'Air quality issues.', damage_ro: 'Probleme de calitate a aerului.' }
  ],
  kuwae: [
    { name: 'Epi Island', lat: -16.73, lng: 168.25, distKm: 10, angleRad: -1.5, pop: 5000, desc: 'Local island', desc_ro: 'Insulă locală', damage: 'Tsunami and severe ash.', damage_ro: 'Tsunami și cenușă severă.' },
    { name: 'Lamen Bay', lat: -16.59, lng: 168.16, distKm: 15, angleRad: -1.0, pop: 1000, desc: 'Coastal village', desc_ro: 'Sat de coastă', damage: 'Pyroclastic surges.', damage_ro: 'Valuri piroclastice.' },
    { name: 'Paama Island', lat: -16.47, lng: 168.23, distKm: 25, angleRad: 1.0, pop: 1600, desc: 'Neighboring island', desc_ro: 'Insulă vecină', damage: 'Heavy ash burial.', damage_ro: 'Îngropat în cenușă masivă.' },
    { name: 'Port Vila', lat: -17.73, lng: 168.32, distKm: 120, angleRad: 2.5, pop: 50000, desc: 'National capital', desc_ro: 'Capitală națională', damage: 'Aviation disrupted.', damage_ro: 'Aviație perturbată.' }
  ],
  ambrym: [
    { name: 'Craig Cove', lat: -16.25, lng: 167.95, distKm: 15, angleRad: -2.5, pop: 1000, desc: 'Western settlement', desc_ro: 'Așezare vestică', damage: 'Heavy ash and gas.', damage_ro: 'Cenușă masivă și gaze.' },
    { name: 'Olal', lat: -16.12, lng: 168.15, distKm: 20, angleRad: -0.5, pop: 800, desc: 'Northern village', desc_ro: 'Sat nordic', damage: 'Lava flows and ash.', damage_ro: 'Curgeri de lavă și cenușă.' },
    { name: 'Ranon', lat: -16.15, lng: 168.11, distKm: 25, angleRad: 0.5, pop: 500, desc: 'Coastal town', desc_ro: 'Oraș de coastă', damage: 'Water contamination.', damage_ro: 'Contaminarea apei.' },
    { name: 'Port Vila', lat: -17.73, lng: 168.32, distKm: 160, angleRad: 2.5, pop: 50000, desc: 'National capital', desc_ro: 'Capitală națională', damage: 'Flight suspensions.', damage_ro: 'Suspendări de zboruri.' }
  ],
  batur: [
    { name: 'Kintamani', lat: -8.24, lng: 115.32, distKm: 5, angleRad: 1.0, pop: 10000, desc: 'Crater rim town', desc_ro: 'Oraș pe marginea craterului', damage: 'Pyroclastic risk.', damage_ro: 'Risc piroclastic.' },
    { name: 'Bangli', lat: -8.45, lng: 115.35, distKm: 25, angleRad: 2.0, pop: 50000, desc: 'Regency capital', desc_ro: 'Capitală de regență', damage: 'Severe ashfall.', damage_ro: 'Căderi severe de cenușă.' },
    { name: 'Gianyar', lat: -8.54, lng: 115.33, distKm: 35, angleRad: 2.5, pop: 90000, desc: 'Cultural hub', desc_ro: 'Centru cultural', damage: 'Infrastructure damage.', damage_ro: 'Daune de infrastructură.' },
    { name: 'Denpasar', lat: -8.65, lng: 115.21, distKm: 50, angleRad: 3.0, pop: 900000, desc: 'Provincial capital', desc_ro: 'Capitală provincială', damage: 'Aviation halted, ashfall.', damage_ro: 'Aviație oprită, căderi de cenușă.' },
    { name: 'Singaraja', lat: -8.11, lng: 115.08, distKm: 40, angleRad: -1.0, pop: 150000, desc: 'Northern city', desc_ro: 'Oraș nordic', damage: 'Ash cloud coverage.', damage_ro: 'Acoperit de nori de cenușă.' }
  ],
  ilopango: [
    { name: 'Ilopango', lat: 13.70, lng: -89.10, distKm: 5, angleRad: -2.0, pop: 100000, desc: 'Lakeside city', desc_ro: 'Oraș pe malul lacului', damage: 'Extreme tsunami and pyroclastic risk.', damage_ro: 'Tsunami extrem și risc piroclastic.' },
    { name: 'Soyapango', lat: 13.72, lng: -89.15, distKm: 8, angleRad: 1.5, pop: 250000, desc: 'Dense municipality', desc_ro: 'Municipalitate densă', damage: 'Total ash burial.', damage_ro: 'Îngropat total sub cenușă.' },
    { name: 'Cojutepeque', lat: 13.72, lng: -88.93, distKm: 15, angleRad: 2.5, pop: 50000, desc: 'Eastern city', desc_ro: 'Oraș estic', damage: 'Severe ash accumulation.', damage_ro: 'Acumulare severă de cenușă.' },
    { name: 'San Salvador', lat: 13.69, lng: -89.21, distKm: 15, angleRad: -1.0, pop: 1100000, desc: 'National capital', desc_ro: 'Capitală națională', damage: 'Complete infrastructure collapse.', damage_ro: 'Colaps complet al infrastructurii.' },
    { name: 'Santa Tecla', lat: 13.67, lng: -89.28, distKm: 25, angleRad: -1.5, pop: 130000, desc: 'Western suburb', desc_ro: 'Suburbie vestică', damage: 'Heavy ashfall and disruption.', damage_ro: 'Căderi masive de cenușă și perturbări.' }
  ],
  coatepeque: [
    { name: 'Coatepeque', lat: 13.82, lng: -89.55, distKm: 8, angleRad: -2.5, pop: 15000, desc: 'Lakeside town', desc_ro: 'Oraș pe malul lacului', damage: 'Tsunami and pyroclastic flows.', damage_ro: 'Tsunami și curgeri piroclastice.' },
    { name: 'El Congo', lat: 13.91, lng: -89.50, distKm: 12, angleRad: 1.0, pop: 25000, desc: 'Nearby municipality', desc_ro: 'Municipalitate apropiată', damage: 'Heavy pumice and ash.', damage_ro: 'Căderi masive de piatră ponce și cenușă.' },
    { name: 'Santa Ana', lat: 13.99, lng: -89.55, distKm: 18, angleRad: -1.5, pop: 260000, desc: 'Major city', desc_ro: 'Oraș major', damage: 'Severe ashfall.', damage_ro: 'Căderi severe de cenușă.' },
    { name: 'Chalchuapa', lat: 13.98, lng: -89.68, distKm: 25, angleRad: -2.0, pop: 80000, desc: 'Historic town', desc_ro: 'Oraș istoric', damage: 'Ash cloud coverage.', damage_ro: 'Acoperit de nori de cenușă.' },
    { name: 'San Salvador', lat: 13.69, lng: -89.21, distKm: 45, angleRad: 1.5, pop: 1100000, desc: 'National capital', desc_ro: 'Capitală națională', damage: 'Aviation halted, thick ash.', damage_ro: 'Aviație oprită, cenușă groasă.' }
  ],
  apoyeque: [
    { name: 'Mateare', lat: 12.24, lng: -86.43, distKm: 5, angleRad: -2.0, pop: 45000, desc: 'Lakeside municipality', desc_ro: 'Municipalitate pe malul lacului', damage: 'Total destruction.', damage_ro: 'Distrugere totală.' },
    { name: 'Ciudad Sandino', lat: 12.16, lng: -86.35, distKm: 12, angleRad: 1.5, pop: 100000, desc: 'Dense suburb', desc_ro: 'Suburbie densă', damage: 'Pyroclastic surge threat.', damage_ro: 'Amenințare de valuri piroclastice.' },
    { name: 'Managua', lat: 12.13, lng: -86.25, distKm: 20, angleRad: 1.8, pop: 1000000, desc: 'Capital city', desc_ro: 'Capitală', damage: 'Severe infrastructure disruption.', damage_ro: 'Perturbări severe de infrastructură.' },
    { name: 'Tipitapa', lat: 12.20, lng: -86.09, distKm: 35, angleRad: 2.5, pop: 130000, desc: 'Eastern municipality', desc_ro: 'Municipalitate estică', damage: 'Heavy ash burial.', damage_ro: 'Îngropat în cenușă masivă.' },
    { name: 'León', lat: 12.43, lng: -86.87, distKm: 65, angleRad: -1.5, pop: 200000, desc: 'Historic city', desc_ro: 'Oraș istoric', damage: 'Aviation and grid impacts.', damage_ro: 'Impact asupra aviației și rețelei.' }
  ],
  rainier: [
    { name: 'Orting', lat: 47.1007, lng: -122.2043, distKm: 42, angleRad: 3.14, pop: 22000, desc: 'Town directly in primary lahar path', desc_ro: 'Oraș direct în calea laharului primar', damage: 'Engulfed within 30–45 minutes by a lahar wall estimated at 7–10 meters deep; near-total fatalities for residents unable to evacuate.', damage_ro: 'Îngropat în 30–45 minute de un val de lahar de 7–10 metri; victime aproape totale.' },
    { name: 'Puyallup', lat: 47.1854, lng: -122.2929, distKm: 55, angleRad: 3.50, pop: 48000, desc: 'Valley city in lahar corridor', desc_ro: 'Oraș de vale în coridorul laharului', damage: 'River valley inundated by volcanic mudflow; residential districts on low ground destroyed, infrastructure severed.', damage_ro: 'Valea râului inundată de curgere de noroi vulcanic; cartiere rezidențiale distruse.' },
    { name: 'Tacoma', lat: 47.2529, lng: -122.4443, distKm: 65, angleRad: 3.60, pop: 220000, desc: 'Major port city', desc_ro: 'Oraș portuar major', damage: 'Port facilities and waterfront districts buried; city-wide evacuations; rail and highway links severed for months.', damage_ro: 'Facilități portuare îngropate; evacuări la nivel de oraș; legături rutiere și feroviare tăiate.' },
    { name: 'Seattle', lat: 47.6062, lng: -122.3321, distKm: 88, angleRad: 2.80, pop: 740000, desc: 'Major metro and tech hub', desc_ro: 'Metropolă majoră și centru tech', damage: 'Heavy ashfall collapses roofs, grounds all flights at SeaTac, contaminates water supply; economic losses in tens of billions.', damage_ro: 'Cenușa masivă prăbușește acoperișuri, oprește zborurile, contaminează apa; pierderi de zeci de miliarde.' },
    { name: 'Portland', lat: 45.5051, lng: -122.6750, distKm: 230, angleRad: -2.00, pop: 650000, desc: 'Oregon regional capital', desc_ro: 'Capitala regională Oregon', damage: 'Significant ashfall disrupts transportation networks and agriculture across the Willamette Valley for months.', damage_ro: 'Căderi semnificative de cenușă perturbă transportul și agricultura în valea Willamette.' }
  ],
  santorini: [
    { name: 'Fira', lat: 36.4169, lng: 25.4321, distKm: 4, angleRad: 1.20, pop: 3500, desc: 'Capital perched on the caldera rim', desc_ro: 'Capitala așezată pe marginea calderei', damage: 'Obliterated by caldera collapse and pyroclastic surges; the island town ceases to exist within the first minutes.', damage_ro: 'Obliterată de colapsul calderei și valuri piroclastice; orașul încetează să existe în primele minute.' },
    { name: 'Oia', lat: 36.4618, lng: 25.3753, distKm: 12, angleRad: -1.00, pop: 1800, desc: 'Northern village on the caldera rim', desc_ro: 'Sat nordic pe marginea calderei', damage: 'Engulfed by pyroclastic flows and tsunami wash; iconic cliffside structures completely destroyed.', damage_ro: 'Cuprins de curgeri piroclastice și val tsunami; structurile iconice de pe stâncă complet distruse.' },
    { name: 'Heraklion, Crete', lat: 35.3387, lng: 25.1442, distKm: 128, angleRad: -1.80, pop: 175000, desc: 'Minoan successor city and Cretan capital', desc_ro: 'Capitala Cretei', damage: 'Struck by tsunami waves 10–15 m high; port and coastal infrastructure destroyed; ash fall collapses buildings for weeks.', damage_ro: 'Lovit de valuri tsunami de 10–15 m; port și infrastructură de coastă distruse.' },
    { name: 'Athens', lat: 37.9838, lng: 23.7275, distKm: 228, angleRad: -0.80, pop: 3200000, desc: 'Greek capital and ancient centre', desc_ro: 'Capitala Greciei', damage: 'Massive tsunami waves strike the coast; thick ash cloud darkens the city for days, disrupting transport and agriculture.', damage_ro: 'Valuri tsunami masive lovesc coasta; un nor dens de cenușă întunecă orașul zile întregi.' },
    { name: 'Istanbul', lat: 41.0082, lng: 28.9784, distKm: 488, angleRad: 0.60, pop: 15400000, desc: 'Megacity spanning two continents', desc_ro: 'Megapolisul care unește două continente', damage: 'Distal ash fall disrupts aviation and maritime traffic through the Bosphorus; economic shock from regional disruption.', damage_ro: 'Cenușa distală perturbă aviația și traficul maritim prin Bosfor; șoc economic regional.' }
  ],
  hekla: [
    { name: 'Hvolsvöllur', lat: 63.7511, lng: -20.2243, distKm: 40, angleRad: 3.50, pop: 1000, desc: 'Nearest significant settlement', desc_ro: 'Cea mai apropiată localitate semnificativă', damage: 'Engulfed by tephra fall and lahar flooding from melting snow; roads and farmland buried.', damage_ro: 'Acoperit de tefră și inundat de laharuri din zăpada topită; drumuri și terenuri îngropate.' },
    { name: 'Selfoss', lat: 63.9330, lng: -20.9986, distKm: 78, angleRad: 3.80, pop: 11000, desc: 'Main southern Iceland hub', desc_ro: 'Principalul centru din sudul Islandei', damage: 'Heavy ashfall contaminates water and pasture; livestock mortality widespread; road networks blocked.', damage_ro: 'Cenușa masivă contaminează apa și pășunile; mortalitate ridicată în rândul animalelor.' },
    { name: 'Keflavík', lat: 64.0046, lng: -22.5629, distKm: 130, angleRad: 4.50, pop: 17000, desc: 'International airport city', desc_ro: 'Orașul aeroportului internațional', damage: 'Keflavík International Airport closed indefinitely; north Atlantic aviation routes severely disrupted.', damage_ro: 'Aeroportul internațional Keflavík închis; rutele atlantice de aviație sever perturbate.' },
    { name: 'Reykjavík', lat: 64.1265, lng: -21.8174, distKm: 120, angleRad: 4.30, pop: 130000, desc: 'Icelandic capital', desc_ro: 'Capitala Islandei', damage: 'Persistent ash clouds cause respiratory health crisis; volcanic fluorine contaminates water supply; national emergency declared.', damage_ro: 'Nori de cenușă provoacă criză respiratorie; fluorul vulcanic contaminează apa; urgență națională declarată.' }
  ],
  katla: [
    { name: 'Vík í Mýrdal', lat: 63.4185, lng: -18.9975, distKm: 30, angleRad: -0.50, pop: 300, desc: 'Southernmost village in Iceland, directly in flood path', desc_ro: 'Cel mai sudic sat din Islanda, direct în calea inundației', damage: 'Erased within minutes by a jökulhlaup (glacial outburst flood) carrying ice blocks and volcanic debris at several million cubic meters per second.', damage_ro: 'Șters în câteva minute de un jökulhlaup cu blocuri de gheață la milioane de m³/s.' },
    { name: 'Kirkjubæjarklaustur', lat: 63.7868, lng: -18.0614, distKm: 55, angleRad: 0.80, pop: 200, desc: 'Historic village in the flood plain', desc_ro: 'Sat istoric în câmpia de inundații', damage: 'Submerged under glacial flood waters carrying volcanic debris; ash fall buries farmland for years.', damage_ro: 'Acoperit de ape glaciare cu detritus vulcanic; cenușa îngropă terenurile agricole.' },
    { name: 'Vík og Nes', lat: 63.4194, lng: -19.0050, distKm: 32, angleRad: -0.30, pop: 500, desc: 'Coastal community', desc_ro: 'Comunitate de coastă', damage: 'Coastal areas inundated by jökulhlaup and secondary tsunami; black sand beaches reshaped by mass deposition.', damage_ro: 'Zonele de coastă inundate de jökulhlaup și tsunami secundar.' },
    { name: 'Selfoss', lat: 63.9330, lng: -20.9986, distKm: 95, angleRad: 4.00, pop: 11000, desc: 'Southern Iceland hub', desc_ro: 'Centrul sudului Islandei', damage: 'Heavy ashfall disrupts agriculture and water supply; roads closed for weeks.', damage_ro: 'Cenușa masivă perturbă agricultura și alimentarea cu apă; drumuri închise săptămâni întregi.' },
    { name: 'Reykjavík', lat: 64.1265, lng: -21.8174, distKm: 145, angleRad: 4.20, pop: 130000, desc: 'Icelandic capital', desc_ro: 'Capitala Islandei', damage: 'Ash cloud causes respiratory emergency; fluorine contamination grounds livestock operations; international flights halted for days.', damage_ro: 'Norul de cenușă provoacă urgență respiratorie; contaminare cu fluor; zboruri internaționale oprite.' }
  ],
  cotopaxi: [
    { name: 'Latacunga', lat: -0.9335, lng: -78.6155, distKm: 29, angleRad: -1.80, pop: 80000, desc: 'City directly in lahar corridor, destroyed three times historically', desc_ro: 'Oraș direct în calea laharului, distrus de trei ori istoric', damage: 'Submerged under lahars channelled by the Río Cutuchi valley; the city is destroyed for the fourth time in recorded history.', damage_ro: 'Acoperit de laharuri canalizate prin valea Río Cutuchi; distrus pentru a patra oară în istorie.' },
    { name: 'Salcedo', lat: -1.0495, lng: -78.5928, distKm: 45, angleRad: -2.00, pop: 60000, desc: 'Agricultural town in lahar path', desc_ro: 'Oraș agricol în calea laharului', damage: 'Overwhelmed by lahar floods; crop lands buried; river crossings destroyed cutting the Pan-American highway.', damage_ro: 'Copleșit de laharuri; terenuri agricole îngropate; traversările rutiere distruse.' },
    { name: 'Ambato', lat: -1.2543, lng: -78.6269, distKm: 60, angleRad: -2.20, pop: 330000, desc: 'Major Andean market city', desc_ro: 'Oraș comercial major andin', damage: 'Ash and lahar debris disrupts the city; commercial and agricultural sectors severely damaged; river valley infrastructure lost.', damage_ro: 'Cenușa și detritus de lahar perturbă orașul; sectoarele comerciale sever afectate.' },
    { name: 'Quito', lat: -0.1807, lng: -78.4678, distKm: 70, angleRad: 0.30, pop: 1900000, desc: 'Ecuadorian capital', desc_ro: 'Capitala Ecuadorului', damage: 'Heavy ashfall disrupts aviation at Mariscal Sucre airport; respiratory health emergency; water supply contaminated by volcanic fluorine.', damage_ro: 'Cenușa masivă perturbă aviația; urgență respiratorie; apa contaminată cu fluor vulcanic.' },
    { name: 'Guayaquil', lat: -2.1710, lng: -79.9224, distKm: 335, angleRad: -2.80, pop: 2700000, desc: 'Largest Ecuadorian city and main port', desc_ro: 'Cel mai mare oraș ecuadorian și port principal', damage: 'Distal ashfall disrupts the port and airport; national agricultural exports collapse due to regional crop destruction.', damage_ro: 'Cenușa distală perturbă portul și aeroportul; exporturile agricole naționale se prăbușesc.' }
  ],
  paektu: [
    { name: 'Samjiyon', lat: 41.908, lng: 128.327, distKm: 28, angleRad: -1.30, pop: 40000, desc: 'Nearest North Korean city, sacred to the regime', desc_ro: 'Cel mai apropiat oraș nord-coreean, sacru pentru regim', damage: 'Obliterated by pyroclastic flows within minutes; the symbolic center of the regime erased.', damage_ro: 'Obliterat de curenți piroclastici în câteva minute; centrul simbolic al regimului șters.' },
    { name: 'Baihe', lat: 42.438, lng: 128.210, distKm: 50, angleRad: 1.50, pop: 25000, desc: 'Chinese border town on the Tumen River', desc_ro: 'Oraș de frontieră chinez pe râul Tumen', damage: 'Incinerated by pyroclastic surges; entire Yanbian border zone uninhabitable under metres of tephra.', damage_ro: 'Incendiat de valuri piroclastice; zona de frontieră îngropată sub metri de tefră.' },
    { name: 'Changbai County', lat: 41.419, lng: 128.193, distKm: 68, angleRad: -1.90, pop: 35000, desc: 'Chinese county town in the Changbai Mountain region', desc_ro: 'Oraș de județ chinez în regiunea Munților Changbai', damage: 'Within pyroclastic surge radius; complete destruction and thick ash burial halt all activity.', damage_ro: 'În raza valurilor piroclastice; distrugere completă sub cenușă masivă.' },
    { name: 'Musan', lat: 42.215, lng: 129.191, distKm: 80, angleRad: 0.50, pop: 130000, desc: 'North Korean iron-mining city', desc_ro: 'Oraș minier nord-coreean de fier', damage: 'Severe ashfall collapses industrial and residential structures; iron mining halted; mass casualties expected.', damage_ro: 'Cenușa masivă prăbușește structuri; mineritul oprit; victime masive.' },
    { name: 'Yanji', lat: 42.891, lng: 129.513, distKm: 155, angleRad: 0.90, pop: 550000, desc: 'Capital of Yanbian Korean Autonomous Prefecture', desc_ro: 'Capitala Prefecturii Autonome Coreene Yanbian', damage: 'Metres of ash paralyze the city; water and power infrastructure fails; mass evacuation across the Tumen River.', damage_ro: 'Metri de cenușă paralizează orașul; infrastructura apă-curent cedează; evacuare masivă.' }
  ],
  bardarbunga: [
    { name: 'Kirkjubæjarklaustur', lat: 63.787, lng: -18.062, distKm: 80, angleRad: 2.80, pop: 200, desc: 'Historic settlement in the SE lowlands, directly in jökulhlaup path', desc_ro: 'Așezare istorică în câmpia de SE, direct în calea jökulhlaup', damage: 'Swept away by catastrophic glacial outburst floods; farms and roads submerged under water and volcanic debris.', damage_ro: 'Măturat de inundații glaciare catastrofale; ferme și drumuri scufundate sub apă și detritus vulcanic.' },
    { name: 'Höfn', lat: 64.254, lng: -15.207, distKm: 130, angleRad: 1.10, pop: 2200, desc: 'Main town of southeastern Iceland, gateway to Vatnajökull', desc_ro: 'Principalul oraș din sud-estul Islandei, poartă spre Vatnajökull', damage: 'Jökulhlaup floods cut the Ring Road; ash accumulation and SO₂ contamination force full evacuation.', damage_ro: 'Inundațiile jökulhlaup taie Drumul Inelar; acumularea de cenușă forțează evacuarea totală.' },
    { name: 'Akureyri', lat: 65.683, lng: -18.091, distKm: 170, angleRad: 0.20, pop: 19000, desc: 'Second city of Iceland, northern hub', desc_ro: 'Al doilea oraș al Islandei, centru nordic', damage: 'Heavy ashfall from the eruption column; fluorine contamination threatens water supplies and livestock throughout the north.', damage_ro: 'Cenușă masivă din coloana erupției; contaminarea cu fluor amenință aprovizionarea cu apă și animalele.' },
    { name: 'Reykjavík', lat: 64.127, lng: -21.817, distKm: 250, angleRad: 4.30, pop: 130000, desc: 'Icelandic capital', desc_ro: 'Capitala Islandei', damage: 'Prolonged SO₂ emission causes national public health crisis; volcanic haze disrupts North Atlantic aviation for months.', damage_ro: 'Emisii prelungite de SO₂ provoacă criză de sănătate publică; ceața vulcanică perturbă aviația pentru luni.' },
    { name: 'Edinburgh', lat: 55.953, lng: -3.188, distKm: 1850, angleRad: 4.90, pop: 540000, desc: 'Scottish capital, within trans-oceanic ash trajectory', desc_ro: 'Capitala Scoției, în traiectoria cenușii trans-oceanice', damage: 'Ash cloud grounds all flights at Edinburgh Airport; sulphur dioxide levels briefly exceed health thresholds.', damage_ro: 'Norul de cenușă oprește toate zborurile; nivelurile de SO₂ depășesc pragurile de sănătate.' }
  ],
  oraefajokull: [
    { name: 'Hof', lat: 64.010, lng: -16.040, distKm: 22, angleRad: 0.80, pop: 100, desc: 'Remote farmstead in the direct path of jökulhlaup', desc_ro: 'Fermă izolată în calea directă a jökulhlaup', damage: 'Engulfed by glacial outburst floods within minutes of eruption onset; farmland buried under volcanic debris for decades.', damage_ro: 'Acoperit de inundații glaciare în câteva minute; terenuri îngropate sub detritus vulcanic pentru decenii.' },
    { name: 'Höfn', lat: 64.254, lng: -15.207, distKm: 85, angleRad: 0.50, pop: 2200, desc: 'Nearest town to the volcano along the Ring Road', desc_ro: 'Cel mai apropiat oraș la drum inelar', damage: 'Jökulhlaup floods and lahars cut the Ring Road; town isolated and threatened by advancing sediment plumes.', damage_ro: 'Inundații și laharuri taie Drumul Inelar; orașul izolat și amenințat de plume de sediment.' },
    { name: 'Kirkjubæjarklaustur', lat: 63.787, lng: -18.062, distKm: 100, angleRad: 3.50, pop: 200, desc: 'Historic village west of the volcano', desc_ro: 'Sat istoric la vest de vulcan', damage: 'Major ashfall buries farmland; fluorine contamination of water and grazing land forces total evacuation.', damage_ro: 'Cenușă masivă îngropă terenuri agricole; contaminare cu fluor forțează evacuarea totală.' },
    { name: 'Selfoss', lat: 63.933, lng: -20.999, distKm: 200, angleRad: 3.90, pop: 11000, desc: 'South Iceland main service centre', desc_ro: 'Principalul centru de servicii din sudul Islandei', damage: 'Prolonged ashfall disrupts agricultural supply chains; river crossings blocked; roads closed for weeks.', damage_ro: 'Cenușă prelungită perturbă lanțurile de aprovizionare; drumuri închise săptămâni.' },
    { name: 'Reykjavík', lat: 64.127, lng: -21.817, distKm: 250, angleRad: 4.20, pop: 130000, desc: 'Icelandic capital', desc_ro: 'Capitala Islandei', damage: 'Ash cloud causes flight cancellations across North Atlantic; volcanic fluorine threatens Reykjavík water supply; national emergency declared.', damage_ro: 'Norul de cenușă provoacă anularea zborurilor trans-atlantice; fluorul vulcanic amenință aprovizionarea cu apă.' }
  ],
  'long-valley': [
    { name: 'Mammoth Lakes', lat: 37.6485, lng: -118.9717, distKm: 11, angleRad: 3.84, pop: 8200, desc: 'Ski resort town built inside the caldera rim', desc_ro: 'Stațiune de schi construită în interiorul calderaului', damage: 'Obliterated by caldera collapse and pyroclastic flows within minutes of eruption onset.', damage_ro: 'Obliterată prin colapsul calderaului și curenți piroclastici în câteva minute.' },
    { name: 'Lee Vining', lat: 37.9588, lng: -119.1111, distKm: 36, angleRad: 5.50, pop: 450, desc: 'Gateway community at Mono Lake on US-395', desc_ro: 'Comunitate la Lacul Mono pe US-395', damage: 'Engulfed by pyroclastic surges; Mono Lake basin heavily buried.', damage_ro: 'Cuprins de valuri piroclastice; bazinul lacului Mono îngropat.' },
    { name: 'Bishop', lat: 37.3638, lng: -118.3951, distKm: 55, angleRad: 2.79, pop: 3900, desc: 'Largest town in Owens Valley', desc_ro: 'Cel mai mare oraș din valea Owens', damage: 'Within pyroclastic zone; complete destruction and thick ash burial.', damage_ro: 'În zona piroclastică; distrugere completă și îngropare sub cenușă.' },
    { name: 'Bridgeport', lat: 38.2566, lng: -119.2311, distKm: 70, angleRad: 5.76, pop: 600, desc: 'Mono County seat on US-395 north corridor', desc_ro: 'Reședința județului Mono pe coridorul nordic US-395', damage: 'Pyroclastic surges and metres of ash accumulation; uninhabitable.', damage_ro: 'Valuri piroclastice și metri de acumulare de cenușă; nelocuibil.' },
    { name: 'Fresno', lat: 36.7378, lng: -119.7871, distKm: 134, angleRad: 4.28, pop: 545000, desc: 'Agricultural hub of the San Joaquin Valley', desc_ro: 'Centru agricol al Văii San Joaquin', damage: 'Metres of ashfall collapse roofs; San Joaquin agriculture wiped out for years.', damage_ro: 'Metri de cenușă prăbușesc acoperișuri; agricultura distrusă pentru ani.' },
    { name: 'Reno', lat: 39.5296, lng: -119.8138, distKm: 220, angleRad: 0.26, pop: 265000, desc: 'Major Nevada city, regional transport hub', desc_ro: 'Oraș major din Nevada, nod de transport regional', damage: 'Heavy ashfall cripples power grid and transport; airport closed for months.', damage_ro: 'Căderi masive de cenușă distrug rețeaua electrică; aeroport închis luni.' },
    { name: 'Sacramento', lat: 38.5816, lng: -121.4944, distKm: 251, angleRad: 4.89, pop: 510000, desc: 'California state capital', desc_ro: 'Capitala statului California', damage: 'Significant ash accumulation; state government operations severely disrupted.', damage_ro: 'Acumulare semnificativă de cenușă; operațiunile guvernamentale grav perturbate.' },
    { name: 'Las Vegas', lat: 36.1716, lng: -115.1391, distKm: 368, angleRad: 2.18, pop: 650000, desc: 'Major desert metropolis and tourism centre', desc_ro: 'Metropolă majoră în deșert și centru turistic', damage: 'Ash contaminates water supply and solar farms; casinos and airport shut down.', damage_ro: 'Cenușa contaminează aprovizionarea cu apă; cazinouri și aeroport închise.' },
    { name: 'San Francisco', lat: 37.7749, lng: -122.4194, distKm: 312, angleRad: 4.71, pop: 870000, desc: 'Bay Area financial and tech centre', desc_ro: 'Centrul financiar și tech al Bay Area', damage: 'Ash clouds ground all flights at SFO; water treatment and agriculture disrupted.', damage_ro: 'Norii de cenușă opresc toate zborurile din SFO; tratarea apei perturbată.' },
    { name: 'Los Angeles', lat: 34.0522, lng: -118.2437, distKm: 409, angleRad: 3.23, pop: 3900000, desc: 'Largest city in the western United States', desc_ro: 'Cel mai mare oraș din vestul Statelor Unite', damage: 'Ash fall triggers mass evacuations; LAX closed, freeways blocked, water rationed.', damage_ro: 'Cenușa declanșează evacuări masive; LAX închis, autostrăzi blocate, apă raționalizată.' }
  ]
};

export const CURATED_VOLCANO_IDS = Object.keys(CURATED_CITIES);

export function createEruption(THREE, globe, volcano, profile) {
  const scene = globe.scene();
  const group = new THREE.Group();
  group.userData._isEruptionGroup = true;

  // Anchor + orient like the standard volcano marker.
  const surfaceCoords = globe.getCoords(volcano.lat, volcano.lng, 0.005);
  Object.assign(group.position, surfaceCoords);
  group.lookAt(0, 0, 0);
  group.rotateX(-Math.PI / 2);
  scene.add(group);

  // Create labels container
  const labelsContainer = document.createElement('div');
  labelsContainer.className = 'eruption-labels-container';
  labelsContainer.style.position = 'absolute';
  labelsContainer.style.top = '0';
  labelsContainer.style.left = '0';
  labelsContainer.style.width = '100%';
  labelsContainer.style.height = '100%';
  labelsContainer.style.pointerEvents = 'none';
  labelsContainer.style.zIndex = '10';
  labelsContainer.style.overflow = 'hidden';
  
  if (globe.renderer().domElement.parentNode) {
      globe.renderer().domElement.parentNode.appendChild(labelsContainer);
  } else {
      document.body.appendChild(labelsContainer);
  }

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.style.width = '100%';
  svg.style.height = '100%';
  svg.style.position = 'absolute';
  svg.style.overflow = 'visible';
  labelsContainer.appendChild(svg);
  
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  function createMarker(id, color) {
      const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
      marker.setAttribute('id', id);
      marker.setAttribute('markerWidth', '10');
      marker.setAttribute('markerHeight', '10');
      marker.setAttribute('refX', '10'); 
      marker.setAttribute('refY', '5');
      marker.setAttribute('orient', 'auto-start-reverse');
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
      path.setAttribute('fill', color);
      marker.appendChild(path);
      return marker;
  }
  defs.appendChild(createMarker('arrowhead-white', 'rgba(255, 255, 255, 0.6)'));
  defs.appendChild(createMarker('arrowhead-red', 'rgba(255, 51, 0, 0.6)'));
  svg.appendChild(defs);

  let mainCone = null;
  let originalImportance = null;

  scene.traverse((obj) => {
    if (obj.userData && obj.userData.id === volcano.id && obj.userData._importance !== undefined) {
      mainCone = obj;
      originalImportance = obj.userData._importance;
      obj.userData._importance = undefined;
      obj.scale.setScalar(0.15);
    }
  });

  const veiBoost = Math.pow((volcano.vei || 0) + 1, 1.4) * 0.18;
  const baseSize = volcano.notable ? 0.5 : 0.32;
  const importance = (baseSize + veiBoost) * 0.15;

  const plumeUnits = visualPlumeUnits(profile.vei) * 0.35;
  const lavaUnits = visualLavaUnits(profile.vei, volcano.type) * 0.15;
  const domeRadius = plumeUnits * 0.85;
  const ventRadius = 0.15 * importance; 
  const volcanoTipY = 1.1 * importance;

  // ── Vent glow: bright lava core at the crater
  const ventCoreMat = new THREE.MeshBasicMaterial({
    color: 0xfff176, transparent: true, opacity: 1.0,
  });
  const ventCore = new THREE.Mesh(new THREE.SphereGeometry(ventRadius, 16, 16), ventCoreMat);
  ventCore.position.y = volcanoTipY;
  ventCore.scale.setScalar(0.001);
  group.add(ventCore);

  const ventHaloMat = new THREE.MeshBasicMaterial({
    color: 0xff5722, transparent: true, opacity: 0.8, side: THREE.BackSide,
  });
  const ventHalo = new THREE.Mesh(new THREE.SphereGeometry(ventRadius * 1.9, 16, 16), ventHaloMat);
  ventHalo.position.y = volcanoTipY;
  ventHalo.scale.setScalar(0.001);
  group.add(ventHalo);

  // ── Plume column: tall narrow cylinder, dark at top, hot at base
  const plumeMat = new THREE.MeshBasicMaterial({
    color: 0x4a3528, transparent: true, opacity: 0.8, side: THREE.DoubleSide,
  });
  const plumeGeom = new THREE.CylinderGeometry(plumeUnits * 0.22, 0, plumeUnits, 16, 1, true);
  plumeGeom.translate(0, plumeUnits / 2, 0); // Origin at the bottom tip (inverted cone)
  const plume = new THREE.Mesh(plumeGeom, plumeMat);
  plume.position.y = volcanoTipY;
  plume.scale.set(0.001, 0.001, 0.001);
  group.add(plume);

  // Hot inner glow inside the lower plume — visible at the column base
  const plumeHotMat = new THREE.MeshBasicMaterial({
    color: 0xff7043, transparent: true, opacity: 0.9, side: THREE.DoubleSide,
  });
  const plumeHotGeom = new THREE.CylinderGeometry(plumeUnits * 0.14, 0, plumeUnits * 0.45, 12, 1, true);
  plumeHotGeom.translate(0, (plumeUnits * 0.45) / 2, 0); // Origin at the bottom tip
  const plumeHot = new THREE.Mesh(plumeHotGeom, plumeHotMat);
  plumeHot.position.y = volcanoTipY;
  plumeHot.scale.set(0.001, 0.001, 0.001);
  group.add(plumeHot);

  // ── Ash umbrella: hemispherical cloud spreading at the top
  const domeGeom = new THREE.SphereGeometry(domeRadius, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
  const domeMat = new THREE.MeshBasicMaterial({
    color: 0x595448, transparent: true, opacity: 0.8, side: THREE.DoubleSide,
  });
  const dome = new THREE.Mesh(domeGeom, domeMat);
  dome.position.y = plumeUnits;
  dome.scale.set(0.001, 0.4, 0.001);
  group.add(dome);

  // Inner brighter dome for depth — slightly smaller, lighter color
  const domeInnerMat = new THREE.MeshBasicMaterial({
    color: 0x7a7062, transparent: true, opacity: 0.6, side: THREE.DoubleSide,
  });
  const domeInner = new THREE.Mesh(
    new THREE.SphereGeometry(domeRadius * 0.7, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2),
    domeInnerMat
  );
  domeInner.position.y = plumeUnits * 1.02;
  domeInner.scale.set(0.001, 0.4, 0.001);
  group.add(domeInner);

  // ── Lava flow: glowing disk on the surface, expanding outward
  const lavaGeom = new THREE.RingGeometry(ventRadius * 0.4, lavaUnits, 64, 1);
  const lavaMat = new THREE.MeshBasicMaterial({
    color: 0xff5722, transparent: true, opacity: 0.9, side: THREE.DoubleSide,
  });
  const lava = new THREE.Mesh(lavaGeom, lavaMat);
  lava.rotation.x = -Math.PI / 2;
  lava.position.y = 0.015;
  lava.scale.set(0.001, 0.001, 1);
  group.add(lava);

  // Lava bright inner core — gives the surface flow a hot center
  const lavaCoreMat = new THREE.MeshBasicMaterial({
    color: 0xffb74d, transparent: true, opacity: 0.95, side: THREE.DoubleSide,
  });
  const lavaCore = new THREE.Mesh(
    new THREE.RingGeometry(ventRadius * 0.4, lavaUnits * 0.45, 48, 1),
    lavaCoreMat
  );
  lavaCore.rotation.x = -Math.PI / 2;
  lavaCore.position.y = 0.018;
  lavaCore.scale.set(0.001, 0.001, 1);
  group.add(lavaCore);
  
  // ── Lava Particles (leaking/shooting from vent)
  const particleCount = 400;
  const particleGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(particleCount * 3);
  const pCols = new Float32Array(particleCount * 3);
  const pVels = [];
  const pLives = new Float32Array(particleCount);

  const colorHot = new THREE.Color(0xff4400); // Bright orange-red
  const colorMid = new THREE.Color(0xcc1100); // Darker red
  const colorCool = new THREE.Color(0x550000); // Cooling rock

  for (let i = 0; i < particleCount; i++) {
    pVels.push(new THREE.Vector3(0, 0, 0));
    pLives[i] = Math.random() * 2;

    const r = Math.random();
    let c = r < 0.2 ? colorHot : (r < 0.6 ? colorMid : colorCool);
    
    pCols[i * 3] = c.r;
    pCols[i * 3 + 1] = c.g;
    pCols[i * 3 + 2] = c.b;
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  particleGeo.setAttribute('color', new THREE.BufferAttribute(pCols, 3));
  const particleMat = new THREE.PointsMaterial({ 
    size: Math.max(0.06, ventRadius * 2.0), transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, vertexColors: true
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  particles.position.y = volcanoTipY;
  group.add(particles);

  function createZoneMesh(mat) {
    const mesh = new THREE.Mesh(new THREE.BufferGeometry(), mat);
    mesh.position.set(0, -100.5, 0); // Center at earth's core relative to the group
    return mesh;
  }

  // ── Red Magma Zone (Inner)
  const magmaZoneMat = new THREE.MeshBasicMaterial({ 
    color: 0xd50000, transparent: true, opacity: 0.7, side: THREE.DoubleSide, depthWrite: false 
  });
  const magmaZone = createZoneMesh(magmaZoneMat);
  magmaZone.renderOrder = 3; // Draw on top
  group.add(magmaZone);

  // ── Yellow Danger Zone (Middle)
  const dangerZoneMat = new THREE.MeshBasicMaterial({ 
    color: 0xff6f00, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false 
  });
  const dangerZone = createZoneMesh(dangerZoneMat);
  dangerZone.renderOrder = 2;
  group.add(dangerZone);

  // ── Grey Lower Risk Zone (Outer)
  const riskZoneMat = new THREE.MeshBasicMaterial({ 
    color: 0xffd600, transparent: true, opacity: 0.3, side: THREE.DoubleSide, depthWrite: false 
  });
  const riskZone = createZoneMesh(riskZoneMat);
  riskZone.renderOrder = 1; // Draw first
  group.add(riskZone);

  // -- City Destruction tracking (UI only) --
  const cities = [];

  // Building texture (Healthy Apartment)
  const buildCanvas = document.createElement('canvas');
  buildCanvas.width = 64; buildCanvas.height = 128;
  const bCtx = buildCanvas.getContext('2d');
  bCtx.fillStyle = '#aaaaaa';
  bCtx.fillRect(0, 0, 64, 128); // Full coverage for 3D box
  bCtx.fillStyle = '#66ccff';
  for (let y = 12; y < 120; y += 20) {
    for (let x = 8; x < 56; x += 16) {
      bCtx.fillRect(x, y, 10, 12);
    }
  }
  const buildingTex = new THREE.CanvasTexture(buildCanvas);
  buildingTex.minFilter = THREE.LinearFilter;

  // Ruin texture (Collapsed Building)
  const ruinCanvas = document.createElement('canvas');
  ruinCanvas.width = 64; ruinCanvas.height = 128;
  const rCtx = ruinCanvas.getContext('2d');
  rCtx.fillStyle = '#444444'; // Darkened grey
  rCtx.fillRect(0, 0, 64, 128);
  
  // Jagged cracks and rubble lines
  rCtx.fillStyle = '#222222';
  rCtx.beginPath();
  rCtx.moveTo(0, 128);
  rCtx.lineTo(20, 80);
  rCtx.lineTo(40, 100);
  rCtx.lineTo(64, 60);
  rCtx.lineTo(64, 128);
  rCtx.closePath();
  rCtx.fill();
  
  // Broken / unlit windows
  rCtx.fillStyle = '#111122';
  for (let y = 12; y < 120; y += 20) {
    for (let x = 8; x < 56; x += 16) {
      if (Math.random() > 0.3) {
        rCtx.fillRect(x, y, 10, 12);
      }
    }
  }
  const ruinTex = new THREE.CanvasTexture(ruinCanvas);
  ruinTex.minFilter = THREE.LinearFilter;

  // Master 3D Building Geometry
  const cityGeo = new THREE.BoxGeometry(0.8, 1.6, 0.8);
  cityGeo.translate(0, 0.8, 0); // Anchor at the very bottom

  function addCityPing(cityData) {
    const sideMat = new THREE.MeshLambertMaterial({ map: buildingTex, transparent: true, opacity: 0.95 });
    const roofMat = new THREE.MeshLambertMaterial({ color: 0x888888, transparent: true, opacity: 0.95 });
    const markerMats = [sideMat, sideMat, roofMat, roofMat, sideMat, sideMat];
    const pingMesh = new THREE.Mesh(cityGeo, markerMats);

    const edges = new THREE.EdgesGeometry(cityGeo);
    const outline = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.8 }));
    pingMesh.add(outline);

    if (cityData.lat === undefined || cityData.lng === undefined) {
      const distRad = cityData.distKm / 6371;
      const latRad = volcano.lat * Math.PI / 180;
      const lngRad = volcano.lng * Math.PI / 180;
      
      const cityLatRad = Math.asin(Math.sin(latRad) * Math.cos(distRad) + Math.cos(latRad) * Math.sin(distRad) * Math.cos(cityData.angleRad));
      const cityLngRad = lngRad + Math.atan2(Math.sin(cityData.angleRad) * Math.sin(distRad) * Math.cos(latRad), Math.cos(distRad) - Math.sin(latRad) * Math.sin(cityLatRad));
      
      cityData.lat = cityLatRad * 180 / Math.PI;
      cityData.lng = cityLngRad * 180 / Math.PI;
    }

    const coords = globe.getCoords(cityData.lat, cityData.lng, 0.001);
    Object.assign(pingMesh.position, coords);
    
    const normal = new THREE.Vector3(coords.x, coords.y, coords.z).normalize();
    pingMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
    pingMesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), cityData.angleRad || Math.random() * Math.PI * 2);
    
    pingMesh.visible = true;
    globe.scene().add(pingMesh);

    // --- HTML Hovering Text Label ---
    const el = document.createElement('div');
    el.className = 'eruption-city-label';
    el.style.position = 'absolute';
    el.style.color = '#ffffff';
    el.style.textShadow = '0 1px 2px rgba(0,0,0,0.8)';
    el.style.fontFamily = 'var(--font-sans, sans-serif)';
    el.style.fontSize = '14px';
    el.style.fontWeight = 'bold';
    el.style.pointerEvents = 'none';
    el.style.whiteSpace = 'nowrap';
    el.style.transform = 'translate(-50%, -50%)';
    el.style.backgroundColor = 'rgba(10, 11, 16, 0.85)';
    el.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    el.style.borderRadius = '6px';
    el.style.padding = '4px 8px';
    el.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5)';
    el.innerText = cityData.name;
    labelsContainer.appendChild(el);

    const lineEl = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lineEl.setAttribute('stroke', 'rgba(255, 255, 255, 0.5)');
    lineEl.setAttribute('stroke-width', '1');
    lineEl.setAttribute('stroke-dasharray', '2,2');
    svg.appendChild(lineEl);

    cities.push({
      ...cityData,
      status: 'Safe',
      pinged: false,
      pingStartTime: 0,
      mesh: pingMesh,
      element: el,
      line: lineEl,
      width: cityData.name.length * 8 + 32,
      height: 30,
      labelX: 0,
      labelY: 0,
      prevOriginX: 0,
      prevOriginY: 0
    });
  }

  const curatedCityData = CURATED_CITIES[volcano.id];
  let cityDataList = curatedCityData;

  // Procedurally generate cities for active VEI 5+ volcanoes that don't have curated lists
  if (!cityDataList && (volcano.vei || 0) >= 5) {
    cityDataList = [];
    const numCities = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < numCities; i++) {
      const isInner = i === 0;
      const isMiddle = i === 1;
      
      let cityName;
      if (i === 0) cityName = 'Proximal Settlement';
      else if (i === 1) cityName = 'Regional Town';
      else if (i === 2) cityName = 'Distant City';
      else if (i === 3) cityName = 'Aviation Route';
      else cityName = 'Outer Province';

      cityDataList.push({
        name: cityName,
        distKm: isInner ? 10 + Math.random() * 5 : (isMiddle ? 30 + Math.random() * 20 : 80 + Math.random() * 50),
        angleRad: Math.random() * Math.PI * 2,
        pop: isInner ? 5000 : (isMiddle ? 50000 : 250000),
        desc: 'Populated region',
        desc_ro: 'Regiune populată',
        damage: isInner ? 'Total devastation.' : 'Heavy ashfall and disruption.',
        damage_ro: isInner ? 'Devastare totală.' : 'Căderi de cenușă și perturbări.'
      });
    }
  }

  if (cityDataList) {
    cityDataList.forEach(addCityPing);
  }

  // Smooth easing — keeps growth feeling organic instead of linear.
  const ease = (t) => 1 - Math.pow(1 - t, 3);

  let lastUpdate = 0;

  function updateZoneGeometry(mesh, innerRad, outerRad, epsilon) {
    const earthRadius = 100.5; // distance from group origin to earth center
    const r = earthRadius + epsilon;
    
    // Strictly protect against NaN parsing errors rendering Math.PI hemispheres
    const validInner = isNaN(innerRad) ? 0.000001 : innerRad;
    const validOuter = isNaN(outerRad) ? 0.000002 : outerRad;
    
    const safeInnerRad = Math.max(0.000001, Math.min(Math.PI - 0.000002, validInner));
    const safeOuterRad = Math.max(safeInnerRad + 0.000001, Math.min(Math.PI - 0.000001, validOuter));
    const thetaStart = safeInnerRad;
    const thetaLength = safeOuterRad - safeInnerRad;

    const newGeo = new THREE.SphereGeometry(r, 128, 64, 0, Math.PI * 2, thetaStart, thetaLength);
    if (mesh.geometry) mesh.geometry.dispose();
    mesh.geometry = newGeo;
  }

  // Parse KMS robustly to prevent NaN breaking the SphereGeometry
  const parseKm = (val, def) => {
    if (typeof val === 'number' && !isNaN(val)) return val;
    if (typeof val === 'string') {
      const parsed = parseFloat(val.replace(/,/g, ''));
      if (!isNaN(parsed)) return parsed;
    }
    return def;
  };

  const MAX_RADIUS_KM = 1500; // Hard boundary limit to prevent bad data from enveloping the Earth
  const safeLavaKm = Math.min(MAX_RADIUS_KM, parseKm(profile.lavaKm, 2.0));
  const safePyroKm = Math.min(MAX_RADIUS_KM, parseKm(profile.pyroKm, 10.0));
  const safeAshKm = Math.min(MAX_RADIUS_KM, parseKm(profile.ashRadiusKm, 30.0));

  // Realistic radii in pure radians based exactly on kilometer definitions
  const magmaRadiusRad = safeLavaKm / 6371;
  const dangerRadiusRad = Math.max(magmaRadiusRad + 0.0001, safePyroKm / 6371);
  const riskRadiusRad = Math.max(dangerRadiusRad + 0.0001, safeAshKm / 6371);

  function update(elapsedS) {
    lastUpdate = elapsedS;

    const dur = profile.durationS;
    const tNorm = Math.min(1, elapsedS / dur);
    const aftermath = elapsedS > dur;
    const aftermathT = aftermath ? Math.min(1, (elapsedS - dur) / 6) : 0;

    // Zone-specific timing (computed once, reused by both city engulfment and zone geometry).
    const pyroT = ease(clamp01((elapsedS - dur * 0.10) / (dur * 0.60)));
    const ashT  = ease(clamp01((elapsedS - dur * 0.05) / (dur * 0.45)));

    // Vent: spins up first, pulses gently during eruption, dims in aftermath.
    const ventGrowT = clamp01(elapsedS / (dur * 0.10));
    const pulse = 1 + Math.sin(elapsedS * 6) * 0.10 * (1 - aftermathT);
    const ventScale = ease(ventGrowT) * pulse * (1 - aftermathT * 0.7);
    ventCore.scale.setScalar(Math.max(0.001, ventScale));
    ventHalo.scale.setScalar(Math.max(0.001, ventScale * 1.05));
    ventCoreMat.opacity = 1.0 * (1 - aftermathT * 0.85);
    ventHaloMat.opacity = 0.5 * (1 - aftermathT * 0.85);

    // Plume: rises from 5% to 40% of duration, lingers, slowly fades.
    const plumeT = ease(clamp01((elapsedS - dur * 0.05) / (dur * 0.35)));
    const plumeWobble = 1 + Math.sin(elapsedS * 1.2) * 0.04;
    plume.scale.set(plumeT * plumeWobble, plumeT, plumeT * plumeWobble);
    plumeHot.scale.set(plumeT * 0.9, plumeT, plumeT * 0.9);
    plumeMat.opacity = 0.55 * (1 - aftermathT * 0.65);
    plumeHotMat.opacity = 0.8 * (1 - aftermathT * 0.92);

    const currentPlumeHeight = volcanoTipY + (plumeUnits * plumeT);

    // Umbrella dome: expands radially from 30% to 80% of duration,
    // then drifts in aftermath (slight further spread, increased transparency).
    const domeT = ease(clamp01((elapsedS - dur * 0.30) / (dur * 0.50)));
    const aftermathSpread = 1 + aftermathT * 0.25;
    const domeRadial = domeT * aftermathSpread;
    dome.scale.set(domeRadial, 0.4 + domeT * 0.15, domeRadial);
    domeInner.scale.set(domeRadial * 0.9, 0.4 + domeT * 0.15, domeRadial * 0.9);
    dome.position.y = currentPlumeHeight;
    domeInner.position.y = currentPlumeHeight - (plumeUnits * 0.02);
    domeMat.opacity = 0.55 * (1 - aftermathT * 0.55);
    domeInnerMat.opacity = 0.4 * (1 - aftermathT * 0.7);

    // Lava flow: starts at 20% of duration, expands through the rest,
    // cools (darker, less bright) in aftermath.
    const lavaT = ease(clamp01((elapsedS - dur * 0.20) / (dur * 0.80)));
    lava.scale.set(lavaT, lavaT, 1);
    lavaCore.scale.set(lavaT, lavaT, 1);
    if (aftermath) {
      // Cool transition: bright orange → dark crust red
      const cool = aftermathT;
      lavaMat.color.setHex(lerpHex(0xff5722, 0x6b1a08, cool));
      lavaCoreMat.color.setHex(lerpHex(0xffb74d, 0x8b3a14, cool));
      lavaMat.opacity = 0.75 - cool * 0.25;
      lavaCoreMat.opacity = 0.85 - cool * 0.45;
    }

    // Particles Animation
    if (tNorm > 0 && tNorm < 1) { 
      particles.visible = true;
      const posAtt = particleGeo.attributes.position;
      const intensity = ease(clamp01(elapsedS / (dur * 0.15))); 
      for(let i = 0; i < particleCount; i++) {
        pLives[i] -= 0.02;
        if (pLives[i] < 0) {
          pLives[i] = 1.0 + Math.random();
          posAtt.setXYZ(i, (Math.random()-0.5) * ventRadius, 0, (Math.random()-0.5) * ventRadius);
          pVels[i].set((Math.random()-0.5) * 1.5 * intensity, Math.random() * 3.0 * intensity + 1.0, (Math.random()-0.5) * 1.5 * intensity);
        }
        let px = posAtt.getX(i) + pVels[i].x * 0.05;
        let py = posAtt.getY(i) + pVels[i].y * 0.05;
        let pz = posAtt.getZ(i) + pVels[i].z * 0.05;
        pVels[i].y -= 0.1; // gravity
        posAtt.setXYZ(i, px, py, pz);
      }
      posAtt.needsUpdate = true;
    } else {
      particles.visible = false;
    }

    // Update city UI status and markers
    if (cities.length > 0) {
      const camLen = globe.camera().position.length();
      const altitude = Math.max(0.01, (camLen - 100) / 100);
      const scaleMult = Math.max(0.8, altitude * 2.5); // Higher minimum floor ensures text remains visible on deep zoom

      const currentRiskKm = riskRadiusRad * 6371 * ashT;
      
      const cam = globe.camera();
      const hw = window.innerWidth / 2;
      const hh = window.innerHeight / 2;
      const vec = new THREE.Vector3();
      const globeCenter = new THREE.Vector3(0, 0, 0);
      const camDist = cam.position.distanceTo(globeCenter);
      const horizonDist = Math.sqrt(Math.max(0, camDist * camDist - 100 * 100));

      const screenPositions = [];

      cities.forEach(city => {
        const baseDotScale = scaleMult * 1.5; // Controls the 3D building scale

        if (city.mesh) {
            city.mesh.getWorldPosition(vec);
            const distToCam = vec.distanceTo(cam.position);
            const isVisible = distToCam < horizonDist + 1; // +1 for slight tolerance

            if (isVisible) {
                vec.project(cam);
                const x = (vec.x * hw) + hw;
                const y = -(vec.y * hh) + hh;
                
                if (city.labelX === 0 && city.labelY === 0) {
                    city.labelX = x;
                    city.labelY = y;
                    city.prevOriginX = x;
                    city.prevOriginY = y;
                } else {
                    // Move exactly with the globe rotation
                    city.labelX += (x - city.prevOriginX);
                    city.labelY += (y - city.prevOriginY);
                }
                city.prevOriginX = x;
                city.prevOriginY = y;
                
                screenPositions.push({
                    city,
                    originX: x,
                    originY: y,
                    labelX: city.labelX,
                    labelY: city.labelY,
                    width: city.width,
                    height: city.height
                });
                
                if (city.element) city.element.style.display = 'block';
                if (city.line) city.line.style.display = 'block';
            } else {
                if (city.element) city.element.style.display = 'none';
                if (city.line) city.line.style.display = 'none';
                city.labelX = 0;
                city.labelY = 0;
            }
        }

        if (!city.pinged && currentRiskKm >= city.distKm) {
          city.pinged = true;
          city.pingStartTime = elapsedS;
          city.status = 'Engulfed';
        }

        if (city.pinged && city.mesh) {
          const PING_DURATION = 2.5; // seconds
          const pingElapsed = elapsedS - city.pingStartTime;
          if (pingElapsed < PING_DURATION && pingElapsed >= 0) {
            const pingProgress = pingElapsed / PING_DURATION;
            const pulse = 1 + Math.sin(pingProgress * Math.PI) * 0.3;
            const squashY = 1.0 - (pingProgress * 0.6); // Compress height structurally as it collapses
            
            city.mesh.scale.set(baseDotScale * pulse, baseDotScale * pulse * squashY, baseDotScale * pulse);
            city.mesh.material.forEach(m => m.color.setHex(lerpHex(0xffffff, 0xff4444, pingProgress)));
            if (city.element) {
               city.element.style.color = `rgb(255, ${Math.round(255 * (1 - pingProgress))}, ${Math.round(255 * (1 - pingProgress))})`;
            }
            if (city.line) {
               city.line.setAttribute('stroke', `rgba(255, ${Math.round(255 * (1 - pingProgress))}, ${Math.round(255 * (1 - pingProgress))}, 0.8)`);
               city.line.setAttribute('marker-end', 'url(#arrowhead-red)');
               city.line.setAttribute('stroke-width', '2');
               city.line.setAttribute('stroke-dasharray', '0');
            }
          } else {
            city.mesh.visible = true;
            
            // Switch sides to ruined texture
            city.mesh.material[0].map = ruinTex;
            city.mesh.material[1].map = ruinTex;
            city.mesh.material[4].map = ruinTex;
            city.mesh.material[5].map = ruinTex;
            // Darken roof
            city.mesh.material[2].color.setHex(0x555555);
            city.mesh.material[3].color.setHex(0x555555);
            
            city.mesh.material.forEach(m => {
              m.needsUpdate = true;
              m.color.setHex(0xff7777);
              m.opacity = 0.95;
            });
            city.mesh.scale.set(baseDotScale, baseDotScale * 0.4, baseDotScale); // Lock to squashed collapse size
            if (city.element) {
               city.element.style.color = '#ff3300';
               city.element.style.opacity = '0.7';
            }
            if (city.line) {
               city.line.setAttribute('stroke', 'rgba(255, 51, 0, 0.8)');
               city.line.setAttribute('marker-end', 'url(#arrowhead-red)');
               city.line.setAttribute('stroke-width', '2');
               city.line.setAttribute('stroke-dasharray', '0');
               city.line.style.opacity = '0.7';
            }
          }
        } else if (city.mesh) {
          city.mesh.visible = true;
          
          city.mesh.material[0].map = buildingTex;
          city.mesh.material[1].map = buildingTex;
          city.mesh.material[4].map = buildingTex;
          city.mesh.material[5].map = buildingTex;
          city.mesh.material.forEach(m => {
            m.needsUpdate = true;
            m.color.setHex(0xffffff);
            m.opacity = 0.95;
          });
          city.mesh.scale.setScalar(baseDotScale);
          if (city.element) {
             city.element.style.color = '#ffffff';
             city.element.style.opacity = '1.0';
          }
          if (city.line) {
             city.line.setAttribute('stroke', 'rgba(255, 255, 255, 0.6)');
             city.line.setAttribute('marker-end', 'url(#arrowhead-white)');
             city.line.setAttribute('stroke-width', '1.5');
             city.line.setAttribute('stroke-dasharray', '4,4');
             city.line.style.opacity = '1.0';
          }
        }
      });

      // Relax positions to avoid overlaps
      for (let iter = 0; iter < 10; iter++) {
         for (let i = 0; i < screenPositions.length; i++) {
             for (let j = i + 1; j < screenPositions.length; j++) {
                 const a = screenPositions[i];
                 const b = screenPositions[j];
                 
                 const dx = a.labelX - b.labelX;
                 const dy = a.labelY - b.labelY;
                 
                 const minDistX = (a.width + b.width) / 2 + 10;
                 const minDistY = (a.height + b.height) / 2 + 10;
                 
                 if (Math.abs(dx) < minDistX && Math.abs(dy) < minDistY) {
                     const overlapX = minDistX - Math.abs(dx);
                     const overlapY = minDistY - Math.abs(dy);
                     
                     if (overlapX < overlapY) {
                         const push = (overlapX / 2) + 0.5;
                         const sign = dx > 0 ? 1 : -1;
                         a.labelX += push * sign;
                         b.labelX -= push * sign;
                     } else {
                         const push = (overlapY / 2) + 0.5;
                         const sign = dy > 0 ? 1 : -1;
                         a.labelY += push * sign;
                         b.labelY -= push * sign;
                     }
                 }
             }
         }
      }
      
      // Apply relaxed positions and pull-back
      screenPositions.forEach(p => {
          // Pull back towards origin gently
          p.labelX += (p.originX - p.labelX) * 0.1;
          p.labelY += (p.originY - p.labelY) * 0.1;
          
          p.city.labelX = p.labelX;
          p.city.labelY = p.labelY;
          
          if (p.city.element) {
              p.city.element.style.left = p.labelX + 'px';
              p.city.element.style.top = p.labelY + 'px';
          }
          
          if (p.city.line) {
              const labelLeft = p.labelX - p.width / 2;
              const labelRight = p.labelX + p.width / 2;
              const labelTop = p.labelY - p.height / 2;
              const labelBottom = p.labelY + p.height / 2;
              
              let startX = p.labelX;
              let startY = p.labelY;
              
              if (p.originX < labelLeft) startX = labelLeft;
              else if (p.originX > labelRight) startX = labelRight;
              
              if (p.originY < labelTop) startY = labelTop;
              else if (p.originY > labelBottom) startY = labelBottom;

              p.city.line.setAttribute('x1', startX);
              p.city.line.setAttribute('y1', startY);
              
              const dx = p.originX - startX;
              const dy = p.originY - startY;
              const lineLenSq = dx*dx + dy*dy;
              
              if (lineLenSq > 225) {
                  const angle = Math.atan2(dy, dx);
                  const radius = 10; // offset from center of 3d marker
                  p.city.line.setAttribute('x2', p.originX - Math.cos(angle) * radius);
                  p.city.line.setAttribute('y2', p.originY - Math.sin(angle) * radius);
                  p.city.line.style.opacity = p.city.element.style.opacity || '1';
              } else {
                  p.city.line.style.opacity = '0';
              }
          }
      });
    }

    // Expanding zones — ash spreads fastest, pyroclastic at medium speed, lava slowest.
    // Lava and pyroclastic zones are geographically tiny (12–80 km) compared to the globe,
    // so a visual boost is applied to make them readable; the km values shown in the panel
    // and the city engulfment radii are unaffected.
    const LAVA_PYRO_VISUAL_BOOST = 8;
    const baseOffset = 0.0001;
    updateZoneGeometry(magmaZone,  baseOffset, magmaRadiusRad  * Math.max(0.001, lavaT) * LAVA_PYRO_VISUAL_BOOST, 0.022);
    updateZoneGeometry(dangerZone, baseOffset, dangerRadiusRad * Math.max(0.001, pyroT) * LAVA_PYRO_VISUAL_BOOST, 0.021);
    updateZoneGeometry(riskZone,   baseOffset, riskRadiusRad   * Math.max(0.001, ashT),                           0.020);
    
    if (aftermath) {
      magmaZoneMat.opacity = Math.max(0, 0.7 - aftermathT * 0.7);
      dangerZoneMat.opacity = Math.max(0, 0.5 - aftermathT * 0.5);
      riskZoneMat.opacity = Math.max(0, 0.3 - aftermathT * 0.3);
    } else {
      magmaZoneMat.opacity = 0.7;
      dangerZoneMat.opacity = 0.5;
      riskZoneMat.opacity = 0.3;
    }
  }

  function getCurrentPlumeKm() {
    const dur = profile.durationS;
    const plumeT = ease(clamp01((lastUpdate - dur * 0.05) / (dur * 0.35)));
    return profile.plumeKm * plumeT;
  }
  function getCurrentLavaKm() {
    const dur = profile.durationS;
    const lavaT = ease(clamp01((lastUpdate - dur * 0.20) / (dur * 0.80)));
    return profile.lavaKm * lavaT;
  }

  function dispose() {
    if (mainCone) {
      mainCone.userData._importance = originalImportance;
      mainCone.scale.setScalar(1);
    }
    
    if (labelsContainer && labelsContainer.parentNode) {
        labelsContainer.parentNode.removeChild(labelsContainer);
    }

    buildingTex.dispose();
    ruinTex.dispose();

    cities.forEach(city => {
      if (city.mesh) {
        if (city.mesh.parent) city.mesh.parent.remove(city.mesh);
        if (city.mesh.geometry) city.mesh.geometry.dispose();
      }
    });

    scene.remove(group);
    group.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach(m => {
            if (m.map) m.map.dispose();
            m.dispose();
          });
        } else {
          if (obj.material.map) obj.material.map.dispose();
          obj.material.dispose();
        }
      }
    });
  }

  return { group, update, dispose, getCurrentPlumeKm, getCurrentLavaKm, cities };
}

function clamp01(x) {
  return x < 0 ? 0 : x > 1 ? 1 : x;
}

function lerpHex(a, b, t) {
  const ar = (a >> 16) & 0xff, ag = (a >> 8) & 0xff, ab = a & 0xff;
  const br = (b >> 16) & 0xff, bg = (b >> 8) & 0xff, bb = b & 0xff;
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return (r << 16) | (g << 8) | bl;
}