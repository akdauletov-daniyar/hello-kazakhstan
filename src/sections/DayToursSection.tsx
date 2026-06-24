import type { DayTour } from '../data/dayTours'
import { responsiveImage } from '../data/images'
import { useI18n } from '../i18n'
import styles from './DayToursSection.module.css'

interface DayToursSectionProps {
  id: string
  headingId: string
  heading: string
  items: DayTour[]
}

/**
 * Image-led tour cards: a 3:4 (vertical) photo with the title and description
 * overlaid at the bottom over a soft scrim. Used for the "Multiple day tours"
 * and "1 Day tours" sections directly under the hero.
 */
export function DayToursSection({ id, headingId, heading, items }: DayToursSectionProps) {
  const { lang } = useI18n()
  return (
    <section id={id} className={styles.section} aria-labelledby={headingId}>
      <div className="container">
        <h2 className={styles.heading} id={headingId}>
          {heading}
        </h2>

        <ul className={styles.grid}>
          {items.map((tour) => {
            const photo = responsiveImage(tour.image)
            return (
            <li key={tour.title.en} className={styles.card}>
              <img
                className={styles.img}
                src={photo.src}
                srcSet={photo.srcSet}
                sizes="(max-width: 560px) 92vw, (max-width: 900px) 45vw, 344px"
                alt={tour.alt[lang]}
                loading="lazy"
                decoding="async"
              />
              <div className={styles.scrim} />
              <div className={styles.content}>
                <h3 className={styles.title}>{tour.title[lang]}</h3>
                <p className={styles.desc}>{tour.description[lang]}</p>
              </div>
            </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
