import styles from "./style.module.css";
import { DM_Sans } from "next/font/google";
import helix from "../../../public/Helix.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function OnePage() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`${styles.bigContainer}`}>
      {screenWidth > 1024 && (
        <Image src={helix} alt="imagem" className={styles.image}></Image>
      )}
      <div className={`${styles.container}`}>
        <p className={`${dm_sans.className} ${styles.subtitle1}`}>
          COMMUNITY-OWNED AND OPERATED
        </p>
        <div className={styles.box}>
          <p className={styles.title}>Enter a Universe</p>
          <p className={styles.title}>of Connected</p>
          <p className={styles.title}>Services.</p>
        </div>
        <p className={`${dm_sans.className} ${styles.subtitle2}`}>
          Cronos apps and services connect using IBC, the Inter-Blockchain
          Communication protocol. This innovation enables you to freely exchange
          assets and data across sovereign.
        </p>
        <div className={styles.boxButton}>
          <div className={`${dm_sans.className} ${styles.button1}`}>Learn</div>
          <div className={`${dm_sans.className} ${styles.button2}`}>
            Explore Tokens {">"}
          </div>
        </div>
      </div>
      <div className={`${styles.container1}`}>
        <div className={styles.box}>
          <p className={styles.title1}>265+</p>
          <p className={`${dm_sans.className} ${styles.subtitle3}`}>
            Apps & services
          </p>
        </div>
        <div className={styles.box}>
          <p className={styles.title1}>$63B+</p>
          <p className={`${dm_sans.className} ${styles.subtitle3}`}>
            Digital assets
          </p>
        </div>
      </div>
    </div>
  );
}
