/* =========================================================================
   Tour catalogue — static, local data. No backend.
   Free-text content (titles, descriptions, highlights, alt text) is localised
   per language via `Loc` / `LocList`. Shared, enumerated labels (category,
   region, duration, services, group-size) reference the i18n `catalog` block
   so they are translated once, not per tour.
   ========================================================================= */

import type { LangCode } from '../i18n/types'

/** A string translated into every supported language. */
export type Loc = Record<LangCode, string>
/** A list of strings translated into every supported language. */
export type LocList = Record<LangCode, string[]>

export type CategoryKey =
  | 'canyons'
  | 'lakes'
  | 'mountains'
  | 'desertWildlife'
  | 'cityEscape'
export type RegionKey = 'almatyRegion' | 'tienShan' | 'almaty'
export type DurationKey = 'd1' | 'd2n1' | 'd3n2'
export type PeopleSize = 'one' | 'two' | 'three' | 'fourPlus'
export type ServiceKey =
  | 'pickup'
  | 'transport'
  | 'transport4x4'
  | 'guide'
  | 'parkFees'
  | 'allFees'
  | 'lunch'
  | 'packedLunch'
  | 'breakfastDinner'
  | 'water'
  | 'stay1'
  | 'stay2'
  | 'cableCar'
  | 'kokTobe'
  | 'borderPermit'

/** A row in the per-group-size price table (price is per person). */
export interface PriceTier {
  size: PeopleSize
  price: number
}

export interface Tour {
  id: string
  slug: string
  region: RegionKey
  category: CategoryKey
  durationKey: DurationKey
  /** number of days the trip takes */
  days: number
  /** services included in the price (keys into catalog.services) */
  included: ServiceKey[]
  /** per-person price by group size */
  pricing: PriceTier[]
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
  /** localised free text */
  title: Loc
  description: Loc
  longDescription: Loc
  highlights: LocList
  /** localised alt text for the photograph */
  alt: Loc
}

export const tours: Tour[] = [
  {
    id: 'charyn',
    slug: 'charyn-canyon',
    region: 'almatyRegion',
    category: 'canyons',
    durationKey: 'd1',
    days: 1,
    included: ['pickup', 'transport', 'guide', 'parkFees', 'lunch', 'water'],
    pricing: [
      { size: 'one', price: 170 },
      { size: 'two', price: 120 },
      { size: 'three', price: 105 },
      { size: 'fourPlus', price: 95 },
    ],
    priceFrom: 95,
    rating: 5.0,
    reviewCount: 212,
    bestseller: true,
    placeholder: { from: '#b4582f', to: '#7a2f1c' },
    image: '/images/tima-ilyasov-qs9-I9Eam94-unsplash.jpg',
    title: {
      en: 'Charyn Canyon day trip',
      ru: 'Чарынский каньон — поездка на день',
      zh: '恰伦大峡谷一日游',
      ar: 'رحلة يوم إلى وادي شارين',
    },
    description: {
      en: 'Walk the Valley of Castles — red rock walls carved over millions of years, with a quiet riverbank lunch at the bottom.',
      ru: 'Прогулка по Долине замков — красные скалы, что вытачивались миллионы лет, и спокойный обед у реки на дне каньона.',
      zh: '漫步“城堡谷”——历经数百万年雕琢的红色岩壁，并在谷底河边享用宁静的午餐。',
      ar: 'تجوّل في وادي القلاع — جدران صخرية حمراء نحتتها ملايين السنين، مع غداء هادئ عند ضفة النهر في القاع.',
    },
    longDescription: {
      en: 'Charyn Canyon is one of the most striking landscapes in Kazakhstan — a deep gorge of red sandstone that wind and river have carved into towers and walls over millions of years. We drive out early to beat the crowds, walk the Valley of Castles down to the Charyn river, share a relaxed lunch by the water, and take our time at the best viewpoints on the way back.',
      ru: 'Чарынский каньон — один из самых впечатляющих ландшафтов Казахстана: глубокое ущелье из красного песчаника, которое ветер и река миллионы лет вытачивали в башни и стены. Мы выезжаем рано, чтобы опередить толпы, спускаемся по Долине замков к реке Чарын, неспешно обедаем у воды и не торопясь любуемся лучшими видами на обратном пути.',
      zh: '恰伦大峡谷是哈萨克斯坦最壮观的景观之一——一道由红色砂岩构成的深谷，历经数百万年被风与河流雕琢成塔楼与岩壁。我们一早出发以避开人潮，沿“城堡谷”步行下到恰伦河，在水边悠闲午餐，并在返程途中从容欣赏最佳观景点。',
      ar: 'وادي شارين من أكثر المناظر إثارة في كازاخستان — أخدود عميق من الحجر الرملي الأحمر نحتته الرياح والنهر إلى أبراج وجدران عبر ملايين السنين. ننطلق باكراً لتفادي الزحام، ونسير في وادي القلاع نزولاً إلى نهر شارين، ونتناول غداءً هادئاً عند الماء، ونأخذ وقتنا عند أجمل المطلّات في طريق العودة.',
    },
    highlights: {
      en: [
        'Valley of Castles rim walk',
        'Floor of the canyon by the Charyn river',
        'Riverside lunch spot',
        'Panoramic gorge viewpoints',
      ],
      ru: [
        'Прогулка по краю Долины замков',
        'Дно каньона у реки Чарын',
        'Обед на берегу реки',
        'Панорамные виды на ущелье',
      ],
      zh: ['“城堡谷”崖边步道', '恰伦河畔的峡谷谷底', '河边午餐地点', '峡谷全景观景点'],
      ar: [
        'مسير على حافة وادي القلاع',
        'قاع الوادي عند نهر شارين',
        'مكان غداء على ضفة النهر',
        'مطلّات بانورامية على الأخدود',
      ],
    },
    alt: {
      en: 'Aerial view of the red sandstone columns of Charyn Canyon under a wide blue sky',
      ru: 'Вид с воздуха на красные песчаниковые столбы Чарынского каньона под широким синим небом',
      zh: '广阔蓝天下恰伦大峡谷红色砂岩石柱的航拍景观',
      ar: 'منظر جوي لأعمدة الحجر الرملي الحمراء في وادي شارين تحت سماء زرقاء واسعة',
    },
  },
  {
    id: 'kolsai-kaindy',
    slug: 'kolsai-kaindy-lakes',
    region: 'tienShan',
    category: 'lakes',
    durationKey: 'd2n1',
    days: 2,
    included: [
      'pickup',
      'transport4x4',
      'guide',
      'stay1',
      'breakfastDinner',
      'allFees',
      'water',
    ],
    pricing: [
      { size: 'one', price: 380 },
      { size: 'two', price: 270 },
      { size: 'three', price: 235 },
      { size: 'fourPlus', price: 220 },
    ],
    priceFrom: 220,
    rating: 5.0,
    reviewCount: 168,
    bestPrice: true,
    placeholder: { from: '#1f6f78', to: '#0c3b46' },
    image: '/images/vitaly-eroshenko-Jd8CNAZ3Qws-unsplash.jpg',
    title: {
      en: 'Kolsai & Kaindy lakes',
      ru: 'Озёра Кольсай и Каинды',
      zh: '科尔赛湖与凯恩迪湖',
      ar: 'بحيرتا كولساي وكايندي',
    },
    description: {
      en: 'Two days in the mountains: alpine Kolsai lakes and the sunken forest of Kaindy, where bare trunks rise straight out of turquoise water.',
      ru: 'Два дня в горах: высокогорные Кольсайские озёра и затопленный лес Каинды, где голые стволы поднимаются прямо из бирюзовой воды.',
      zh: '在山中度过两天：高山科尔赛湖群，以及凯恩迪的“水下森林”，光秃的树干直接从碧绿的湖水中拔起。',
      ar: 'يومان في الجبال: بحيرات كولساي الجبلية وغابة كايندي الغارقة، حيث ترتفع جذوع عارية مباشرة من الماء الفيروزي.',
    },
    longDescription: {
      en: 'Two unforgettable days in the Tien Shan. On the first day we hike to the first Kolsai lake, an alpine mirror surrounded by pine forest, and stay overnight in the mountain village of Saty. The next morning we visit Kaindy — the famous sunken forest, where the bare trunks of submerged spruce rise straight out of impossibly clear turquoise water.',
      ru: 'Два незабываемых дня в Тянь-Шане. В первый день мы поднимаемся к первому Кольсайскому озеру — горному зеркалу в окружении соснового леса, и ночуем в горном селе Саты. На следующее утро отправляемся на Каинды — знаменитый затопленный лес, где голые стволы елей поднимаются прямо из невероятно прозрачной бирюзовой воды.',
      zh: '在天山度过难忘的两天。第一天我们徒步前往第一科尔赛湖——一面被松林环抱的高山明镜，并在萨特山村过夜。次日清晨前往凯恩迪——著名的“水下森林”，沉没云杉的光秃树干直接从清澈得不真实的碧绿湖水中升起。',
      ar: 'يومان لا يُنسيان في تيان شان. في اليوم الأول نسير إلى بحيرة كولساي الأولى، مرآة جبلية تحيط بها غابة الصنوبر، ونبيت في قرية ساتي الجبلية. وفي صباح اليوم التالي نزور كايندي — الغابة الغارقة الشهيرة، حيث ترتفع جذوع التنوب الغارقة مباشرة من ماء فيروزي صافٍ إلى حدّ لا يُصدّق.',
    },
    highlights: {
      en: [
        'First Kolsai lake',
        'Kaindy sunken-forest lake',
        'Saty mountain village',
        'High mountain passes & viewpoints',
      ],
      ru: [
        'Первое Кольсайское озеро',
        'Озеро затопленного леса Каинды',
        'Горное село Саты',
        'Высокогорные перевалы и смотровые точки',
      ],
      zh: ['第一科尔赛湖', '凯恩迪“水下森林”湖', '萨特山村', '高山垭口与观景点'],
      ar: [
        'بحيرة كولساي الأولى',
        'بحيرة غابة كايندي الغارقة',
        'قرية ساتي الجبلية',
        'ممرات جبلية عالية ومطلّات',
      ],
    },
    alt: {
      en: 'Submerged tree trunks standing in the clear turquoise water of Kaindy Lake, forested slopes behind',
      ru: 'Затопленные стволы деревьев в прозрачной бирюзовой воде озера Каинды, лесистые склоны позади',
      zh: '凯恩迪湖清澈碧绿的湖水中矗立的沉没树干，背后是林木覆盖的山坡',
      ar: 'جذوع أشجار غارقة في ماء بحيرة كايندي الفيروزي الصافي، وخلفها منحدرات مكسوّة بالغابات',
    },
  },
  {
    id: 'big-almaty-lake',
    slug: 'big-almaty-lake',
    region: 'tienShan',
    category: 'lakes',
    durationKey: 'd1',
    days: 1,
    included: ['pickup', 'transport', 'guide', 'borderPermit', 'water'],
    pricing: [
      { size: 'one', price: 140 },
      { size: 'two', price: 95 },
      { size: 'three', price: 80 },
      { size: 'fourPlus', price: 70 },
    ],
    priceFrom: 70,
    rating: 4.9,
    reviewCount: 304,
    bestseller: true,
    placeholder: { from: '#2f8fa8', to: '#13525f' },
    image: '/images/andrey-zvyagintsev-FqL8ChjROIY-unsplash.jpg',
    title: {
      en: 'Big Almaty lake',
      ru: 'Большое Алматинское озеро',
      zh: '大阿拉木图湖',
      ar: 'بحيرة ألماتي الكبرى',
    },
    description: {
      en: 'A short drive from the city to a bright turquoise reservoir ringed by peaks. Easy walking, big views, back by evening.',
      ru: 'Короткая поездка из города к яркому бирюзовому водохранилищу в кольце вершин. Лёгкие прогулки, большие виды, возвращение к вечеру.',
      zh: '从城市出发短途车程，即可抵达群峰环抱、碧绿明亮的水库。轻松步行，视野开阔，傍晚返程。',
      ar: 'مسافة قصيرة بالسيارة من المدينة إلى خزّان فيروزي زاهٍ تحيط به القمم. مشي سهل، ومناظر واسعة، وعودة قبل المساء.',
    },
    longDescription: {
      en: 'A favourite escape from the city. We drive up into the mountains to Big Almaty Lake, a brilliant turquoise reservoir held between the peaks, stop in the Ayu-Sai valley and at the best viewpoints, and you are back in Almaty by evening. Easy walking, huge views, and a real breath of mountain air.',
      ru: 'Любимый способ сбежать из города. Мы поднимаемся в горы к Большому Алматинскому озеру — яркому бирюзовому водохранилищу среди вершин, заезжаем в долину Аю-Сай и к лучшим смотровым точкам, и к вечеру вы снова в Алматы. Лёгкие прогулки, огромные виды и настоящий глоток горного воздуха.',
      zh: '深受喜爱的城市逃离之旅。我们驱车上山前往大阿拉木图湖——一座镶嵌在群峰之间、碧绿夺目的水库，途中在阿尤萨伊山谷和最佳观景点停留，傍晚便回到阿拉木图。轻松步行、壮阔视野，以及一口真正的山间空气。',
      ar: 'وسيلة مفضّلة للهروب من المدينة. نصعد بالسيارة إلى الجبال نحو بحيرة ألماتي الكبرى، خزّان فيروزي لامع بين القمم، ونتوقف في وادي آيو-ساي وعند أجمل المطلّات، وتعود إلى ألماتي قبل المساء. مشي سهل، ومناظر هائلة، ونسمة حقيقية من هواء الجبال.',
    },
    highlights: {
      en: [
        'Big Almaty Lake viewpoints',
        'Ayu-Sai valley',
        'Tien Shan observatory road',
        'Alpine meadows',
      ],
      ru: [
        'Смотровые точки Большого Алматинского озера',
        'Долина Аю-Сай',
        'Дорога к Тянь-Шаньской обсерватории',
        'Альпийские луга',
      ],
      zh: ['大阿拉木图湖观景点', '阿尤萨伊山谷', '天山天文台之路', '高山草甸'],
      ar: [
        'مطلّات بحيرة ألماتي الكبرى',
        'وادي آيو-ساي',
        'طريق مرصد تيان شان',
        'مروج جبلية',
      ],
    },
    alt: {
      en: 'Turquoise Big Almaty Lake surrounded by snow-dusted Tien Shan peaks',
      ru: 'Бирюзовое Большое Алматинское озеро в окружении заснеженных вершин Тянь-Шаня',
      zh: '被薄雪覆盖的天山群峰环抱的碧绿大阿拉木图湖',
      ar: 'بحيرة ألماتي الكبرى الفيروزية تحيط بها قمم تيان شان المكسوّة بالثلج',
    },
  },
  {
    id: 'altyn-emel',
    slug: 'altyn-emel',
    region: 'almatyRegion',
    category: 'desertWildlife',
    durationKey: 'd2n1',
    days: 2,
    included: [
      'pickup',
      'transport4x4',
      'guide',
      'stay1',
      'breakfastDinner',
      'parkFees',
      'water',
    ],
    pricing: [
      { size: 'one', price: 440 },
      { size: 'two', price: 320 },
      { size: 'three', price: 285 },
      { size: 'fourPlus', price: 260 },
    ],
    priceFrom: 260,
    rating: 4.9,
    reviewCount: 96,
    placeholder: { from: '#d9a441', to: '#9c6b1f' },
    image: '/images/ilyas-dautov-sHKw-Am60Jc-unsplash.jpg',
    title: {
      en: 'Altyn Emel & the singing dune',
      ru: 'Алтын-Эмель и Поющий бархан',
      zh: '阿尔金-埃梅尔与鸣沙丘',
      ar: 'ألتين إيمل والكثيب المغنّي',
    },
    description: {
      en: 'Out to the steppe national park for the giant Singing Dune, chalk-white Aktau mountains and herds of wild kulan.',
      ru: 'Поездка в степной национальный парк к гигантскому Поющему бархану, меловым горам Актау и стадам диких куланов.',
      zh: '前往草原国家公园，探访巨大的鸣沙丘、洁白如垩的阿克套山，以及成群的野生野驴。',
      ar: 'رحلة إلى المتنزّه الوطني في السهوب لرؤية الكثيب المغنّي العملاق، وجبال أكتاو البيضاء الطباشيرية، وقطعان الحمير البرّية (الكولان).',
    },
    longDescription: {
      en: 'Altyn Emel is a vast steppe national park where the landscape changes by the hour. Over two days we climb the giant Singing Dune, walk among the chalk-white Aktau and fiery Katutau mountains, and watch for herds of wild kulan and gazelle on the plains, with a night spent inside the park.',
      ru: 'Алтын-Эмель — огромный степной национальный парк, где пейзаж меняется каждый час. За два дня мы поднимаемся на гигантский Поющий бархан, гуляем среди меловых гор Актау и огненных гор Катутау и высматриваем стада диких куланов и джейранов на равнинах, с ночёвкой внутри парка.',
      zh: '阿尔金-埃梅尔是一座辽阔的草原国家公园，景观每小时都在变化。两天里我们登上巨大的鸣沙丘，行走于洁白的阿克套山与火红的卡图套山之间，并在平原上寻觅成群的野驴与瞪羚，并在公园内过夜一晚。',
      ar: 'ألتين إيمل متنزّه وطني سهوبي شاسع تتبدّل تضاريسه ساعة بساعة. على مدى يومين نصعد الكثيب المغنّي العملاق، ونتجوّل بين جبال أكتاو البيضاء وجبال كاتوتاو النارية، ونترقّب قطعان الكولان والغزلان في السهول، مع مبيت ليلة داخل المتنزّه.',
    },
    highlights: {
      en: [
        'The Singing Dune',
        'Aktau chalk mountains',
        'Katutau volcanic mountains',
        'Kulan & wildlife plains',
      ],
      ru: [
        'Поющий бархан',
        'Меловые горы Актау',
        'Вулканические горы Катутау',
        'Равнины с куланами и дикой природой',
      ],
      zh: ['鸣沙丘', '阿克套白垩山', '卡图套火山群', '野驴与野生动物平原'],
      ar: [
        'الكثيب المغنّي',
        'جبال أكتاو الطباشيرية',
        'جبال كاتوتاو البركانية',
        'سهول الكولان والحياة البرّية',
      ],
    },
    alt: {
      en: 'The vast Singing Dune of Altyn Emel rising from golden steppe at sunset',
      ru: 'Гигантский Поющий бархан Алтын-Эмеля, поднимающийся над золотой степью на закате',
      zh: '日落时分，阿尔金-埃梅尔巨大的鸣沙丘从金色草原上隆起',
      ar: 'الكثيب المغنّي الشاسع في ألتين إيمل يرتفع من السهوب الذهبية عند الغروب',
    },
  },
  {
    id: 'medeu-shymbulak',
    slug: 'medeu-shymbulak',
    region: 'almaty',
    category: 'mountains',
    durationKey: 'd1',
    days: 1,
    included: ['pickup', 'transport', 'guide', 'cableCar', 'water'],
    pricing: [
      { size: 'one', price: 120 },
      { size: 'two', price: 80 },
      { size: 'three', price: 68 },
      { size: 'fourPlus', price: 60 },
    ],
    priceFrom: 60,
    rating: 4.8,
    reviewCount: 341,
    bestPrice: true,
    placeholder: { from: '#5a7d8c', to: '#2b4651' },
    image: '/images/chingiz-t-ow1CvIo_JRM-unsplash.jpg',
    title: {
      en: 'Medeu & Shymbulak',
      ru: 'Медеу и Шымбулак',
      zh: '梅迪奥与琴布拉克',
      ar: 'ميديو وشيمبولاك',
    },
    description: {
      en: 'Up from the famous Medeu skating rink to Shymbulak by cable car, with mountain-air views over the whole valley.',
      ru: 'Подъём от знаменитого катка Медеу к Шымбулаку по канатной дороге, с видами на всю долину в горном воздухе.',
      zh: '从著名的梅迪奥滑冰场乘缆车上行至琴布拉克，在清新山风中俯瞰整条山谷。',
      ar: 'صعود من حلبة ميديو الشهيرة للتزلج إلى شيمبولاك بالتلفريك، مع إطلالات على الوادي كله في هواء الجبال.',
    },
    longDescription: {
      en: 'A relaxed mountain day right above the city. We start at the iconic Medeu high-altitude skating rink, ride the cable car up to Shymbulak, and take in sweeping views of the valley and the surrounding peaks — with plenty of time for photos and a mountain-air coffee.',
      ru: 'Спокойный горный день прямо над городом. Мы начинаем у знаменитого высокогорного катка Медеу, поднимаемся по канатной дороге к Шымбулаку и любуемся широкими видами долины и окружающих вершин — с временем на фото и кофе в горном воздухе.',
      zh: '在城市上方度过悠闲的山间一日。我们从标志性的高海拔梅迪奥滑冰场出发，乘缆车上行至琴布拉克，饱览山谷与四周群峰的开阔景色——并有充足时间拍照，以及在山风中喝杯咖啡。',
      ar: 'يوم جبلي هادئ فوق المدينة مباشرة. نبدأ من حلبة ميديو الشهيرة المرتفعة، ونصعد بالتلفريك إلى شيمبولاك، ونتمتّع بإطلالات واسعة على الوادي والقمم المحيطة — مع وقت وافر للصور وفنجان قهوة في هواء الجبال.',
    },
    highlights: {
      en: [
        'Medeu skating rink',
        'Shymbulak cable car',
        'Talgar pass viewpoint',
        'Mountain cafes',
      ],
      ru: [
        'Каток Медеу',
        'Канатная дорога Шымбулака',
        'Смотровая площадка перевала Талгар',
        'Горные кафе',
      ],
      zh: ['梅迪奥滑冰场', '琴布拉克缆车', '塔尔加尔山口观景台', '山间咖啡馆'],
      ar: [
        'حلبة ميديو للتزلج',
        'تلفريك شيمبولاك',
        'مطلّ ممر تالغار',
        'مقاهٍ جبلية',
      ],
    },
    alt: {
      en: 'Cable car climbing toward Shymbulak resort above Medeu with snowy peaks behind',
      ru: 'Канатная дорога, поднимающаяся к курорту Шымбулак над Медеу, на фоне заснеженных вершин',
      zh: '缆车在梅迪奥上方向琴布拉克度假区攀升，背后是积雪的山峰',
      ar: 'تلفريك يصعد نحو منتجع شيمبولاك فوق ميديو وخلفه قمم مكسوّة بالثلج',
    },
  },
  {
    id: 'kolsai-day',
    slug: 'kolsai-first-lake',
    region: 'tienShan',
    category: 'lakes',
    durationKey: 'd1',
    days: 1,
    included: ['pickup', 'transport', 'guide', 'parkFees', 'packedLunch', 'water'],
    pricing: [
      { size: 'one', price: 190 },
      { size: 'two', price: 135 },
      { size: 'three', price: 120 },
      { size: 'fourPlus', price: 110 },
    ],
    priceFrom: 110,
    rating: 5.0,
    reviewCount: 87,
    placeholder: { from: '#2c7a5b', to: '#123f2e' },
    image: '/images/marina-lambreht-GdjBEN8xXDM-unsplash.jpg',
    title: {
      en: 'Kolsai first lake day trip',
      ru: 'Первое Кольсайское озеро — поездка на день',
      zh: '第一科尔赛湖一日游',
      ar: 'رحلة يوم إلى بحيرة كولساي الأولى',
    },
    description: {
      en: 'A long but worth-it day to the first Kolsai lake — pine-forest reflections, a gentle lakeside trail, packed lunch by the water.',
      ru: 'Длинный, но стоящий день к первому Кольсайскому озеру — отражения соснового леса, лёгкая тропа вдоль берега, обед с собой у воды.',
      zh: '前往第一科尔赛湖的漫长却值得的一天——松林倒影、平缓的湖畔小径，以及水边的便携午餐。',
      ar: 'يوم طويل لكنه يستحق العناء إلى بحيرة كولساي الأولى — انعكاسات غابة الصنوبر، ودرب لطيف على ضفة البحيرة، وغداء مُعبّأ عند الماء.',
    },
    longDescription: {
      en: 'A long but rewarding day trip to the first Kolsai lake. We drive through the steppe and up into the Tien Shan, walk the gentle lakeside trail through pine forest, and enjoy a packed lunch by the water before heading back to Almaty.',
      ru: 'Длинная, но благодарная однодневная поездка к первому Кольсайскому озеру. Мы едем через степь и поднимаемся в Тянь-Шань, идём по лёгкой тропе вдоль берега через сосновый лес и обедаем с собой у воды, прежде чем вернуться в Алматы.',
      zh: '前往第一科尔赛湖的漫长却充实的一日游。我们穿过草原驶入天山，沿穿越松林的平缓湖畔小径漫步，在水边享用便携午餐，然后返回阿拉木图。',
      ar: 'رحلة يوم طويلة لكنها مُجزية إلى بحيرة كولساي الأولى. نقود عبر السهوب صعوداً إلى تيان شان، ونسير على الدرب اللطيف بمحاذاة البحيرة عبر غابة الصنوبر، ونتناول غداءً مُعبّأ عند الماء قبل العودة إلى ألماتي.',
    },
    highlights: {
      en: [
        'First Kolsai lake',
        'Lakeside forest trail',
        'Saty village',
        'Pine-forest viewpoints',
      ],
      ru: [
        'Первое Кольсайское озеро',
        'Лесная тропа вдоль берега',
        'Село Саты',
        'Смотровые точки в сосновом лесу',
      ],
      zh: ['第一科尔赛湖', '湖畔森林小径', '萨特村', '松林观景点'],
      ar: [
        'بحيرة كولساي الأولى',
        'درب الغابة على ضفة البحيرة',
        'قرية ساتي',
        'مطلّات غابة الصنوبر',
      ],
    },
    alt: {
      en: 'Calm first Kolsai lake mirroring the surrounding pine forest and ridgeline',
      ru: 'Спокойное первое Кольсайское озеро, отражающее окружающий сосновый лес и хребет',
      zh: '平静的第一科尔赛湖映照着周围的松林与山脊',
      ar: 'بحيرة كولساي الأولى الهادئة تعكس غابة الصنوبر المحيطة وخط الجبال',
    },
  },
  {
    id: 'charyn-overnight',
    slug: 'charyn-kolsai-combo',
    region: 'almatyRegion',
    category: 'canyons',
    durationKey: 'd3n2',
    days: 3,
    included: [
      'pickup',
      'transport4x4',
      'guide',
      'stay2',
      'breakfastDinner',
      'allFees',
      'water',
    ],
    pricing: [
      { size: 'one', price: 560 },
      { size: 'two', price: 410 },
      { size: 'three', price: 365 },
      { size: 'fourPlus', price: 340 },
    ],
    priceFrom: 340,
    rating: 5.0,
    reviewCount: 74,
    bestseller: true,
    placeholder: { from: '#a9552f', to: '#143f46' },
    image: '/images/polina-skaia-ToJNyWpDn9I-unsplash.jpg',
    title: {
      en: 'Charyn & Kolsai weekend',
      ru: 'Уикенд: Чарын и Кольсай',
      zh: '恰伦与科尔赛周末游',
      ar: 'عطلة نهاية أسبوع: شارين وكولساي',
    },
    description: {
      en: 'Our most-loved long weekend: the canyons one day, the lakes the next, with a night under clear steppe skies in between.',
      ru: 'Наш самый любимый длинный уикенд: каньоны в один день, озёра — на следующий, с ночёвкой под ясным степным небом между ними.',
      zh: '我们最受欢迎的长周末：一天游峡谷，次日游湖泊，中间在清朗的草原星空下过夜。',
      ar: 'عطلتنا الأطول الأكثر حبًّا: الأخاديد في يوم، والبحيرات في اليوم التالي، مع مبيت ليلة تحت سماء السهوب الصافية بينهما.',
    },
    longDescription: {
      en: 'Our most-loved long weekend combines the best of the region. Day one is the canyons — the Valley of Castles and the lesser-seen Black Canyon. Day two takes us to the Kolsai lakes and the sunken forest of Kaindy. We spend the nights in a mountain village under clear steppe skies, never rushing.',
      ru: 'Наш самый любимый длинный уикенд объединяет лучшее в регионе. Первый день — каньоны: Долина замков и менее известный Чёрный каньон. Второй день ведёт нас к Кольсайским озёрам и затопленному лесу Каинды. Ночи мы проводим в горном селе под ясным степным небом, никуда не спеша.',
      zh: '我们最受欢迎的长周末汇集了这一地区的精华。第一天是峡谷——“城堡谷”与较少人到访的黑峡谷。第二天前往科尔赛湖群与凯恩迪“水下森林”。夜晚我们在山村中、清朗的草原星空下度过，从不赶路。',
      ar: 'عطلتنا الأطول الأكثر حبًّا تجمع أجمل ما في المنطقة. اليوم الأول للأخاديد — وادي القلاع والوادي الأسود الأقل ارتياداً. واليوم الثاني يأخذنا إلى بحيرات كولساي وغابة كايندي الغارقة. نمضي الليالي في قرية جبلية تحت سماء السهوب الصافية، دون أي عجلة.',
    },
    highlights: {
      en: [
        'Charyn Valley of Castles',
        'Black Canyon',
        'Kolsai lakes',
        'Kaindy sunken forest',
        'Two nights in a mountain village',
      ],
      ru: [
        'Долина замков Чарына',
        'Чёрный каньон',
        'Кольсайские озёра',
        'Затопленный лес Каинды',
        'Две ночи в горном селе',
      ],
      zh: ['恰伦“城堡谷”', '黑峡谷', '科尔赛湖群', '凯恩迪“水下森林”', '在山村中过两晚'],
      ar: [
        'وادي القلاع في شارين',
        'الوادي الأسود',
        'بحيرات كولساي',
        'غابة كايندي الغارقة',
        'ليلتان في قرية جبلية',
      ],
    },
    alt: {
      en: 'Split landscape of Charyn Canyon red rock and a turquoise mountain lake',
      ru: 'Совмещённый пейзаж: красные скалы Чарынского каньона и бирюзовое горное озеро',
      zh: '拼合景观：恰伦大峡谷的红色岩石与碧绿的山中湖泊',
      ar: 'منظر مزدوج: صخور وادي شارين الحمراء وبحيرة جبلية فيروزية',
    },
  },
  {
    id: 'almaty-city',
    slug: 'almaty-city-foothills',
    region: 'almaty',
    category: 'cityEscape',
    durationKey: 'd1',
    days: 1,
    included: ['pickup', 'transport', 'guide', 'kokTobe', 'water'],
    pricing: [
      { size: 'one', price: 100 },
      { size: 'two', price: 70 },
      { size: 'three', price: 58 },
      { size: 'fourPlus', price: 50 },
    ],
    priceFrom: 50,
    rating: 4.9,
    reviewCount: 158,
    bestPrice: true,
    placeholder: { from: '#7a6f9c', to: '#3a3357' },
    image: '/images/joy-s-kMadNKDqycc-unsplash.jpg',
    title: {
      en: 'Almaty city & foothills',
      ru: 'Алматы: город и предгорья',
      zh: '阿拉木图城市与山麓',
      ar: 'ألماتي: المدينة والسفوح',
    },
    description: {
      en: 'A relaxed local day: Green Bazaar, the wooden Zenkov cathedral, mountain viewpoints and the best spot in town for a real plov.',
      ru: 'Спокойный местный день: Зелёный базар, деревянный Вознесенский собор, горные смотровые точки и лучшее место в городе, чтобы попробовать настоящий плов.',
      zh: '悠闲的本地一日：绿色巴扎、木结构的曾科夫大教堂、山间观景点，以及城里吃正宗手抓饭的最佳去处。',
      ar: 'يوم محلي هادئ: السوق الأخضر، وكاتدرائية زنكوف الخشبية، ومطلّات جبلية، وأفضل مكان في المدينة لتذوّق البلوف الأصيل.',
    },
    longDescription: {
      en: 'A relaxed day getting to know Almaty itself. We wander the Green Bazaar, visit the wooden Zenkov Cathedral in Panfilov Park, ride up to a mountain viewpoint over the city, and finish at the best spot in town for a real plov.',
      ru: 'Спокойный день, чтобы узнать сам Алматы. Мы гуляем по Зелёному базару, заходим в деревянный Вознесенский собор в парке Панфилова, поднимаемся к горной смотровой площадке над городом и завершаем день в лучшем месте для настоящего плова.',
      zh: '悠闲地认识阿拉木图本身的一天。我们漫步绿色巴扎，参观潘菲洛夫公园里木造的曾科夫大教堂，登上俯瞰城市的山间观景点，并在城里吃正宗手抓饭的最佳去处收尾。',
      ar: 'يوم هادئ للتعرّف على ألماتي نفسها. نتجوّل في السوق الأخضر، ونزور كاتدرائية زنكوف الخشبية في حديقة بانفيلوف، ونصعد إلى مطلّ جبلي يطلّ على المدينة، ونختم في أفضل مكان في المدينة لتذوّق البلوف الأصيل.',
    },
    highlights: {
      en: [
        'Green Bazaar',
        'Zenkov Cathedral & Panfilov Park',
        'Kok-Tobe viewpoint',
        'Local lunch — real plov',
      ],
      ru: [
        'Зелёный базар',
        'Вознесенский собор и парк Панфилова',
        'Смотровая площадка Кок-Тобе',
        'Местный обед — настоящий плов',
      ],
      zh: ['绿色巴扎', '曾科夫大教堂与潘菲洛夫公园', '科克托别观景点', '本地午餐——正宗手抓饭'],
      ar: [
        'السوق الأخضر',
        'كاتدرائية زنكوف وحديقة بانفيلوف',
        'مطلّ كوك-توبه',
        'غداء محلي — بلوف أصيل',
      ],
    },
    alt: {
      en: 'Almaty rooftops with the green foothills of the Tien Shan rising behind the city',
      ru: 'Крыши Алматы и зелёные предгорья Тянь-Шаня, поднимающиеся за городом',
      zh: '阿拉木图的屋顶，城市后方是天山郁葱的山麓',
      ar: 'أسطح ألماتي وسفوح تيان شان الخضراء ترتفع خلف المدينة',
    },
  },
]

export function getTourBySlug(slug: string | undefined): Tour | undefined {
  return tours.find((tour) => tour.slug === slug)
}
