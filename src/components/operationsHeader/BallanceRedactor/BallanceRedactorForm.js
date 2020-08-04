import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ballanceRedactor.module.css";
import { addBalance } from "../../../redux/finance/financeOperations";

const BallanceRedactorForm = (props) => {
  const balance = useSelector((state) => state.operations.ballance);

  useEffect(() => {
    window.addEventListener("keydown", escListener);
    return () => {
      window.removeEventListener("keydown", escListener);
    };
  }, []);

  const [value, setValue] = useState(balance);
  console.log('value', value)
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    if (value.indexOf(".") != "-1") {
      value = value.substring(0, value.indexOf(".") + 3)}
    !isNaN(value) && setValue(value)};

  const closeEdit = () => props.setEditing(!props.isEditing);
  const escListener = (event) => event.keyCode == 27 && closeEdit();

  const handleSubmit = (event) => {
    console.log('1111', 1111)
    event.preventDefault();
    if (value !== 0) {
      dispatch(addBalance({amount: value}));
      setValue("");
      closeEdit();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={`${styles.flex} ${styles.value}`}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default BallanceRedactorForm;
