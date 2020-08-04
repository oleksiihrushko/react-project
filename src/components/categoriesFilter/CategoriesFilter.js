import React from "react";
import styles from "./CategoriesFilter.module.css";
import config from "./config";
import * as count from "./services";
import { useSelector } from "react-redux";
// import GoToMono from "./monoBank/GoToMono";

const CategoriesFilter = () => {
  // console.log("count", count.default.countCar);

  // const costs = useSelector((state) => 
  // console.log(state.operations.costs))
  // .operations.costs.product.name 
  const costs = useSelector(state => {console.log('state', state.operations.costs)
  // state.operations
  })

  console.log("costs", costs);

  return (
    <section className={`${styles.wrapper} container`}>
      <ul className={styles.ul} className={styles.flex}>
        {config.map(({ name, svg }) => {
          return (
            <li key={name} className={`${styles.flex} ${styles.li}`}>
              <button
                onClick={() => {
                  console.log("123", 123); //куда
                }}
                className={styles.btn}
              >
                <p className={`${styles.prise}`}>total</p>
                <div className={styles.svg}>{svg}</div>
                <p className={styles.name}>{name}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CategoriesFilter;
