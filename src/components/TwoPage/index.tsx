import styles from "./style.module.css";
import { DM_Sans } from "next/font/google";
import thorus from "../../../public/Thorus.png";
import Image from "next/image";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function TwoPage() {
  return (
    <div className={`${styles.container}`}>
      <Image src={thorus} alt="imagem" className={styles.image}></Image>
      <p className={`${dm_sans.className} ${styles.subtitle1}`}>
        ENTER THE CRONOS HUB
      </p>
      <div className={styles.box}>
        <p className={styles.title}>The Heart of the</p>
        <p className={styles.title}>Interchain.</p>
      </div>
      <p className={`${dm_sans.className} ${styles.subtitle2}`}>
        Serving as the economic center of Cronos, the Cronos Hub is a blockchain
        that provides vital services to the Interchain
      </p>
    </div>
  );
}
