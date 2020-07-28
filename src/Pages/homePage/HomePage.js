import React from 'react'
import styles from './homePage.module.css'

const HomePage = () => {
    return (
      <section className={styles.sectionHomePage}>
        <div className={styles.wrapper}>
          <div className={styles.wrapperDescription}>
            <h1 className={styles.title}>Kapusta</h1>
            <p className={styles.description}>smart finance</p>

          </div>
        </div>
      </section>
    );
}

export default HomePage;