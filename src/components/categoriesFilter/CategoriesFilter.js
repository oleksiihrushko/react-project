import React from 'react';
import styles from './CategoriesFilter.module.css';
import { TotalCountsCosts } from './config';
// import GoToMono from "./monoBank/GoToMono";

const CategoriesFilter = ({ setCurrentCategory }) => (
  <TotalCountsCosts setCurrentCategory={setCurrentCategory} />
);

export default CategoriesFilter;
