import React from "react";
import OneMobileOperation from "../oneMobileOperation/OneMobileOperation";
import styles from "./MobileList.module.css";

const MobileList = ({ operations }) => {
  return (
    <>
      <ul className={styles.mobileList}>
        {operations.length === 0 ? (
          <p className={styles.noOperationsList}>No operations</p>
        ) : (
          operations.map((operation) => (
            <OneMobileOperation operation={operation} key={operation.id} />
          ))
        )}
      </ul>
    </>
  );
};

export default MobileList;
