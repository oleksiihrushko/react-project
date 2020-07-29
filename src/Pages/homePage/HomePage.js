import React from "react";
// import { ReactComponent as CabbageIcon } from "../../ui/cabbage-icon.svg";
import AuthForm from "../../components/authForm/AuthForm";
import styles from "./homePage.module.css";

const HomePage = () => {
  return (
    <section className={styles.sectionHomePage}>
      <div className={styles.wrapper}>
        <div className={`${styles.wrapperDescription} container`}>
          <h1 className={styles.title}>Kapu$ta</h1>
          <p className={styles.description}>smart finance</p>
        </div>
        <AuthForm />
      </div>
    </section>
  );
};

export default HomePage;
