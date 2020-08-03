import React, { useState, useEffect } from "react";

// import { useDispatch } from "react-redux";
import styles from "./ballanceRedactor.module.css";

const Form = (props) => {
  useEffect(() => {
    window.addEventListener("keydown", escListener);
    return () => {
      window.removeEventListener("keydown", escListener);
    };
  }, []);
  const [value, setValue] = useState(props.amount);
  // const dispatch = useDispatch();
  const handleChange = ({ target: { value } }) =>
    !isNaN(value) && setValue(value);
  const closeEdit = () => props.setEditing(!props.isEditing);
  const escListener = (event) => event.keyCode == 27 && closeEdit();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value !== 0) {
      //   dispatch(operations.addContact(value));   //записать в стейт новое значение балланса
    }
    // setValue("");
    closeEdit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
       className={`${styles.flex} ${styles.value}`}
        type="text"
        value={value}
        onChange={handleChange}/>
    </form>
  );
};

export default Form;
