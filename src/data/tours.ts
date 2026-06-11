/* =========================================================================
   Tour catalogue — static, local data. No backend.
   Tour copy is written in English (sentence case). Proper place names stay
   as-is across languages. UI chrome around the cards is translated via i18n.
   ========================================================================= */

export type TourCategory =
  | 'Canyons'
  | 'Lakes'
  | 'Mountains'
  | 'Desert & wildlife'
  | 'City escape'

export interface Tour {
  id: string
  slug: string
  title: string
  region: string
  category: TourCategory
  /** Short overlay label, e.g. "1 Day" or "2D · 1N" */
  duration: string
  /** 1–2 line description, sentence case */
  description: string
  priceFrom: number
  rating: number
  reviewCount: number
  /** true => red-tint "Bestseller" pill; mutually exclusive with bestPrice in UI */
  bestseller?: boolean
  /** true => gold-tint "★ Best price" pill */
  bestPrice?: boolean
  /** Gradient stops shown as a loading backdrop behind the photo */
  placeholder: { from: string; to: string }
  /** Real photo URL (served from /public/images) */
  image: string
  /** Descriptive alt text for the photograph */
  alt: string
}

// TODO: replace every `placeholder` gradient with a real, true-to-life tour photo
// (warm grade, big skies, room for overlays). Cards want ~4:3 crops.
export const tours: Tour[] = [
  {
    id: 'charyn',
    slug: 'charyn-canyon',
    title: 'Charyn Canyon day trip',
    region: 'Almaty region',
    category: 'Canyons',
    duration: '1 Day',
    description:
      'Walk the Valley of Castles — red rock walls carved over millions of years, with a quiet riverbank lunch at the bottom.',
    priceFrom: 95,
    rating: 5.0,
    reviewCount: 212,
    bestseller: true,
    placeholder: { from: '#b4582f', to: '#7a2f1c' },
    image: '/images/tima-ilyasov-qs9-I9Eam94-unsplash.jpg',
    alt: 'Aerial view of the red sandstone columns of Charyn Canyon under a wide blue sky',
  },
  {
    id: 'kolsai-kaindy',
    slug: 'kolsai-kaindy-lakes',
    title: 'Kolsai & Kaindy lakes',
    region: 'Tien Shan',
    category: 'Lakes',
    duration: '2D · 1N',
    description:
      'Two days in the mountains: alpine Kolsai lakes and the sunken forest of Kaindy, where bare trunks rise straight out of turquoise water.',
    priceFrom: 220,
    rating: 5.0,
    reviewCount: 168,
    bestPrice: true,
    placeholder: { from: '#1f6f78', to: '#0c3b46' },
    image: '/images/vitaly-eroshenko-Jd8CNAZ3Qws-unsplash.jpg',
    alt: 'Submerged tree trunks standing in the clear turquoise water of Kaindy Lake, forested slopes behind',
  },
  {
    id: 'big-almaty-lake',
    slug: 'big-almaty-lake',
    title: 'Big Almaty lake',
    region: 'Tien Shan',
    category: 'Lakes',
    duration: '1 Day',
    description:
      'A short drive from the city to a bright turquoise reservoir ringed by peaks. Easy walking, big views, back by evening.',
    priceFrom: 70,
    rating: 4.9,
    reviewCount: 304,
    bestseller: true,
    placeholder: { from: '#2f8fa8', to: '#13525f' },
    image: '/images/andrey-zvyagintsev-FqL8ChjROIY-unsplash.jpg',
    alt: 'Turquoise Big Almaty Lake surrounded by snow-dusted Tien Shan peaks',
  },
  {
    id: 'altyn-emel',
    slug: 'altyn-emel',
    title: 'Altyn Emel & the singing dune',
    region: 'Almaty region',
    category: 'Desert & wildlife',
    duration: '2D · 1N',
    description:
      'Out to the steppe national park for the giant Singing Dune, chalk-white Aktau mountains and herds of wild kulan.',
    priceFrom: 260,
    rating: 4.9,
    reviewCount: 96,
    placeholder: { from: '#d9a441', to: '#9c6b1f' },
    image: '/images/ilyas-dautov-sHKw-Am60Jc-unsplash.jpg',
    alt: 'The vast Singing Dune of Altyn Emel rising from golden steppe at sunset',
  },
  {
    id: 'medeu-shymbulak',
    slug: 'medeu-shymbulak',
    title: 'Medeu & Shymbulak',
    region: 'Almaty',
    category: 'Mountains',
    duration: '1 Day',
    description:
      'Up from the famous Medeu skating rink to Shymbulak by cable car, with mountain-air views over the whole valley.',
    priceFrom: 60,
    rating: 4.8,
    reviewCount: 341,
    bestPrice: true,
    placeholder: { from: '#5a7d8c', to: '#2b4651' },
    image: '/images/chingiz-t-ow1CvIo_JRM-unsplash.jpg',
    alt: 'Cable car climbing toward Shymbulak resort above Medeu with snowy peaks behind',
  },
  {
    id: 'kolsai-day',
    slug: 'kolsai-first-lake',
    title: 'Kolsai first lake day trip',
    region: 'Tien Shan',
    category: 'Lakes',
    duration: '1 Day',
    description:
      'A long but worth-it day to the first Kolsai lake — pine-forest reflections, a gentle lakeside trail, packed lunch by the water.',
    priceFrom: 110,
    rating: 5.0,
    reviewCount: 87,
    placeholder: { from: '#2c7a5b', to: '#123f2e' },
    image: '/images/marina-lambreht-GdjBEN8xXDM-unsplash.jpg',
    alt: 'Calm first Kolsai lake mirroring the surrounding pine forest and ridgeline',
  },
  {
    id: 'charyn-overnight',
    slug: 'charyn-kolsai-combo',
    title: 'Charyn & Kolsai weekend',
    region: 'Almaty region',
    category: 'Canyons',
    duration: '3D · 2N',
    description:
      'Our most-loved long weekend: the canyons one day, the lakes the next, with a night under clear steppe skies in between.',
    priceFrom: 340,
    rating: 5.0,
    reviewCount: 74,
    bestseller: true,
    placeholder: { from: '#a9552f', to: '#143f46' },
    image: '/images/polina-skaia-ToJNyWpDn9I-unsplash.jpg',
    alt: 'Split landscape of Charyn Canyon red rock and a turquoise mountain lake',
  },
  {
    id: 'almaty-city',
    slug: 'almaty-city-foothills',
    title: 'Almaty city & foothills',
    region: 'Almaty',
    category: 'City escape',
    duration: '1 Day',
    description:
      'A relaxed local day: Green Bazaar, the wooden Zenkov cathedral, mountain viewpoints and the best spot in town for a real plov.',
    priceFrom: 50,
    rating: 4.9,
    reviewCount: 158,
    bestPrice: true,
    placeholder: { from: '#7a6f9c', to: '#3a3357' },
    image: '/images/joy-s-kMadNKDqycc-unsplash.jpg',
    alt: 'Almaty rooftops with the green foothills of the Tien Shan rising behind the city',
  },
]
