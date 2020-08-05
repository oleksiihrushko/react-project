import React from "react";
import styles from "./CategoriesFilter.module.css";
import { TotalCountsCosts } from "./config";
// import GoToMono from "./monoBank/GoToMono";

const CategoriesFilter = () => {
  return (
    <section className={`${styles.wrapper} container`}>
      <TotalCountsCosts />
    </section>
  );
};

export default CategoriesFilter;
