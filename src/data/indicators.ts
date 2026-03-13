export interface Indicator {
  id: string;
  emoji: string;
  name: string;
  aka: string;
  desc: string;
  rationale: string;
  signalBad: string;
  signalGood: string;
  weight: number;
  score: number;
  leftLabel: string;
  rightLabel: string;
  source: string;
  sourceUrl: string;
  cadence: string;
  lastUpdated: string;
}

export const indicators: Indicator[] = [
  {
    id: 'lipstick',
    emoji: '💄',
    name: 'The Lipstick Index',
    aka: 'Affordable Luxury Effect',
    desc: 'Coined by Estee Lauder chairman Leonard Lauder in 2001. When the economy tanks, people skip the handbags but splurge on lipstick — small luxuries feel justified when big ones don\'t. Lipstick sales rose 11% during the 2001 recession.',
    rationale: 'Mar 2026: e.l.f. Beauty\'s CFO confirmed the lipstick index is "alive and well" — consumers are trading down from prestige to mass-market brands, a classic recession signal.',
    signalBad: 'Lipstick sales surging',
    signalGood: 'Cosmetics sales steady',
    weight: 0.07,
    score: 62,
    leftLabel: 'Flat sales',
    rightLabel: 'Sales surging',
    source: 'Circana / e.l.f. Beauty earnings',
    sourceUrl: 'https://en.wikipedia.org/wiki/Lipstick_effect',
    cadence: 'Quarterly',
    lastUpdated: 'Mar 2026'
  },
  {
    id: 'stripper',
    emoji: '💃',
    name: 'The Stripper Index',
    aka: "Gentleman's Purchasing Power",
    desc: 'Exotic dancers are among the first to see recessions coming. Tips are pure discretionary spending — when wallets tighten, the champagne room goes quiet first. RCI Hospitality (RICK) stock is the closest public proxy.',
    rationale: 'Mar 2026: RICK revenue fell to $70.3M in Q1 FY2026, down from $76.2M a year ago. Dancers report conditions "worse than 2008." Revenue declined 5.3% YoY.',
    signalBad: 'Tips drying up',
    signalGood: 'Tips flowing',
    weight: 0.11,
    score: 82,
    leftLabel: 'Making it rain',
    rightLabel: 'Clubs empty',
    source: 'RCI Hospitality (RICK) earnings',
    sourceUrl: 'https://stockanalysis.com/stocks/rick/revenue/',
    cadence: 'Quarterly',
    lastUpdated: 'Feb 2026'
  },
  {
    id: 'underwear',
    emoji: '🩲',
    name: 'Men\'s Underwear Index',
    aka: "Greenspan's Standard",
    desc: 'Popularized by former Fed Chair Alan Greenspan himself. The logic: nobody sees men\'s underwear, so when budgets tighten, guys just keep wearing the old ones longer. Sales stagnate, elastic gives out, and economists nod knowingly.',
    rationale: 'Mar 2026: No strong data either way. Slight softness in apparel broadly, but no dramatic underwear-specific decline reported yet.',
    signalBad: 'Sales declining',
    signalGood: 'Underwear sales normal',
    weight: 0.06,
    score: 55,
    leftLabel: 'Buying fresh',
    rightLabel: 'Stretching it out',
    source: 'Hanesbrands (HBI) earnings',
    sourceUrl: 'https://finance.yahoo.com/news/mens-underwear-cardboard-boxes-and-giant-skeletons-offbeat-recession-indicators-to-watch-170247772.html',
    cadence: 'Quarterly',
    lastUpdated: 'Mar 2026'
  },
  {
    id: 'hemline',
    emoji: '👗',
    name: 'The Hemline Index',
    aka: 'Skirt Length Barometer',
    desc: 'Proposed in the 1920s by economist George Taylor. In good times, skirts get shorter. In downturns, hemlines drop to the floor like your 401(k). Mini skirts in the roaring \'20s, long skirts during the Great Depression.',
    rationale: 'Mar 2026: Gen Z is leaning into midi skirts, maxi lengths, and "quiet luxury" aesthetics. Low-rise jeans are back. Google Trends for "maxi skirt" up 40% YoY.',
    signalBad: 'Hemlines dropping',
    signalGood: 'Miniskirts everywhere',
    weight: 0.05,
    score: 68,
    leftLabel: 'Mini skirts',
    rightLabel: 'Floor-length',
    source: 'Google Trends / fashion media',
    sourceUrl: 'https://trends.google.com/trends/',
    cadence: 'Monthly proxy',
    lastUpdated: 'Mar 2026'
  },
  {
    id: 'skyscraper',
    emoji: '🏗️',
    name: 'The Skyscraper Index',
    aka: 'Tower of Babel Curse',
    desc: 'Proposed by Andrew Lawrence in 1999. Every time the world\'s tallest building gets built, a recession follows. Empire State Building → Great Depression. Burj Khalifa → 2008 Meltdown. The theory: mega-towers signal peak hubris.',
    rationale: 'Mar 2026: The Jeddah Tower (1 km tall) hit 80 floors in Jan 2026 and is accelerating. This is the biggest skyscraper alert since the Burj Khalifa.',
    signalBad: 'Record tower underway',
    signalGood: 'No mega projects',
    weight: 0.09,
    score: 85,
    leftLabel: 'Building modest',
    rightLabel: 'Breaking records',
    source: 'Construction tracking / news',
    sourceUrl: 'https://en.wikipedia.org/wiki/Skyscraper_Index',
    cadence: 'Manual',
    lastUpdated: 'Jan 2026'
  },
  {
    id: 'cardboard',
    emoji: '📦',
    name: 'The Cardboard Box Index',
    aka: 'Consumerism Predictor',
    desc: 'Nearly everything shipped uses corrugated cardboard. When box demand drops, people are buying less stuff. Period. Even Alan Greenspan tracked cardboard prices. During 2008, shipments plummeted.',
    rationale: 'Mar 2026: FRED PPI for corrugated boxes flat at 391.5 since Oct 2025. US box shipments hit their lowest Q3 since 2015. Production capacity cut ~10% in 2025.',
    signalBad: 'Shipments declining',
    signalGood: 'Boxes moving',
    weight: 0.11,
    score: 78,
    leftLabel: 'Boxes everywhere',
    rightLabel: 'Shipments tanking',
    source: 'FRED PPI Series PCU32221132221105',
    sourceUrl: 'https://fred.stlouisfed.org/series/PCU32221132221105',
    cadence: 'Monthly',
    lastUpdated: 'Jan 2026'
  },
  {
    id: 'hotWaitress',
    emoji: '🍽️',
    name: 'Hot Waitress Index',
    aka: 'Attractiveness Reallocation Theory',
    desc: 'Coined by New York Magazine in 2009. In good times, attractive people get high-paying gigs based on looks. In downturns, those jobs vanish and the talent pool floods into the service industry.',
    rationale: 'Mar 2026: Leisure & hospitality employment at 16.9M per BLS (FRED USLAH), essentially flat. Some softness in hiring, not dramatic enough for full talent reallocation.',
    signalBad: 'Model-tier servers',
    signalGood: 'Normal staffing',
    weight: 0.05,
    score: 58,
    leftLabel: 'Average service',
    rightLabel: 'Suspiciously hot staff',
    source: 'FRED USLAH / BLS data',
    sourceUrl: 'https://fred.stlouisfed.org/series/USLAH',
    cadence: 'Monthly',
    lastUpdated: 'Feb 2026'
  },
  {
    id: 'champagne',
    emoji: '🍾',
    name: 'The Champagne Index',
    aka: 'Celebratory Mood Gauge',
    desc: 'When times are good, corks pop. When they\'re not, people quietly switch to Prosecco. US champagne sales crashed from 23M bottles pre-2008 to 12.5M by 2009 — nearly halved.',
    rationale: 'Mar 2026: Global shipments fell for the 3rd straight year to 266M bottles (lowest since 2005). France domestic market down 4M bottles. No rebound expected.',
    signalBad: 'Champagne sales down',
    signalGood: 'Champagne flowing',
    weight: 0.08,
    score: 75,
    leftLabel: 'Popping bottles',
    rightLabel: 'Drinking tap water',
    source: 'Comite Champagne (CIVC)',
    sourceUrl: 'https://www.champagne.fr/en/find-out-more/mediaroom/champagne-press/champagne-2025-shipment-review-and-outlook',
    cadence: 'Annual',
    lastUpdated: 'Jan 2026'
  },
  {
    id: 'diaperRash',
    emoji: '👶',
    name: 'The Diaper Rash Index',
    aka: 'Butt Cream Budgeting',
    desc: 'Parents struggling financially start rationing diapers — changing them less frequently. This leads to more diaper rash and higher ointment sales. In 2011, diaper rash ointment sales rose 8% while diaper sales declined.',
    rationale: 'Mar 2026: No dramatic signals yet. Household budgets are tighter with inflation, but diaper-specific data is quiet. Monitoring consumer sentiment.',
    signalBad: 'Ointment sales rising',
    signalGood: 'Diaper sales normal',
    weight: 0.08,
    score: 55,
    leftLabel: 'Fresh diapers',
    rightLabel: 'Rationing diapers',
    source: 'Consumer surveys / WSJ',
    sourceUrl: 'https://www.ksat.com/news/local/2025/02/12/unusual-economic-indicators-lipstick-mens-underwear-champagne-and-work-refrigerators/',
    cadence: 'Quarterly estimate',
    lastUpdated: 'Mar 2026'
  },
  {
    id: 'rWord',
    emoji: '📰',
    name: 'The R-Word Index',
    aka: 'Media Panic Meter',
    desc: 'Created by The Economist. It counts how many times the Washington Post and New York Times use the word "recession" per quarter. More mentions = more panic = closer to reality. It flagged the 1981 and 1990 recessions.',
    rationale: 'Mar 2026: "Recession" mentions have been climbing steadily since mid-2025. Tariff fears, geopolitical tensions, and stagnant jobs keeping the R-word in heavy rotation.',
    signalBad: 'Media mentions surging',
    signalGood: 'R-word is rare',
    weight: 0.16,
    score: 72,
    leftLabel: 'Nobody talking about it',
    rightLabel: '"Recession" everywhere',
    source: 'The Economist / News monitoring',
    sourceUrl: 'https://en.wikipedia.org/wiki/Recession_index',
    cadence: 'Monthly',
    lastUpdated: 'Mar 2026'
  },
  {
    id: 'frozenPizza',
    emoji: '🍕',
    name: 'Frozen Pizza Index',
    aka: 'Eat At Home Signal',
    desc: 'When times get tough, people swap $30 delivery for a $5 DiGiorno. Frozen pizza sales spiked nearly $1 billion during 2020 alone. Premium frozen pizza sales are the real tell — consumers still want to treat themselves, just cheaper.',
    rationale: 'Mar 2026: US frozen pizza market hit $6.5–7B in 2024, well above pre-pandemic levels. Circana data shows frozen food sales 45% higher than 2019. Conagra\'s 2026 report confirms "takeout-style" frozen foods at $14.3B annually as dining-out costs keep climbing.',
    signalBad: 'Frozen pizza sales surging',
    signalGood: 'People eating out',
    weight: 0.07,
    score: 65,
    leftLabel: 'Ordering delivery',
    rightLabel: 'Freezer is stacked',
    source: 'Circana / IBISWorld / Conagra',
    sourceUrl: 'https://www.businessinsider.com/frozen-pizza-sales-recession-indicator-stock-market-crash-consumer-trends-2025-4',
    cadence: 'Quarterly',
    lastUpdated: 'Mar 2026'
  },
  {
    id: 'vasectomy',
    emoji: '✂️',
    name: 'The Vasectomy Index',
    aka: 'The Snip-onomics Gauge',
    desc: 'Urologists report vasectomy consultations spike during recessions — people literally decide they can\'t afford more kids. Vasectomies rose one-third from 2006 to 2010 during the Great Recession. A Journal of Urology study found vasectomy rates positively correlate with unemployment (r = 0.556, p < 0.001).',
    rationale: 'Mar 2026: Vasectomy rates up ~20% nationwide since 2022, with the AUA issuing new 2026 guidelines citing rising annual rates. Economic anxiety compounds the post-Dobbs surge — younger, childless men are driving the trend at unprecedented rates.',
    signalBad: 'Consultations spiking',
    signalGood: 'Normal procedure rates',
    weight: 0.07,
    score: 70,
    leftLabel: 'Planning families',
    rightLabel: 'Snip snip',
    source: 'AUA / Journal of Urology / NPR',
    sourceUrl: 'https://www.npr.org/sections/health-shots/2014/10/21/357786150/when-the-economy-goes-down-vasectomies-go-up',
    cadence: 'Annual estimate',
    lastUpdated: 'Mar 2026'
  }
];

export function getStatus(value: number) {
  if (value < 33) return { level: 'good' as const, label: 'Low' };
  if (value < 66) return { level: 'mid' as const, label: 'Moderate' };
  return { level: 'bad' as const, label: 'Elevated' };
}

export function computeComposite() {
  let totalWeight = 0;
  let weighted = 0;
  indicators.forEach(ind => {
    weighted += (ind.score / 100) * ind.weight;
    totalWeight += ind.weight;
  });
  return Math.round((weighted / totalWeight) * 100);
}
