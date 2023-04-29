import styles from "./style.module.css";
import { DM_Sans } from "next/font/google";
import retangle from "../../../public/hedron.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Welcome() {
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
    <div className={`${styles.container}`}>
      <Image src={retangle} alt="imagem" className={styles.image}></Image>
      {screenWidth > 1024 && (
        <Image src={retangle} alt="imagem" className={styles.imageBig}></Image>
      )}
      <p className={`${dm_sans.className} ${styles.subtitle1}`}>
        WELCOME TO CRONOS
      </p>
      <div className={styles.box}>
        <p className={styles.title}>The Internet of</p>
        <p className={styles.title}>Blockchains.</p>
      </div>
      <p className={`${dm_sans.className} ${styles.subtitle2}`}>
        Cronos is an ever expanding ecosystem of connected apps and services,
        built for a decentralized future.
      </p>
    </div>
  );
}
