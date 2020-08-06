import React from "react";
import styles from "./CategoriesFilter.module.css";
import { TotalCountsCosts } from "./config";
// import GoToMono from "./monoBank/GoToMono";

const CategoriesFilter = ({setCurrentCategory}) => {
  // console.log('props', props)
  return (
    <section className={`${styles.wrapper} container`}>
      <TotalCountsCosts  setCurrentCategory={setCurrentCategory}/>
    </section>
  );
};

export default CategoriesFilter;
