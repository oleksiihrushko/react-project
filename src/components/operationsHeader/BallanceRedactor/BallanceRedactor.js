import React, { useState, useEffect } from "react";
import styles from "./ballanceRedactor.module.css";
import { useDispatch, useSelector } from "react-redux";
import GoToStatsButton from "./GoToStatsButton/GoToStatsButton";
import { addBalance } from "../../../redux/finance/financeOperations";

const localState = {
  isFirstTransaction: false,
  isEditing: false,
};

const BallanceRedactor = () => {
  const [isEditing, setEditing] = useState("");

  const balance = useSelector((state) => state.operations.balance);

console.log('typeof' , typeof balance) 

  const income = useSelector((state) => state.operations.income);
  const costs = useSelector((state) => state.operations.costs);
  const [value, setValue] = useState(balance);
  const dispatch = useDispatch();
  
  useEffect(() => {
    window.addEventListener("keydown", escListener);
    return () => {
      window.removeEventListener("keydown", escListener);
    };
  }, []);

  const closeEdit = () => setEditing(!isEditing);
console.log('value', value)
  const escListener = (event) => event.keyCode == 27 && closeEdit();

  const handleChange = ({ target: { value } }) => {
    if (value.indexOf(".") != "-1") {
      value = value.substring(2, value.indexOf(".") + 3);
    }
    !isNaN(value) && setValue(value);
  };

  if (income.length !== 0 && costs.length !== 0 && balance !== null) {
    localState.isFirstTransaction = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value !== 0) {
      console.log("1111", 1111);
      dispatch(addBalance({ amount: value }));
      setValue("");
      closeEdit();
    }
  };

  // const sss = () => {
  //    isEditing && handleSubmit()
  // };

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
            <form onSubmit={handleSubmit}>
              <input
                className={`${styles.flex} ${styles.value}`}
                type="text"
                value={value}
                onChange={handleChange}
              />
            </form>
           ) : ( 

            <p className={styles.value}>{balance} ₴</p> 
         )} 
          <button
            className={`${styles.flex} ${styles.btn}`}
            onClick={() => closeEdit()}
          >
            {isEditing ? "подтвердить" : "изменить"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BallanceRedactor;

// const BallanceRedactorForm = (props) => {

//   const [value, setValue] = useState(balance);
//   console.log('value', value)
//   const dispatch = useDispatch();

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         className={`${styles.flex} ${styles.value}`}
//         type="text"
//         value={value}
//         onChange={handleChange}
//       />
//     </form>
//   );
// };
