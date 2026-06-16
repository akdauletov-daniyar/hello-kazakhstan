import type { DayTour } from '../data/dayTours'
import styles from './DayToursSection.module.css'

interface DayToursSectionProps {
  id: string
  headingId: string
  heading: string
  items: DayTour[]
}

/**
 * Image-led tour cards: a 4:3 photo with the title and description overlaid
 * at the bottom over a soft scrim. Used for the "Multiple day tours" and
 * "1 Day tours" sections directly under the hero.
 */
export function DayToursSection({ id, headingId, heading, items }: DayToursSectionProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={headingId}>
      <div className="container">
        <h2 className={styles.heading} id={headingId}>
          {heading}
        </h2>

        <ul className={styles.grid}>
          {items.map((tour) => (
            <li key={tour.title} className={styles.card}>
              <img
                className={styles.img}
                src={tour.image}
                alt={tour.alt}
                loading="lazy"
                decoding="async"
              />
              <div className={styles.scrim} />
              <div className={styles.content}>
                <h3 className={styles.title}>{tour.title}</h3>
                <p className={styles.desc}>{tour.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
