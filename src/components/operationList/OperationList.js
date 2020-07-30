import React, { Fragment } from "react";
import Media from "react-media";
import Title from "../oneOperation/title/Title";
import OneOperation from "../oneOperation/OneOperation";
import styles from "./OperationList.module.css";

const testOperation = [
  {
    id: 1,
    date: "21.07.2020",
    category: "Transport",
    price: 8,
    operation: "Metroззззззззззззззззззззiiiiiiiiiiiiiiiii",
  },

  {
    id: 2,
    date: "25.07.2020",
    category: "Products",
    price: 550,
    operation: "Kiwi",
  },

  {
    id: 3,
    date: "28.07.2020",
    category: "Transport",
    price: 10,
    operation: "Train",
  },
];

const OperationList = ({ deleteOperation }) => {
  
  return (
    <>
      <ul className={styles.operationList}>
        <Media
          queries={{
            medium: "(min-width: 768px) and (max-width: 1023px)",
            large: "(min-width: 1024px)",
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.medium && <Title />}
              {matches.large && <Title />}
              {testOperation.map((operation) => (
                <OneOperation
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

export default OperationList;
