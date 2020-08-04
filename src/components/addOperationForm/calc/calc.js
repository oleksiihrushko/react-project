import React, { useState } from "react";
import styles from "./calc.module.css";

const Calc = ({
  displayValue,
  setDisplayValue,
  changeTotalByCalc,
  setOpenCalc,
}) => {
  // const [displayValue, setDisplayValue] = useState("0");
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);
  const [operationType, setOperationType] = useState(null);
  const [outcomePressed, setOutcomePressed] = useState(false);

  const inputDigit = (digit) => {
    if (displayValue === "0" && (digit === "0" || digit === ".")) return;
    if (displayValue.includes(".") === true && digit === ".") return;

    if (
      displayValue === "0" ||
      (firstValue !== null && secondValue === null) ||
      outcomePressed === true
    ) {
      setDisplayValue(digit);
      setOutcomePressed(false);
      if (firstValue !== null) {
        setSecondValue(digit);
      }
    } else {
      setDisplayValue(displayValue + digit);
      if (firstValue !== null) {
        setSecondValue(secondValue + digit);
      }
    }
  };

  const clear = () => {
    setDisplayValue("0");
    setFirstValue(null);
    setSecondValue(null);
    setOperationType(null);
  };

  const operationPress = (type) => {
    setFirstValue(displayValue);
    setOperationType(type);
    setOutcomePressed(false);
  };

  const pressOutcome = () => {
    if (firstValue === null) return;
    if (operationType === "+") {
      setDisplayValue(
        `${
          Number(parseFloat(firstValue).toFixed(2)) +
          Number(parseFloat(secondValue).toFixed(2))
        }`
      );
    } else if (operationType === "-") {
      setDisplayValue(
        `${
          Number(parseFloat(firstValue).toFixed(2)) -
          Number(parseFloat(secondValue).toFixed(2))
        }`
      );
    } else if (operationType === "/") {
      setDisplayValue(
        `${
          `${(
            Number(parseFloat(firstValue)) / Number(parseFloat(secondValue))
          ).toFixed(2)}`.includes(".00")
            ? `${(
                Number(parseFloat(firstValue)) / Number(parseFloat(secondValue))
              ).toFixed(0)}`
            : `${(
                Number(parseFloat(firstValue)) / Number(parseFloat(secondValue))
              ).toFixed(2)}`
        }`
      );
    } else if (operationType === "*") {
      setDisplayValue(
        `${
          `${(
            Number(parseFloat(firstValue)) * Number(parseFloat(secondValue))
          ).toFixed(2)}`.includes(".00")
            ? `${(
                Number(parseFloat(firstValue)) * Number(parseFloat(secondValue))
              ).toFixed(0)}`
            : `${(
                Number(parseFloat(firstValue)) * Number(parseFloat(secondValue))
              ).toFixed(2)}`
        }`
      );
    }

    setFirstValue(null);
    setSecondValue(null);
    setOperationType(null);
    setOutcomePressed(true);
  };

  return (
    <div className={styles.container}>
      <p className={styles.result}>{displayValue}</p>
      {window.screen.width <= 767 && (
        <p className={styles.closeCalc} onClick={() => setOpenCalc(false)}>
          ˣ
        </p>
      )}
      <div className={styles.keys}>
        <p className={styles.clear} onClick={() => clear()}>
          C
        </p>
        <p className={styles.apply} onClick={() => changeTotalByCalc()}>
          Apply
        </p>
        <p className={styles.split} onClick={() => operationPress("/")}>
          ÷
        </p>
        <p className={styles.seven} onClick={() => inputDigit("7")}>
          7
        </p>
        <p className={styles.eight} onClick={() => inputDigit("8")}>
          8
        </p>
        <p className={styles.nine} onClick={() => inputDigit("9")}>
          9
        </p>
        <p className={styles.multiply} onClick={() => operationPress("*")}>
          *
        </p>
        <p className={styles.four} onClick={() => inputDigit("4")}>
          4
        </p>
        <p className={styles.five} onClick={() => inputDigit("5")}>
          5
        </p>
        <p className={styles.six} onClick={() => inputDigit("6")}>
          6
        </p>
        <p className={styles.minus} onClick={() => operationPress("-")}>
          -
        </p>
        <p className={styles.one} onClick={() => inputDigit("1")}>
          1
        </p>
        <p className={styles.two} onClick={() => inputDigit("2")}>
          2
        </p>
        <p className={styles.three} onClick={() => inputDigit("3")}>
          3
        </p>
        <p className={styles.plus} onClick={() => operationPress("+")}>
          +
        </p>
        <p className={styles.zero} onClick={() => inputDigit("0")}>
          0
        </p>
        <p className={styles.dot} onClick={() => inputDigit(".")}>
          .
        </p>
        <p className={styles.outcome} onClick={() => pressOutcome()}>
          =
        </p>
      </div>
    </div>
  );
};

export default Calc;
