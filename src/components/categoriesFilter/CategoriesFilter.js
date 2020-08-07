import React from 'react';
import { TotalCountsCosts } from './config';
// import GoToMono from './monoBank/GoToMono';

const CategoriesFilter = ({ setCurrentCategory }) => (
  <>
    {/* <GoToMono /> */}
    <TotalCountsCosts setCurrentCategory={setCurrentCategory} />
  </>
);

export default CategoriesFilter;
