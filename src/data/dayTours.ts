/* =========================================================================
   Curated day-tour line-up shown in the two overlay-card sections under the
   hero. Free text is localised per language. Images are local 4:3 photos.
   ========================================================================= */

import type { Loc } from './tours'

export interface DayTour {
  title: Loc
  description: Loc
  /** local photo, displayed at a 3:4 (vertical) aspect ratio */
  image: string
  alt: Loc
}

export const multiDayTours: DayTour[] = [
  {
    title: {
      en: 'Altyn Emel National Park 2DAYS 1NIGHT',
      ru: 'Национальный парк Алтын-Эмель, 2 дня 1 ночь',
      zh: '阿尔金-埃梅尔国家公园 2天1夜',
      ar: 'متنزّه ألتين إيمل الوطني — يومان وليلة',
    },
    description: {
      en: 'Spend whole day exploring Aktau Mountains, Katutau Mountains and Singing Dunes',
      ru: 'Целый день исследуйте горы Актау, горы Катутау и Поющие барханы',
      zh: '用一整天探索阿克套山、卡图套山与鸣沙丘',
      ar: 'اقضِ يوماً كاملاً في استكشاف جبال أكتاو وجبال كاتوتاو والكثبان المغنّية',
    },
    image: '/images/ilyas-dautov-sHKw-Am60Jc-unsplash.jpg',
    alt: {
      en: 'Golden sand dunes and steppe of Altyn Emel National Park',
      ru: 'Золотые песчаные барханы и степь национального парка Алтын-Эмель',
      zh: '阿尔金-埃梅尔国家公园的金色沙丘与草原',
      ar: 'كثبان رملية ذهبية وسهوب متنزّه ألتين إيمل الوطني',
    },
  },
  {
    title: {
      en: 'Kolsay lake, Kaindy Lake & Charyn Canyon, Black Canyon 2DAYS 1NIGHT',
      ru: 'Озеро Кольсай, озеро Каинды и Чарынский каньон, Чёрный каньон — 2 дня 1 ночь',
      zh: '科尔赛湖、凯恩迪湖与恰伦大峡谷、黑峡谷 2天1夜',
      ar: 'بحيرة كولساي وبحيرة كايندي ووادي شارين والوادي الأسود — يومان وليلة',
    },
    description: {
      en: 'Explore most popular places of Almaty with nightstanding in local village',
      ru: 'Откройте самые популярные места Алматы с ночёвкой в местном селе',
      zh: '探索阿拉木图最热门的景点，并在当地村庄过夜',
      ar: 'اكتشف أشهر أماكن ألماتي مع المبيت في قرية محلية',
    },
    image: '/images/vitaly-eroshenko-Jd8CNAZ3Qws-unsplash.jpg',
    alt: {
      en: 'Forested mountain lake with clear water in the Almaty region',
      ru: 'Горное озеро с прозрачной водой в окружении леса в Алматинской области',
      zh: '阿拉木图地区一座清澈、被森林环绕的山中湖泊',
      ar: 'بحيرة جبلية بمياه صافية تحيط بها الغابات في منطقة ألماتي',
    },
  },
  {
    title: {
      en: 'ALTYN EMEL & CHARYN CANYON, KOLSAY, KAINDY LAKES 3DAY 2 NIGHTS TOUR',
      ru: 'АЛТЫН-ЭМЕЛЬ И ЧАРЫНСКИЙ КАНЬОН, ОЗЁРА КОЛЬСАЙ, КАИНДЫ — ТУР 3 ДНЯ 2 НОЧИ',
      zh: '阿尔金-埃梅尔与恰伦大峡谷、科尔赛湖、凯恩迪湖 3天2夜之旅',
      ar: 'ألتين إيمل ووادي شارين وبحيرتا كولساي وكايندي — جولة 3 أيام وليلتان',
    },
    description: {
      en: 'The best way to enjoy the most stunning natural sites of Almaty region during the warm season, spending more time in the mountains',
      ru: 'Лучший способ насладиться самыми потрясающими природными местами Алматинской области в тёплый сезон, проводя больше времени в горах',
      zh: '在温暖季节饱览阿拉木图地区最壮丽的自然景观、在山中停留更久的最佳方式',
      ar: 'أفضل طريقة للاستمتاع بأروع المواقع الطبيعية في منطقة ألماتي خلال الموسم الدافئ، مع قضاء وقت أطول في الجبال',
    },
    image: '/images/polina-skaia-ToJNyWpDn9I-unsplash.jpg',
    alt: {
      en: 'Red sandstone walls of Charyn Canyon under a clear sky',
      ru: 'Красные песчаниковые стены Чарынского каньона под ясным небом',
      zh: '晴空下恰伦大峡谷的红色砂岩岩壁',
      ar: 'جدران الحجر الرملي الحمراء في وادي شارين تحت سماء صافية',
    },
  },
]

export const oneDayTours: DayTour[] = [
  {
    title: {
      en: 'Big Almaty Lake and Ayu Sai Visit center',
      ru: 'Большое Алматинское озеро и визит-центр Аю-Сай',
      zh: '大阿拉木图湖与阿尤萨伊游客中心',
      ar: 'بحيرة ألماتي الكبرى ومركز زوّار آيو-ساي',
    },
    description: {
      en: 'Embark on a journey to discover the enchantment of Big Almaty Lake with us! Crystal-clear waters, mountain trails, and astonishing views await you in this natural haven.',
      ru: 'Отправьтесь с нами в путешествие, чтобы открыть очарование Большого Алматинского озера! Кристально чистая вода, горные тропы и потрясающие виды ждут вас в этом природном уголке.',
      zh: '与我们一同踏上旅程，领略大阿拉木图湖的魅力！清澈见底的湖水、山间步道与令人惊叹的景色，在这片自然秘境中等待着你。',
      ar: 'انطلق معنا في رحلة لاكتشاف سحر بحيرة ألماتي الكبرى! مياه صافية كالكريستال، ودروب جبلية، ومناظر مذهلة تنتظرك في هذا الملاذ الطبيعي.',
    },
    image: '/images/andrey-zvyagintsev-FqL8ChjROIY-unsplash.jpg',
    alt: {
      en: 'Turquoise Big Almaty Lake ringed by snow-dusted peaks',
      ru: 'Бирюзовое Большое Алматинское озеро в кольце заснеженных вершин',
      zh: '被薄雪山峰环抱的碧绿大阿拉木图湖',
      ar: 'بحيرة ألماتي الكبرى الفيروزية تطوّقها قمم مكسوّة بالثلج',
    },
  },
  {
    title: {
      en: 'Ethno Village "The Hunns"',
      ru: 'Этно-деревня «Гунны»',
      zh: '民族村“匈奴”',
      ar: 'القرية الإثنية «الهون»',
    },
    description: {
      en: 'Village will take you into the past, into the world of nomads and help you learn more about their life and customs.',
      ru: 'Деревня перенесёт вас в прошлое, в мир кочевников, и поможет больше узнать об их жизни и обычаях.',
      zh: '村庄将带你回到过去、走进游牧民族的世界，帮助你更多了解他们的生活与习俗。',
      ar: 'ستأخذك القرية إلى الماضي، إلى عالم الرُّحّل، وتساعدك على معرفة المزيد عن حياتهم وعاداتهم.',
    },
    image: '/images/alexander-liebstuckel-E4z5M71dBbg-unsplash.jpg',
    alt: {
      en: 'Traditional Kazakh nomadic village scene',
      ru: 'Сцена традиционной казахской кочевой деревни',
      zh: '传统哈萨克游牧村落的场景',
      ar: 'مشهد لقرية بدوية كازاخية تقليدية',
    },
  },
  {
    title: {
      en: 'Altyn Emel national park',
      ru: 'Национальный парк Алтын-Эмель',
      zh: '阿尔金-埃梅尔国家公园',
      ar: 'متنزّه ألتين إيمل الوطني',
    },
    description: {
      en: 'This national park features chalky mountains, sand dunes, burial mounds, and ancient rock carvings with Express Tour',
      ru: 'В этом национальном парке — меловые горы, песчаные барханы, курганы и древние наскальные рисунки; формат «экспресс-тур»',
      zh: '这座国家公园拥有白垩山、沙丘、古墓冢与古代岩刻，并提供快捷之旅（Express Tour）',
      ar: 'يضمّ هذا المتنزّه الوطني جبالاً طباشيرية وكثباناً رملية وتلال دفن ونقوشاً صخرية قديمة، مع جولة سريعة (Express Tour)',
    },
    image: '/images/vitaly-eroshenko--4TCHYVkngg-unsplash.jpg',
    alt: {
      en: 'Chalky Aktau mountain ridges of Altyn Emel',
      ru: 'Меловые хребты гор Актау в Алтын-Эмеле',
      zh: '阿尔金-埃梅尔白垩质的阿克套山脊',
      ar: 'سلاسل جبال أكتاو الطباشيرية في ألتين إيمل',
    },
  },
]
