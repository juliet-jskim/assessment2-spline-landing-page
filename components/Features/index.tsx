import styles from "./Features.module.css";
import Spline from "@splinetool/react-spline";

export default function Features() {
  return (
    <>
      <main className={styles.featuresContainer}>
        <section className={styles.card}>
          <div className={styles.cardContents}>
            <div className={styles.spline}>
            <Spline scene="https://prod.spline.design/AyYqJkLWhnb3yVKz/scene.splinecode" />
            </div>
            <div className={styles.featurestext}>
              <h5 className={styles.header5}>Real-time results</h5>
              <p className={styles.pText}>
                Craft your adventure by adding, modifying, or removing
                activities as you see fit from your itinerary.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.card}>
          <div className={styles.cardContents}>
            <div className={styles.spline}>
            <Spline scene="https://prod.spline.design/q3OUV6TEtWu4S77X/scene.splinecode" />
            </div>
            <div className={styles.featurestext}>
              <h5 className={styles.header5}>Intuitive budgeting tool</h5>
              <p className={styles.pText}>
                Track expenses, see your spending, and make the most of your
                travel funds effortlessly.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.card}>
          <div className={styles.cardContents}>
            <div className={styles.spline}>
            <Spline scene="https://prod.spline.design/OCjDAQfzfPeC09i1/scene.splinecode" />
            </div>
            <div className={styles.featurestext}>
              <h5 className={styles.header5}>
                Experiences from fellow globetrotters
              </h5>
              <p className={styles.pText}>
                Explore local delights and hidden gems recommended by real
                people, tailored to your tastes.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
