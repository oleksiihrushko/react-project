import React, { useState } from "react";
import styles from "./ballanceRedactor.module.css";
// import { useDispatch, useSelector } from "react-redux";
import BallanceRedactorForm from "./BallanceRedactorForm";
import GoToStatsButton from "./GoToStatsButton/GoToStatsButton";
import GoToMono from "../../categoriesFilter/monoBank/GoToMono";

const TEMP = {
  status: "string",
  amount_count: 0,
  operations: {
    amount: 1150.45,
    income: [1], //[{}, {}]
    costs: [3], //[{}, {}]
    incomeCategories: [], //['', '', '']
    costsCategories: [], //['', '', '']
  },
};

const localState = {
  isFirstTransaction: false,
  isEditing: false,
};

const BallanceRedactor = () => {
  const [isEditing, setEditing] = useState("");

  // const ballance = useSelector ((state) => state.operations.ballance);

  // const dispatch = useDispatch();
  // const [stateBal, setstate] = useState(getUserBallance);
  // console.log("state", stateBal);
  // console.log('isAuthenticated', isAuthenticated(state))
  // const { ballance } = stateBal;
  // const [isFirstTransaction, setTransactions] = useState(localState);
  const [state, setstate] = useState(TEMP);
  const {
    operations: { income, costs, amount },
  } = state;

  if (income.length !== 0 && costs.length !== 0 && amount !== null) {
    // dispatch(localState.isFirstTransaction("true"));
    localState.isFirstTransaction = true;
  }
  return (
    <section
      className={`${styles.flex} ${styles.wrapper}  ${styles.secPad}  container`}
    >
      <GoToStatsButton />

      {/* <div className={`${styles.flex} ${styles.wrapper} `}> */}
      <div className={`${styles.flex} ${styles.div} `}>
        <p className={`${styles.bal_text}  `}>Баланс:</p>
        <div className={`${styles.flex} ${styles.ballanceWrap}`}>
          {isEditing ? (
            <BallanceRedactorForm
              isEditing={isEditing}
              setEditing={setEditing}
              amount={amount}
            />
          ) : (
            <p className={styles.value}>{amount} ₴</p>
          )}
          <button
            className={`${styles.flex} ${styles.btn}`}
            onClick={() => setEditing(!isEditing)}
          >
            {isEditing ? "подтвердить" : "изменить"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BallanceRedactor;
