import styles from "./style.module.css";
import { DM_Sans } from "next/font/google";
import icon1 from "../../../public/icon1.png";
import icon2 from "../../../public/icon2.png";
import icon3 from "../../../public/icon3.png";
import icon4 from "../../../public/icon4.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function LastPage() {
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
    <div className={styles.containerBig}>
      <div className={`${styles.container}`}>
        <div className={styles.box}>
          <Image src={icon1} alt="imagem" className={styles.image}></Image>
          <p className={`${dm_sans.className} ${styles.title}`}>Marketplace</p>
          <p className={`${dm_sans.className} ${styles.subtitle}`}>
            Set to operate a next-gen decentralized exchange, swapping digital
            assets from across the Interchain, with very low fees and instant
            transaction confirmation.
          </p>
        </div>
        <div className={styles.box}>
          <Image src={icon2} alt="imagem" className={styles.image}></Image>
          <p className={`${dm_sans.className} ${styles.title}`}>
            Security provider
          </p>
          <p className={`${dm_sans.className} ${styles.subtitle}`}>
            With the upcoming Interchain Security feature, HEDRON will soon be
            securing many chains, in exchange for additional staking rewards.
          </p>
        </div>
      </div>
      <div className={`${styles.container}`}>
        <div className={styles.box}>
          <Image src={icon3} alt="imagem" className={styles.image}></Image>
          <p className={`${dm_sans.className} ${styles.title}`}>Router</p>
          <p className={`${dm_sans.className} ${styles.subtitle}`}>
            A core mission of the Hub – to connect chains by establishing IBC
            connections with compatible chains and operating decentralized
            bridges with chains like Ethereum and Bitcoin.
          </p>
          {screenWidth > 1024 && (
            <div className={`${dm_sans.className} ${styles.button1}`}>
              Cosmos Hub {">"}
            </div>
          )}
        </div>
        <div className={styles.box}>
          <Image src={icon4} alt="imagem" className={styles.image}></Image>
          <p className={`${dm_sans.className} ${styles.title}`}>Custodian</p>
          <p className={`${dm_sans.className} ${styles.subtitle}`}>
            Located at the crossroads of the Interchain, the Hub is extremely
            secure, the best place to hold digital assets and manage accounts
            across many chains.
          </p>
          {screenWidth < 1024 && (
            <div className={`${dm_sans.className} ${styles.button1}`}>
              Cosmos Hub {">"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
