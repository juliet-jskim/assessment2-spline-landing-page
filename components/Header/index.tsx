import Link from "next/link";
import styles from ".//Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.main}>
        <div>
          <Link className={styles.headerLinks} href="/">
            Orbit.
          </Link>
        </div>
        <div className={styles.navigationLinks}>
          <Link className={styles.headerLinks} href="#newsletter">
            Sign Up
          </Link>
          <Link className={styles.headerLinks} href="#features">
            Our Features
          </Link>
          <Link className={styles.headerLinks} href="#review">
            Reviews
          </Link>
        </div>
      </header>
    </>
  );
}
