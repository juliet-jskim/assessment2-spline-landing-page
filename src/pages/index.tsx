import Image from "next/image";
import Spline from "@splinetool/react-spline";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

//components
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Head>
        <link rel="stylesheet" href="Home.module.css" />
        <title>Orbit | 2024</title>
        <meta
          name="description"
          content="Landing Page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" sizes="32x32" />
      </Head>
      <Header />
      <section id="header" className={styles.headerContainer}>
        <div className={styles.headerLeftColumn}>
          <div className={styles.headerTextContainer}>
            <h1 className={styles.header1}>Optimize your next trip with AI</h1>
            <h3 className={styles.header3}>
              Get your travel itinerary and budget plans in minutes
            </h3>
          </div>
          <Link className={styles.button} href="#features">
            Plan A Trip with AI
          </Link>
        </div>
        <div className={styles.rightColumn}>
        <Spline scene="https://prod.spline.design/lYlnWk1xznFelUrO/scene.splinecode" />
        </div>
      </section>
      <section id="about" className={styles.descriptionContainer}>
        <div className={styles.descriptionLeftColumn}>
          <h2 className={styles.header2}>
            Orbit streamlines travel planning, taking your trips to new heights
          </h2>
          <h4 className={styles.header4}>
            Budgeting, accommodations, activities, and real reviews of locations
            are all manageable with a simple tap
          </h4>
        </div>
        <Spline
          className={styles.splinePhone}
          scene="https://prod.spline.design/NP918AiO3KKF4VgZ/scene.splinecode"
        />
      </section>
      <section id="features" className={styles.features}>
        <div className={styles.componentsImage}>
          <Image
            src={"/orbit-components.png"}
            alt="orbit components"
            width={567}
            height={568}
          />
        </div>
        <div className={styles.featuresHeader}>
          <h5 className={styles.header5}>ORBIT APP</h5>
          <h2 className={styles.header2Features}>
            Your essential travel toolkit
          </h2>
          <h4
            className={styles.header4Features}
          >
            Introducing your itinerary planning to personalized recommendations
            catered to your preferences
          </h4>
        </div>
        <Features />
      </section>
      <section id="review" className={styles.review}>
        <div className={styles.reviewHeaderContainer}>
          <h2 className={styles.header2Reviews}>
            Praises from our fellow travelers
          </h2>
          <h4 className={styles.header4Reviews}>
            Take a look at what our satisfied users say about their Orbit
            experience
          </h4>
        </div>
        <div className={styles.reviewSection}>
          <div className={styles.review1}>
            <Image
              className={styles.reviewComments}
              src={"/review-1.png"}
              alt="orbit components"
              width={632}
              height={128}
            />
            <Image
              className={styles.reviewComments2}
              src={"/review-2.png"}
              alt="orbit components"
              width={413}
              height={64}
            />
          </div>
          <div className={styles.review2}>
            <Image
              className={styles.reviewComments}
              src={"/review-3.png"}
              alt="orbit components"
              width={632}
              height={128}
            />
            <Image
              className={styles.reviewComments}
              src={"/review-4.png"}
              alt="orbit components"
              width={632}
              height={128}
            />
          </div>
        </div>
      </section>
      <section id="newsletter" className={styles.newsletter}>
        <h6 className={styles.header6}>
          Ready to Elevate Your Travels? Experience Orbit Today!
        </h6>
        <input
          className={styles.email}
          type="email"
          placeholder="enter your email"
        />
        <div className={styles.newsletterLink}>
          <Link href="/">sign up for our newsletter</Link>
          <Image src={"/arrow.svg"} alt="arrow icon" width={15} height={17} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
