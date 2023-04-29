import styles from "./style.module.css";

import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: "500",
});

export default function Header() {
  return (
    <div className={`${styles.container} ${dm_sans.className}`}>
      <p>CRONOS</p>
      <div className={styles.box}>
        <p>Learn</p>
        <p>Build</p>
        <p>Explore</p>
      </div>
      <p>Get CRONOS {">"}</p>
    </div>
  );
}
