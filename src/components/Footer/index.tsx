import styles from "./style.module.css";
import { DM_Sans } from "next/font/google";
import Image from "next/image";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Footer() {
  return (
    <div className={styles.containerBig}>
      <div className={`${styles.container}`}>
        <div className="text">
          <p className={`${dm_sans.className} ${styles.title}`}>
            Receive transmissions
          </p>
          <p className={`${dm_sans.className} ${styles.subtitle}`}>
            Unsubscribe at any time. Privacy policy
          </p>
        </div>
        <div className={`${dm_sans.className} ${styles.input}`}>Your email</div>
      </div>
      <div className={styles.container1}>
        <div className={styles.box}>
          <p className={`${dm_sans.className} ${styles.title1}`}>Learn</p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>
            Introduction
          </p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>Features</p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>Staking</p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>
            Get HEDRON
          </p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>FAQ</p>
        </div>
        <div className={styles.box}>
          <p className={`${dm_sans.className} ${styles.title1}`}>Build</p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>
            Developer Portal
          </p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>
            Ignite CLI
          </p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>
            Cronos SDK
          </p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>
            IBC Protocol
          </p>
        </div>
        <div className={styles.box}>
          <p className={`${dm_sans.className} ${styles.title1}`}>Explore</p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>Tokens</p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>
            Apps & Services
          </p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>Wallets</p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>
            Gravity DEX
          </p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>Blog</p>
        </div>
        <div className={styles.box}>
          <p className={`${dm_sans.className} ${styles.title1}`}>Participate</p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>
            Community
          </p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>
            Contributors
          </p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>Events</p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>
            Newsletters
          </p>
        </div>
        <div className={styles.box}>
          <p className={`${dm_sans.className} ${styles.title1}`}>Resources</p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>About</p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>
            Press Kit
          </p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>Design</p>
          <p className={`${dm_sans.className} ${styles.subtitle1}`}>
            Resources
          </p>
        </div>
      </div>
    </div>
  );
}
