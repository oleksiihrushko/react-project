import React from "react";
import Media from "react-media";

import AuthForm from "../../components/authForm/AuthForm";
import styles from "./homePage.module.css";

import { ReactComponent as Bitcoin } from "../../ui/currency/bitcoin.svg";
import { ReactComponent as Pound } from "../../ui/currency/pound.svg";
import { ReactComponent as Euro } from "../../ui/currency/euro.svg";

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
                      <Pound className={styles.poundIcon} />
                      <Euro className={styles.euroIcon} />
                      <h1 className={styles.title}>Karbovanet$</h1>
                      <p className={styles.description}>smart finance</p>
                    </div>
                    <AuthForm />
                  </div>
                )}
              </>
            ) : (
              <>
                <div className={`${styles.wrapperDescription} container`}>
                  <Bitcoin className={styles.bitcoinIcon} />
                  <h1 className={styles.title}>Karbovanet$</h1>
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
