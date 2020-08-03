import React from "react";
import BarChart from "./BarChart";
import HorizontalChart from "./HorizontalChart";
import { useWindowWidth } from "./hooks";

const Chart = () => {
  const width = useWindowWidth();
  return width > 767 ? <BarChart /> : <HorizontalChart />;
};

export default Chart;
