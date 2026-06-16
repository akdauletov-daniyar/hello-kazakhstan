/* =========================================================================
   Curated day-tour line-up shown in the two overlay-card sections under the
   hero. Text content is presented as provided (English, not translated),
   like the reviews. Images are local 4:3 photos from /public/images.
   ========================================================================= */

export interface DayTour {
  title: string
  description: string
  /** local photo, displayed at a 4:3 aspect ratio */
  image: string
  alt: string
}

export const multiDayTours: DayTour[] = [
  {
    title: 'Altyn Emel National Park 2DAYS 1NIGHT',
    description:
      'Spend whole day exploring Aktau Mountains, Katutau Mountains and Singing Dunes',
    image: '/images/ilyas-dautov-sHKw-Am60Jc-unsplash.jpg',
    alt: 'Golden sand dunes and steppe of Altyn Emel National Park',
  },
  {
    title: 'Kolsay lake, Kaindy Lake & Charyn Canyon, Black Canyon 2DAYS 1NIGHT',
    description:
      'Explore most popular places of Almaty with nightstanding in local village',
    image: '/images/vitaly-eroshenko-Jd8CNAZ3Qws-unsplash.jpg',
    alt: 'Forested mountain lake with clear water in the Almaty region',
  },
  {
    title: 'ALTYN EMEL & CHARYN CANYON, KOLSAY, KAINDY LAKES 3DAY 2 NIGHTS TOUR',
    description:
      'The best way to enjoy the most stunning natural sites of Almaty region during the warm season, spending more time in the mountains',
    image: '/images/polina-skaia-ToJNyWpDn9I-unsplash.jpg',
    alt: 'Red sandstone walls of Charyn Canyon under a clear sky',
  },
]

export const oneDayTours: DayTour[] = [
  {
    title: 'Big Almaty Lake and Ayu Sai Visit center',
    description:
      'Embark on a journey to discover the enchantment of Big Almaty Lake with us! Crystal-clear waters, mountain trails, and astonishing views await you in this natural haven.',
    image: '/images/andrey-zvyagintsev-FqL8ChjROIY-unsplash.jpg',
    alt: 'Turquoise Big Almaty Lake ringed by snow-dusted peaks',
  },
  {
    title: 'Ethno Village "The Hunns"',
    description:
      'Village will take you into the past, into the world of nomads and help you learn more about their life and customs.',
    image: '/images/alexander-liebstuckel-E4z5M71dBbg-unsplash.jpg',
    alt: 'Traditional Kazakh nomadic village scene',
  },
  {
    title: 'Altyn Emel national park',
    description:
      'This national park features chalky mountains, sand dunes, burial mounds, and ancient rock carvings with Express Tour',
    image: '/images/vitaly-eroshenko--4TCHYVkngg-unsplash.jpg',
    alt: 'Chalky Aktau mountain ridges of Altyn Emel',
  },
]
