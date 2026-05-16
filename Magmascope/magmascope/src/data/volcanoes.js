export const VOLCANO_DATA = [
  {
    id: 'vesuvius',
    name: 'Mount Vesuvius',
    country: 'Italy',
    region: 'Campania',
    lat: 40.821,
    lng: 14.426,
    elevation: 1281,
    type: 'Stratovolcano',
    lastEruption: 'March 1944',
    vei: 5,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Vesuvius',
    description: [
      "Vesuvius is among the most studied and dangerous volcanoes on Earth, infamous for its catastrophic AD 79 eruption that buried the Roman cities of Pompeii and Herculaneum under meters of pyroclastic material. The blast sent a column of ash and pumice over 30 kilometers into the stratosphere, killing thousands within hours and freezing daily life in mid-gesture beneath the ash.",
      "Today, more than three million people live within Vesuvius's potential blast radius, making it the most densely populated volcanic region in the world. Its last major eruption in March 1944 destroyed several villages and a squadron of American B-25 bombers stationed nearby during the Allied campaign in Italy.",
      "Volcanologists consider its current quiet phase a temporary lull rather than a stable state."
    ]
  },
  {
    id: 'krakatoa',
    name: 'Krakatoa',
    country: 'Indonesia',
    region: 'Sunda Strait',
    lat: -6.102,
    lng: 105.423,
    elevation: 813,
    type: 'Caldera',
    lastEruption: 'April 2022',
    vei: 6,
    status: 'Active',
    notable: true,
    wikiTitle: 'Anak_Krakatoa',
    description: [
      "Krakatoa's 1883 eruption was one of the deadliest and most destructive volcanic events in recorded history. The cataclysmic explosion was heard nearly 5,000 kilometers away in Mauritius — likely the loudest sound ever recorded — and triggered tsunamis up to 40 meters high that killed over 36,000 people across the Indian Ocean.",
      "Atmospheric ash dimmed sunlight globally for years afterward, lowering average temperatures and producing vivid red sunsets that are widely believed to have inspired the sky in Edvard Munch's painting 'The Scream.'",
      "Anak Krakatau — 'Child of Krakatoa' — emerged from the submerged caldera in 1927 and remains highly active. A flank collapse in 2018 generated another deadly tsunami, a stark reminder that the island is still rebuilding itself."
    ]
  },
  {
    id: 'st-helens',
    name: 'Mount St. Helens',
    country: 'United States',
    region: 'Washington State',
    lat: 46.200,
    lng: -122.188,
    elevation: 2549,
    type: 'Stratovolcano',
    lastEruption: 'July 2008',
    vei: 5,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_St._Helens',
    description: [
      "On May 18, 1980, Mount St. Helens produced the most economically destructive volcanic eruption in U.S. history. A massive lateral blast — triggered by the largest landslide in recorded history — flattened roughly 600 square kilometers of forest, killed 57 people, and removed nearly 400 meters from the mountain's summit in a matter of minutes.",
      "The eruption fundamentally changed how scientists understand stratovolcano behavior, particularly the role of cryptodome bulging and lateral collapse events. Until that day, no living volcanologist had directly observed a sector collapse of this magnitude.",
      "The blast zone has since become one of the most extensively studied natural ecosystem-recovery laboratories on Earth, offering rare insight into how life reclaims a sterilized landscape."
    ]
  },
  {
    id: 'eyjafjallajokull',
    name: 'Eyjafjallajökull',
    country: 'Iceland',
    region: 'Southern Region',
    lat: 63.633,
    lng: -19.633,
    elevation: 1651,
    type: 'Stratovolcano',
    lastEruption: 'June 2010',
    vei: 4,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Eyjafjallajökull',
    description: [
      "Though small by historical standards, the 2010 eruption of Eyjafjallajökull caused unprecedented disruption to global aviation. Fine glass-rich ash injected into the jet stream forced the closure of European airspace for six days — the largest air-travel shutdown since World War II — stranding roughly ten million passengers and costing airlines an estimated $1.7 billion.",
      "The event highlighted modern civilization's quiet vulnerability to even modest volcanic activity, and accelerated international cooperation on volcanic ash forecasting, satellite monitoring, and aircraft-engine tolerance research."
    ]
  },
  {
    id: 'fuji',
    name: 'Mount Fuji',
    country: 'Japan',
    region: 'Honshū',
    lat: 35.361,
    lng: 138.728,
    elevation: 3776,
    type: 'Stratovolcano',
    lastEruption: 'December 1707',
    vei: 5,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Fuji',
    description: [
      "An iconic symbol of Japan and a UNESCO World Heritage site, sacred in both Shinto and Buddhist traditions. Despite being quiet since 1707, it is still classified as active — the next eruption could threaten Tokyo's metropolitan area, only 100 kilometers away."
    ]
  },
  {
    id: 'etna',
    name: 'Mount Etna',
    country: 'Italy',
    region: 'Sicily',
    lat: 37.751,
    lng: 14.994,
    elevation: 3357,
    type: 'Stratovolcano',
    lastEruption: 'February 2025',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Etna',
    description: [
      "Europe's tallest and most active volcano, in near-constant activity for over 3,500 years of recorded history. Etna's frequent flank eruptions and lava flows continually reshape eastern Sicily, and it is one of only a handful of volcanoes whose activity has been documented since classical antiquity."
    ]
  },
  {
    id: 'erebus',
    name: 'Mount Erebus',
    country: 'Antarctica',
    region: 'Ross Island',
    lat: -77.529,
    lng: 167.153,
    elevation: 3794,
    type: 'Stratovolcano',
    lastEruption: 'Continuous',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Erebus',
    description: [
      "The southernmost active volcano on Earth, hosting one of only a few persistent lava lakes in the world — a pool of molten phonolite that has been bubbling continuously since at least 1972. Its remote position on Antarctica's Ross Island makes it one of the most-studied yet least-accessible volcanoes in the world."
    ]
  },

  /* ============================================================
     ROMANIAN MUD VOLCANOES — Buzău County
     Cold-mud volcanoes driven by deep natural-gas seepage rather
     than magma. One of only a handful of large mud-volcano fields
     in Europe.
     ============================================================ */
  {
    id: 'paclele-mici',
    name: 'Pâclele Mici',
    country: 'Romania',
    region: 'Buzău County',
    lat: 45.340,
    lng: 26.711,
    elevation: 341,
    type: 'Mud Volcano',
    lastEruption: 'Continuous (Seepage)',
    vei: 0,
    status: 'Active',
    notable: true,
    wikiTitle: 'Berca_Mud_Volcanoes',
    description: [
      "The Berca Mud Volcanoes are a unique geological and botanical reservation in Buzău County. Unlike magmatic volcanoes, these cones are formed by natural gases rising from roughly 3,000 meters deep, pushing up salty water and grey clay that builds small cones and crater pools across the landscape.",
      "The mud emerges cold — sourced from the Earth's crust rather than the mantle — creating a striking 'lunar landscape' where high salinity prevents most vegetation from growing. The site is one of only a handful of large mud-volcano fields in Europe."
    ]
  },
  {
    id: 'paclele-mari',
    name: 'Pâclele Mari',
    country: 'Romania',
    region: 'Buzău County',
    lat: 45.352,
    lng: 26.708,
    elevation: 322,
    type: 'Mud Volcano',
    lastEruption: 'Continuous (Seepage)',
    vei: 0,
    status: 'Active',
    notable: true,
    wikiTitle: 'Berca_Mud_Volcanoes',
    description: [
      "The larger companion field to Pâclele Mici, with broader plateaus of grey drying mud and dozens of small bubbling craters scattered across the landscape. Together the two sites form Romania's most dramatic mud-volcano terrain and a protected geological reserve."
    ]
  },

  /* ============================================================
     PACIFIC RING OF FIRE — most of the world's active volcanism
     ============================================================ */
  {
    id: 'mauna-loa',
    name: 'Mauna Loa',
    country: 'United States',
    region: 'Hawaii',
    lat: 19.472,
    lng: -155.592,
    elevation: 4169,
    type: 'Shield Volcano',
    lastEruption: 'November 2022',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mauna_Loa',
    description: [
      "Mauna Loa is the largest subaerial volcano on Earth in terms of mass and volume. It has been erupting for at least 700,000 years and is one of the five volcanoes that together form the Island of Hawaii.",
      "Its 2022 eruption ended a 38-year period of quiet — the volcano's longest known dormancy — and was a reminder of its capacity for massive lava flows that can reach the ocean within hours."
    ]
  },
  {
    id: 'kilauea',
    name: 'Kīlauea',
    country: 'United States',
    region: 'Hawaii',
    lat: 19.421,
    lng: -155.287,
    elevation: 1247,
    type: 'Shield Volcano',
    lastEruption: '2024',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'Kīlauea',
    description: [
      "Kīlauea is one of the most active volcanoes on Earth, in near-continuous eruption from 1983 to 2018 and active again multiple times since. Its effusive lava flows have built and reshaped the southeastern coast of the Big Island throughout human memory."
    ]
  },
  {
    id: 'pinatubo',
    name: 'Mount Pinatubo',
    country: 'Philippines',
    region: 'Luzon',
    lat: 15.130,
    lng: 120.350,
    elevation: 1486,
    type: 'Stratovolcano',
    lastEruption: '1991',
    vei: 6,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Pinatubo',
    description: [
      "Pinatubo's June 1991 eruption was the second-largest terrestrial eruption of the 20th century, ejecting roughly 10 cubic kilometers of material and injecting 20 million tons of sulfur dioxide into the stratosphere.",
      "The aerosol veil cooled global average temperatures by about 0.5°C for the next two years — a real-world demonstration of how a single volcano can briefly reverse decades of warming."
    ]
  },
  {
    id: 'tambora',
    name: 'Mount Tambora',
    country: 'Indonesia',
    region: 'Sumbawa',
    lat: -8.250,
    lng: 118.000,
    elevation: 2850,
    type: 'Stratovolcano',
    lastEruption: '1967',
    vei: 7,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Tambora',
    description: [
      "Tambora's April 1815 eruption was the most powerful in recorded human history, a VEI-7 event that ejected roughly 160 cubic kilometers of material and removed 1,500 meters from the volcano's summit.",
      "The atmospheric aerosols caused 1816 to be remembered globally as the 'Year Without a Summer' — crops failed across Europe and North America, snow fell in June, and the resulting gloom inspired Mary Shelley to begin writing 'Frankenstein.'"
    ]
  },
  {
    id: 'merapi',
    name: 'Mount Merapi',
    country: 'Indonesia',
    region: 'Central Java',
    lat: -7.540,
    lng: 110.446,
    elevation: 2910,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Merapi',
    description: [
      "Merapi (\"Mountain of Fire\") is the most active volcano in Indonesia and erupts frequently — major events have been documented since 1548. Its frequent pyroclastic flows pose a constant threat to the densely populated villages on its flanks."
    ]
  },
  {
    id: 'popocatepetl',
    name: 'Popocatépetl',
    country: 'Mexico',
    region: 'Puebla',
    lat: 19.023,
    lng: -98.622,
    elevation: 5426,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 5,
    status: 'Active',
    notable: true,
    wikiTitle: 'Popocatépetl',
    description: [
      "Popocatépetl looms only 70 kilometers from Mexico City. Its frequent ash plumes and lahars pose a significant risk to the roughly 25 million people living within its potential disruption zone — one of the largest at-risk populations of any active volcano on Earth."
    ]
  },
  {
    id: 'sakurajima',
    name: 'Sakurajima',
    country: 'Japan',
    region: 'Kyushu',
    lat: 31.593,
    lng: 130.657,
    elevation: 1117,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Sakurajima',
    description: [
      "Once an island in Kagoshima Bay, Sakurajima was permanently joined to the mainland during its 1914 eruption when massive lava flows filled the strait. It is now one of the most active volcanoes in Japan, dusting the city of Kagoshima with ash on a near-daily basis."
    ]
  },
  {
    id: 'unzen',
    name: 'Mount Unzen',
    country: 'Japan',
    region: 'Kyushu',
    lat: 32.757,
    lng: 130.297,
    elevation: 1500,
    type: 'Stratovolcano',
    lastEruption: '1996',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Unzen',
    description: [
      "Unzen's 1792 eruption triggered the deadliest volcanic disaster in Japanese history. A flank collapse generated a megatsunami that swept across the Ariake Sea and killed about 15,000 people — still the country's worst recorded volcanic toll."
    ]
  },
  {
    id: 'mayon',
    name: 'Mayon',
    country: 'Philippines',
    region: 'Albay',
    lat: 13.254,
    lng: 123.685,
    elevation: 2463,
    type: 'Stratovolcano',
    lastEruption: '2023',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mayon_Volcano',
    description: [
      "Mayon is renowned for having the most symmetrical 'perfect cone' profile of any active stratovolcano in the world — a shape produced by its remarkably uniform eruption history. It has erupted more than 50 times in the last 500 years."
    ]
  },
  {
    id: 'taal',
    name: 'Taal',
    country: 'Philippines',
    region: 'Batangas',
    lat: 14.002,
    lng: 120.993,
    elevation: 311,
    type: 'Caldera',
    lastEruption: '2024',
    vei: 5,
    status: 'Active',
    notable: true,
    wikiTitle: 'Taal_Volcano',
    description: [
      "Often described as 'a volcano within a lake within a volcano' — its broad caldera holds a lake, in which sits Volcano Island, which in turn contains its own crater lake. Despite its modest height, Taal has produced more than 30 historical eruptions, several of them deadly."
    ]
  },
  {
    id: 'ulawun',
    name: 'Ulawun',
    country: 'Papua New Guinea',
    region: 'New Britain',
    lat: -5.050,
    lng: 151.330,
    elevation: 2334,
    type: 'Stratovolcano',
    lastEruption: '2023',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Ulawun',
    description: [
      "The highest peak in the Bismarck Archipelago and one of Papua New Guinea's most active volcanoes. It is one of the United Nations' designated Decade Volcanoes, identified for special study because of its potential for catastrophic flank collapse."
    ]
  },
  {
    id: 'bromo',
    name: 'Mount Bromo',
    country: 'Indonesia',
    region: 'East Java',
    lat: -7.942,
    lng: 112.953,
    elevation: 2329,
    type: 'Cinder Cone',
    lastEruption: '2019',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Bromo',
    description: [
      "Set in the middle of a vast volcanic plain known as the 'Sea of Sand,' Bromo is the spiritual center of the Tenggerese people. Each year during the Yadnya Kasada festival, offerings of livestock, vegetables, and money are thrown into its smoking crater."
    ]
  },

  /* ============================================================
     CASCADE RANGE — North American Pacific Northwest
     ============================================================ */
  {
    id: 'rainier',
    name: 'Mount Rainier',
    country: 'United States',
    region: 'Washington',
    lat: 46.852,
    lng: -121.760,
    elevation: 4392,
    type: 'Stratovolcano',
    lastEruption: '1894',
    vei: 5,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Rainier',
    description: [
      "Rainier is widely considered one of the most dangerous volcanoes in the world — not for its eruptive power, but for its massive glacial ice cover. A future eruption could rapidly melt billions of tons of ice, generating lahars (volcanic mudflows) that would race down populated valleys toward the Seattle-Tacoma metro area within an hour."
    ]
  },
  {
    id: 'hood',
    name: 'Mount Hood',
    country: 'United States',
    region: 'Oregon',
    lat: 45.373,
    lng: -121.697,
    elevation: 3429,
    type: 'Stratovolcano',
    lastEruption: '1866',
    vei: 1,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Hood',
    description: [
      "Oregon's tallest peak and one of the most-climbed glaciated mountains in North America. The USGS classifies its eruption probability over the next 30 years as moderate, and it is monitored closely as part of the Cascades Volcano Observatory network."
    ]
  },
  {
    id: 'shasta',
    name: 'Mount Shasta',
    country: 'United States',
    region: 'California',
    lat: 41.409,
    lng: -122.195,
    elevation: 4321,
    type: 'Stratovolcano',
    lastEruption: '1786',
    vei: 1,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Shasta',
    description: [
      "A massive double-summit stratovolcano dominating the landscape of far northern California. Shasta carries deep cultural significance for several indigenous peoples and a long history of spiritual associations — and remains classified as active despite its long quiet period."
    ]
  },
  {
    id: 'baker',
    name: 'Mount Baker',
    country: 'United States',
    region: 'Washington',
    lat: 48.777,
    lng: -121.813,
    elevation: 3286,
    type: 'Stratovolcano',
    lastEruption: '1880',
    vei: 2,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Baker',
    description: [
      "After Rainier, the most heavily glaciated of the Cascade volcanoes. A noticeable surge in fumarolic activity in 1975 — including a tenfold increase in heat output at Sherman Crater — prompted decades of close monitoring that continues today."
    ]
  },
  {
    id: 'lassen',
    name: 'Lassen Peak',
    country: 'United States',
    region: 'California',
    lat: 40.488,
    lng: -121.505,
    elevation: 3187,
    type: 'Lava Dome',
    lastEruption: '1917',
    vei: 3,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Lassen_Peak',
    description: [
      "The southernmost active volcano in the Cascade Range and one of the largest plug-dome volcanoes on Earth. Its 1914-1917 eruption sequence was the only Cascade eruption between 1857 and the dramatic 1980 awakening of Mount St. Helens."
    ]
  },

  /* ============================================================
     LATIN AMERICA & CARIBBEAN
     ============================================================ */
  {
    id: 'ojos-del-salado',
    name: 'Ojos del Salado',
    country: 'Argentina / Chile',
    region: 'Andes',
    lat: -27.109,
    lng: -68.541,
    elevation: 6893,
    type: 'Stratovolcano',
    lastEruption: '~750 AD',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Ojos_del_Salado',
    description: [
      "Ojos del Salado is the highest active volcano on Earth, straddling the Argentina-Chile border deep in the Andes. One of its craters holds the highest permanent body of water on the planet — a small year-round lake near 6,400 meters elevation.",
      "Despite its altitude, the mountain is extraordinarily dry due to its proximity to the Atacama Desert. Snow only persists on the peak through winter, and the surface is covered in volcanic ash and scoria rather than ice."
    ]
  },
  {
    id: 'chimborazo',
    name: 'Mount Chimborazo',
    country: 'Ecuador',
    region: 'Andes',
    lat: -1.469,
    lng: -78.817,
    elevation: 6263,
    type: 'Stratovolcano',
    lastEruption: '~550 AD',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Chimborazo',
    description: [
      "Because of the Earth's equatorial bulge, the summit of Chimborazo is the point on the planet's solid surface farthest from Earth's center — and therefore the closest point to the Sun, beating Everest by more than two kilometers despite being substantially shorter in elevation above sea level."
    ]
  },
  {
    id: 'cotopaxi',
    name: 'Cotopaxi',
    country: 'Ecuador',
    region: 'Andes',
    lat: -0.684,
    lng: -78.436,
    elevation: 5897,
    type: 'Stratovolcano',
    lastEruption: '2023',
    vei: 5,
    status: 'Active',
    notable: true,
    wikiTitle: 'Cotopaxi',
    description: [
      "One of the highest active volcanoes in the world, with a near-perfect conical profile and a glaciated summit. Eruptions melt the ice cap rapidly, generating lahars that have repeatedly devastated towns in the surrounding river valleys — most catastrophically in 1877."
    ]
  },
  {
    id: 'nevado-del-ruiz',
    name: 'Nevado del Ruiz',
    country: 'Colombia',
    region: 'Tolima',
    lat: 4.895,
    lng: -75.322,
    elevation: 5321,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Nevado_del_Ruiz',
    description: [
      "The 1985 eruption of Nevado del Ruiz triggered the Armero tragedy — a relatively small eruption (VEI 3) that nonetheless killed more than 23,000 people when its hot pyroclastic surges melted the summit ice cap and sent lahars rushing down the Lagunilla River.",
      "The town of Armero, 50 kilometers from the volcano, was buried within two hours. The disaster remains the second-deadliest volcanic event of the 20th century and a defining case study in how unprepared communities — not eruption size — drive volcanic death tolls."
    ]
  },
  {
    id: 'galeras',
    name: 'Galeras',
    country: 'Colombia',
    region: 'Nariño',
    lat: 1.221,
    lng: -77.359,
    elevation: 4276,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Galeras',
    description: [
      "Colombia's most active volcano. A 1993 eruption killed nine people, including six volcanologists who had descended into the crater to collect gas samples — a defining tragedy that reshaped how field volcanology is conducted worldwide."
    ]
  },
  {
    id: 'huila',
    name: 'Nevado del Huila',
    country: 'Colombia',
    region: 'Huila',
    lat: 2.924,
    lng: -76.031,
    elevation: 5364,
    type: 'Stratovolcano',
    lastEruption: '2012',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Nevado_del_Huila',
    description: [
      "Colombia's highest volcano, capped by extensive glaciers. After more than 500 years of dormancy it returned to life in 2007, and a 2008 eruption produced lahars that displaced thousands of people from communities along the Páez River."
    ]
  },
  {
    id: 'villarrica',
    name: 'Villarrica',
    country: 'Chile',
    region: 'Araucanía',
    lat: -39.420,
    lng: -71.930,
    elevation: 2847,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'Villarrica_(volcano)',
    description: [
      "One of South America's most active volcanoes and home to one of the world's few persistent lava lakes. Despite this activity, its symmetrical snow-capped cone remains a popular destination for guided summit treks in southern Chile's Lake District."
    ]
  },
  {
    id: 'paricutin',
    name: 'Parícutin',
    country: 'Mexico',
    region: 'Michoacán',
    lat: 19.493,
    lng: -102.251,
    elevation: 2800,
    type: 'Cinder Cone',
    lastEruption: '1952',
    vei: 4,
    status: 'Extinct',
    notable: true,
    wikiTitle: 'Parícutin',
    description: [
      "Parícutin is one of the youngest volcanoes on Earth — and the only one whose entire lifecycle was witnessed and documented by science. It emerged in a Mexican cornfield on February 20, 1943, in front of farmer Dionisio Pulido, who watched a fissure crack open and begin spewing ash.",
      "Within a year the cone reached 336 meters; over the next nine years lava buried two villages before activity ceased in 1952. The volcano has been quiet since, and provides a rare complete record of a monogenetic cinder cone from birth to extinction."
    ]
  },
  {
    id: 'colima',
    name: 'Volcán de Colima',
    country: 'Mexico',
    region: 'Jalisco',
    lat: 19.512,
    lng: -103.620,
    elevation: 3820,
    type: 'Stratovolcano',
    lastEruption: '2019',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Volcán_de_Colima',
    description: [
      "One of Mexico's most active volcanoes, with more than 40 documented eruptions since 1576. Officially designated a Decade Volcano because of its history of explosive activity and its proximity to the densely populated Colima-Guadalajara region."
    ]
  },
  {
    id: 'orizaba',
    name: 'Pico de Orizaba',
    country: 'Mexico',
    region: 'Veracruz',
    lat: 19.030,
    lng: -97.270,
    elevation: 5636,
    type: 'Stratovolcano',
    lastEruption: '1846',
    vei: 2,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Pico_de_Orizaba',
    description: [
      "The third-highest peak in North America and the highest mountain in Mexico. Its summit ice cap is the southernmost glacier on the North American mainland — a glacier in rapid retreat that may disappear entirely within decades."
    ]
  },
  {
    id: 'pacaya',
    name: 'Pacaya',
    country: 'Guatemala',
    region: 'Escuintla',
    lat: 14.382,
    lng: -90.601,
    elevation: 2552,
    type: 'Complex Volcano',
    lastEruption: '2021',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Pacaya',
    description: [
      "One of Central America's most active volcanoes, frequently producing strombolian explosions and small lava flows that are visible at night from Guatemala City and Antigua. A popular and accessible hike for visitors who can stand near active vents."
    ]
  },
  {
    id: 'santa-maria',
    name: 'Santa María',
    country: 'Guatemala',
    region: 'Quetzaltenango',
    lat: 14.756,
    lng: -91.552,
    elevation: 3772,
    type: 'Stratovolcano',
    lastEruption: '2023',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Santa_María_(volcano)',
    description: [
      "Santa María's October 1902 eruption was one of the largest of the 20th century — a VEI-6 event that blew off the entire southwest flank of the previously dormant volcano and killed an estimated 5,000 people. The Santiaguito lava-dome complex that emerged from the resulting crater in 1922 is still active today."
    ]
  },
  {
    id: 'arenal',
    name: 'Arenal',
    country: 'Costa Rica',
    region: 'Alajuela',
    lat: 10.463,
    lng: -84.703,
    elevation: 1670,
    type: 'Stratovolcano',
    lastEruption: '2010',
    vei: 1,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Arenal_Volcano',
    description: [
      "Costa Rica's most famous volcano, in near-continuous eruption from 1968 to 2010 — one of the longest sustained eruptive episodes of the 20th century. Its perfect cone has been quiet since 2010 but is still classified as resting rather than extinct."
    ]
  },
  {
    id: 'pelee',
    name: 'Mount Pelée',
    country: 'France (Martinique)',
    region: 'Caribbean',
    lat: 14.820,
    lng: -61.170,
    elevation: 1397,
    type: 'Stratovolcano',
    lastEruption: '1932',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Pelée',
    description: [
      "On May 8, 1902, a single pyroclastic surge from Mount Pelée annihilated the city of Saint-Pierre — Martinique's cultural and economic capital — in roughly two minutes, killing about 30,000 people. There were only two known survivors in the city.",
      "The disaster gave volcanology its term for this style of eruption: a 'Peléan' eruption, characterized by a glowing, ground-hugging cloud of superheated gas and ash (a nuée ardente). The event remains the deadliest volcanic disaster of the 20th century."
    ]
  },

  /* ============================================================
     EUROPE, AFRICA & THE MEDITERRANEAN
     ============================================================ */
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    region: 'Aegean Sea',
    lat: 36.400,
    lng: 25.400,
    elevation: 367,
    type: 'Caldera',
    lastEruption: '1950',
    vei: 7,
    status: 'Active',
    notable: true,
    wikiTitle: 'Santorini_caldera',
    description: [
      "Santorini's Minoan eruption around 1600 BC was one of the largest volcanic events in human history — a VEI-7 explosion that ejected up to 60 cubic kilometers of material and collapsed the center of the island into the sea, leaving the dramatic caldera that defines its modern geography.",
      "The eruption is widely linked to the decline of Minoan civilization on nearby Crete and is one of the candidates for the historical kernel behind Plato's myth of Atlantis."
    ]
  },
  {
    id: 'teide',
    name: 'Mount Teide',
    country: 'Spain',
    region: 'Tenerife, Canary Islands',
    lat: 28.272,
    lng: -16.642,
    elevation: 3715,
    type: 'Stratovolcano',
    lastEruption: '1909',
    vei: 2,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Teide',
    description: [
      "The highest point in Spain and a UN-designated Decade Volcano, identified for its proximity to populated areas and its history of destructive eruptions. The summit caldera is one of the most-visited national parks in Europe."
    ]
  },
  {
    id: 'kilimanjaro',
    name: 'Mount Kilimanjaro',
    country: 'Tanzania',
    region: 'Eastern Rift',
    lat: -3.067,
    lng: 37.355,
    elevation: 5895,
    type: 'Stratovolcano',
    lastEruption: 'Long dormant',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Kilimanjaro',
    description: [
      "Kilimanjaro is the highest peak in Africa and the tallest free-standing mountain in the world — a single massif rising nearly 5 kilometers above the surrounding savanna. It is composed of three distinct volcanic cones: Kibo (the highest, still classified as dormant rather than extinct), Mawenzi, and Shira."
    ]
  },
  {
    id: 'nyiragongo',
    name: 'Mount Nyiragongo',
    country: 'Democratic Republic of the Congo',
    region: 'Virunga Mountains',
    lat: -1.520,
    lng: 29.250,
    elevation: 3470,
    type: 'Stratovolcano',
    lastEruption: '2021',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Nyiragongo',
    description: [
      "Nyiragongo's summit crater holds one of the most persistent and largest active lava lakes on Earth. Its lava is unusually fluid — low in silica — meaning that when the crater walls fail, lava can flow down the volcano's flanks at speeds approaching 60 km/h, faster than a person can run.",
      "The 1977 and 2002 flank-collapse eruptions sent rivers of lava through the city of Goma at the volcano's foot, killing hundreds and displacing hundreds of thousands."
    ]
  },
  {
    id: 'elbrus',
    name: 'Mount Elbrus',
    country: 'Russia',
    region: 'Caucasus',
    lat: 43.355,
    lng: 42.439,
    elevation: 5642,
    type: 'Stratovolcano',
    lastEruption: '~50 AD',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Elbrus',
    description: [
      "Elbrus is the highest mountain in Europe — taller than any peak in the Alps — and one of the Seven Summits. Despite being long dormant, geologists classify it as potentially active, with hot springs and seismic activity indicating a still-warm magma chamber beneath the twin-coned summit."
    ]
  },
  {
    id: 'damavand',
    name: 'Mount Damavand',
    country: 'Iran',
    region: 'Mazandaran',
    lat: 35.951,
    lng: 52.110,
    elevation: 5610,
    type: 'Stratovolcano',
    lastEruption: '~5350 BC',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Damavand',
    description: [
      "The highest peak in Iran and the entire Middle East — a deeply symbolic figure in Persian mythology, said to imprison the three-headed dragon Aži Dahāka beneath its summit. Geothermally active despite no eruptions in over 7,000 years."
    ]
  },
  {
    id: 'ararat',
    name: 'Mount Ararat',
    country: 'Turkey',
    region: 'Iğdır Province',
    lat: 39.702,
    lng: 44.299,
    elevation: 5137,
    type: 'Stratovolcano',
    lastEruption: '1840',
    vei: 2,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Ararat',
    description: [
      "Turkey's highest mountain and, by religious tradition, the resting place of Noah's Ark after the biblical flood. A near-perfect stratovolcano cone visible from four countries, with extensive glaciation on its upper slopes."
    ]
  },

  /* ============================================================
     ICELAND & NORTH ATLANTIC
     ============================================================ */
  {
    id: 'hekla',
    name: 'Hekla',
    country: 'Iceland',
    region: 'Southern Region',
    lat: 63.992,
    lng: -19.667,
    elevation: 1491,
    type: 'Stratovolcano',
    lastEruption: '2000',
    vei: 5,
    status: 'Active',
    notable: true,
    wikiTitle: 'Hekla',
    description: [
      "Known in medieval European folklore as the 'Gateway to Hell' — chroniclers wrote of damned souls being seen in its smoke. One of Iceland's most active volcanoes, it has erupted more than 20 times since the country was settled in the year 874."
    ]
  },
  {
    id: 'katla',
    name: 'Katla',
    country: 'Iceland',
    region: 'Southern Region',
    lat: 63.633,
    lng: -19.050,
    elevation: 1512,
    type: 'Subglacial Volcano',
    lastEruption: '1918',
    vei: 5,
    status: 'Active',
    notable: true,
    wikiTitle: 'Katla_(volcano)',
    description: [
      "Katla sits beneath the Mýrdalsjökull ice cap and is one of Iceland's most powerful and dangerous volcanoes. Its eruptions tend to be far larger than those of its more famous neighbor Eyjafjallajökull, and they reliably produce devastating jökulhlaups — glacial outburst floods — when subglacial heat rapidly melts the overlying ice.",
      "Historically, Katla erupts roughly twice per century. Its quiet since 1918 is the longest gap on record, and Icelandic geophysicists watch it closely."
    ]
  },

  /* ============================================================
     CURIOSITIES — submarine giants and edge cases
     ============================================================ */
  {
    id: 'tamu-massif',
    name: 'Tamu Massif',
    country: 'Pacific Ocean (international waters)',
    region: 'Shatsky Rise',
    lat: 32.0,
    lng: 158.0,
    elevation: -1980,
    type: 'Submarine Shield',
    lastEruption: '~144 million years ago',
    vei: 0,
    status: 'Extinct',
    notable: true,
    wikiTitle: 'Tamu_Massif',
    description: [
      "Tamu Massif was once thought to be a mountain range, but research published in 2013 argued it is a single, gargantuan shield volcano — making it potentially the largest volcano on Earth and rivaling Olympus Mons on Mars in footprint area, covering a region the size of New Mexico.",
      "Its summit lies roughly 2 kilometers below the surface of the Northwest Pacific. More recent work has questioned whether it formed as a single volcano or as a complex of mid-ocean-ridge features, but either way, the structure is extraordinary."
    ]
  }
,
  /* ============================================================
     EXPANSION SET — 49 ADDITIONAL SITES
     Caribbean, Russian Far East, Macaronesia, Africa, NZ, and more.
     ============================================================ */
  {
    id: 'momotombo',
    name: 'Momotombo',
    country: 'Nicaragua',
    region: 'León',
    lat: 12.422,
    lng: -86.540,
    elevation: 1297,
    type: 'Stratovolcano',
    lastEruption: '2015',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Momotombo',
    description: [
      "Known to locals as the 'Bare-headed' volcano because of its perpetually unvegetated summit. Its 1610 eruption forced the abandonment and relocation of the original colonial city of León, whose ruins (León Viejo) are now a UNESCO World Heritage site."
    ]
  },
  {
    id: 'irazu',
    name: 'Irazú',
    country: 'Costa Rica',
    region: 'Cartago',
    lat: 9.979,
    lng: -83.852,
    elevation: 3432,
    type: 'Stratovolcano',
    lastEruption: '1994',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Irazú_Volcano',
    description: [
      "Costa Rica's highest active volcano. From its summit on a clear day, both the Atlantic and Pacific Oceans are visible at the same time — a rare vantage point that makes it one of the country's most-visited natural landmarks."
    ]
  },
  {
    id: 'osorno',
    name: 'Osorno',
    country: 'Chile',
    region: 'Los Lagos',
    lat: -41.101,
    lng: -72.493,
    elevation: 2652,
    type: 'Stratovolcano',
    lastEruption: '1869',
    vei: 2,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Osorno_(volcano)',
    description: [
      "Often called the 'Mount Fuji of the Andes' for its near-perfect conical symmetry, Osorno is the visual centerpiece of the Chilean Lake District. The snow-capped cone reflects in surrounding lakes and dominates postcards of southern Chile."
    ]
  },
  {
    id: 'beerenberg',
    name: 'Beerenberg',
    country: 'Norway',
    region: 'Jan Mayen',
    lat: 71.080,
    lng: -8.170,
    elevation: 2277,
    type: 'Stratovolcano',
    lastEruption: '1985',
    vei: 0,
    status: 'Active',
    notable: true,
    wikiTitle: 'Beerenberg',
    description: [
      "The world's northernmost subaerial active volcano, glaciated to its base on the remote arctic island of Jan Mayen. Discovered by Dutch whalers in the 17th century, it remains one of the least-visited active volcanoes on Earth."
    ]
  },
  {
    id: 'pico',
    name: 'Mount Pico',
    country: 'Portugal',
    region: 'Azores',
    lat: 38.468,
    lng: -28.398,
    elevation: 2351,
    type: 'Stratovolcano',
    lastEruption: '1720',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Pico',
    description: [
      "The highest point in Portugal and a defining silhouette of the Azores. Pico sits on the Mid-Atlantic Ridge, where the North American and Eurasian plates pull apart at roughly 2.5 cm per year — the slow-motion engine that built the entire archipelago."
    ]
  },
  {
    id: 'cumbre-vieja',
    name: 'Cumbre Vieja',
    country: 'Spain',
    region: 'La Palma, Canary Islands',
    lat: 28.570,
    lng: -17.830,
    elevation: 1949,
    type: 'Volcanic Ridge',
    lastEruption: '2021',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Cumbre_Vieja',
    description: [
      "In September 2021, Cumbre Vieja awoke for the first time in 50 years. The eruption lasted 85 days — the longest in La Palma's recorded history — burying over 3,000 buildings, destroying the banana and avocado harvests, and displacing nearly 7,000 people.",
      "The lava flows were slow enough that residents could watch their homes consumed over hours, yet unstoppable. By the eruption's end, the flows had added a brand-new peninsula to the island's southwestern coast, extending its coastline permanently into the Atlantic."
    ]
  },
  {
    id: 'cameroon',
    name: 'Mount Cameroon',
    country: 'Cameroon',
    region: 'Southwest Region',
    lat: 4.203,
    lng: 9.170,
    elevation: 4040,
    type: 'Stratovolcano',
    lastEruption: '2012',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Cameroon',
    description: [
      "Known locally as 'Mongo ma Ndemi' — the Mountain of Greatness — Mount Cameroon is one of Africa's largest volcanoes and rises directly from the Atlantic coast. It is the highest peak in West Africa and one of the wettest places on Earth, drenched by Atlantic monsoon rains."
    ]
  },
  {
    id: 'ol-doinyo-lengai',
    name: 'Ol Doinyo Lengai',
    country: 'Tanzania',
    region: 'Arusha',
    lat: -2.764,
    lng: 35.914,
    elevation: 2962,
    type: 'Stratovolcano',
    lastEruption: '2023',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'Ol_Doinyo_Lengai',
    description: [
      "The only volcano on Earth that erupts natrocarbonatite lava — a rare, sodium-rich molten material so cool (around 510°C, half the temperature of typical basaltic lava) that it appears black in daylight rather than glowing red. The lava also flows like water, weathering rapidly to a chalky white once cooled."
    ]
  },
  {
    id: 'piton-fournaise',
    name: 'Piton de la Fournaise',
    country: 'France (Réunion)',
    region: 'Indian Ocean',
    lat: -21.244,
    lng: 55.713,
    elevation: 2632,
    type: 'Shield Volcano',
    lastEruption: '2023',
    vei: 0,
    status: 'Active',
    notable: true,
    wikiTitle: 'Piton_de_la_Fournaise',
    description: [
      "One of the most active shield volcanoes on Earth, with frequent effusive eruptions that islanders simply refer to as 'le volcan'. Despite this near-constant activity, eruptions are confined to an enormous uninhabited caldera, making it both spectacular and remarkably safe to observe."
    ]
  },
  {
    id: 'aso',
    name: 'Mount Aso',
    country: 'Japan',
    region: 'Kyushu',
    lat: 32.884,
    lng: 131.104,
    elevation: 1592,
    type: 'Caldera',
    lastEruption: '2021',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Aso',
    description: [
      "Aso's caldera is one of the largest in the world — 25 km across — and entire towns, rice paddies, and rail lines lie within its rim. Its central cone Nakadake remains active, with viewing platforms drawing visitors who watch sulphurous gases rise from the crater lake below."
    ]
  },
  {
    id: 'whakaari',
    name: 'Whakaari / White Island',
    country: 'New Zealand',
    region: 'Bay of Plenty',
    lat: -37.520,
    lng: 177.180,
    elevation: 321,
    type: 'Stratovolcano',
    lastEruption: '2019',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Whakaari_/_White_Island',
    description: [
      "New Zealand's most active cone volcano. The December 2019 phreatic eruption, which killed 22 visiting tourists in seconds, prompted an international reassessment of volcano tourism safety and led to criminal prosecutions in New Zealand courts — a case that reshaped legal liability for active-volcano access worldwide."
    ]
  },
  {
    id: 'ruapehu',
    name: 'Mount Ruapehu',
    country: 'New Zealand',
    region: 'North Island',
    lat: -39.280,
    lng: 175.560,
    elevation: 2797,
    type: 'Stratovolcano',
    lastEruption: '2007',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Ruapehu',
    description: [
      "The largest active volcano in New Zealand and the country's tallest North Island peak. Its summit crater holds an acidic warm lake whose periodic outbursts produce devastating lahars. It famously stood in for Mount Doom in Peter Jackson's Lord of the Rings film trilogy."
    ]
  },
  {
    id: 'klyuchevskaya',
    name: 'Klyuchevskaya Sopka',
    country: 'Russia',
    region: 'Kamchatka',
    lat: 56.056,
    lng: 160.642,
    elevation: 4750,
    type: 'Stratovolcano',
    lastEruption: '2023',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Klyuchevskaya_Sopka',
    description: [
      "The highest active volcano in Eurasia and the highest mountain in Siberia. Klyuchevskaya is the centerpiece of the Klyuchevskoy volcanic group on the remote Kamchatka Peninsula and is considered sacred by several indigenous Itelmen and Koryak peoples."
    ]
  },
  {
    id: 'fernandina',
    name: 'Fernandina',
    country: 'Ecuador',
    region: 'Galápagos Islands',
    lat: -0.370,
    lng: -91.550,
    elevation: 1476,
    type: 'Shield Volcano',
    lastEruption: '2024',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'Fernandina_Island',
    description: [
      "The youngest and most volcanically active island in the Galápagos archipelago. Fernandina hosts unique pink land iguanas, flightless cormorants, and one of the highest densities of marine iguanas anywhere — a working laboratory for the same evolutionary processes Darwin documented two centuries ago."
    ]
  },
  {
    id: 'sangay',
    name: 'Sangay',
    country: 'Ecuador',
    region: 'Morona Santiago',
    lat: -2.002,
    lng: -78.341,
    elevation: 5230,
    type: 'Stratovolcano',
    lastEruption: 'Continuous',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Sangay',
    description: [
      "One of the most consistently active volcanoes on the planet, in near-continuous eruption for the last 300+ years. Its remoteness deep in the Ecuadorian Amazon makes both monitoring and ascent extraordinarily difficult — only a few dozen successful summits have ever been recorded."
    ]
  },
  {
    id: 'soufriere-hills',
    name: 'Soufrière Hills',
    country: 'United Kingdom (Montserrat)',
    region: 'Caribbean',
    lat: 16.716,
    lng: -62.183,
    elevation: 915,
    type: 'Stratovolcano',
    lastEruption: '2013',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Soufrière_Hills',
    description: [
      "The 1995 awakening of Soufrière Hills, after centuries of dormancy, rendered the southern half of Montserrat permanently uninhabitable. Plymouth — the island's former capital — was buried under meters of ash and pyroclastic flow material, and remains a modern ghost town that visitors still call the 'Caribbean Pompeii'."
    ]
  },
  {
    id: 'agung',
    name: 'Mount Agung',
    country: 'Indonesia',
    region: 'Bali',
    lat: -8.342,
    lng: 115.508,
    elevation: 3031,
    type: 'Stratovolcano',
    lastEruption: '2019',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Agung',
    description: [
      "The highest point on Bali and the most sacred mountain in Balinese Hindu cosmology — believed to be a replica of Mount Meru, the central axis of the universe. The major temple complex of Pura Besakih sits high on its slopes and was famously spared during the destructive 1963 eruption."
    ]
  },
  {
    id: 'rinjani',
    name: 'Mount Rinjani',
    country: 'Indonesia',
    region: 'Lombok',
    lat: -8.411,
    lng: 116.457,
    elevation: 3726,
    type: 'Stratovolcano',
    lastEruption: '2016',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Rinjani',
    description: [
      "Rinjani's stunning summit caldera (6 by 8.5 km) is partially filled by the crescent-shaped lake Segara Anak. Beneath that beauty lies a darker history: the 1257 Samalas eruption was one of the largest of the past millennium and may have triggered global cooling and famine — the so-called '1258 mystery climate event'."
    ]
  },
  {
    id: 'deception-island',
    name: 'Deception Island',
    country: 'Antarctica',
    region: 'South Shetland Islands',
    lat: -62.970,
    lng: -60.650,
    elevation: 576,
    type: 'Caldera',
    lastEruption: '1970',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Deception_Island',
    description: [
      "A horseshoe-shaped island that is actually the rim of a flooded caldera — one of only a handful of places in the world where ships can sail directly into the heart of an active volcano. Geothermally heated black-sand beaches make it a unique destination for Antarctic expedition cruises."
    ]
  },
  {
    id: 'lanin',
    name: 'Lanín',
    country: 'Argentina / Chile',
    region: 'Andes',
    lat: -39.632,
    lng: -71.499,
    elevation: 3747,
    type: 'Stratovolcano',
    lastEruption: '~560 AD',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Lanín',
    description: [
      "A defining peak of the Andean Patagonian Lake District, straddling the Argentina-Chile border. Lanín appears on the official flag of Argentina's Neuquén Province, and a permanent glacier clings to its southern face."
    ]
  },
  {
    id: 'ontake',
    name: 'Mount Ontake',
    country: 'Japan',
    region: 'Honshū',
    lat: 35.893,
    lng: 137.480,
    elevation: 3067,
    type: 'Stratovolcano',
    lastEruption: '2014',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Ontake',
    description: [
      "Japan's second-highest volcano. The 2014 phreatic eruption struck without warning on a clear autumn afternoon, killing 63 hikers near the summit — Japan's deadliest volcanic disaster in nearly 90 years and a defining case in the limits of eruption forecasting."
    ]
  },
  {
    id: 'sinabung',
    name: 'Mount Sinabung',
    country: 'Indonesia',
    region: 'Sumatra',
    lat: 3.170,
    lng: 98.392,
    elevation: 2460,
    type: 'Stratovolcano',
    lastEruption: '2021',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Sinabung',
    description: [
      "Sinabung was considered dormant for over 400 years before suddenly reawakening in 2010. The continuous activity since has produced some of the most dramatic pyroclastic-flow photography of the modern era, and has permanently displaced thousands of people from villages on its flanks."
    ]
  },
  {
    id: 'semeru',
    name: 'Mount Semeru',
    country: 'Indonesia',
    region: 'East Java',
    lat: -8.108,
    lng: 112.922,
    elevation: 3676,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Semeru',
    description: [
      "The highest mountain on Java and one of the most rhythmically active volcanoes on Earth — small explosive eruptions occur every 20 to 30 minutes, almost continuously, making it possible to plan the best moment to photograph an eruption."
    ]
  },
  {
    id: 'eldfell',
    name: 'Eldfell',
    country: 'Iceland',
    region: 'Heimaey, Westman Islands',
    lat: 63.432,
    lng: -20.249,
    elevation: 200,
    type: 'Cinder Cone',
    lastEruption: '1973',
    vei: 3,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Eldfell',
    description: [
      "The 1973 eruption of Eldfell nearly destroyed the fishing town of Vestmannaeyjar, with lava advancing toward the harbor that was the entire community's economic lifeline. In a now-legendary rescue effort, islanders pumped seawater onto the advancing lava — millions of tonnes of it — successfully cooling and diverting the flow before it sealed the harbor."
    ]
  },
  {
    id: 'surtsey',
    name: 'Surtsey',
    country: 'Iceland',
    region: 'Westman Islands',
    lat: 63.303,
    lng: -20.605,
    elevation: 155,
    type: 'Cinder Cone',
    lastEruption: '1967',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Surtsey',
    description: [
      "An entirely new island created from nothing by a submarine eruption between 1963 and 1967. Strictly protected ever since, Surtsey is studied to observe how plant and animal life colonize completely sterile new land without any human interference — making it one of the most scientifically valuable islands on Earth."
    ]
  },
  {
    id: 'nyamuragira',
    name: 'Nyamuragira',
    country: 'Democratic Republic of the Congo',
    region: 'Virunga Mountains',
    lat: -1.408,
    lng: 29.200,
    elevation: 3058,
    type: 'Shield Volcano',
    lastEruption: '2023',
    vei: 0,
    status: 'Active',
    notable: true,
    wikiTitle: 'Nyamuragira',
    description: [
      "Africa's most active volcano, just 15 km from its more famous neighbor Nyiragongo. Nyamuragira's frequent fissure eruptions produce massive lava fountains and broad lava flows — a more typical 'shield-style' counterpoint to Nyiragongo's lethal lava-lake collapses."
    ]
  },
  {
    id: 'karthala',
    name: 'Mount Karthala',
    country: 'Comoros',
    region: 'Grande Comore',
    lat: -11.750,
    lng: 43.380,
    elevation: 2361,
    type: 'Shield Volcano',
    lastEruption: '2007',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Karthala',
    description: [
      "The highest point in the Comoros and one of the largest active shield volcanoes in the world. Roughly half of Grande Comore's population lives within range of its potential eruptions, making it one of the most under-appreciated population-risk volcanoes globally."
    ]
  },
  {
    id: 'kelud',
    name: 'Kelud',
    country: 'Indonesia',
    region: 'East Java',
    lat: -7.930,
    lng: 112.308,
    elevation: 1731,
    type: 'Stratovolcano',
    lastEruption: '2014',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Kelud',
    description: [
      "Despite its modest size, Kelud has produced some of Java's deadliest eruptions thanks to its summit crater lake — when explosive activity ejects the lake water, it generates catastrophic lahars. Engineers have repeatedly drilled tunnels through the crater wall to drain the lake and reduce this risk."
    ]
  },
  {
    id: 'soputan',
    name: 'Soputan',
    country: 'Indonesia',
    region: 'North Sulawesi',
    lat: 1.108,
    lng: 124.730,
    elevation: 1784,
    type: 'Stratovolcano',
    lastEruption: '2018',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Soputan',
    description: [
      "One of Sulawesi's most consistently active volcanoes, sitting at the southern end of the Tondano caldera complex. Frequent strombolian eruptions and lava-dome growth have made it a routine subject for Indonesian volcanological monitoring."
    ]
  },
  {
    id: 'dukono',
    name: 'Dukono',
    country: 'Indonesia',
    region: 'Halmahera',
    lat: 1.685,
    lng: 127.880,
    elevation: 1335,
    type: 'Complex Volcano',
    lastEruption: 'Continuous',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'Dukono',
    description: [
      "Has been in a state of continuous eruption since 1933 — over 90 years and counting — making it one of the longest sustained eruptive episodes in modern history. Its remoteness on Halmahera island means few outside the volcanological community know it exists."
    ]
  },
  {
    id: 'ngauruhoe',
    name: 'Mount Ngauruhoe',
    country: 'New Zealand',
    region: 'North Island',
    lat: -39.157,
    lng: 175.632,
    elevation: 2291,
    type: 'Stratovolcano',
    lastEruption: '1977',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Ngauruhoe',
    description: [
      "A near-perfect young composite cone, technically a secondary vent of the larger Tongariro volcanic complex. Its sharply symmetrical profile makes it one of the most photographed mountains in New Zealand and another stand-in for Mount Doom in the Lord of the Rings films."
    ]
  },
  {
    id: 'tarawera',
    name: 'Mount Tarawera',
    country: 'New Zealand',
    region: 'North Island',
    lat: -38.226,
    lng: 176.507,
    elevation: 1111,
    type: 'Lava Dome Complex',
    lastEruption: '1886',
    vei: 5,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Tarawera',
    description: [
      "The site of New Zealand's largest historic-period eruption. The June 1886 eruption killed over 100 people and obliterated the Pink and White Terraces — a vast complex of natural silica formations that had been considered the eighth wonder of the world and was the country's first major tourist attraction."
    ]
  },
  {
    id: 'shiveluch',
    name: 'Shiveluch',
    country: 'Russia',
    region: 'Kamchatka',
    lat: 56.653,
    lng: 161.360,
    elevation: 3283,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 5,
    status: 'Active',
    notable: true,
    wikiTitle: 'Shiveluch',
    description: [
      "One of the largest and most active volcanic structures on the Kamchatka Peninsula. Shiveluch produces enormous lava domes that periodically collapse in spectacular pyroclastic flows, and its massive ash plumes are a recurring threat to North Pacific aviation routes."
    ]
  },
  {
    id: 'tolbachik',
    name: 'Tolbachik',
    country: 'Russia',
    region: 'Kamchatka',
    lat: 55.830,
    lng: 160.330,
    elevation: 3682,
    type: 'Shield-Stratovolcano',
    lastEruption: '2013',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Tolbachik',
    description: [
      "Famous for its 1975-1976 Great Tolbachik Fissure Eruption, one of the largest basaltic eruptions of the 20th century, which buried surrounding tundra in fresh lava. Its fluid Hawaiian-style basaltic lava is unusual for a Kamchatkan volcano and made the eruption a once-in-a-lifetime study opportunity."
    ]
  },
  {
    id: 'avachinsky',
    name: 'Avachinsky',
    country: 'Russia',
    region: 'Kamchatka',
    lat: 53.255,
    lng: 158.835,
    elevation: 2741,
    type: 'Stratovolcano',
    lastEruption: '2001',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Avachinsky',
    description: [
      "One of Kamchatka's 'Home Volcanoes' — the cluster visible from the regional capital Petropavlovsk-Kamchatsky. Easily climbed in a day from the city, it is the most-summited active volcano in Russia."
    ]
  },
  {
    id: 'big-ben',
    name: 'Big Ben',
    country: 'Australia',
    region: 'Heard Island',
    lat: -53.106,
    lng: 73.513,
    elevation: 2745,
    type: 'Stratovolcano',
    lastEruption: '2023',
    vei: 0,
    status: 'Active',
    notable: true,
    wikiTitle: 'Big_Ben_(volcano)',
    description: [
      "The highest mountain in Australian territory — taller than any peak on the Australian continent itself. Located on the uninhabited subantarctic Heard Island, Big Ben is monitored almost exclusively by satellite, and ash plumes from its summit cone Mawson Peak are spotted only occasionally."
    ]
  },
  {
    id: 'wolf',
    name: 'Wolf Volcano',
    country: 'Ecuador',
    region: 'Galápagos Islands',
    lat: 0.020,
    lng: -91.350,
    elevation: 1707,
    type: 'Shield Volcano',
    lastEruption: '2022',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'Wolf_Volcano',
    description: [
      "The highest peak in the Galápagos Islands. Wolf is home to the world's only known population of pink land iguanas — a species so distinct it was identified as separate only in 2009 — as well as critically endangered giant tortoises endemic to its slopes."
    ]
  },
  {
    id: 'reventador',
    name: 'Reventador',
    country: 'Ecuador',
    region: 'Andes',
    lat: -0.077,
    lng: -77.656,
    elevation: 3562,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Reventador',
    description: [
      "Its name in Spanish translates as 'The Exploder' — and it has lived up to that for centuries with frequent strombolian eruptions and incandescent lava flows. The 2002 eruption produced one of the largest ash columns in Ecuador's modern history."
    ]
  },
  {
    id: 'la-soufriere',
    name: 'La Soufrière',
    country: 'Saint Vincent and the Grenadines',
    region: 'Caribbean',
    lat: 13.330,
    lng: -61.180,
    elevation: 1234,
    type: 'Stratovolcano',
    lastEruption: '2021',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'La_Soufrière_(volcano)',
    description: [
      "The highest peak on Saint Vincent. The April 2021 eruption — the volcano's first explosive event since 1979 — required the evacuation of roughly 20,000 people and spread ashfall across multiple Caribbean islands as far as Barbados, 190 km downwind."
    ]
  },
  {
    id: 'liamuiga',
    name: 'Mount Liamuiga',
    country: 'Saint Kitts and Nevis',
    region: 'Caribbean',
    lat: 17.370,
    lng: -62.800,
    elevation: 1156,
    type: 'Stratovolcano',
    lastEruption: '1843',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Liamuiga',
    description: [
      "Formerly known as Mount Misery during the colonial era, the mountain was renamed in 1983 to its original Kalinago indigenous name, meaning 'fertile land'. A small shallow crater lake sits within its summit caldera."
    ]
  },
  {
    id: 'apo',
    name: 'Mount Apo',
    country: 'Philippines',
    region: 'Mindanao',
    lat: 7.005,
    lng: 125.410,
    elevation: 2954,
    type: 'Stratovolcano',
    lastEruption: 'Long dormant',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Apo',
    description: [
      "The highest mountain in the Philippines and a critical center of biodiversity. Mount Apo is the last stronghold of the Philippine Eagle, the largest eagle in the world by wing surface area, and home to over 270 bird species and hundreds of endemic plants."
    ]
  },
  {
    id: 'kanlaon',
    name: 'Kanlaon',
    country: 'Philippines',
    region: 'Negros Island',
    lat: 10.412,
    lng: 123.132,
    elevation: 2435,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Kanlaon_Volcano',
    description: [
      "The highest peak in the Visayas region of the Philippines and one of the country's most active volcanoes. Phreatic explosions, hot springs, and continuous fumarolic activity make Kanlaon a near-constant subject of monitoring by PHIVOLCS."
    ]
  },
  {
    id: 'lawu',
    name: 'Mount Lawu',
    country: 'Indonesia',
    region: 'Central Java',
    lat: -7.625,
    lng: 111.192,
    elevation: 3265,
    type: 'Stratovolcano',
    lastEruption: '1885',
    vei: 1,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Lawu',
    description: [
      "One of the holiest mountains in Java and a major Javanese pilgrimage destination. Several significant 15th-century Hindu-Buddhist temples cling to its slopes, including Candi Sukuh, whose unusual erotic and tantric iconography puzzles archaeologists to this day."
    ]
  },
  {
    id: 'slamet',
    name: 'Mount Slamet',
    country: 'Indonesia',
    region: 'Central Java',
    lat: -7.242,
    lng: 109.208,
    elevation: 3428,
    type: 'Stratovolcano',
    lastEruption: '2014',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Slamet',
    description: [
      "Java's second-highest mountain, with more than 30 cinder cones scattered across its lower eastern and southeastern flanks — evidence of a long history of small flank eruptions in addition to summit activity."
    ]
  },
  {
    id: 'raung',
    name: 'Mount Raung',
    country: 'Indonesia',
    region: 'East Java',
    lat: -8.125,
    lng: 114.042,
    elevation: 3332,
    type: 'Stratovolcano',
    lastEruption: '2021',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Raung',
    description: [
      "Features a striking summit caldera 2 km across and 500 m deep — one of the largest in Java. Raung is among the island's most consistently active volcanoes, with frequent ash explosions that have repeatedly disrupted aviation between Bali and Java."
    ]
  },
  {
    id: 'taranaki',
    name: 'Mount Taranaki',
    country: 'New Zealand',
    region: 'North Island',
    lat: -39.296,
    lng: 174.063,
    elevation: 2518,
    type: 'Stratovolcano',
    lastEruption: '1854',
    vei: 1,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Taranaki',
    description: [
      "A textbook 'near-perfect' volcanic cone, made all the more striking by its complete isolation from any other major peaks — it rises alone from a coastal plain. In 2017 the New Zealand government granted Taranaki legal personhood, making it among the first natural features in the world to hold that status."
    ]
  },
  {
    id: 'adams',
    name: 'Mount Adams',
    country: 'United States',
    region: 'Washington',
    lat: 46.202,
    lng: -121.490,
    elevation: 3743,
    type: 'Stratovolcano',
    lastEruption: '~950 AD',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Adams_(Washington)',
    description: [
      "The second-highest mountain in Washington and one of the most massive composite volcanoes in the Cascade Range — broader at its base than Rainier, though slightly lower in elevation. A vast volume of glacial ice sits on its summit and flanks."
    ]
  },
  {
    id: 'jefferson',
    name: 'Mount Jefferson',
    country: 'United States',
    region: 'Oregon',
    lat: 44.692,
    lng: -121.799,
    elevation: 3199,
    type: 'Stratovolcano',
    lastEruption: '~950 AD',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Jefferson_(Oregon)',
    description: [
      "Oregon's second-highest mountain, deep within a federally designated wilderness area. Its remote setting and challenging summit ridge make it the most rugged and least-climbed of the major Cascade peaks."
    ]
  },
  {
    id: 'mazama',
    name: 'Mount Mazama',
    country: 'United States',
    region: 'Oregon',
    lat: 42.941,
    lng: -122.109,
    elevation: 2486,
    type: 'Caldera',
    lastEruption: '~5677 BC',
    vei: 7,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Mazama',
    description: [
      "Mount Mazama collapsed roughly 7,700 years ago in a colossal VEI-7 eruption — one of the largest volcanic events of the Holocene — that ejected an estimated 50 cubic kilometers of magma and spread ash across most of the Pacific Northwest, reaching as far as central Canada.",
      "The resulting caldera filled with rain and snowmelt over centuries to become Crater Lake: at 594 meters, the deepest lake in the United States and the ninth-deepest in the world. It is famous for its extraordinarily intense blue color, the result of nearly pure water with no inflowing rivers to muddy it."
    ]
  }
,
  /* ============================================================
     EXPANSION SET — 42 ADDITIONAL SITES
     Heavy coverage of the Americas: Cascades, Alaska, Mexico,
     Central American Volcanic Arc, Andes, plus a few Cascade
     additions and the Yellowstone supervolcano.
     ============================================================ */
  {
    id: 'yellowstone',
    name: 'Yellowstone Caldera',
    country: 'United States',
    region: 'Wyoming',
    lat: 44.428,
    lng: -110.588,
    elevation: 2805,
    type: 'Caldera',
    lastEruption: '~640,000 years ago',
    vei: 8,
    status: 'Active',
    notable: true,
    wikiTitle: 'Yellowstone_Caldera',
    description: [
      "Yellowstone is one of the world's largest active volcanic systems — a 'supervolcano' fueled by a massive mantle plume. The park's famous geysers and hot springs are the surface expression of a vast magma chamber that has produced three cataclysmic eruptions over the last 2.1 million years.",
      "While a large-scale eruption is statistically unlikely in our lifetime, the system remains geologically restless. Monitoring focuses on ground deformation and the intense earthquake swarms that reflect the movement of hydrothermal fluids and magma miles beneath the tourists at Old Faithful."
    ]
  },
  {
    id: 'long-valley',
    name: 'Long Valley Caldera',
    country: 'United States',
    region: 'California',
    lat: 37.700,
    lng: -118.860,
    elevation: 2600,
    type: 'Caldera',
    lastEruption: '~16,000 years ago',
    vei: 8,
    status: 'Active',
    notable: true,
    wikiTitle: 'Long_Valley_Caldera',
    description: [
      "One of the largest calderas on Earth, formed 760,000 years ago in a super-eruption that created the Bishop Tuff. The area remains geothermally hyperactive, with hot springs and high carbon dioxide emissions in the nearby Mammoth Mountain area.",
      "A period of intense seismic unrest in the 1980s led to the creation of the California Volcano Observatory. Today, the caldera's floor continues to rise and fall in a process known as 'resurgent doming'."
    ]
  },
  {
    id: 'fuego',
    name: 'Volcán de Fuego',
    country: 'Guatemala',
    region: 'Sacatepéquez',
    lat: 14.473,
    lng: -90.880,
    elevation: 3763,
    type: 'Stratovolcano',
    lastEruption: '2025',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Volcán_de_Fuego',
    description: [
      "One of the world's most consistently active volcanoes, Fuego is famous for its near-constant strombolian explosions that dust the colonial city of Antigua with ash. It forms a massive twin-peak complex with the dormant Acatenango.",
      "In June 2018 it produced its deadliest eruption in nearly a century, sending fast-moving pyroclastic flows into villages on its flanks with almost no warning. It remains under heavy 24-hour surveillance by Guatemala's INSIVUMEH observatory."
    ]
  },
  {
    id: 'acatenango',
    name: 'Acatenango',
    country: 'Guatemala',
    region: 'Sacatepéquez',
    lat: 14.500,
    lng: -90.875,
    elevation: 3976,
    type: 'Stratovolcano',
    lastEruption: '1972',
    vei: 1,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Acatenango',
    description: [
      "The 'sleeping giant' of the Fuego-Acatenango complex. While Fuego is hyperactive, Acatenango has been quiet for decades, making it a popular (if grueling) overnight hiking destination for those wishing to watch Fuego's eruptions from a safe distance.",
      "The two peaks are physically joined by a high ridge, but they represent very different stages of volcanic evolution. Acatenango's last major activity in the early 1970s dusted Guatemala City with ash."
    ]
  },
  {
    id: 'augustine',
    name: 'Augustine Volcano',
    country: 'United States',
    region: 'Alaska',
    lat: 59.363,
    lng: -153.430,
    elevation: 1252,
    type: 'Stratovolcano',
    lastEruption: '2006',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Augustine_Volcano',
    description: [
      "Augustine forms its own uninhabited island in Cook Inlet. It is the most active volcano in the eastern Aleutian arc, characterized by repeated growth and collapse of summit lava domes.",
      "Its eruptions pose a significant threat to international aviation routes between North America and Asia, as well as the potential to generate tsunamis that could reach the city of Homer, Alaska."
    ]
  },
  {
    id: 'redoubt',
    name: 'Mount Redoubt',
    country: 'United States',
    region: 'Alaska',
    lat: 60.485,
    lng: -152.743,
    elevation: 3108,
    type: 'Stratovolcano',
    lastEruption: '2009',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Redoubt',
    description: [
      "A heavily glaciated peak in the Chigmit Mountains. In 1989 an ash plume from Redoubt caused all four engines of a KLM Boeing 747 to fail mid-flight; the pilots managed to restart the engines only minutes before impact, a landmark event in aviation safety history.",
      "Its 2009 eruption produced massive mudflows that threatened a nearby oil storage terminal, showcasing the diverse hazards of subglacial volcanoes."
    ]
  },
  {
    id: 'pavlof',
    name: 'Pavlof Volcano',
    country: 'United States',
    region: 'Alaska',
    lat: 55.417,
    lng: -161.887,
    elevation: 2519,
    type: 'Stratovolcano',
    lastEruption: '2022',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Pavlof_Volcano',
    description: [
      "One of the most consistently active volcanoes in the United States, Pavlof is known for spectacular lava fountaining and its ability to erupt with almost no seismic warning.",
      "Located on the Alaska Peninsula, its frequent ash clouds are a major concern for the regional fishing industry and flights using the Great Circle routes between North America and Asia."
    ]
  },
  {
    id: 'shishaldin',
    name: 'Shishaldin Volcano',
    country: 'United States',
    region: 'Alaska',
    lat: 54.756,
    lng: -163.971,
    elevation: 2857,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Shishaldin_Volcano',
    description: [
      "Shishaldin is the highest peak in the Aleutian Islands and boasts a near-perfect symmetrical cone, rivaling Mount Fuji in beauty. It is almost entirely covered in snow and ice year-round.",
      "It is one of the most active volcanoes in Alaska, frequently emitting steam and ash from its small summit crater. In 1999 it produced a spectacular sub-Plinian eruption that sent ash 15 kilometers into the sky."
    ]
  },
  {
    id: 'okmok',
    name: 'Okmok Caldera',
    country: 'United States',
    region: 'Alaska',
    lat: 53.432,
    lng: -168.132,
    elevation: 1073,
    type: 'Caldera',
    lastEruption: '2008',
    vei: 6,
    status: 'Active',
    notable: true,
    wikiTitle: 'Okmok_Caldera',
    description: [
      "Okmok is a broad, 10-kilometer-wide caldera on Umnak Island. Its 43 BC eruption was so massive that recent ice-core evidence suggests it may have triggered global cooling that contributed to the political crisis at the end of the Roman Republic.",
      "The caldera floor is a vibrant, alien-looking landscape of cinder cones, lava flows, and hot springs, all contained within the high walls of the ancient collapse."
    ]
  },
  {
    id: 'veniaminof',
    name: 'Mount Veniaminof',
    country: 'United States',
    region: 'Alaska',
    lat: 56.170,
    lng: -159.401,
    elevation: 2507,
    type: 'Caldera',
    lastEruption: '2021',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Veniaminof',
    description: [
      "A massive caldera nearly 10 kilometers wide, mostly filled by an ice sheet. A small cinder cone pokes through the ice and frequently erupts, melting ice-pits in the surrounding glacier.",
      "It is one of the few places on Earth where active lava can be seen erupting directly through a thick glacial ice cap, creating a dramatic and high-contrast volcanic environment."
    ]
  },
  {
    id: 'aniakchak',
    name: 'Aniakchak Caldera',
    country: 'United States',
    region: 'Alaska',
    lat: 56.920,
    lng: -158.209,
    elevation: 1341,
    type: 'Caldera',
    lastEruption: '1931',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Aniakchak_National_Monument_and_Preserve',
    description: [
      "Aniakchak is one of the most remote and wildest volcanic sites in North America. The 10-kilometer-wide caldera was formed roughly 3,500 years ago and is so large it has its own internal weather system.",
      "The 'Gates' are a massive breach in the caldera wall where the Aniakchak River flows out, having carved a canyon through the volcanic ash and debris of the ancient collapse."
    ]
  },
  {
    id: 'glacier-peak',
    name: 'Glacier Peak',
    country: 'United States',
    region: 'Washington',
    lat: 48.112,
    lng: -121.113,
    elevation: 3213,
    type: 'Stratovolcano',
    lastEruption: '~1700 AD',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Glacier_Peak',
    description: [
      "Despite its name, Glacier Peak is one of Washington's most active and explosive volcanoes. It is hidden from the view of major cities by the surrounding mountains, leading many to overlook its significant hazard potential.",
      "Geological records show it has produced some of the largest ash eruptions in the Cascades over the last 15,000 years, with its tephra found as far away as the Atlantic seaboard."
    ]
  },
  {
    id: 'medicine-lake',
    name: 'Medicine Lake',
    country: 'United States',
    region: 'California',
    lat: 41.585,
    lng: -121.571,
    elevation: 2412,
    type: 'Shield Volcano',
    lastEruption: '~1,000 years ago',
    vei: 1,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Medicine_Lake_Volcano',
    description: [
      "Though it looks like a gentle ridge rather than a sharp peak, Medicine Lake is the largest volcano by volume in the Cascade Range. It has a hidden caldera and is the source of the spectacular Glass Mountain obsidian flow.",
      "The volcano's lava tubes, including those in Lava Beds National Monument, were used as natural strongholds by the Modoc people during the Modoc War of 1872–73."
    ]
  },
  {
    id: 'mount-garibaldi',
    name: 'Mount Garibaldi',
    country: 'Canada',
    region: 'British Columbia',
    lat: 49.850,
    lng: -123.000,
    elevation: 2678,
    type: 'Stratovolcano',
    lastEruption: '~8,000 BC',
    vei: 2,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Garibaldi',
    description: [
      "Garibaldi was born during the last ice age, erupting through a massive glacier. When the ice melted, the western flank of the volcano collapsed, leaving the dramatic, sheer face known as 'The Barrier'.",
      "The Barrier is itself a major geological hazard: a further collapse could trigger a massive landslide threatening the communities in the Squamish valley below."
    ]
  },
  {
    id: 'edziza',
    name: 'Mount Edziza',
    country: 'Canada',
    region: 'British Columbia',
    lat: 57.716,
    lng: -130.633,
    elevation: 2780,
    type: 'Complex Volcano',
    lastEruption: '~700 AD',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Edziza_volcanic_complex',
    description: [
      "One of Canada's most spectacular volcanic landscapes, featuring a massive central peak surrounded by dozens of younger cinder cones and vast plateaus of basaltic lava.",
      "The area is famous for its rainbow-colored volcanic sands and its extensive deposits of high-quality obsidian, which were used by Indigenous peoples for trade and tool-making for over 10,000 years."
    ]
  },
  {
    id: 'el-chichon',
    name: 'El Chichón',
    country: 'Mexico',
    region: 'Chiapas',
    lat: 17.360,
    lng: -93.228,
    elevation: 1150,
    type: 'Lava Dome',
    lastEruption: '1982',
    vei: 5,
    status: 'Active',
    notable: true,
    wikiTitle: 'El_Chichón',
    description: [
      "Before 1982, El Chichón was a small forested hill that many believed was extinct. Its sudden VEI-5 eruption was one of the most significant of the 20th century, injecting massive amounts of sulfur dioxide into the stratosphere and cooling global climate.",
      "The eruption destroyed nine villages and created a 1-kilometer-wide crater that now holds a brilliant green, acidic lake. It serves as a stark reminder of the danger posed by unmonitored tropical volcanoes."
    ]
  },
  {
    id: 'nevado-de-toluca',
    name: 'Nevado de Toluca',
    country: 'Mexico',
    region: 'State of Mexico',
    lat: 19.108,
    lng: -99.758,
    elevation: 4680,
    type: 'Stratovolcano',
    lastEruption: '~1350 AD',
    vei: 2,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Nevado_de_Toluca',
    description: [
      "Mexico's fourth-highest peak, featuring a large summit caldera that holds two cold high-altitude lakes — the Sun and the Moon. It is a sacred site where pre-Columbian artifacts including copal incense and wooden scepters have been recovered from the lake depths.",
      "Unlike the sharper peaks of Popocatépetl and Orizaba, the Nevado has a long, flat profile. It is the only volcano in Mexico whose crater is accessible via a high-altitude road, making it a popular weekend destination for Mexico City residents."
    ]
  },
  {
    id: 'tacana',
    name: 'Tacaná',
    country: 'Mexico / Guatemala',
    region: 'Chiapas / San Marcos',
    lat: 15.133,
    lng: -92.112,
    elevation: 4060,
    type: 'Stratovolcano',
    lastEruption: '1986',
    vei: 0,
    status: 'Active',
    notable: true,
    wikiTitle: 'Volcán_Tacaná',
    description: [
      "The second-highest peak in Central America, straddling the border between Mexico and Guatemala — the northernmost volcano in the Central American Volcanic Arc.",
      "Though it hasn't produced a major eruption in centuries, its hydrothermal system remains very active, with frequent phreatic steam explosions that keep local disaster agencies on high alert."
    ]
  },
  {
    id: 'santa-ana',
    name: 'Santa Ana (Ilamatepec)',
    country: 'El Salvador',
    region: 'Santa Ana',
    lat: 13.853,
    lng: -89.630,
    elevation: 2381,
    type: 'Stratovolcano',
    lastEruption: '2005',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Santa_Ana_Volcano',
    description: [
      "The highest volcano in El Salvador, featuring a series of four nested craters. Its innermost crater hosts a brilliant turquoise acidic lake that frequently changes temperature.",
      "The 2005 eruption killed two people and sent rocks the size of cars flying into the air, proving that even El Salvador's scenic volcanoes can turn deadly in an instant."
    ]
  },
  {
    id: 'san-salvador',
    name: 'San Salvador (Quezaltepeque)',
    country: 'El Salvador',
    region: 'San Salvador',
    lat: 13.734,
    lng: -89.286,
    elevation: 1893,
    type: 'Stratovolcano',
    lastEruption: '1917',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'San_Salvador_(volcano)',
    description: [
      "This volcano sits directly on the edge of El Salvador's capital city. Its massive central crater, known as 'Boquerón' (The Big Mouth), was once filled by a lake until it was evaporated during the 1917 eruption.",
      "A smaller cinder cone called 'Boqueroncito' sits on the floor of the main crater — a tiny volcano inside a large one, surrounded by a city of over a million people."
    ]
  },
  {
    id: 'izalco',
    name: 'Izalco',
    country: 'El Salvador',
    region: 'Sonsonate',
    lat: 13.813,
    lng: -89.633,
    elevation: 1950,
    type: 'Stratovolcano',
    lastEruption: '1966',
    vei: 1,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Izalco_Volcano',
    description: [
      "For nearly 200 years Izalco was known as the 'Lighthouse of the Pacific' because its near-constant eruptions were visible from the ocean, providing a natural navigation aid for sailors.",
      "The volcano was born in 1770 when a hole in the ground at the base of Santa Ana volcano began spewing lava. It grew to nearly 2,000 meters in height before suddenly falling silent in the mid-20th century."
    ]
  },
  {
    id: 'san-miguel',
    name: 'San Miguel (Chaparrastique)',
    country: 'El Salvador',
    region: 'San Miguel',
    lat: 13.434,
    lng: -88.269,
    elevation: 2130,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'San_Miguel_(volcano)',
    description: [
      "One of El Salvador's most active volcanoes, characterized by a deep, perfectly circular summit crater that frequently produces small gas and ash pulses affecting the coffee plantations on its fertile slopes.",
      "Its symmetrical cone is a dominant landmark in the eastern part of the country, and its historical lava flows have reached as far as the city of San Miguel."
    ]
  },
  {
    id: 'masaya',
    name: 'Masaya',
    country: 'Nicaragua',
    region: 'Masaya',
    lat: 11.984,
    lng: -86.161,
    elevation: 635,
    type: 'Caldera',
    lastEruption: '2024',
    vei: 0,
    status: 'Active',
    notable: true,
    wikiTitle: 'Masaya_Volcano',
    description: [
      "Masaya is one of the world's most accessible active volcanoes, where visitors can drive right to the edge of the smoking Santiago crater. It hosts a rare, persistent lava lake that emits massive quantities of sulfur dioxide gas.",
      "Spanish conquistadors called it 'La Boca del Infierno' (The Mouth of Hell) and erected a cross on the crater rim to exorcise the spirits they believed dwelled within the molten depths."
    ]
  },
  {
    id: 'telica',
    name: 'Telica',
    country: 'Nicaragua',
    region: 'León',
    lat: 12.602,
    lng: -86.845,
    elevation: 1061,
    type: 'Stratovolcano',
    lastEruption: '2025',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'Telica_Volcano',
    description: [
      "Telica is one of Nicaragua's most active volcanoes, featuring a multi-layered crater complex. It is famous for persistent hydrothermal activity — at night, the glow from the magma below can often be seen reflecting off the gas clouds above the crater.",
      "The volcano frequently produces 'micro-explosions' that eject small amounts of ash and incandescent rocks, making it a favorite for researchers studying low-level volcanic persistence."
    ]
  },
  {
    id: 'san-cristobal',
    name: 'San Cristóbal',
    country: 'Nicaragua',
    region: 'Chinandega',
    lat: 12.702,
    lng: -87.004,
    elevation: 1745,
    type: 'Stratovolcano',
    lastEruption: '2023',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'San_Cristóbal_Volcano',
    description: [
      "Nicaragua's highest volcano, San Cristóbal is a massive smoking presence in the northwest of the country and part of a five-member volcanic complex, known for its incredibly steep slopes and large gas-emitting crater.",
      "It is one of the most prolific emitters of sulfur dioxide in Central America, and its ash fall frequently impacts the nearby city of Chinandega and the surrounding agricultural plains."
    ]
  },
  {
    id: 'concepcion',
    name: 'Concepción',
    country: 'Nicaragua',
    region: 'Isla de Ometepe',
    lat: 11.538,
    lng: -85.622,
    elevation: 1610,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'Concepción_(volcano)',
    description: [
      "One of two volcanoes that form the island of Ometepe in the middle of Lake Nicaragua. Concepción is a near-perfect cone and is considered one of the most active and dangerous volcanoes in the country.",
      "The weight of the growing volcano is actually causing the lake bed beneath the island to deform — a geological phenomenon scientists study to understand how large mountains interact with the Earth's crust."
    ]
  },
  {
    id: 'maderas',
    name: 'Maderas',
    country: 'Nicaragua',
    region: 'Isla de Ometepe',
    lat: 11.446,
    lng: -85.515,
    elevation: 1394,
    type: 'Stratovolcano',
    lastEruption: 'Ancient',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Maderas_Volcano',
    description: [
      "The quieter, 'green' twin of Concepción on Ometepe Island. Maderas is covered in dense cloud forest and contains a cold freshwater crater lake. It is a biodiversity hotspot, famous for its coffee plantations and pre-Columbian petroglyphs.",
      "While considered dormant, a series of mudslides in the 1990s killed several people, proving that even inactive volcanoes pose significant landslide risks in tropical climates."
    ]
  },
  {
    id: 'turrialba',
    name: 'Turrialba',
    country: 'Costa Rica',
    region: 'Cartago',
    lat: 10.025,
    lng: -83.767,
    elevation: 3340,
    type: 'Stratovolcano',
    lastEruption: '2023',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Turrialba_Volcano',
    description: [
      "Turrialba is the twin of Irazú volcano. After decades as a popular hiking destination with a green forested crater, it reawakened in 2010. Constant ash eruptions since have scorched the surrounding forests and often forced the closure of the airport in San José.",
      "The summit features three craters, and on clear days it offers one of the few places in Central America where you can see the Caribbean coast from a volcanic rim."
    ]
  },
  {
    id: 'poas',
    name: 'Poás',
    country: 'Costa Rica',
    region: 'Alajuela',
    lat: 10.200,
    lng: -84.233,
    elevation: 2708,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'Poás_Volcano',
    description: [
      "Poás contains one of the world's most acidic lakes, Laguna Caliente, which frequently changes color from turquoise to milky gray. The volcano is famous for geyser-like eruptions of mud and acid water.",
      "Because of its proximity to San José and its active boiling crater, it is one of the most heavily monitored volcanoes in Latin America to ensure the safety of the thousands of tourists who visit its rim daily."
    ]
  },
  {
    id: 'baru',
    name: 'Volcán Barú',
    country: 'Panama',
    region: 'Chiriquí',
    lat: 8.808,
    lng: -82.543,
    elevation: 3474,
    type: 'Stratovolcano',
    lastEruption: '~1550 AD',
    vei: 2,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Volcán_Barú',
    description: [
      "The highest peak in Panama. From its summit on a clear day you can see both the Pacific Ocean and the Caribbean Sea simultaneously — the only place on Earth where this is possible.",
      "The volcano's western flank is missing, the result of a massive prehistoric collapse that sent debris all the way to the Pacific coast. Today, the fertile volcanic soil around its base produces some of the world's most expensive and award-winning coffee."
    ]
  },
  {
    id: 'soufriere-st-vincent',
    name: 'La Soufrière (St. Vincent)',
    country: 'Saint Vincent and the Grenadines',
    region: 'Caribbean',
    lat: 13.333,
    lng: -61.183,
    elevation: 1234,
    type: 'Stratovolcano',
    lastEruption: '2021',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'La_Soufrière_(Saint_Vincent)',
    description: [
      "The highest peak on Saint Vincent. The April 2021 event forced the evacuation of the entire northern third of the island and caused widespread power outages and water shortages across the Caribbean.",
      "The eruption completely destroyed the volcano's 1979 lava dome and replaced it with a massive new crater, altering the island's landscape in just a few days."
    ]
  },
  {
    id: 'pichincha',
    name: 'Guagua Pichincha',
    country: 'Ecuador',
    region: 'Pichincha',
    lat: -0.171,
    lng: -78.598,
    elevation: 4784,
    type: 'Stratovolcano',
    lastEruption: '2004',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'Pichincha_Volcano',
    description: [
      "Guagua Pichincha looms directly over Quito, the capital of Ecuador. In 1999 the volcano roared to life after a century of quiet, covering the city in several centimeters of ash and forcing the international airport to close for weeks.",
      "The volcano consists of two main peaks: Rucu (old) and Guagua (young). It is closely monitored because even a minor eruption can cause significant economic disruption to the two million people living at its base."
    ]
  },
  {
    id: 'tungurahua',
    name: 'Tungurahua',
    country: 'Ecuador',
    region: 'Tungurahua',
    lat: -1.468,
    lng: -78.442,
    elevation: 5023,
    type: 'Stratovolcano',
    lastEruption: '2016',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Tungurahua',
    description: [
      "Known as 'The Throat of Fire,' Tungurahua is famous for its long, violent eruptive cycles. In 1999 the entire town of Baños at its base was evacuated for months, though it was ultimately spared from major destruction.",
      "The volcano is a classic laboratory for studying pyroclastic flows, and it hosts one of the world's most famous 'end-of-the-world' swing sets on a ridge overlooking its active crater."
    ]
  },
  {
    id: 'quilotoa',
    name: 'Quilotoa',
    country: 'Ecuador',
    region: 'Cotopaxi',
    lat: -0.850,
    lng: -78.900,
    elevation: 3914,
    type: 'Caldera',
    lastEruption: '~1280 AD',
    vei: 6,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Quilotoa',
    description: [
      "The site of a massive VEI-6 eruption roughly 800 years ago, which produced pyroclastic flows that reached the Pacific Ocean. Today the 3-kilometer-wide caldera is filled with a stunning 250-meter-deep lake with a brilliant greenish-blue tint.",
      "The lake's color comes from dissolved volcanic minerals, and carbon dioxide occasionally bubbles to the surface from the still-active hydrothermal system deep beneath the caldera floor."
    ]
  },
  {
    id: 'cayambe',
    name: 'Cayambe',
    country: 'Ecuador',
    region: 'Pichincha',
    lat: 0.023,
    lng: -77.986,
    elevation: 5790,
    type: 'Stratovolcano',
    lastEruption: '1786',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Cayambe_(volcano)',
    description: [
      "Cayambe is the only point on the Earth's equator that is covered in permanent snow. It is a massive complex volcano sitting just north of the equator line and is the third-highest peak in Ecuador.",
      "Despite its long period of quiet, a surge in earthquake activity in 2016 reminded scientists that the volcano's massive ice cap poses a significant lahar threat to the agricultural valleys below."
    ]
  },
  {
    id: 'parinacota',
    name: 'Parinacota',
    country: 'Chile / Bolivia',
    region: 'Andes',
    lat: -18.166,
    lng: -69.143,
    elevation: 6348,
    type: 'Stratovolcano',
    lastEruption: '~290 AD',
    vei: 2,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Parinacota_(volcano)',
    description: [
      "Part of the Nevados de Payachata twin-volcano complex, Parinacota is a stunningly symmetrical peak reflected in the high-altitude Lake Chungará. Roughly 8,000 years ago a massive collapse of the mountain's flank created a debris avalanche that dammed local rivers to form the lake.",
      "The debris from that collapse covers a vast area and is one of the best examples of 'hummocky' volcanic terrain visible on Earth."
    ]
  },
  {
    id: 'llaima',
    name: 'Llaima',
    country: 'Chile',
    region: 'Araucanía',
    lat: -38.692,
    lng: -71.729,
    elevation: 3125,
    type: 'Stratovolcano',
    lastEruption: '2009',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Llaima_Volcano',
    description: [
      "One of the largest and most active volcanoes in Chile, Llaima sits within Conguillío National Park, surrounded by ancient Monkey Puzzle (Araucaria) forests. It features two main peaks and is known for its frequent lava flows.",
      "Its eruptions often interact with summit glaciers, creating dangerous lahars. The volcano's activity has been documented by the indigenous Mapuche people for centuries, who consider it a powerful spiritual site."
    ]
  },
  {
    id: 'lonquimay',
    name: 'Lonquimay',
    country: 'Chile',
    region: 'Araucanía',
    lat: -38.330,
    lng: -71.580,
    elevation: 2865,
    type: 'Stratovolcano',
    lastEruption: '1990',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Lonquimay_(volcano)',
    description: [
      "On Christmas Day 1988 a new vent called 'Navidad' opened on the flank of Lonquimay. The eruption lasted for over a year, producing a massive lava flow and emitting fluorine-rich gases that caused significant livestock losses in the region.",
      "The volcano is a popular ski destination today, with its perfectly conical summit providing a dramatic backdrop for the Malalcahuello National Reserve."
    ]
  },
  {
    id: 'puyehue',
    name: 'Puyehue-Cordón Caulle',
    country: 'Chile',
    region: 'Los Ríos',
    lat: -40.590,
    lng: -72.117,
    elevation: 2236,
    type: 'Complex Volcano',
    lastEruption: '2012',
    vei: 5,
    status: 'Active',
    notable: true,
    wikiTitle: 'Puyehue-Cordón_Caulle',
    description: [
      "In 2011 this volcanic complex produced a massive fissure eruption that sent ash around the southern hemisphere, grounding flights as far away as Australia and New Zealand. The eruption covered the local lake district in meters of pumice.",
      "The Cordón Caulle rift zone is a rare example of a volcanic fissure that erupts highly explosive rhyolite lava, rather than the runny basalt typically associated with fissure vents."
    ]
  },
  {
    id: 'calbuco',
    name: 'Calbuco',
    country: 'Chile',
    region: 'Los Lagos',
    lat: -41.330,
    lng: -72.614,
    elevation: 2015,
    type: 'Stratovolcano',
    lastEruption: '2015',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Calbuco_(volcano)',
    description: [
      "Calbuco is considered one of Chile's most dangerous volcanoes due to its history of large, sudden explosive eruptions. Its 2015 eruption occurred with only two hours of prior seismic warning, sending a massive ash column 20 kilometers high.",
      "The volcano's collapse-prone structure means it has a high potential for generating devastating lahars that can sweep through the popular tourist region around Lake Llanquihue."
    ]
  },
  {
    id: 'chaiten',
    name: 'Chaitén',
    country: 'Chile',
    region: 'Los Lagos',
    lat: -42.833,
    lng: -72.646,
    elevation: 1122,
    type: 'Caldera',
    lastEruption: '2011',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Chaitén_Volcano',
    description: [
      "In 2008 Chaitén erupted without any short-term warning after being dormant for more than 9,000 years. The eruption was so intense that the resulting ash plume was visible from space and reached the Atlantic Ocean.",
      "The nearby town of Chaitén was completely evacuated and subsequently destroyed by lahars. The event remains a cautionary tale for volcanologists about the dangers of 'dead' volcanoes suddenly waking up."
    ]
  },
  {
    id: 'hudson',
    name: 'Cerro Hudson',
    country: 'Chile',
    region: 'Aysén',
    lat: -45.900,
    lng: -72.966,
    elevation: 1905,
    type: 'Caldera',
    lastEruption: '2011',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Cerro_Hudson',
    description: [
      "A large ice-filled caldera in the southern Chilean Andes. Its 1991 eruption was the second-largest in Chile during the 20th century, ejecting nearly 3 cubic kilometers of ash and killing thousands of livestock across Patagonia.",
      "Because the caldera is filled with a glacier, any activity causes massive lahars and outburst floods that can destroy the few roads in this remote, rugged region."
    ]
  }
,
  /* ============================================================
     EXPANSION SET — 22 ADDITIONAL SITES
     Mediterranean classics, African Rift volcanoes, Atlantic
     islands, and the Reykjanes fissure system.
     ============================================================ */
  {
    id: 'stromboli',
    name: 'Stromboli',
    country: 'Italy',
    region: 'Aeolian Islands',
    lat: 38.789,
    lng: 15.213,
    elevation: 924,
    type: 'Stratovolcano',
    lastEruption: 'Continuous',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Stromboli',
    description: [
      "Known as the 'Lighthouse of the Mediterranean,' Stromboli has been in near-continuous eruption for at least 2,000 years. Its predictable, rhythmic explosions of molten rock gave their name to the 'Strombolian' eruption style used by volcanologists worldwide.",
      "Its most striking feature is the Sciara del Fuoco (Stream of Fire), a massive horseshoe-shaped scar on the island's flank where lava and pyroclastic debris tumble directly into the Tyrrhenian Sea. Tourist boats time their visits for nightfall, when the glow becomes visible from miles offshore."
    ]
  },
  {
    id: 'vulcano',
    name: 'Vulcano',
    country: 'Italy',
    region: 'Aeolian Islands',
    lat: 38.404,
    lng: 14.962,
    elevation: 501,
    type: 'Stratovolcano',
    lastEruption: '1890',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Vulcano',
    description: [
      "The namesake of all volcanoes — in Roman mythology this island was the forge of Vulcan, god of fire. Its 1888-1890 eruption gave rise to the term 'Vulcanian' eruption, characterizing the violent blast that clears a plug of cooled lava from a volcanic conduit.",
      "Today the island is famous for therapeutic mud baths and intense fumaroles on the crater rim. Rising gas temperatures and CO₂ concentrations led Italian authorities to partially evacuate the port area in 2021 as a precautionary measure."
    ]
  },
  {
    id: 'campi-flegrei',
    name: 'Campi Flegrei',
    country: 'Italy',
    region: 'Campania',
    lat: 40.827,
    lng: 14.139,
    elevation: 458,
    type: 'Caldera',
    lastEruption: '1538',
    vei: 7,
    status: 'Active',
    notable: true,
    wikiTitle: 'Campi_Flegrei',
    description: [
      "The 'Phlegraean Fields' (Burning Fields) is a massive, mostly submerged supervolcano caldera just west of Naples. It contains 24 craters and numerous geothermal sites, including the Solfatara — a fumarole field that has hissed continuously since Roman times.",
      "The area is famous for 'bradyseism' — the gradual rising and falling of the Earth's surface as magma shifts beneath the caldera floor. In the 1980s the town of Pozzuoli rose by nearly two meters in a single uplift episode, requiring large-scale evacuations."
    ]
  },
  {
    id: 'erta-ale',
    name: 'Erta Ale',
    country: 'Ethiopia',
    region: 'Danakil Depression',
    lat: 13.603,
    lng: 40.661,
    elevation: 613,
    type: 'Shield Volcano',
    lastEruption: 'Continuous',
    vei: 0,
    status: 'Active',
    notable: true,
    wikiTitle: 'Erta_Ale',
    description: [
      "Erta Ale — 'Mountain of Light' in the local Afar language — is one of the most inhospitable yet mesmerizing places on Earth. Located in the Afar Triple Junction where three tectonic plates meet, it hosts one of the world's few permanent lava lakes, active since at least 1906.",
      "The local Afar people call it the 'Smoking Mountain' and the 'Gateway to Hell.' Its summit features two pit craters where roiling basaltic lava creates an ever-changing map of glowing cracks and fountains. The trek to reach it crosses one of the lowest, hottest places on the planet."
    ]
  },
  {
    id: 'menengai',
    name: 'Menengai',
    country: 'Kenya',
    region: 'Rift Valley',
    lat: -0.200,
    lng: 36.070,
    elevation: 2278,
    type: 'Caldera',
    lastEruption: '~6050 BC',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Menengai_Caldera',
    description: [
      "One of the largest intact calderas in the world, Menengai formed in a massive collapse roughly 29,000 years ago. The crater floor is covered in rugged lava flows that locals traditionally believed were haunted by the spirits of fallen warriors.",
      "Today the caldera is a major site for geothermal energy production, tapping into the intense heat still lingering just kilometers beneath Kenya's Rift Valley."
    ]
  },
  {
    id: 'longonot',
    name: 'Mount Longonot',
    country: 'Kenya',
    region: 'Rift Valley',
    lat: -0.914,
    lng: 36.446,
    elevation: 2776,
    type: 'Stratovolcano',
    lastEruption: '1863',
    vei: 2,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Longonot',
    description: [
      "A young, beautifully symmetrical volcano with a massive, perfectly circular caldera at its summit. A forest has grown inside the caldera floor, creating an isolated ecosystem protected by the steep volcanic walls.",
      "The mountain's name comes from the Maasai 'Oloonong'ot,' meaning 'mountains of many spurs' — a reference to the deep eroded gullies on its flanks."
    ]
  },
  {
    id: 'karisimbi',
    name: 'Mount Karisimbi',
    country: 'Rwanda / DR Congo',
    region: 'Virunga Mountains',
    lat: -1.500,
    lng: 29.450,
    elevation: 4507,
    type: 'Stratovolcano',
    lastEruption: '~8050 BC',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Karisimbi',
    description: [
      "The highest of the eight major volcanoes in the Virunga chain. Its name comes from the Kinyarwanda word for 'white shell,' referring to the snow that occasionally caps its summit despite its location near the equator.",
      "Karisimbi lies within Volcanoes National Park, world-renowned as one of the last remaining sanctuaries for the endangered mountain gorilla — the population studied by Dian Fossey for nearly two decades."
    ]
  },
  {
    id: 'fogo-cape-verde',
    name: 'Pico do Fogo',
    country: 'Cape Verde',
    region: 'Fogo Island',
    lat: 14.950,
    lng: -24.350,
    elevation: 2829,
    type: 'Stratovolcano',
    lastEruption: '2014',
    vei: 0,
    status: 'Active',
    notable: true,
    wikiTitle: 'Pico_do_Fogo',
    description: [
      "The highest peak in Cape Verde, Pico do Fogo rises from the floor of a massive 9-kilometer-wide caldera called Chã das Caldeiras. The 2014 eruption destroyed two villages within the caldera as lava flows slowly engulfed homes, vineyards, and the only primary school.",
      "The islanders famously produce a unique 'volcanic wine' from grapes grown in the nutrient-rich black ash soil of the caldera floor — and despite the constant threat of eruptions, the people of Chã das Caldeiras refuse to leave permanently."
    ]
  },
  {
    id: 'tristan-da-cunha',
    name: "Queen Mary's Peak",
    country: 'United Kingdom (Tristan da Cunha)',
    region: 'South Atlantic',
    lat: -37.114,
    lng: -12.284,
    elevation: 2062,
    type: 'Shield Volcano',
    lastEruption: '1961',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: "Queen_Mary's_Peak",
    description: [
      "The highest peak on the world's most remote inhabited island. In 1961, the entire population of 264 people had to be evacuated to the United Kingdom when a volcanic vent opened just outside their only settlement, Edinburgh of the Seven Seas.",
      "The islanders eventually returned in 1963, despite lava having destroyed their fish-processing factory. The volcano remains active, a lone sentinel rising from the floor of the South Atlantic 2,400 km from any other land."
    ]
  },
  {
    id: 'el-hierro',
    name: 'El Hierro',
    country: 'Spain',
    region: 'Canary Islands',
    lat: 27.727,
    lng: -18.033,
    elevation: 1501,
    type: 'Shield Volcano',
    lastEruption: '2012',
    vei: 0,
    status: 'Active',
    notable: true,
    wikiTitle: 'El_Hierro',
    description: [
      "In 2011 a submarine eruption occurred just 2 km off the coast, turning the ocean turquoise and producing 'floating rocks' — pumice fragments that bubbled to the surface still warm to the touch.",
      "The island itself was shaped by three massive prehistoric landslides that sent half of the original landmass into the sea, creating the spectacular 1,000-meter-high cliffs of El Golfo on the island's northern coast."
    ]
  },
  {
    id: 'lanzarote',
    name: 'Timanfaya',
    country: 'Spain',
    region: 'Lanzarote, Canary Islands',
    lat: 28.995,
    lng: -13.754,
    elevation: 510,
    type: 'Cinder Cone',
    lastEruption: '1824',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Timanfaya_National_Park',
    description: [
      "The 'Mountains of Fire' were formed during a catastrophic six-year eruption from 1730–1736 that covered a quarter of Lanzarote in lava. The landscape is so lunar-like that NASA used it to train Apollo astronauts for moon-walking missions.",
      "Just centimeters below the surface, the ground temperature reaches 100°C; at a few meters deep, it hits 600°C. A local restaurant uses this geothermal heat to grill meat over an open volcanic pit, with no fuel beyond the heat radiating from the rock itself."
    ]
  },
  {
    id: 'piton-neiges',
    name: 'Piton des Neiges',
    country: 'France (Réunion)',
    region: 'Indian Ocean',
    lat: -21.098,
    lng: 55.480,
    elevation: 3071,
    type: 'Shield Volcano',
    lastEruption: '~20,000 years ago',
    vei: 0,
    status: 'Extinct',
    notable: true,
    wikiTitle: 'Piton_des_Neiges',
    description: [
      "The highest point in the Indian Ocean, Piton des Neiges is the elder, extinct volcano that built most of Réunion Island before its younger sibling Piton de la Fournaise took over the island's volcanic activity.",
      "Erosion has carved three massive amphitheatre-like valleys called 'Cirques' (Cilaos, Mafate, and Salazie) into its flanks. Now UNESCO World Heritage sites, they are known for sheer cliffs and isolated mountain villages — Mafate has no road access at all and is reachable only by helicopter or multi-day hike."
    ]
  },
  {
    id: 'soufriere-guadeloupe',
    name: 'La Grande Soufrière',
    country: 'France (Guadeloupe)',
    region: 'Caribbean',
    lat: 16.044,
    lng: -61.664,
    elevation: 1467,
    type: 'Stratovolcano',
    lastEruption: '1977',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'La_Grande_Soufrière',
    description: [
      "The highest peak in the Lesser Antilles. Its 1976 eruption became the subject of a famous public dispute between volcanologists Haroun Tazieff and Claude Allègre over whether to evacuate the nearby town of Basse-Terre — a debate that reshaped how scientific advice is communicated during volcanic crises.",
      "The volcano is characterized by intense steam vents and acidic springs, and is part of a complex that has produced massive sector collapses in the past, sending parts of the mountain into the Caribbean Sea."
    ]
  },
  {
    id: 'fagradalsfjall',
    name: 'Fagradalsfjall',
    country: 'Iceland',
    region: 'Reykjanes Peninsula',
    lat: 63.905,
    lng: -22.270,
    elevation: 385,
    type: 'Shield Volcano',
    lastEruption: '2023',
    vei: 0,
    status: 'Active',
    notable: true,
    wikiTitle: 'Fagradalsfjall',
    description: [
      "After 800 years of quiet on the Reykjanes Peninsula, Fagradalsfjall reawakened in 2021 with a spectacular 'tourist eruption' — slow-moving basaltic lava easily accessible from Reykjavík, drawing thousands of visitors who hiked to the lava field on weekends.",
      "This eruption marked the beginning of a new volcanic era for the peninsula, characterized by recurring fissure eruptions that have since threatened the town of Grindavík and the famous Blue Lagoon geothermal spa."
    ]
  },
  {
    id: 'sundhnukur',
    name: 'Sundhnúkur',
    country: 'Iceland',
    region: 'Reykjanes Peninsula',
    lat: 63.890,
    lng: -22.420,
    elevation: 220,
    type: 'Fissure Vent',
    lastEruption: '2024',
    vei: 0,
    status: 'Active',
    notable: true,
    wikiTitle: 'Sundhnúkur',
    description: [
      "The Sundhnúkur crater row is part of the Reykjanes volcanic system. In late 2023 and 2024, massive fissures opened along this line, producing 'lava curtains' and flows that necessitated the permanent evacuation of the town of Grindavík.",
      "This system is unique because it has no central mountain; instead, the Earth's crust pulls apart along the Mid-Atlantic Ridge, allowing magma to seep up through long cracks in the ground at intervals separated by centuries of quiet."
    ]
  },
  {
    id: 'grimsvotn',
    name: 'Grímsvötn',
    country: 'Iceland',
    region: 'Vatnajökull',
    lat: 64.416,
    lng: -17.316,
    elevation: 1725,
    type: 'Caldera',
    lastEruption: '2011',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Grímsvötn',
    description: [
      "Iceland's most frequently active volcano sits beneath the 500-meter-thick ice of the Vatnajökull glacier. Its eruptions often trigger 'jökulhlaups' — catastrophic glacial outburst floods that can sweep away bridges and roads.",
      "In 2011 it produced a massive ash plume that briefly disrupted European air travel — a smaller-scale repeat of the 2010 Eyjafjallajökull crisis, and a reminder of the power hidden beneath Iceland's ice caps."
    ]
  },
  {
    id: 'askja',
    name: 'Askja',
    country: 'Iceland',
    region: 'Central Highlands',
    lat: 65.030,
    lng: -16.750,
    elevation: 1516,
    type: 'Caldera',
    lastEruption: '1961',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Askja',
    description: [
      "Askja is a complex of nested calderas in the remote Dyngjufjöll mountains. It is home to Lake Öskjuvatn, one of Iceland's deepest lakes, and Víti — a smaller geothermal crater lake known for its milky blue, comfortably warm water.",
      "The 1875 eruption was so massive that its ash poisoned the land and livestock across much of Iceland, triggering a wave of emigration to North America. Apollo astronauts later trained on the Askja lava fields because the desolate basaltic landscape was considered the closest terrestrial match to the lunar surface."
    ]
  },
  {
    id: 'snaefellsjokull',
    name: 'Snæfellsjökull',
    country: 'Iceland',
    region: 'Snæfellsnes Peninsula',
    lat: 64.808,
    lng: -23.776,
    elevation: 1446,
    type: 'Stratovolcano',
    lastEruption: '~200 AD',
    vei: 2,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Snæfellsjökull',
    description: [
      "This glacier-capped volcano is world-famous as the setting for Jules Verne's 'Journey to the Center of the Earth,' in which the protagonists find the entrance to the subterranean world inside its summit crater.",
      "On clear days the peak is visible across the bay from Reykjavík. It is considered one of Iceland's spiritual 'power spots' and is the focal point of many local legends involving hidden people and ancient elemental spirits."
    ]
  },
  {
    id: 'pico-mountain-azores',
    name: 'Mount Pico',
    country: 'Portugal',
    region: 'Azores',
    lat: 38.468,
    lng: -28.398,
    elevation: 2351,
    type: 'Stratovolcano',
    lastEruption: '1720',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Pico',
    description: [
      "Mount Pico is the highest point in Portugal, rising more than twice as high as any other peak in the Azores. It is a 'volcano within a volcano' — a small cinder cone called Piquinho sits inside its main summit crater.",
      "The island's culture is built entirely on volcanic rock; its UNESCO-listed vineyards are protected from the relentless Atlantic wind by thousands of hand-built walls of black basalt arranged in a labyrinthine grid known as 'currais'."
    ]
  },
  {
    id: 'capelinhos',
    name: 'Capelinhos',
    country: 'Portugal',
    region: 'Faial, Azores',
    lat: 38.601,
    lng: -28.828,
    elevation: 143,
    type: 'Cinder Cone',
    lastEruption: '1958',
    vei: 2,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Capelinhos',
    description: [
      "In 1957, an underwater eruption began just off the coast of Faial. Over 13 months it created a new peninsula, adding nearly 2 square kilometers of land to the island. The eruption forced thousands of residents to emigrate to the United States, dramatically reshaping Azorean diaspora communities in New England.",
      "Today the old Capelinhos lighthouse — which once stood at the edge of the sea — is half-buried in volcanic ash and stands hundreds of meters inland, a stark monument to the power of volcanic land-building."
    ]
  },
  {
    id: 'sao-jorge',
    name: 'São Jorge',
    country: 'Portugal',
    region: 'Azores',
    lat: 38.650,
    lng: -28.000,
    elevation: 1053,
    type: 'Fissure Vent',
    lastEruption: '1907',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'São_Jorge_Island',
    description: [
      "São Jorge is a long, thin island formed by a series of linear fissure eruptions along its central spine. It is famous for its 'Fajãs' — small flat coastal plains at the bottom of steep cliffs, formed by prehistoric lava flows and landslides that pushed seaward into the Atlantic.",
      "In 2022 the island experienced a massive seismic swarm of over 30,000 earthquakes in a few months, sparking fears of a new fissure eruption similar to those documented in the 16th and 18th centuries."
    ]
  },
  {
    id: 'milos',
    name: 'Milos',
    country: 'Greece',
    region: 'Cyclades',
    lat: 36.696,
    lng: 24.439,
    elevation: 748,
    type: 'Stratovolcano',
    lastEruption: 'Ancient',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Milos',
    description: [
      "The entire island of Milos is volcanic, and its unique geology has made it a mining hub since the Neolithic era — it was the primary source of obsidian for the entire Aegean region, traded as far as Mesopotamia for arrowheads and surgical blades.",
      "While there have been no recent eruptions, the island is highly active geothermally, with numerous hot springs and steam vents. It is currently being explored as a major source of renewable geothermal energy for Greece."
    ]
  },
  {
    id: 'nisyros',
    name: 'Nisyros',
    country: 'Greece',
    region: 'Dodecanese',
    lat: 36.586,
    lng: 27.161,
    elevation: 698,
    type: 'Stratovolcano',
    lastEruption: '1888',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Nisyros',
    description: [
      "Nisyros hosts a 4-kilometer-wide caldera containing several hydrothermal craters, the largest of which is named 'Stefanos.' Visitors can walk directly onto the yellow, sulfur-encrusted crater floor — one of the few active calderas anywhere accessible to the casual hiker.",
      "According to Greek mythology, the island was formed when Poseidon hurled a piece of Kos at the giant Polybotes during the Gigantomachy. The volcano's frequent seismic rumbling is said in local tradition to be the trapped giant's breath."
    ]
  }
,
  /* ============================================================
     EXPANSION SET — 12 ADDITIONAL SITES
     Pacific Ring of Fire islands (Vanuatu, Tonga, Solomon Islands,
     PNG), plus Sumatra and Hokkaido additions.
     ============================================================ */
  {
    id: 'ijen',
    name: 'Ijen',
    country: 'Indonesia',
    region: 'East Java',
    lat: -8.058,
    lng: 114.242,
    elevation: 2799,
    type: 'Stratovolcano',
    lastEruption: '1999',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'Ijen',
    description: [
      "Famous for its 'Blue Fire' — the eerie phenomenon caused by the combustion of sulfuric gases at extremely high temperatures, visible only at night. The Ijen caldera also hosts the world's largest highly acidic crater lake, with a pH below 0.5.",
      "The volcano is home to one of the most grueling labor sites on Earth: miners carry 80 kg loads of solid sulfur out of the crater by hand, amid thick toxic fumes, often without protective gear. Their lives have been documented in award-winning photojournalism worldwide."
    ]
  },
  {
    id: 'kerinci',
    name: 'Mount Kerinci',
    country: 'Indonesia',
    region: 'Sumatra',
    lat: -1.697,
    lng: 101.264,
    elevation: 3805,
    type: 'Stratovolcano',
    lastEruption: '2023',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Kerinci',
    description: [
      "The highest volcano in Indonesia and the highest peak on Sumatra. Kerinci is a very active volcano, frequently producing small to moderate ash eruptions from its deep summit crater.",
      "It is surrounded by Kerinci Seblat National Park, one of the last strongholds of the Sumatran Tiger. The climb to the summit passes through cloud forest where hikers occasionally find tracks of the elusive cats in the volcanic mud."
    ]
  },
  {
    id: 'marapi-sumatra',
    name: 'Mount Marapi',
    country: 'Indonesia',
    region: 'West Sumatra',
    lat: -0.381,
    lng: 100.473,
    elevation: 2891,
    type: 'Complex Volcano',
    lastEruption: '2024',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Marapi',
    description: [
      "Often confused with its Javanese near-namesake Merapi, this Marapi is the most active volcano in Sumatra. It has a complex summit with multiple craters that have been intermittently active throughout recorded history.",
      "In late 2023 a sudden eruption occurred while over 70 hikers were on the mountain, leading to significant loss of life. The event was a stark reminder that even moderately active volcanoes can be lethal without warning."
    ]
  },
  {
    id: 'usu',
    name: 'Mount Usu',
    country: 'Japan',
    region: 'Hokkaido',
    lat: 42.541,
    lng: 140.840,
    elevation: 737,
    type: 'Stratovolcano',
    lastEruption: '2000',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Usu',
    description: [
      "Usu is one of Japan's most frequently active volcanoes, sitting on the edge of the scenic Lake Toya caldera. It is known for creating cryptodomes — thick, toothpaste-like lava that pushes up the ground like a giant blister rather than flowing freely.",
      "The 2000 eruption was preceded by intense earthquakes, allowing for a near-perfect evacuation of 15,000 people. Some of the damaged roads and buildings have been preserved exactly as they were as a 'Volcano Disaster Memorial Park'."
    ]
  },
  {
    id: 'bandai',
    name: 'Mount Bandai',
    country: 'Japan',
    region: 'Honshū',
    lat: 37.603,
    lng: 140.076,
    elevation: 1819,
    type: 'Stratovolcano',
    lastEruption: '1888',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Bandai',
    description: [
      "The 1888 eruption of Bandai was a landmark event in volcanology because it was entirely phreatic (steam-driven) yet caused the entire northern side of the mountain to collapse in a massive debris avalanche that buried several villages.",
      "The avalanche dammed local rivers to create a series of beautiful multi-colored lakes known as the Goshiki-numa ('Five-Colored Ponds'), now a major tourist attraction in Fukushima Prefecture."
    ]
  },
  {
    id: 'tavurvur',
    name: 'Tavurvur',
    country: 'Papua New Guinea',
    region: 'New Britain',
    lat: -4.239,
    lng: 152.210,
    elevation: 223,
    type: 'Cinder Cone',
    lastEruption: '2014',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Tavurvur',
    description: [
      "Tavurvur is an active vent within the massive Rabaul Caldera. In 1994 it erupted simultaneously with the nearby Vulcan peak, burying much of the city of Rabaul in heavy ash and forcing its permanent relocation.",
      "A 2014 eruption produced a famous 'sonic boom' captured on video by tourists on a nearby boat — the footage clearly shows the visible shockwave of the explosion traveling through the clouds and hitting the camera seconds later, one of the most striking visualizations of an eruption shock front ever recorded."
    ]
  },
  {
    id: 'bagana',
    name: 'Bagana',
    country: 'Papua New Guinea',
    region: 'Bougainville',
    lat: -6.140,
    lng: 155.195,
    elevation: 1750,
    type: 'Lava Cone',
    lastEruption: '2023',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Bagana',
    description: [
      "Bagana is one of the most prolific lava-producing volcanoes in the world. Unlike most stratovolcanoes, its symmetrical cone is built almost entirely from the slow accumulation of thick andesitic lava flows rather than ash and pyroclastic deposits.",
      "Because of its remote location on Bougainville Island, it is monitored almost exclusively via satellite. It maintains a persistent thermal anomaly at its summit, indicating that magma is always present just below the surface."
    ]
  },
  {
    id: 'manam',
    name: 'Manam',
    country: 'Papua New Guinea',
    region: 'Manam Island',
    lat: -4.080,
    lng: 145.037,
    elevation: 1807,
    type: 'Stratovolcano',
    lastEruption: '2022',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Manam',
    description: [
      "Manam is a 10-kilometer-wide island volcano and one of Papua New Guinea's most active. Its eruptions are often violent, frequently producing large-scale ash clouds and pyroclastic flows down four major valleys that radiate from the summit.",
      "The entire population of the island — nearly 10,000 people — was evacuated to the mainland in 2004 during a major eruption cycle. Many remain in displacement camps two decades later, as the volcano's continued activity makes a permanent return dangerous."
    ]
  },
  {
    id: 'yasur',
    name: 'Mount Yasur',
    country: 'Vanuatu',
    region: 'Tanna Island',
    lat: -19.532,
    lng: 169.447,
    elevation: 361,
    type: 'Stratovolcano',
    lastEruption: 'Continuous',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Yasur',
    description: [
      "Often called the most accessible active volcano in the world, Yasur has been erupting nearly continuously for over 800 years. Captain Cook was drawn to Tanna Island in 1774 by the volcano's persistent nighttime glow, which served as a navigation beacon.",
      "The volcano is sacred to followers of the John Frum movement, a syncretic spiritual tradition on Tanna whose adherents believe a messianic figure dwells inside the mountain and will one day bring prosperity and goods to the island's people."
    ]
  },
  {
    id: 'ambrym',
    name: 'Ambrym',
    country: 'Vanuatu',
    region: 'Ambrym Island',
    lat: -16.250,
    lng: 168.120,
    elevation: 1334,
    type: 'Caldera',
    lastEruption: '2019',
    vei: 0,
    status: 'Active',
    notable: true,
    wikiTitle: 'Ambrym',
    description: [
      "Known as the 'Black Island' for its dark volcanic ash, Ambrym features a massive 12-kilometer-wide caldera containing two main active cones: Marum and Benbow.",
      "Until a major drainage event in late 2018, these cones hosted some of the world's most spectacular lava lakes. The magma eventually drained sideways into the sea through a submarine fissure, causing the caldera floor to drop dramatically and the lakes to disappear overnight."
    ]
  },
  {
    id: 'kavachi',
    name: 'Kavachi',
    country: 'Solomon Islands',
    region: 'Pacific Ocean',
    lat: -9.020,
    lng: 157.950,
    elevation: -20,
    type: 'Submarine Volcano',
    lastEruption: '2024',
    vei: 0,
    status: 'Active',
    notable: true,
    wikiTitle: 'Kavachi',
    description: [
      "Nicknamed 'Sharkcano' after researchers using underwater ROVs discovered hammerhead and silky sharks living inside the warm, acidic waters of the active submarine crater. Kavachi is one of the most active underwater volcanoes in the Pacific.",
      "It frequently erupts to create temporary islands, which are then quickly eroded back below sea level by waves. The discovery of macrofauna thriving inside an active volcanic vent has reshaped how scientists think about the limits of where life can survive."
    ]
  },
  {
    id: 'tonga-hunga',
    name: 'Hunga Tonga–Hunga Haʻapai',
    country: 'Tonga',
    region: 'Pacific Ocean',
    lat: -20.545,
    lng: -175.393,
    elevation: 114,
    type: 'Submarine Caldera',
    lastEruption: '2022',
    vei: 6,
    status: 'Active',
    notable: true,
    wikiTitle: '2022_Hunga_Tonga–Hunga_Haʻapai_eruption',
    description: [
      "In January 2022 this submarine volcano produced the largest atmospheric explosion recorded by modern instruments. The eruption sent an ash plume 57 kilometers high — the first ever observed to reach the mesosphere — and was the most powerful natural explosion since Krakatoa in 1883.",
      "The eruption triggered a trans-oceanic tsunami that struck coasts as far away as Peru, and sent atmospheric pressure shockwaves circling the globe multiple times over several days. It effectively obliterated the small island that had been built during previous eruptions in 2014–2015."
    ]
  }
,
  /* ============================================================
     EXPANSION SET — 50 ADDITIONAL SITES
     Filling regional gaps: more Kamchatka & Aleutians, Bolivia/Peru
     Andes, Mariana Islands, additional East African Rift, Indonesian
     outer islands (Halmahera, Sangihe), and Trans-Mexican belt.
     ============================================================ */
  {
    id: 'bezymianny',
    name: 'Bezymianny',
    country: 'Russia',
    region: 'Kamchatka',
    lat: 55.972,
    lng: 160.595,
    elevation: 2882,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Bezymianny',
    description: [
      "Bezymianny ('the unnamed one') was thought to be extinct until its sudden 1956 eruption — a directed lateral blast that became the textbook case for understanding Mount St. Helens 24 years later.",
      "The blast removed 200 meters from the summit and devastated 500 km² of taiga forest. Soviet volcanologists studied the event in remarkable detail, and their findings reshaped global understanding of how 'dead' volcanoes can fail catastrophically."
    ]
  },
  {
    id: 'koryaksky',
    name: 'Koryaksky',
    country: 'Russia',
    region: 'Kamchatka',
    lat: 53.321,
    lng: 158.688,
    elevation: 3456,
    type: 'Stratovolcano',
    lastEruption: '2009',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'Koryaksky',
    description: [
      "One of Kamchatka's 'Home Volcanoes' — visible from the regional capital Petropavlovsk-Kamchatsky. A near-perfect symmetrical cone, it forms a dramatic backdrop to the city of 180,000 people.",
      "After 53 years of dormancy, it began emitting plumes of steam and ash in 2008, prompting an upgrade in monitoring. Climbers consider it one of the most challenging summits in Russia due to extreme weather and steep ice flutes."
    ]
  },
  {
    id: 'mutnovsky',
    name: 'Mutnovsky',
    country: 'Russia',
    region: 'Kamchatka',
    lat: 52.453,
    lng: 158.195,
    elevation: 2322,
    type: 'Stratovolcano',
    lastEruption: '2000',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mutnovsky',
    description: [
      "Mutnovsky has one of the most extraordinary geothermal areas on Earth: its summit hosts a complex of fumaroles, mudpots, and acid rivers cutting through ice and snow. It powers Russia's largest geothermal power station.",
      "The volcano's name in Russian means 'cloudy' or 'turbid,' a reference to the constant steam emerging from its active crater — visible from the air as a permanent banner trailing across Kamchatka's southern peninsula."
    ]
  },
  {
    id: 'gorely',
    name: 'Gorely',
    country: 'Russia',
    region: 'Kamchatka',
    lat: 52.558,
    lng: 158.030,
    elevation: 1829,
    type: 'Caldera',
    lastEruption: '2010',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'Gorely',
    description: [
      "A complex shield volcano with eleven craters lined up along its summit ridge, several holding hot acid lakes of vivid blue-green. The volcano's name comes from the Russian word for 'burnt' — a reference to its scorched, blackened slopes.",
      "Despite being a popular hiking destination during summer, Gorely periodically issues phreatic eruptions and elevated gas emissions that can suddenly close the area to visitors."
    ]
  },
  {
    id: 'kambalny',
    name: 'Kambalny',
    country: 'Russia',
    region: 'Kamchatka',
    lat: 51.306,
    lng: 156.875,
    elevation: 2156,
    type: 'Stratovolcano',
    lastEruption: '2017',
    vei: 1,
    status: 'Active',
    notable: false,
    wikiTitle: 'Kambalny',
    description: [
      "The southernmost volcano on the Kamchatka Peninsula. Its 2017 eruption was its first in over 250 years and surprised volcanologists, who had effectively considered it dormant.",
      "Kambalny sits inside the South Kamchatka Federal Reserve, a sanctuary for brown bears that famously gather along the rivers below the volcano during the salmon runs."
    ]
  },
  {
    id: 'kizimen',
    name: 'Kizimen',
    country: 'Russia',
    region: 'Kamchatka',
    lat: 55.130,
    lng: 160.320,
    elevation: 2376,
    type: 'Stratovolcano',
    lastEruption: '2013',
    vei: 3,
    status: 'Active',
    notable: false,
    wikiTitle: 'Kizimen',
    description: [
      "Kizimen reawakened in 2010 after over 80 years of quiet, producing a vigorous eruption of lava domes and pyroclastic flows. The activity continued for several years, building a substantial new summit dome.",
      "Its remote location means most monitoring is done by satellite — the closest settlement is over 100 kilometers away across rough terrain."
    ]
  },
  {
    id: 'great-sitkin',
    name: 'Great Sitkin',
    country: 'United States',
    region: 'Alaska',
    lat: 52.076,
    lng: -176.130,
    elevation: 1740,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 1,
    status: 'Active',
    notable: false,
    wikiTitle: 'Great_Sitkin',
    description: [
      "Great Sitkin is an Aleutian island volcano with an active lava dome. Its 2021 eruption produced a slow lava flow on the summit dome that continued effusively for over two years.",
      "It is one of the most consistently monitored Aleutian volcanoes due to its position beneath major North Pacific air traffic routes."
    ]
  },
  {
    id: 'cleveland-volcano',
    name: 'Mount Cleveland',
    country: 'United States',
    region: 'Alaska',
    lat: 52.825,
    lng: -169.944,
    elevation: 1730,
    type: 'Stratovolcano',
    lastEruption: '2023',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Cleveland_(Alaska)',
    description: [
      "One of the most active volcanoes in the Aleutian Arc, Cleveland is a near-perfectly symmetrical cone forming the western half of Chuginadak Island. Its eruptions tend to be small but frequent, producing ash plumes that affect trans-Pacific aviation.",
      "Its remoteness — over 1,500 km from Anchorage — means the volcano is largely monitored via satellite, with infrequent visits by USGS scientists when sea conditions allow."
    ]
  },
  {
    id: 'bogoslof',
    name: 'Bogoslof Island',
    country: 'United States',
    region: 'Alaska',
    lat: 53.927,
    lng: -168.034,
    elevation: 150,
    type: 'Submarine Volcano',
    lastEruption: '2017',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Bogoslof_Island',
    description: [
      "Mostly submarine, Bogoslof reshapes itself with each eruptive episode — its 2016-2017 sequence dramatically rebuilt the small surface island, producing dozens of explosive events that ejected ash to over 12 km altitude.",
      "First documented by Russian explorer Captain Krenitzin in 1768, Bogoslof has appeared, disappeared, and reappeared above the waves multiple times over the centuries."
    ]
  },
  {
    id: 'novarupta',
    name: 'Novarupta',
    country: 'United States',
    region: 'Alaska',
    lat: 58.270,
    lng: -155.157,
    elevation: 841,
    type: 'Lava Dome',
    lastEruption: '1912',
    vei: 6,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Novarupta',
    description: [
      "Novarupta produced the largest volcanic eruption of the 20th century in June 1912 — larger than Pinatubo, larger than St. Helens, larger than every other eruption since Krakatoa. Yet because it occurred in remote Alaska, it is little-known outside volcanology.",
      "The eruption ejected 13 cubic kilometers of magma in 60 hours and created the 'Valley of Ten Thousand Smokes' — a vast pyroclastic flow deposit that fumed steam for decades and inspired the founding of Katmai National Park."
    ]
  },
  {
    id: 'anatahan',
    name: 'Anatahan',
    country: 'United States',
    region: 'Northern Mariana Islands',
    lat: 16.350,
    lng: 145.670,
    elevation: 790,
    type: 'Stratovolcano',
    lastEruption: '2008',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Anatahan',
    description: [
      "Anatahan had no known historical eruptions until it suddenly came to life in May 2003, producing the largest historical eruption in the Mariana Islands. The volcano's island had been evacuated only a few years earlier following civil unrest.",
      "Subsequent activity into 2008 made it one of the more active Western Pacific volcanoes during that period, with persistent ash plumes affecting flight routes between Japan and Australia."
    ]
  },
  {
    id: 'pagan',
    name: 'Pagan',
    country: 'United States',
    region: 'Northern Mariana Islands',
    lat: 18.130,
    lng: 145.800,
    elevation: 570,
    type: 'Stratovolcano',
    lastEruption: '2021',
    vei: 4,
    status: 'Active',
    notable: false,
    wikiTitle: 'Pagan_(island)',
    description: [
      "Pagan is two volcanoes joined by an isthmus, with the northern cone (Mount Pagan) being the active one. Its 1981 eruption forced the evacuation of the entire island population, who have not been allowed to return permanently due to ongoing activity.",
      "Multiple groups of former residents have campaigned for resettlement rights, but USGS-affiliated assessments continue to classify the volcano's hazards as too high for civilian habitation."
    ]
  },
  {
    id: 'agrigan',
    name: 'Agrigan',
    country: 'United States',
    region: 'Northern Mariana Islands',
    lat: 18.770,
    lng: 145.667,
    elevation: 965,
    type: 'Stratovolcano',
    lastEruption: '1917',
    vei: 4,
    status: 'Dormant',
    notable: false,
    wikiTitle: 'Agrigan',
    description: [
      "The highest peak in the Northern Mariana Islands and a near-perfect stratovolcano cone rising directly from the western Pacific seafloor.",
      "Its 1917 eruption forced the evacuation of all islanders. Today only a small handful of residents have returned, raising livestock and cassava on the rich volcanic soil while monitoring station visits assess the quiet caldera."
    ]
  },
  {
    id: 'sarychev',
    name: 'Sarychev Peak',
    country: 'Russia',
    region: 'Kuril Islands',
    lat: 48.092,
    lng: 153.200,
    elevation: 1496,
    type: 'Stratovolcano',
    lastEruption: '2009',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Sarychev_Peak',
    description: [
      "Sarychev's June 2009 eruption became famous when astronauts aboard the International Space Station photographed it from orbit. The image — showing a perfect mushroom cloud punching through the cloud deck above the Kurils — became one of the most-shared volcanic photos in history.",
      "The eruption produced one of the largest ash plumes in the early 21st century, briefly affecting transpacific aviation between East Asia and North America."
    ]
  },
  {
    id: 'tiatia',
    name: 'Tiatia',
    country: 'Russia',
    region: 'Kuril Islands',
    lat: 44.353,
    lng: 146.255,
    elevation: 1819,
    type: 'Stratovolcano',
    lastEruption: '1981',
    vei: 4,
    status: 'Active',
    notable: false,
    wikiTitle: 'Tiatia',
    description: [
      "A massive symmetrical somma volcano on Kunashir Island in the disputed southern Kurils. Its inner peak rises from a 2-kilometer-wide outer caldera in a textbook nested-cone configuration.",
      "Its 1973 eruption was one of the largest in the Kurils during the 20th century, dropping ash on Hokkaido and forcing a partial evacuation of nearby Soviet military settlements."
    ]
  },
  {
    id: 'sangeang-api',
    name: 'Sangeang Api',
    country: 'Indonesia',
    region: 'Lesser Sunda Islands',
    lat: -8.200,
    lng: 119.067,
    elevation: 1949,
    type: 'Stratovolcano',
    lastEruption: '2022',
    vei: 3,
    status: 'Active',
    notable: false,
    wikiTitle: 'Sangeang_Api',
    description: [
      "An island volcano off the northeast coast of Sumbawa, Sangeang Api is one of Indonesia's most active. Its 2014 eruption produced an ash cloud that spread south to Australia and disrupted flights for several days.",
      "The island's permanent residents were evacuated in 1985 and have not been allowed to return — the volcano's persistent activity makes settlement too dangerous, though some return seasonally to tend cashew and tamarind trees."
    ]
  },
  {
    id: 'gamalama',
    name: 'Gamalama',
    country: 'Indonesia',
    region: 'Halmahera',
    lat: 0.800,
    lng: 127.330,
    elevation: 1715,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 2,
    status: 'Active',
    notable: false,
    wikiTitle: 'Gamalama',
    description: [
      "Gamalama is essentially the entirety of Ternate Island in Indonesia's Maluku Province — the entire island IS the volcano, with the city of Ternate built on its lower flanks.",
      "Once the world's primary source of cloves, the island's volcanic soils built the spice trade that drew European powers to the region in the 16th century. Gamalama has erupted over 60 times in recorded history, regularly disrupting life for the city's quarter-million residents."
    ]
  },
  {
    id: 'lokon',
    name: 'Lokon-Empung',
    country: 'Indonesia',
    region: 'North Sulawesi',
    lat: 1.358,
    lng: 124.792,
    elevation: 1580,
    type: 'Stratovolcano',
    lastEruption: '2015',
    vei: 2,
    status: 'Active',
    notable: false,
    wikiTitle: 'Mount_Lokon',
    description: [
      "Twin peaks just outside the city of Manado in North Sulawesi. The active vent is Tompaluan crater, sitting in the saddle between the two summits.",
      "Lokon's 2011 eruption forced the evacuation of thousands of people from villages on its flanks, though the city of Manado itself escaped major damage. Frequent small explosions continue to disrupt local agriculture and aviation."
    ]
  },
  {
    id: 'karangetang',
    name: 'Karangetang',
    country: 'Indonesia',
    region: 'Sangihe Islands',
    lat: 2.781,
    lng: 125.407,
    elevation: 1784,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 2,
    status: 'Active',
    notable: false,
    wikiTitle: 'Karangetang',
    description: [
      "Karangetang on Siau Island is one of Indonesia's most consistently active volcanoes — it has been in near-continuous eruption since at least 1675. Five distinct summit craters all show varying levels of activity.",
      "The 2018 collapse of a lava dome sent pyroclastic flows into the sea and created small tsunami waves. Despite the constant hazard, around 17,000 people live within range of the volcano's lava flows."
    ]
  },
  {
    id: 'ibu',
    name: 'Ibu',
    country: 'Indonesia',
    region: 'Halmahera',
    lat: 1.488,
    lng: 127.630,
    elevation: 1325,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 2,
    status: 'Active',
    notable: false,
    wikiTitle: 'Mount_Ibu',
    description: [
      "Ibu has been erupting nearly continuously since 1998, with its summit crater hosting a slowly-growing lava dome. The volcano produces hundreds of small explosions per year, dusting the surrounding rainforest with fresh ash.",
      "Time-lapse cameras at Ibu have captured some of the most spectacular footage of small-scale strombolian activity ever recorded, drawing volcano tourists and researchers despite the remote setting."
    ]
  },
  {
    id: 'lewotobi',
    name: 'Lewotobi',
    country: 'Indonesia',
    region: 'Flores',
    lat: -8.530,
    lng: 122.770,
    elevation: 1703,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Lewotobi',
    description: [
      "Lewotobi is a twin volcano consisting of two adjacent stratovolcanoes — Laki-Laki ('male') and Perempuan ('female') — separated by less than 2 kilometers. The active partner is Laki-Laki.",
      "A November 2024 eruption killed at least nine people and forced thousands to evacuate, drawing international attention to a volcano that had been considered low-risk. Recovery and resettlement efforts are ongoing."
    ]
  },
  {
    id: 'iliamna',
    name: 'Mount Iliamna',
    country: 'United States',
    region: 'Alaska',
    lat: 60.032,
    lng: -153.090,
    elevation: 3053,
    type: 'Stratovolcano',
    lastEruption: '~1876',
    vei: 2,
    status: 'Active',
    notable: false,
    wikiTitle: 'Mount_Iliamna',
    description: [
      "A heavily glaciated peak in the Chigmit Mountains of Alaska, often visible from Anchorage on clear days. It is one of the most conspicuous mountains on the western horizon of Cook Inlet.",
      "Iliamna's persistent steaming and elevated heat flow indicate an active hydrothermal system, though it has not erupted in modern record. Periodic ice-avalanche events down its glaciated flanks reach speeds capable of carving deep channels."
    ]
  },
  {
    id: 'spurr',
    name: 'Mount Spurr',
    country: 'United States',
    region: 'Alaska',
    lat: 61.299,
    lng: -152.251,
    elevation: 3374,
    type: 'Stratovolcano',
    lastEruption: '1992',
    vei: 4,
    status: 'Active',
    notable: false,
    wikiTitle: 'Mount_Spurr',
    description: [
      "The highest volcano in the Aleutian Arc and the closest to Anchorage. Its 1992 eruption series at Crater Peak, a side vent, produced ash falls that disrupted Anchorage's airport and caused millions of dollars in damages.",
      "Renewed unrest since 2024 has prompted heightened monitoring, with seismic activity and ground deformation suggesting the volcano may be moving toward another eruption."
    ]
  },
  {
    id: 'wrangell',
    name: 'Mount Wrangell',
    country: 'United States',
    region: 'Alaska',
    lat: 62.005,
    lng: -144.020,
    elevation: 4317,
    type: 'Shield Volcano',
    lastEruption: '1902',
    vei: 1,
    status: 'Active',
    notable: false,
    wikiTitle: 'Mount_Wrangell',
    description: [
      "An immense glaciated shield volcano covering over 800 square kilometers. Among the largest volcanoes by volume in North America, though its low profile relative to its base means it's often visually overlooked.",
      "The summit hosts a small persistent fumarole field that has melted distinctive holes in the ice cap, creating ever-changing patterns visible from aircraft."
    ]
  },
  {
    id: 'pavlof-sister',
    name: 'Pavlof Sister',
    country: 'United States',
    region: 'Alaska',
    lat: 55.453,
    lng: -161.843,
    elevation: 2142,
    type: 'Stratovolcano',
    lastEruption: '1786',
    vei: 2,
    status: 'Dormant',
    notable: false,
    wikiTitle: 'Pavlof_Sister',
    description: [
      "The companion peak to Pavlof Volcano on the Alaska Peninsula, Pavlof Sister is a near-perfect cone that has not erupted in modern observation but remains classified as potentially active.",
      "The pair share a single 4-kilometer-wide base and are visually striking when viewed from passing aircraft on the great-circle routes — twin symmetrical cones rising from the Pacific rim."
    ]
  },
  {
    id: 'sabancaya',
    name: 'Sabancaya',
    country: 'Peru',
    region: 'Arequipa',
    lat: -15.787,
    lng: -71.857,
    elevation: 5976,
    type: 'Stratovolcano',
    lastEruption: '2024',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Sabancaya',
    description: [
      "The most active volcano in Peru, in continuous eruption since 2016. Sabancaya forms part of a spectacular volcanic chain near Arequipa that includes the nearby giants Ampato and Hualca Hualca.",
      "Its frequent ash emissions affect the alpaca-herding villages of the Colca Canyon below — an area that is also one of the country's most-visited tourist destinations, where condors soar against the volcanic backdrop."
    ]
  },
  {
    id: 'ubinas',
    name: 'Ubinas',
    country: 'Peru',
    region: 'Moquegua',
    lat: -16.355,
    lng: -70.903,
    elevation: 5672,
    type: 'Stratovolcano',
    lastEruption: '2023',
    vei: 2,
    status: 'Active',
    notable: false,
    wikiTitle: 'Ubinas',
    description: [
      "Peru's most active volcano in terms of historical eruption count — over 25 events recorded since the 16th century. Its summit crater, hundreds of meters deep, is one of the most remarkable natural pits in South America.",
      "2019 explosive activity sent ash across the Bolivian altiplano and into Chile, forcing temporary closures of regional airports."
    ]
  },
  {
    id: 'el-misti',
    name: 'El Misti',
    country: 'Peru',
    region: 'Arequipa',
    lat: -16.294,
    lng: -71.408,
    elevation: 5822,
    type: 'Stratovolcano',
    lastEruption: '1985',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'El_Misti',
    description: [
      "El Misti looms directly over the city of Arequipa, Peru's second-largest city. Its near-perfect symmetrical cone has made it the city's defining symbol — featured on its coat of arms and visible from virtually every street.",
      "Inca mummies of sacrificed children have been recovered from the summit. The volcano's last major eruption in the 15th century is preserved in oral tradition, and renewed activity would directly threaten the metropolitan population of over a million people."
    ]
  },
  {
    id: 'huaynaputina',
    name: 'Huaynaputina',
    country: 'Peru',
    region: 'Moquegua',
    lat: -16.608,
    lng: -70.851,
    elevation: 4850,
    type: 'Caldera',
    lastEruption: '1600',
    vei: 6,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Huaynaputina',
    description: [
      "Huaynaputina's February 1600 eruption was the largest ever recorded in South America — a VEI-6 event that cooled global temperatures and caused widespread harvest failures in Russia, leading to a famine that killed two million people.",
      "Despite its massive impact, the volcano left almost no physical mountain — the eruption blew the entire summit apart and the resulting feature is more of a depression than a peak. It is the largest volcanic disaster in Inca-era South America."
    ]
  },
  {
    id: 'misti',
    name: 'Coropuna',
    country: 'Peru',
    region: 'Arequipa',
    lat: -15.530,
    lng: -72.660,
    elevation: 6377,
    type: 'Stratovolcano',
    lastEruption: '~700 AD',
    vei: 0,
    status: 'Dormant',
    notable: false,
    wikiTitle: 'Coropuna',
    description: [
      "Coropuna is one of Peru's tallest volcanoes and is capped by the largest tropical glacier outside Africa. The volcano's name in Quechua means 'shining altar,' a reference to its glittering ice fields.",
      "Inca-era ruins on its high slopes show that the mountain was a major pilgrimage site; today the rapid retreat of its glaciers — which feed the rivers of arid southern Peru — is one of the most-monitored climate-change indicators in the Andes."
    ]
  },
  {
    id: 'lascar',
    name: 'Láscar',
    country: 'Chile',
    region: 'Antofagasta',
    lat: -23.370,
    lng: -67.733,
    elevation: 5592,
    type: 'Stratovolcano',
    lastEruption: '2022',
    vei: 2,
    status: 'Active',
    notable: false,
    wikiTitle: 'Lascar_(volcano)',
    description: [
      "Láscar is the most active volcano in the central Andes. Its 1993 eruption produced the largest ash cloud in northern Chile in modern history, dropping ash as far as Argentina and Brazil.",
      "Located in the Atacama Desert at over 4,500 meters base elevation, Láscar's hyper-arid setting means its lava flows and ash deposits are preserved in extraordinary detail — a natural laboratory for planetary scientists studying Mars analogs."
    ]
  },
  {
    id: 'isluga',
    name: 'Isluga',
    country: 'Chile',
    region: 'Tarapacá',
    lat: -19.150,
    lng: -68.833,
    elevation: 5550,
    type: 'Stratovolcano',
    lastEruption: '1913',
    vei: 2,
    status: 'Active',
    notable: false,
    wikiTitle: 'Isluga',
    description: [
      "A remote Andean stratovolcano in northern Chile, sitting close to the Bolivian border. The summit hosts a fumarolic field surrounded by the high salt flats of the Atacama Plateau.",
      "Despite its inactivity in the 20th century, the volcano shows persistent thermal anomalies that suggest a still-warm magma chamber. The surrounding Aymara community holds the mountain as sacred."
    ]
  },
  {
    id: 'guallatiri',
    name: 'Guallatiri',
    country: 'Chile',
    region: 'Arica y Parinacota',
    lat: -18.420,
    lng: -69.092,
    elevation: 6071,
    type: 'Stratovolcano',
    lastEruption: '1960',
    vei: 2,
    status: 'Active',
    notable: false,
    wikiTitle: 'Guallatiri',
    description: [
      "One of Chile's most persistently active volcanoes in the high Andes, with continuous fumarolic activity and frequent steam plumes visible across the altiplano.",
      "Its summit area is partially glaciated and drained by acid streams that color the surrounding salt flats yellow and red — a striking geological feature visible in satellite imagery."
    ]
  },
  {
    id: 'lautaro',
    name: 'Lautaro',
    country: 'Chile',
    region: 'Aysén',
    lat: -49.020,
    lng: -73.550,
    elevation: 3623,
    type: 'Stratovolcano',
    lastEruption: '1979',
    vei: 0,
    status: 'Active',
    notable: false,
    wikiTitle: 'Lautaro',
    description: [
      "The highest volcano in Patagonia, Lautaro is almost entirely buried under the Southern Patagonian Ice Field — only its summit cone protrudes above the ice.",
      "Its exact eruptive history is poorly known because of its extreme remoteness and the ice cover, but ash layers in regional bogs suggest periodic activity throughout the Holocene."
    ]
  },
  {
    id: 'reclus',
    name: 'Reclus',
    country: 'Chile',
    region: 'Magallanes',
    lat: -50.964,
    lng: -73.585,
    elevation: 1000,
    type: 'Caldera',
    lastEruption: '1908',
    vei: 1,
    status: 'Active',
    notable: false,
    wikiTitle: 'Reclus_(volcano)',
    description: [
      "A subglacial caldera at the southern end of the Andes, almost completely hidden beneath the Southern Patagonian Ice Field.",
      "A massive Holocene eruption from Reclus (around 13,000 BC) produced one of the largest volcanic ash deposits in southern South America, covering an area larger than Belgium."
    ]
  },
  {
    id: 'galera',
    name: 'Volcán Sollipulli',
    country: 'Chile',
    region: 'Araucanía',
    lat: -38.970,
    lng: -71.520,
    elevation: 2282,
    type: 'Caldera',
    lastEruption: '1240 AD',
    vei: 5,
    status: 'Dormant',
    notable: false,
    wikiTitle: 'Sollipulli',
    description: [
      "An ice-filled caldera in the Chilean Lake District. Its 4-kilometer-wide crater holds a glacier hundreds of meters thick — the deepest known caldera-fill ice mass in South America.",
      "The volcano's last major eruption in the 13th century produced pyroclastic flows that traveled 30 kilometers, leaving deposits that today form the soils of the surrounding araucaria forests."
    ]
  },
  {
    id: 'sollipulli',
    name: 'Cerro Azul',
    country: 'Chile',
    region: 'Maule',
    lat: -35.653,
    lng: -70.762,
    elevation: 3788,
    type: 'Stratovolcano',
    lastEruption: '1967',
    vei: 3,
    status: 'Active',
    notable: false,
    wikiTitle: 'Cerro_Azul_(Chile_volcano)',
    description: [
      "Part of the Quizapu volcanic complex in central Chile. The 1932 eruption of nearby Quizapu was the largest in 20th-century South America, ejecting roughly 9 cubic kilometers of material.",
      "Cerro Azul itself remains active, with periodic ash and steam emissions monitored by the Servicio Nacional de Geología y Minería."
    ]
  },
  {
    id: 'uturuncu',
    name: 'Uturuncu',
    country: 'Bolivia',
    region: 'Potosí',
    lat: -22.270,
    lng: -67.180,
    elevation: 6008,
    type: 'Stratovolcano',
    lastEruption: '~270,000 years ago',
    vei: 0,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Uturuncu',
    description: [
      "Uturuncu is uniquely 'inflating' — satellite radar measurements show that an area roughly 70 km wide around the volcano has been rising at approximately 1 cm per year for decades, the largest active deformation pattern of any volcano on Earth.",
      "Geologists suspect a vast magma body is slowly accumulating beneath the volcano. While an eruption is not imminent, Uturuncu has become one of the most-studied volcanoes in the Andes — a real-time view of how supervolcanoes might assemble themselves."
    ]
  },
  {
    id: 'sajama',
    name: 'Nevado Sajama',
    country: 'Bolivia',
    region: 'Oruro',
    lat: -18.108,
    lng: -68.883,
    elevation: 6542,
    type: 'Stratovolcano',
    lastEruption: '~25,000 years ago',
    vei: 0,
    status: 'Dormant',
    notable: false,
    wikiTitle: 'Sajama',
    description: [
      "The highest peak in Bolivia, Sajama is a near-perfect symmetrical cone visible across the high altiplano. Its summit ice cap has yielded some of the most important paleoclimate records ever recovered from the tropics.",
      "Around its base grows the world's highest forest — Polylepis tarapacana trees that survive at over 5,000 meters elevation, an ecosystem found almost nowhere else."
    ]
  },
  {
    id: 'oldonyo-darwa',
    name: "Ol Doinyo Darwa",
    country: 'Tanzania',
    region: 'Arusha',
    lat: -3.250,
    lng: 35.760,
    elevation: 4566,
    type: 'Stratovolcano',
    lastEruption: 'Long extinct',
    vei: 0,
    status: 'Extinct',
    notable: false,
    wikiTitle: 'Mount_Meru',
    description: [
      "Mount Meru (Ol Doinyo Darwa) is the second-highest peak in Tanzania, dwarfed only by Kilimanjaro 70 km to the east. It is composed of three distinct cones in a remarkable horseshoe-shaped caldera open to the east.",
      "The breached caldera is the result of a massive prehistoric collapse — the missing eastern flank now lies as a debris field stretching 50 kilometers toward Kilimanjaro."
    ]
  },
  {
    id: 'aluto',
    name: 'Aluto',
    country: 'Ethiopia',
    region: 'Main Ethiopian Rift',
    lat: 7.770,
    lng: 38.785,
    elevation: 2335,
    type: 'Caldera',
    lastEruption: '~50 AD',
    vei: 0,
    status: 'Dormant',
    notable: false,
    wikiTitle: 'Aluto',
    description: [
      "A complex caldera in the East African Rift, hosting one of the largest geothermal energy projects in Ethiopia. The volcano sits between two major rift lakes and its hydrothermal system feeds vast hot springs.",
      "InSAR satellite measurements have detected periodic ground deformation — both uplift and subsidence — suggesting magma movement beneath the caldera. It is one of the most-monitored African Rift volcanoes."
    ]
  },
  {
    id: 'corbetti',
    name: 'Corbetti Caldera',
    country: 'Ethiopia',
    region: 'Main Ethiopian Rift',
    lat: 7.180,
    lng: 38.430,
    elevation: 2320,
    type: 'Caldera',
    lastEruption: '~50,000 years ago',
    vei: 0,
    status: 'Dormant',
    notable: false,
    wikiTitle: 'Corbetti_Caldera',
    description: [
      "A 12-kilometer-wide caldera in the central Ethiopian Rift, surrounding the city of Awasa. The caldera floor hosts a large freshwater lake that supports significant local fisheries.",
      "Geothermal projects on the caldera margins are slated to provide hundreds of megawatts of clean energy, tapping the caldera's still-warm magma chamber kilometers below."
    ]
  },
  {
    id: 'dabbahu',
    name: 'Dabbahu',
    country: 'Ethiopia',
    region: 'Afar Triangle',
    lat: 12.595,
    lng: 40.480,
    elevation: 1442,
    type: 'Stratovolcano',
    lastEruption: '2005',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'Dabbahu_Volcano',
    description: [
      "In September 2005, Dabbahu produced one of the most significant continental rifting events ever directly observed. A 60-kilometer-long fissure opened in just days, with the ground splitting apart by up to 8 meters in places.",
      "The event was a real-time demonstration of how continental rift valleys form — geologists from around the world descended on the area to witness Africa beginning to tear itself in two before their eyes."
    ]
  },
  {
    id: 'mount-meager',
    name: 'Mount Meager',
    country: 'Canada',
    region: 'British Columbia',
    lat: 50.633,
    lng: -123.500,
    elevation: 2680,
    type: 'Stratovolcano',
    lastEruption: '~410 BC',
    vei: 5,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Meager',
    description: [
      "The site of the largest volcanic eruption in Canada in the last 10,000 years — a VEI-5 event around 410 BC that ejected approximately 2 cubic kilometers of material and reached the Plinian eruption column heights.",
      "The volcano sits in an extremely unstable area: massive landslides have swept off its slopes repeatedly, including a 2010 collapse that was Canada's largest historical landslide and dammed a creek to form a temporary lake."
    ]
  },
  {
    id: 'mount-cayley',
    name: 'Mount Cayley',
    country: 'Canada',
    region: 'British Columbia',
    lat: 50.117,
    lng: -123.292,
    elevation: 2385,
    type: 'Stratovolcano',
    lastEruption: '~250,000 years ago',
    vei: 0,
    status: 'Dormant',
    notable: false,
    wikiTitle: 'Mount_Cayley',
    description: [
      "Part of the Garibaldi Volcanic Belt that forms the northernmost extension of the Cascade Volcanic Arc into Canada. Mount Cayley is heavily glaciated and notoriously unstable.",
      "The volcano's flanks have produced multiple massive landslides in geologic time, and its hydrothermal system has so weakened the bedrock that further large-scale collapses are considered likely."
    ]
  },
  {
    id: 'ubehebe',
    name: 'Ubehebe Crater',
    country: 'United States',
    region: 'California',
    lat: 37.011,
    lng: -117.452,
    elevation: 752,
    type: 'Maar',
    lastEruption: '~300 AD',
    vei: 3,
    status: 'Dormant',
    notable: false,
    wikiTitle: 'Ubehebe_Crater',
    description: [
      "A maar volcano in Death Valley National Park — formed when rising magma met groundwater and exploded in a steam blast. The resulting crater is 800 meters across and 235 meters deep, surrounded by smaller secondary craters.",
      "Long thought to be 6,000 years old, more recent radiocarbon dating revealed Ubehebe last erupted only about 800 years ago — a sobering reminder that the eastern Sierra is volcanically active even within human historical timeframes."
    ]
  },
  {
    id: 'salton-buttes',
    name: 'Salton Buttes',
    country: 'United States',
    region: 'California',
    lat: 33.200,
    lng: -115.617,
    elevation: 41,
    type: 'Lava Dome',
    lastEruption: '~1750 BC',
    vei: 0,
    status: 'Dormant',
    notable: false,
    wikiTitle: 'Salton_Buttes',
    description: [
      "A small chain of rhyolite lava domes at the southern end of California's Salton Sea. The buttes mark the surface expression of a major geothermal field where the San Andreas Fault meets the East Pacific Rise.",
      "The area produces hundreds of megawatts of geothermal electricity. Periodic earthquake swarms in the region have raised concern that the magma system feeding the buttes could be reawakening."
    ]
  },
  {
    id: 'soccoro',
    name: 'Bárcena',
    country: 'Mexico',
    region: 'Revillagigedo Islands',
    lat: 19.300,
    lng: -110.820,
    elevation: 322,
    type: 'Cinder Cone',
    lastEruption: '1953',
    vei: 3,
    status: 'Active',
    notable: false,
    wikiTitle: 'Bárcena',
    description: [
      "Bárcena was born in August 1952 from an eruption that built an entire new volcanic island over the course of several months — one of the few times in the 20th century when scientists witnessed an island's birth.",
      "The eruption built a 332-meter cinder cone where there had been only ocean. Today the island is part of the Revillagigedo UNESCO World Heritage marine site, accessible only by special permit."
    ]
  },
  {
    id: 'paluweh',
    name: 'Paluweh',
    country: 'Indonesia',
    region: 'Flores Sea',
    lat: -8.320,
    lng: 121.708,
    elevation: 875,
    type: 'Stratovolcano',
    lastEruption: '2013',
    vei: 3,
    status: 'Active',
    notable: false,
    wikiTitle: 'Paluweh',
    description: [
      "Paluweh forms its own small island in the Flores Sea. Its 2012-2013 eruption killed several people in pyroclastic flows and forced major evacuations of the island's 11,000 residents.",
      "Many residents have refused permanent relocation despite the danger, citing ancestral land rights and the famously rich volcanic soils that produce some of the best-quality rice in eastern Indonesia."
    ]
  },
  {
    id: 'ambae',
    name: 'Ambae',
    country: 'Vanuatu',
    region: 'Penama Province',
    lat: -15.389,
    lng: 167.835,
    elevation: 1496,
    type: 'Shield Volcano',
    lastEruption: '2018',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Ambae',
    description: [
      "In September 2017 and again in 2018, Ambae's summit Lake Voui erupted with such intensity that the entire population of the island — over 11,000 people — was evacuated to neighboring islands. It was Vanuatu's largest evacuation since World War II.",
      "Ambae is one of the largest active volcanoes in the South Pacific by volume. Its three nested summit crater lakes are striking from the air: vivid blue, green, and turbid grey, each colored by different combinations of dissolved volcanic minerals and sulphur."
    ]
  },

  /* ============================================================
     GLOBAL EXPANSION — 20 additional sites
     Africa, Indian Ocean, Caribbean, Central & South America,
     Mediterranean, Iceland, Kurils, New Zealand, Antarctica.
     ============================================================ */
  {
    id: 'nabro',
    name: 'Nabro',
    country: 'Eritrea',
    region: 'Afar Triangle',
    lat: 13.370,
    lng: 41.700,
    elevation: 2218,
    type: 'Stratovolcano',
    lastEruption: '2011',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Nabro',
    description: [
      "Nabro sat essentially unstudied until June 2011, when it produced the largest eruption in Eritrea's recorded history. The eruption was a surprise: there had been no monitoring, no baseline data, and the first indication was a series of strong earthquakes and a massive ash plume detected by satellite.",
      "The eruption killed several people, displaced thousands, and disrupted aviation across the Horn of Africa. Its remoteness — in one of the most geopolitically isolated and physically inhospitable regions on Earth — means it remains poorly monitored to this day."
    ]
  },
  {
    id: 'fogo',
    name: 'Pico do Fogo',
    country: 'Cape Verde',
    region: 'Atlantic Ocean',
    lat: 14.951,
    lng: -24.346,
    elevation: 2829,
    type: 'Stratovolcano',
    lastEruption: '2014',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Fogo_(volcano)',
    description: [
      "Fogo — 'Fire' in Portuguese — is the highest and most active volcano in the Atlantic island chains, and one of the world's largest and most active ocean-island volcanoes. Almost the entire island is a single volcanic edifice.",
      "In 2014, lava flows from a flank eruption overran the two villages inside the caldera — Chã das Caldeiras and Portela — destroying hundreds of homes and burying everything under meters of lava. Residents who had returned after the previous 1995 eruption lost their homes for the second time in a generation."
    ]
  },
  {
    id: 'soufriere-sv',
    name: 'La Soufrière',
    country: 'St. Vincent and the Grenadines',
    region: 'Caribbean',
    lat: 13.334,
    lng: -61.177,
    elevation: 1234,
    type: 'Stratovolcano',
    lastEruption: '2021',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'La_Soufrière',
    description: [
      "In April 2021, La Soufrière erupted explosively for the first time since 1979 — the largest eruption in the Caribbean in decades. A series of violent explosions over several days sent ash 10 kilometers into the atmosphere and blanketed the entire island in grey powder, contaminating water supplies and destroying crops across the northern half of St. Vincent.",
      "Over 16,000 people were evacuated, many by cruise ships and regional coast guard vessels in a massive regional relief effort. The eruption erased years of agricultural development and caused more than $100 million in damage to the small island economy."
    ]
  },
  {
    id: 'kick-em-jenny',
    name: "Kick 'em Jenny",
    country: 'Grenada',
    region: 'Caribbean',
    lat: 12.300,
    lng: -61.637,
    elevation: -185,
    type: 'Submarine Volcano',
    lastEruption: '2017',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: "Kick_'em_Jenny",
    description: [
      "Kick 'em Jenny sits 8 kilometers off the northern coast of Grenada, its summit lurking 185 meters below the surface of the Caribbean Sea. It is the only known active submarine volcano in the Eastern Caribbean, and has erupted more than a dozen times since it was first recorded in 1939 when an eruption built a temporary island.",
      "Cruise ships and pleasure craft are required to maintain a 1.5-kilometer exclusion zone around the summit at all times. Scientists monitor it closely because a future flank collapse could generate a regional tsunami affecting the densely populated Lesser Antilles."
    ]
  },
  {
    id: 'cerro-negro',
    name: 'Cerro Negro',
    country: 'Nicaragua',
    region: 'León',
    lat: 12.507,
    lng: -86.702,
    elevation: 728,
    type: 'Cinder Cone',
    lastEruption: '1999',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Cerro_Negro',
    description: [
      "Cerro Negro is the youngest volcano in Central America — born in an eruption in April 1850 from what had been flat farmland. In the 175 years since, it has erupted over 20 times, growing from a flat vent to a sharp 728-meter cone entirely covered in jet-black basaltic cinders.",
      "The volcano has become famous for an unusual activity: 'volcano boarding' — tourists hike to the summit and slide down its steep, loose cinder flanks on wooden boards at speeds up to 80 km/h. Its frequent eruptions have buried agricultural communities in León on multiple occasions."
    ]
  },
  {
    id: 'nevado-ruiz',
    name: 'Nevado del Ruiz',
    country: 'Colombia',
    region: 'Caldas & Tolima',
    lat: 4.895,
    lng: -75.322,
    elevation: 5321,
    type: 'Stratovolcano',
    lastEruption: '2023',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Nevado_del_Ruiz',
    description: [
      "On November 13, 1985, a relatively small VEI-3 eruption on Nevado del Ruiz melted a fraction of its ice cap. The meltwater entrained volcanic debris into a lahar — a fast-moving volcanic mudflow — that roared down river valleys and buried the town of Armero under six meters of mud within two hours, killing approximately 23,000 of its 29,000 inhabitants. It was the deadliest volcanic disaster of the 20th century after the 1902 Pelée eruption.",
      "Scientists had warned of exactly this scenario for months before the eruption. A geological map published just weeks earlier showed Armero directly in the lahar's path. The disaster became a landmark case study in the lethal consequences of failing to communicate and act on volcanic hazard warnings."
    ]
  },
  {
    id: 'ischia',
    name: 'Ischia',
    country: 'Italy',
    region: 'Campania',
    lat: 40.730,
    lng: 13.897,
    elevation: 787,
    type: 'Caldera',
    lastEruption: '1302',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Ischia',
    description: [
      "The island of Ischia is the exposed summit of a massive resurgent caldera in the Tyrrhenian Sea, just 30 kilometers from Naples. Its last lava eruption in 1302 produced the Arso lava flow, which buried two villages and is still clearly visible cutting across the island's northeastern flank.",
      "The island sits on an active seismic and hydrothermal system — in 2017, a magnitude-4.0 earthquake killed 2 people and destroyed hundreds of buildings. Its famous thermal spas draw millions of tourists annually, but the underlying volcanic system makes it one of the most geologically hazardous holiday destinations in Europe."
    ]
  },
  {
    id: 'colli-albani',
    name: 'Colli Albani',
    country: 'Italy',
    region: 'Lazio',
    lat: 41.729,
    lng: 12.702,
    elevation: 956,
    type: 'Caldera',
    lastEruption: '~40000 BC',
    vei: 6,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Colli_Albani',
    description: [
      "The Colli Albani volcanic complex sits just 25 kilometers southeast of central Rome — it is, in geological terms, the volcano in Rome's backyard. The Castelli Romani hill towns beloved by Roman aristocracy and tourists are built directly on its ancient eruption deposits.",
      "The Romans were unaware their summer villas sat on a dormant caldera. Recent research has shown the Colli Albani is slowly deforming upward, with CO₂ emissions from the soil measurably increasing. Scientists debate whether this indicates a reawakening — a repeat eruption near Rome would be one of the most consequential volcanic events in human history."
    ]
  },
  {
    id: 'pantelleria',
    name: 'Pantelleria',
    country: 'Italy',
    region: 'Sicily Channel',
    lat: 36.747,
    lng: 11.989,
    elevation: 836,
    type: 'Caldera',
    lastEruption: 'Ancient',
    vei: 5,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Pantelleria',
    description: [
      "The entire island of Pantelleria is a volcanic caldera rising from the Sicily Channel between Italy and Tunisia. Its most explosive past eruption — the Cinque Denti caldera collapse — is thought to have produced the pantellerite rhyolites that define the island's distinctive geology and give their name to a whole rock type.",
      "In 1831 a submarine eruption nearby produced a temporary island visible from Pantelleria — the famous 'Ferdinandea' or 'Graham Island' — which was claimed simultaneously by Britain, France, Spain, and Sicily before sinking beneath the waves months later. Another eruption there today would trigger the same comic-opera scramble."
    ]
  },
  {
    id: 'laki',
    name: 'Lakagígar (Laki)',
    country: 'Iceland',
    region: 'Suðurland',
    lat: 64.063,
    lng: -18.228,
    elevation: 818,
    type: 'Fissure Vent',
    lastEruption: '1783',
    vei: 4,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Laki',
    description: [
      "The 1783–84 Laki fissure eruption was the most catastrophic volcanic event in recorded European history. Over eight months, 130 craters along a 27-kilometer fissure poured out 14 cubic kilometers of basalt and, more devastatingly, 120 megatons of sulfur dioxide. The 'Haze Famine' that followed killed approximately 25% of Iceland's population — mostly through fluorine poisoning of livestock — and reshaped European weather patterns for years.",
      "The sulfur dioxide cloud spread across the Northern Hemisphere, lowering temperatures, killing harvests, and contributing to the famine conditions in France that helped ignite the French Revolution. Benjamin Franklin, observing the persistent dry fog from Paris, was the first to speculate that a volcanic eruption could alter global climate."
    ]
  },
  {
    id: 'alaid',
    name: 'Alaid',
    country: 'Russia',
    region: 'Kuril Islands',
    lat: 50.861,
    lng: 155.565,
    elevation: 2339,
    type: 'Stratovolcano',
    lastEruption: '2015',
    vei: 4,
    status: 'Active',
    notable: false,
    wikiTitle: 'Alaid'
  },
  {
    id: 'awu',
    name: 'Awu',
    country: 'Indonesia',
    region: 'North Sulawesi',
    lat: 3.689,
    lng: 125.502,
    elevation: 1320,
    type: 'Stratovolcano',
    lastEruption: '2004',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Awu_(volcano)',
    description: [
      "Awu, on the remote Sangihe Islands of northern Indonesia, has the deadliest eruption record of any Indonesian volcano. Its historical eruptions have killed an estimated 8,000–11,000 people — the 1856 eruption alone killed 3,000, and the 1892 event killed another 1,500.",
      "Most fatalities have come not from lava but from pyroclastic surges and the collapse of a summit crater lake, which converts instantly into a scalding lahar. A large crater lake still occupies the summit, making Awu one of the most closely watched volcanic hazards in eastern Indonesia."
    ]
  },
  {
    id: 'cleveland',
    name: 'Mount Cleveland',
    country: 'United States',
    region: 'Aleutian Islands',
    lat: 52.825,
    lng: -169.944,
    elevation: 1730,
    type: 'Stratovolcano',
    lastEruption: '2023',
    vei: 3,
    status: 'Active',
    notable: false,
    wikiTitle: 'Mount_Cleveland'
  },
  {
    id: 'monowai',
    name: 'Monowai',
    country: 'New Zealand',
    region: 'Kermadec Islands',
    lat: -25.887,
    lng: -177.188,
    elevation: -132,
    type: 'Submarine Volcano',
    lastEruption: '2021',
    vei: 2,
    status: 'Active',
    notable: false,
    wikiTitle: 'Monowai_volcano'
  },

  /* ============================================================
     EURASIAN EXPANSION — Middle East, Central Asia, Europe, Iceland
     Filling geographic gaps across the Eurasian landmass.
     ============================================================ */
  {
    id: 'nemrut-dagi',
    name: 'Nemrut Dağı',
    country: 'Turkey',
    region: 'Van Province',
    lat: 38.647,
    lng: 42.231,
    elevation: 2935,
    type: 'Caldera',
    lastEruption: '1441',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Nemrut_Dağı_(volcano)',
    description: [
      "Not to be confused with the funerary mound of King Antiochus I, this Nemrut is Turkey's largest caldera — a 7-kilometer-wide depression on the western shore of Lake Van. Its last eruption in 1441 AD triggered devastating tsunamis on the lake that destroyed lakeside settlements.",
      "The caldera contains two contrasting lakes: a cold freshwater lake and a smaller hot saline lake at its center that is a direct surface window into the volcano's hydrothermal system — one of the most accessible such features in the Middle East."
    ]
  },
  {
    id: 'kazbek',
    name: 'Mount Kazbek',
    country: 'Georgia',
    region: 'Kazbegi',
    lat: 42.699,
    lng: 44.519,
    elevation: 5047,
    type: 'Stratovolcano',
    lastEruption: '~600 AD',
    vei: 2,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Kazbek',
    description: [
      "Kazbek is Georgia's third-highest peak and a mountain of immense mythological weight — it is said to be where the gods chained Amirani, the Caucasian equivalent of Prometheus, for the theft of fire.",
      "Despite last erupting around 600 AD, the volcano shows persistent hydrothermal activity. The 14th-century Gergeti Trinity Church perched at 2,170 m on the slopes below the summit is one of the most photographed landscapes in the Caucasus."
    ]
  },
  {
    id: 'laacher-see',
    name: 'Laacher See',
    country: 'Germany',
    region: 'Rhineland-Palatinate',
    lat: 50.417,
    lng: 7.267,
    elevation: 270,
    type: 'Caldera',
    lastEruption: '~10900 BC',
    vei: 6,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Laacher_See',
    description: [
      "Laacher See is a tranquil circular lake in the Eifel volcanic field of Germany — and one of Europe's most underappreciated geological hazards. Its eruption around 12,900 years ago was the largest volcanic event in Europe since the last Ice Age, ejecting roughly six cubic kilometers of material and depositing a recognizable ash layer from Ireland to Russia.",
      "CO₂ bubbles still rise visibly from the lake floor today. Recent geophysical surveys have identified a warm magma body beneath the surface, prompting scientists to debate whether the Eifel field is truly dormant or merely in a long inter-eruptive pause."
    ]
  },
  {
    id: 'chaine-des-puys',
    name: 'Chaîne des Puys',
    country: 'France',
    region: 'Auvergne',
    lat: 45.772,
    lng: 2.964,
    elevation: 1465,
    type: 'Cinder Cone',
    lastEruption: '~4350 BC',
    vei: 4,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Chaîne_des_Puys',
    description: [
      "A UNESCO World Heritage site and France's own volcanic chain — 80 cones, domes, and maars erupted over 95,000 years through the heart of the Massif Central, the youngest of which are less than 7,000 years old. The chain's most famous summit, Puy de Dôme, was a Roman temple, a pioneering meteorological station, and a celebrated Tour de France finish.",
      "Scientists rank this among the most likely places in Western Europe to see new volcanic activity in the coming centuries. Its proximity to Clermont-Ferrand (pop. 150,000) makes it a studied case for European volcanic risk."
    ]
  },
  {
    id: 'harrat-khaybar',
    name: 'Harrat Khaybar',
    country: 'Saudi Arabia',
    region: 'Hejaz',
    lat: 25.062,
    lng: 39.961,
    elevation: 2093,
    type: 'Shield Volcano',
    lastEruption: '~640 AD',
    vei: 3,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Harrat_Khaybar',
    description: [
      "Part of the vast Arabian volcanic province — one of the largest on Earth — Harrat Khaybar is a 14,000-square-kilometer lava field scattered with hundreds of cinder cones, lava tubes, and maar lakes. Its last eruption around 640 AD is referenced in early Arabic chronicles.",
      "NASA used the harrat's desolate black basalt fields to train Apollo-era astronauts because the terrain closely resembles the lunar mare. A 2009 seismic swarm nearby briefly raised scientific concern about renewed activity in the region."
    ]
  },
  {
    id: 'barren-island',
    name: 'Barren Island',
    country: 'India',
    region: 'Andaman Islands',
    lat: 12.278,
    lng: 93.858,
    elevation: 354,
    type: 'Stratovolcano',
    lastEruption: '2017',
    vei: 2,
    status: 'Active',
    notable: true,
    wikiTitle: 'Barren_Island_(Andaman)',
    description: [
      "Barren Island is the only confirmed active volcano in South Asia and among the very few in the entire Indian Ocean basin. Part of the same volcanic arc that includes Sumatra and Java, it lies 135 km northeast of Port Blair in the Andaman Sea.",
      "After nearly 150 years of dormancy, it reactivated suddenly in 1991 and has erupted intermittently ever since. The island is entirely uninhabited — accessible only by boat — and is a favored destination for liveaboard diving expeditions crossing the Andaman Sea."
    ]
  },
  {
    id: 'paektu',
    name: 'Paektu Mountain',
    country: 'China / North Korea',
    region: 'Baekdu-daegan',
    lat: 42.005,
    lng: 128.065,
    elevation: 2744,
    type: 'Caldera',
    lastEruption: '1903',
    vei: 7,
    status: 'Active',
    notable: true,
    wikiTitle: 'Baekdu_Mountain',
    description: [
      "Around 946 AD, Paektu Mountain unleashed the 'Millennium Eruption' — one of the largest volcanic events of the past 5,000 years. It ejected an estimated 100 cubic kilometers of material, deposited ash as far as Japan and Russia, and is believed to have caused a multi-year climate perturbation across the Northern Hemisphere.",
      "The volcano carries enormous political and cultural weight: it is the legendary birthplace of the Korean nation, the origin point of the Dangun founding myth, and an intensely propagandized symbol of the North Korean state. Western volcanologists gained rare access for scientific surveys in 2011, revealing an active hydrothermal system that could support another major eruption."
    ]
  },
  {
    id: 'bardarbunga',
    name: 'Bárðarbunga',
    country: 'Iceland',
    region: 'Vatnajökull',
    lat: 64.640,
    lng: -17.530,
    elevation: 2009,
    type: 'Subglacial Volcano',
    lastEruption: '2015',
    vei: 6,
    status: 'Active',
    notable: true,
    wikiTitle: 'Bárðarbunga',
    description: [
      "Bárðarbunga is Iceland's second-largest volcano by volume and one of its most historically powerful systems. In 2014–2015, its Holuhraun eruption was the largest lava outflow in Iceland in 230 years — 1.6 cubic kilometers of basalt poured through a 1.8-kilometer fissure over six months.",
      "The eruption produced SO₂ levels that triggered a public health emergency across Iceland and were detectable across central Europe. The caldera sits under one of the world's largest ice caps; a major sub-glacial eruption here could produce catastrophic jökulhlaup flooding of Iceland's populated coastal plains."
    ]
  },
  {
    id: 'oraefajokull',
    name: 'Öræfajökull',
    country: 'Iceland',
    region: 'East Iceland',
    lat: 64.000,
    lng: -16.650,
    elevation: 2110,
    type: 'Stratovolcano',
    lastEruption: '1727',
    vei: 5,
    status: 'Active',
    notable: true,
    wikiTitle: 'Öræfajökull',
    description: [
      "Öræfajökull hosts Iceland's highest peak and is considered its most dangerous volcano: its 1362 eruption was the largest tephra producer since settlement, so thoroughly burying the farming district of Litla-Hérað that the region's very name was changed to 'Wasteland' (Öræfi).",
      "A repeat eruption today would threaten the Ring Road, the country's main arterial route, and send jökulhlaup floods across southeastern Iceland's agricultural lowlands. A seismic crisis in late 2017 prompted Icelandic authorities to raise the aviation colour code, though no eruption followed."
    ]
  },

  /* ============================================================
     CENTRAL ASIA & TIBET EXPANSION — 10 SITES
     Chinese volcanic fields, Mongolia, Turkey interior, Yemen/Red Sea.
     ============================================================ */
  {
    id: 'tengchong',
    name: 'Tengchong Volcanic Field',
    country: 'China',
    region: 'Yunnan',
    lat: 25.022,
    lng: 98.522,
    elevation: 2865,
    type: 'Stratovolcano',
    lastEruption: '1609',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Tengchong_volcanic_field',
    description: [
      "Tengchong is the most volcanically active region in mainland China — a sprawling field of 97 volcanic cones and craters perched at the edge of the Tibetan Plateau where the Indian and Eurasian tectonic plates grind together. Its fumaroles, hot springs, and geothermal vents are dramatic enough that the area has been dubbed 'the place of fire' in local Bai tradition.",
      "The last confirmed eruption in 1609 devastated local settlements. Today, the volcanic field sits just 130 km from the Myanmar border and is one of the most actively monitored geological zones in China, with scientists concerned that renewed activity could affect the dense populations of the surrounding Yunnan valleys."
    ]
  },
  {
    id: 'wudalianchi',
    name: 'Wudalianchi',
    country: 'China',
    region: 'Heilongjiang',
    lat: 48.720,
    lng: 126.100,
    elevation: 597,
    type: 'Cinder Cone',
    lastEruption: '1721',
    vei: 3,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Wudalianchi',
    description: [
      "Wudalianchi — 'Five Connected Lakes' — is one of China's best-preserved young volcanic landscapes. In 1720–21 a fissure eruption produced lava flows that dammed a local river, creating a chain of five crater lakes still visible today. The lava fields are so fresh and craggy they resemble a moonscape.",
      "The site is a UNESCO Global Geopark and the only place in China where a historical eruption created new lakes documented by Chinese court records. The mineral-rich spring water that emerges through the volcanic rock is commercially bottled as one of China's most popular mineral water brands."
    ]
  },
  {
    id: 'khorgo',
    name: 'Khorgo',
    country: 'Mongolia',
    region: 'Arkhangai Province',
    lat: 48.169,
    lng: 99.847,
    elevation: 2240,
    type: 'Cinder Cone',
    lastEruption: '~8000 BP',
    vei: 2,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Khorgo_(volcano)',
    description: [
      "Khorgo is the youngest and best-preserved volcano in Mongolia — a perfectly formed cinder cone rising from the vast Central Asian steppe whose lava flows dammed the Chuluut River to create the stunning turquoise Terkhiin Tsagaan Lake (White Lake). The lava fields are only around 8,000 years old, geological teenagers.",
      "A nearby lava tube system is one of the longest in Central Asia. The volcano sits in a UNESCO-listed national park, and local Mongolian shamanic tradition regards it as a sacred mountain — the smoke hole of the sky, home to fire spirits whose approval must be sought before climbing."
    ]
  },
  {
    id: 'kunlun-volcano',
    name: 'Kunlun Volcanic Group',
    country: 'China',
    region: 'Xinjiang / Tibet',
    lat: 35.479,
    lng: 81.495,
    elevation: 5808,
    type: 'Cinder Cone',
    lastEruption: '~1951',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Kunlun_volcanic_group',
    description: [
      "The Kunlun Volcanic Group sits at elevations of 5,000–5,800 meters on the Tibetan Plateau — making it one of the highest-altitude active volcanic systems on Earth. A poorly-documented eruption in 1951 reportedly produced lava flows and ash clouds that were observed by local Tibetan nomads and later reported to Chinese geological surveys.",
      "The volcanoes sit atop the strike-slip fault system that accommodates India's collision with Eurasia, producing the unusual high-altitude magmatism. Their remoteness and extreme elevation have kept them among the least-studied active volcanoes on the planet."
    ]
  },
  {
    id: 'hasan-dagi',
    name: 'Hasan Dagi',
    country: 'Turkey',
    region: 'Aksaray / Nigde',
    lat: 38.134,
    lng: 34.172,
    elevation: 3268,
    type: 'Stratovolcano',
    lastEruption: '~6600 BC',
    vei: 4,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Hasan_Dagi',
    description: [
      "Hasan Dagi erupted around 6,600 BC in what may be the first volcanic eruption ever depicted by humans: a Neolithic wall painting discovered at Çatalhöyük — one of the world's earliest cities, just 130 km away — shows a map-like image of a twin-peaked, erupting mountain with a settlement at its foot, which many archaeologists interpret as a contemporaneous record of this eruption.",
      "If this interpretation is correct, the Çatalhöyük fresco is not only the oldest depiction of a volcanic eruption, but also the oldest known map of any kind, predating other cartographic traditions by thousands of years."
    ]
  },
  {
    id: 'suphan-dagi',
    name: 'Suphan Dagi',
    country: 'Turkey',
    region: 'Bitlis Province',
    lat: 38.920,
    lng: 42.830,
    elevation: 4058,
    type: 'Stratovolcano',
    lastEruption: '~800 AD',
    vei: 3,
    status: 'Dormant',
    notable: false,
    wikiTitle: 'Suphan_Dagi'
  },
  {
    id: 'erciyes',
    name: 'Mount Erciyes',
    country: 'Turkey',
    region: 'Kayseri',
    lat: 38.523,
    lng: 35.451,
    elevation: 3917,
    type: 'Stratovolcano',
    lastEruption: '~253 BC',
    vei: 4,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Mount_Erciyes',
    description: [
      "Erciyes is the highest mountain in central Anatolia and the dominant landmark of the ancient city of Caesarea (modern Kayseri). Its ash falls created the surreal landscape of Cappadocia — the region of fairy-chimney rock formations, underground cities, and cave churches carved into soft volcanic tuff that now draws millions of visitors annually.",
      "The volcano's thick blanket of ash, called 'ignimbrite,' blanketed hundreds of square kilometers around Kayseri and proved soft enough for ancient peoples to carve entire subterranean cities like Derinkuyu and Kaymakli. Erciyes itself is now a ski resort — one of Turkey's most popular — operating on slopes that form the volcano's ancient crater rim."
    ]
  },
  {
    id: 'tendurek',
    name: 'Tendurek',
    country: 'Turkey',
    region: 'Agri Province',
    lat: 39.344,
    lng: 43.835,
    elevation: 3584,
    type: 'Shield Volcano',
    lastEruption: '1855',
    vei: 2,
    status: 'Active',
    notable: false,
    wikiTitle: 'Tendurek'
  },
  {
    id: 'jabal-altair',
    name: 'Jabal al-Tair',
    country: 'Yemen',
    region: 'Red Sea',
    lat: 15.550,
    lng: 41.833,
    elevation: 244,
    type: 'Stratovolcano',
    lastEruption: '2007',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Jabal_al-Tair',
    description: [
      "Jabal al-Tair is a small volcanic island in the southern Red Sea that erupted suddenly and violently in September 2007 — the first eruption recorded there in over a century. The eruption killed several Yemeni soldiers stationed on the island within minutes of onset, as lava fountains and fast-moving lava flows overwhelmed their garrison.",
      "The island sits directly on the Red Sea rift — the spreading center that is slowly widening the ocean between Africa and Arabia. Geologically it is a miniature version of Iceland: new crust being created in real time above an active volcanic hotspot along a mid-ocean ridge."
    ]
  },
  {
    id: 'aden-volcanic',
    name: 'Aden Volcanic Field',
    country: 'Yemen',
    region: 'Aden',
    lat: 12.802,
    lng: 45.028,
    elevation: 552,
    type: 'Caldera',
    lastEruption: '~1500 BC',
    vei: 2,
    status: 'Dormant',
    notable: true,
    wikiTitle: 'Aden_volcanic_field',
    description: [
      "The port city of Aden is built inside an extinct volcanic crater — one of the few cities on Earth where the urban street grid follows the contours of an ancient caldera rim. The dramatic natural harbour that made Aden one of the most strategically important ports in history was created when the sea flooded this caldera.",
      "The British recognized the port's volcanic harbor as a natural fortress — it was one of their most prized colonial possessions for over 130 years, guarding the route through the Suez Canal. Today the volcanic geology that built the harbor is the reason for Aden's very existence as a city."
    ]
  },

  /* ============================================================
     SOUTHERN AFRICA EXPANSION — 10 SITES
     East African Rift (south arm), Comoros, Atlantic islands.
     ============================================================ */
  {
    id: 'mount-kenya',
    name: 'Mount Kenya',
    country: 'Kenya',
    region: 'Central Kenya',
    lat: -0.153,
    lng: 37.308,
    elevation: 5199,
    type: 'Stratovolcano',
    lastEruption: '~2.6 million BC',
    vei: 2,
    status: 'Extinct',
    notable: true,
    wikiTitle: 'Mount_Kenya',
    description: [
      "Mount Kenya is Africa's second-highest mountain and one of the most dramatic eroded volcanic remnants on Earth — its jagged twin summits, Batian and Nelion, are the exposed igneous plugs of a volcano that stood perhaps 6,500 meters tall before 2.5 million years of erosion reduced it. It sits almost exactly on the equator yet hosts glaciers.",
      "The mountain is a UNESCO World Heritage Site and sacred in Kikuyu cosmology as Kirinyaga — 'the place of brightness,' where the creator deity Ngai dwells. Kikuyu homesteads were traditionally built with their doors facing the mountain so that prayers traveled directly to the summit."
    ]
  },
  {
    id: 'paka',
    name: 'Paka',
    country: 'Kenya',
    region: 'Turkana County',
    lat: 1.734,
    lng: 36.177,
    elevation: 1697,
    type: 'Shield Volcano',
    lastEruption: '~1000 AD',
    vei: 2,
    status: 'Active',
    notable: false,
    wikiTitle: 'Paka_(volcano)'
  },
  {
    id: 'fantale',
    name: 'Fentale',
    country: 'Ethiopia',
    region: 'Oromia',
    lat: 8.974,
    lng: 39.976,
    elevation: 2007,
    type: 'Stratovolcano',
    lastEruption: '1820',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Fentale',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Fentale_aerial.jpg',
    description: [
      "Fentale is the most recently active central volcano in the Main Ethiopian Rift, dominating the landscape at the northern end of Lake Ziway. Its 3.5-kilometer-wide summit caldera is one of the most photogenic in East Africa — a steep-walled depression with fumaroles still steaming from its floor.",
      "In 1820, a major fissure eruption from its flanks produced lava flows that reached Lake Basaka, visibly reshaping the local geography. The volcano's hydrothermal system heats the ground around its base, and Oromo pastoralist communities have long regarded its summit crater as the home of powerful spirits."
    ]
  },
  {
    id: 'meru',
    name: 'Mount Meru',
    country: 'Tanzania',
    region: 'Arusha',
    lat: -3.244,
    lng: 36.750,
    elevation: 4566,
    type: 'Stratovolcano',
    lastEruption: '1910',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Meru_(Tanzania)',
    description: [
      "Standing 70 kilometers west of Kilimanjaro, Mount Meru is Africa's fourth-highest mountain and a perfectly proportioned stratovolcano whose horseshoe-shaped crater was blasted open by a sector collapse sometime in the past 8,000 years — sending a debris avalanche that left a distinctive hummocky deposit on its eastern plains.",
      "The mountain last erupted in 1910 from an ash cone inside the summit crater. It is one of the best technical volcano climbs in East Africa, rising sharply above the Arusha plains and offering views across to Kilimanjaro. Arusha National Park protects its forests, which shelter buffalo, giraffe, and colobus monkeys on the volcano's lower flanks."
    ]
  },
  {
    id: 'ngorongoro',
    name: 'Ngorongoro Caldera',
    country: 'Tanzania',
    region: 'Ngorongoro District',
    lat: -3.167,
    lng: 35.583,
    elevation: 2382,
    type: 'Caldera',
    lastEruption: '~2 million BC',
    vei: 4,
    status: 'Extinct',
    notable: true,
    wikiTitle: 'Ngorongoro_Caldera',
    description: [
      "The Ngorongoro Caldera is the world's largest intact, unflooded caldera — a 19-kilometer-wide volcanic bowl that collapsed roughly 2 million years ago when a massive Kilimanjaro-sized volcano emptied its magma chamber and caved in. The 300-meter-high caldera walls now form a natural enclosure for the densest concentration of large mammals on Earth.",
      "Some 25,000 large animals live permanently inside the caldera's 260 square kilometers, including the highest density of lions in Africa and one of the last viable black rhinoceros populations. The caldera's ecosystem is self-contained because few animals can easily scale its walls — creating an accidental wildlife sanctuary courtesy of ancient volcanism."
    ]
  },
  {
    id: 'rungwe',
    name: 'Mount Rungwe',
    country: 'Tanzania',
    region: 'Mbeya Region',
    lat: -9.135,
    lng: 33.668,
    elevation: 2961,
    type: 'Stratovolcano',
    lastEruption: '~1100 AD',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Mount_Rungwe',
    description: [
      "Mount Rungwe sits at the junction of the East African Rift's western and eastern branches in a region of active extension and seismicity. It is the southernmost potentially active volcano in the East African Rift Valley and last produced lava flows around 1,000 years ago — recent enough to be considered active by volcanological standards.",
      "The mountain's slopes are home to Tanzania's rarest primate: the kipunji monkey, discovered as recently as 2003. The surrounding Kipengere and Poroto mountain ranges form part of the Eastern Afromontane Biodiversity Hotspot, where the volcanic soils of the ancient eruptions have created some of East Africa's most productive highland farmland."
    ]
  },
  {
    id: 'bouvetoya',
    name: 'Bouvetoya',
    country: 'Norway',
    region: 'South Atlantic Ocean',
    lat: -54.420,
    lng: 3.358,
    elevation: 780,
    type: 'Shield Volcano',
    lastEruption: '~1955',
    vei: 1,
    status: 'Active',
    notable: true,
    wikiTitle: 'Bouvet_Island',
    description: [
      "Bouvetoya is the most remote island on Earth — the nearest land is Antarctica, 1,700 km to the south; the nearest human settlement, on Tristan da Cunha, is 2,500 km away. This Norwegian dependency is entirely glaciated, battered by subantarctic storms year-round, and has never been permanently inhabited.",
      "In 1979, a satellite detected a mysterious double flash of light near Bouvetoya that had the signature of a nuclear weapons test. The event — known as the 'Vela Incident' — was never officially explained and remains one of the Cold War's most enduring unresolved mysteries. The island's volcanic activity is known only from satellite thermal anomalies."
    ]
  },
  {
    id: 'silali',
    name: 'Silali',
    country: 'Kenya',
    region: 'Turkana County',
    lat: 1.158,
    lng: 36.234,
    elevation: 1528,
    type: 'Shield Volcano',
    lastEruption: '~1000 BC',
    vei: 3,
    status: 'Active',
    notable: false,
    wikiTitle: 'Silali'
  },
  {
    id: 'ol-donyo-sabuk',
    name: 'Ol Donyo Sabuk',
    country: 'Kenya',
    region: 'Machakos County',
    lat: -1.046,
    lng: 37.247,
    elevation: 2145,
    type: 'Shield Volcano',
    lastEruption: 'Ancient',
    vei: 1,
    status: 'Extinct',
    notable: false
  },

  /* ============================================================
     EUROPE EXPANSION — Iberian Peninsula, Azores, Central Europe
     No Italy. Volcanoes in Spain (Canaries extra), Portugal (Azores),
     and Central European volcanic fields.
     ============================================================ */
  {
    id: 'sete-cidades',
    name: 'Sete Cidades',
    country: 'Portugal',
    region: 'Sao Miguel, Azores',
    lat: 37.857,
    lng: -25.783,
    elevation: 857,
    type: 'Caldera',
    lastEruption: '~1444',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Sete_Cidades',
    description: [
      "Sete Cidades is a 5-kilometer-wide caldera on the western tip of São Miguel island, whose twin crater lakes — one blue, one green — sit side by side separated only by a narrow bridge, their different colors caused by the way wind creates different algae distributions in each basin. It is one of the most photographed landscapes in Portugal.",
      "The caldera has produced 17 eruptions in the past 5,000 years, including a VEI-4 eruption around 1444 AD. Geophysical surveys show an active magmatic system beneath the lake floor. The nearby city of Ponta Delgada (70,000 people), capital of the Azores, sits within potential ash-fall range of a future eruption."
    ]
  },
  {
    id: 'furnas',
    name: 'Furnas',
    country: 'Portugal',
    region: 'Sao Miguel, Azores',
    lat: 37.773,
    lng: -25.317,
    elevation: 805,
    type: 'Caldera',
    lastEruption: '1630',
    vei: 4,
    status: 'Active',
    notable: true,
    wikiTitle: 'Furnas_(volcano)',
    description: [
      "Furnas is the most recently active volcanic system on São Miguel island. The floor of its caldera is dotted with boiling mud pools, fumaroles, and hot springs so intense that locals cook food by burying pots of stew in the geothermally heated ground — a tradition called cozido das Furnas. The resulting dish simmers underground for six hours and is served in the caldera-side restaurant directly above the heat source.",
      "The 1630 eruption produced a violent explosive event inside the caldera that killed hundreds of people. Scientists monitoring Furnas today observe continued ground deformation and CO₂ emissions that suggest an active magma body still sits beneath the caldera at shallow depth."
    ]
  },
  {
    id: 'terceira-caldera',
    name: 'Pico Alto (Terceira)',
    country: 'Portugal',
    region: 'Terceira, Azores',
    lat: 38.732,
    lng: -27.320,
    elevation: 808,
    type: 'Caldera',
    lastEruption: '1761',
    vei: 3,
    status: 'Active',
    notable: true,
    wikiTitle: 'Terceira_Island',
    description: [
      "Terceira — 'the Third Island' — hosts the UNESCO-listed city of Angra do Heroismo, the Atlantic's finest Renaissance city and former capital of Portugal during Philip II's invasion. The island itself is an active volcanic system whose 1761 eruption from submarine vents just offshore caused major destruction along the coast.",
      "The island's name in local culture is 'the island that sings' — due to the constant rumble of volcanic and seismic activity. Terceira sits at the triple junction where the North American, Eurasian, and African tectonic plates meet, making it one of the most seismically complex spots on Earth."
    ]
  },
  {
    id: 'vogelsberg',
    name: 'Vogelsberg',
    country: 'Germany',
    region: 'Hesse',
    lat: 50.530,
    lng: 9.250,
    elevation: 773,
    type: 'Shield Volcano',
    lastEruption: '~5 million BC',
    vei: 2,
    status: 'Extinct',
    notable: true,
    wikiTitle: 'Vogelsberg',
    description: [
      "The Vogelsberg is the largest volcanic region in Central Europe — an ancient shield volcano whose 2,500 square kilometer lava plateau forms a gentle highland in the heart of Hesse. Active between 18 and 5 million years ago, it produced enough basalt to bury the underlying landscape under hundreds of meters of lava, creating the gentle, rounded highlands still visible today.",
      "The volcano's basalt columns were quarried extensively for centuries for paving stones; much of medieval Frankfurt's streets were laid with Vogelsberg rock. Today the region is a UNESCO Global Geopark and a prime destination for dark-sky tourism, its ancient lava plateaus yielding unobstructed views of the Milky Way."
    ]
  },
  {
    id: 'kaiserstuhl',
    name: 'Kaiserstuhl',
    country: 'Germany',
    region: 'Baden-Wurttemberg',
    lat: 48.103,
    lng: 7.688,
    elevation: 557,
    type: 'Complex Volcano',
    lastEruption: '~19 million BC',
    vei: 2,
    status: 'Extinct',
    notable: true,
    wikiTitle: 'Kaiserstuhl',
    description: [
      "The Kaiserstuhl is a small but geologically extraordinary island of volcanic rock rising from the Rhine plain between Germany and France, formed by a series of explosive and intrusive volcanic events between 16 and 19 million years ago. Its name — 'Emperor's Chair' — reflects its prominence above the flat floodplain.",
      "The warm volcanic soils and favorable microclimate created by the Rhine valley trap heat against the volcanic slopes, making Kaiserstuhl Germany's warmest wine-growing region and home to some of its finest Burgundy-style Pinot Noirs. The volcanic geology is directly responsible for the wine's distinctive minerality."
    ]
  }
];
