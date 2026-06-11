import { useT } from '../i18n'
import { SectionHeading } from '../components/SectionHeading'
import { Rating } from '../components/Rating'
import styles from './ReviewsSection.module.css'

export function ReviewsSection() {
  const t = useT()

  return (
    <section id="reviews" className="section" aria-labelledby="reviews-heading">
      <div className="container">
        <SectionHeading
          eyebrow={t.reviews.eyebrow}
          title={t.reviews.heading}
          align="center"
          id="reviews-heading"
        >
          <div className={styles.summary}>
            <Rating value={5.0} size={20} />
            <span className={styles.summaryText}>{t.reviews.summary}</span>
          </div>
        </SectionHeading>

        <ul className={styles.grid}>
          {t.reviews.items.map((review) => (
            <li className={styles.card} key={review.name + review.from}>
              <Rating value={5.0} size={16} />
              <blockquote className={styles.quote}>“{review.quote}”</blockquote>
              <footer className={styles.author}>
                <span className={styles.avatar} aria-hidden="true">
                  {review.name.charAt(0)}
                </span>
                <span>
                  <span className={styles.name}>{review.name}</span>
                  <span className={styles.from}>{review.from}</span>
                </span>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
