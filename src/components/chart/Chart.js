import React, { useState, useEffect } from 'react';
import BarChart from './BarChart';
import HorizontalChart from './horizontalChart';

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
};

const Chart = ({ currentCategory }) => {
  const width = useWindowWidth();
  return width > 767 ? <BarChart /> : <HorizontalChart />;
};

export default Chart;
