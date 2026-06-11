import type { Tour } from '../data/tours'
import { whatsappLink } from '../data/copy'
import { useT } from '../i18n'
import { Badge } from './Badge'
import { Pill } from './Pill'
import { Rating } from './Rating'
import { PhotoPlaceholder } from './PhotoPlaceholder'
import { HeartIcon, WhatsAppIcon } from './icons'
import styles from './TourCard.module.css'

interface TourCardProps {
  tour: Tour
  isFavourite: boolean
  onToggleFavourite: (id: string) => void
}

export function TourCard({ tour, isFavourite, onToggleFavourite }: TourCardProps) {
  const t = useT()
  const titleId = `tour-${tour.id}-title`

  const bookHref = whatsappLink(
    `Hi! I'm interested in the "${tour.title}" tour (${tour.duration}, from $${tour.priceFrom}). Could you share availability?`,
  )

  return (
    <article className={styles.card} aria-labelledby={titleId}>
      <div className={styles.media}>
        <PhotoPlaceholder
          alt={tour.alt}
          from={tour.placeholder.from}
          to={tour.placeholder.to}
          ratio="4 / 3"
          showTag={false}
          src={tour.image}
        />

        <div className={styles.topLeft}>
          <Badge>{tour.duration}</Badge>
        </div>

        <button
          type="button"
          className={styles.fav}
          aria-pressed={isFavourite}
          aria-label={isFavourite ? t.tours.removeFavourite : t.tours.addFavourite}
          onClick={() => onToggleFavourite(tour.id)}
        >
          <HeartIcon size={20} filled={isFavourite} />
        </button>
      </div>

      <div className={styles.body}>
        <div className={styles.metaRow}>
          <span className={styles.category}>{tour.category}</span>
          {/* one accent per context: bestseller OR best-price, never both */}
          {tour.bestseller ? (
            <Pill variant="promo">{t.tours.bestseller}</Pill>
          ) : tour.bestPrice ? (
            <Pill variant="price">{t.tours.bestPrice}</Pill>
          ) : null}
        </div>

        <h3 className={styles.title} id={titleId}>
          {tour.title}
        </h3>

        <p className={styles.desc}>{tour.description}</p>

        <div className={styles.divider} />

        <div className={styles.footer}>
          <Rating value={tour.rating} count={tour.reviewCount} countLabel={t.tours.reviews} />
          <span className={styles.price}>
            <span className={styles.priceFrom}>{t.tours.from}</span>
            <span className={styles.priceValue}>${tour.priceFrom}</span>
          </span>
        </div>

        <a
          className={styles.book}
          href={bookHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={18} />
          {t.tours.bookThis}
        </a>
      </div>
    </article>
  )
}
