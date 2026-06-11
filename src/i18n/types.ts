/* Shape shared by every language dictionary. EN is the source of truth;
   other languages must provide the same keys (EN fallback is acceptable as a
   clearly-marked placeholder while translation is in progress). */

export interface Dictionary {
  nav: {
    tours: string
    regions: string
    about: string
    reviews: string
    bookNow: string
    languageLabel: string
    openMenu: string
    closeMenu: string
    brandTagline: string
  }
  hero: {
    eyebrow: string
    headline: string
    sub: string
    exploreTours: string
    bookNow: string
    photoCredit: string
  }
  trust: {
    secureTitle: string
    secureSub: string
    priceTitle: string
    priceSub: string
    supportTitle: string
    supportSub: string
    ratingTitle: string
    ratingSub: string
  }
  tours: {
    eyebrow: string
    heading: string
    sub: string
    from: string
    reviews: string
    addFavourite: string
    removeFavourite: string
    bestseller: string
    bestPrice: string
    bookThis: string
  }
  marquee: string[]
  why: {
    eyebrow: string
    heading: string
    sub: string
    points: { title: string; body: string }[]
  }
  about: {
    eyebrow: string
    heading: string
    body: string[]
    signature: string
    exploreTours: string
  }
  reviews: {
    eyebrow: string
    heading: string
    summary: string
    items: { name: string; from: string; quote: string }[]
  }
  cta: {
    eyebrow: string
    headline: string
    sub: string
    bookNow: string
  }
  footer: {
    tagline: string
    contactHeading: string
    phone: string
    location: string
    followHeading: string
    exploreHeading: string
    rights: string
    hashtags: string
  }
}

export type LangCode = 'en' | 'ru' | 'zh' | 'ar'

export interface LangMeta {
  code: LangCode
  label: string // shown in the switcher
  dir: 'ltr' | 'rtl'
}

export const LANGUAGES: LangMeta[] = [
  { code: 'en', label: 'EN', dir: 'ltr' },
  { code: 'ru', label: 'RU', dir: 'ltr' },
  { code: 'zh', label: '中文', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
]
