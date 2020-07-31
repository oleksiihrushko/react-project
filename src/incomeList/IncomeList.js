import React, { Fragment } from "react";
import Media from "react-media";
import Titles from "../oneIncome/titles/Titles";
import OneIncome from "../oneIncome/OneIncome";
import styles from "./IncomeList.module.css";

const testIncome = [
  {
    id: 4,
    date: "29.07.2020",
    category: "Income",
    price: 800,
  },

  {
    id: 5,
    date: "30.07.2020",
    category: "Income",
    price: 500,
  },

  {
    id: 6,
    date: "31.07.2020",
    category: "Income",
    price: 10,
  },
];

const IncomeList = ({ deleteOperation }) => {
  return (
    <>
      <ul className={styles.incomeList}>
        <Media
          queries={{
            medium: "(min-width: 768px) and (max-width: 1023px)",
            large: "(min-width: 1024px)",
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.medium && <Titles />}
              {matches.large && <Titles />}
              {testIncome.map((operation) => (
                <OneIncome
                  operation={operation}
                  key={operation.id}
                  deleteOperation={deleteOperation}
                />
              ))}
            </Fragment>
          )}
        </Media>
      </ul>
    </>
  );
};

export default IncomeList;
