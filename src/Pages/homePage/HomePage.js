import React from "react";
import Media from "react-media";

import AuthForm from "../../components/authForm/AuthForm";
import styles from "./homePage.module.css";

import { ReactComponent as Bitcoin } from "../../ui/homePage/currency/bitcoin.svg";
import { ReactComponent as Pound } from "../../ui/homePage/currency/pound.svg";
// import { ReactComponent as Euro } from "../../ui/homePage/currency/euro.svg";
import { ReactComponent as Hryvnia } from "../../ui/homePage/currency/hryvnia_logo.svg";

const HomePage = () => {
  return (
    <section className={styles.sectionHomePage}>
      <div className={styles.wrapper}>
        <Media queries={{ large: "(min-width: 1280px)" }}>
          {(matches) =>
            matches.large ? (
              <>
                {matches.large && (
                  <div className={`${styles.wrapperDesktop} container`}>
                    <div className={styles.wrapperDescription}>
                      <Bitcoin className={styles.bitcoinIcon} />
                      <Hryvnia className={styles.hryvniaIcon} />
                      <Pound className={styles.poundIcon} />  
                      <h1 className={styles.title}>Karbovanet<span className={styles.uahSymbol}>₴</span></h1>
                      <p className={styles.description}>smart finance</p>
                    </div>
                    <AuthForm />
                  </div>
                )}
              </>
            ) : (
              <>
                <div className={`${styles.wrapperDescription} container`}>
                  <Hryvnia className={styles.hryvniaIcon} />
                  <h1 className={styles.title}>Karbovanet<span className={styles.uahSymbol}>₴</span></h1>
                  <p className={styles.description}>smart finance</p>
                </div>
                <AuthForm />
              </>
            )
          }
        </Media>
      </div>
    </section>
  );
};

export default HomePage;
