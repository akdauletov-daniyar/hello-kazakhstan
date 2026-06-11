import { useT } from '../i18n'
import { Button } from '../components/Button'
import { PhotoPlaceholder } from '../components/PhotoPlaceholder'
import styles from './AboutSection.module.css'

export function AboutSection() {
  const t = useT()

  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className={`container ${styles.grid}`}>
        <div className={styles.media}>
          <PhotoPlaceholder
            alt="The Hello Kazakhstan team standing by their vehicle at a mountain viewpoint above Almaty"
            from="#1f6f78"
            to="#0b3a44"
            ratio="4 / 5"
            rounded
            src="/images/kate-ibragimova-550LbH6zDU8-unsplash.jpg"
          />
        </div>
        <div className={styles.text}>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 className={styles.heading} id="about-heading">
            {t.about.heading}
          </h2>
          {t.about.body.map((para, i) => (
            <p className={styles.para} key={i}>
              {para}
            </p>
          ))}
          <p className={styles.signature}>{t.about.signature}</p>
          <div className={styles.cta}>
            <Button as="a" href="#tours" variant="secondary">
              {t.about.exploreTours}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
