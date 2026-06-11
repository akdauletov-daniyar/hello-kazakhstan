import { useState } from 'react'
import { tours } from '../data/tours'
import { useT } from '../i18n'
import { SectionHeading } from '../components/SectionHeading'
import { TourCard } from '../components/TourCard'
import styles from './ToursSection.module.css'

export function ToursSection() {
  const t = useT()
  // Favourite hearts are local-only state, keyed by tour id.
  const [favourites, setFavourites] = useState<Set<string>>(() => new Set())

  const toggleFavourite = (id: string) =>
    setFavourites((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  return (
    <section id="tours" className="section" aria-labelledby="tours-heading">
      {/* #regions anchor — tours are organised by region */}
      <span id="regions" className={styles.anchor} aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow={t.tours.eyebrow}
          title={t.tours.heading}
          sub={t.tours.sub}
          id="tours-heading"
        />
        <div className={styles.grid}>
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              isFavourite={favourites.has(tour.id)}
              onToggleFavourite={toggleFavourite}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
