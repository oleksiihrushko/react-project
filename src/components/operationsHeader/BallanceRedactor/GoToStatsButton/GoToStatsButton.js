import React from "react";
import styles from "../ballanceRedactor.module.css";

const GoToStatsButton = () => (
  <div className={`${styles.flex} ${styles.stats}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>

    <button className={`${styles.flex} ${styles.report}`} onClick={() => alert("сумы - короли!!!")}>
      Перейти к отчетам
    </button>
  </div>
);

export default GoToStatsButton;
