import React, { useState } from "react";
import { clientData, getUserTransactions } from "./apiMono";

const GoToMono = () => {
  const [tokenMono, setTokenMonoBank] = useState("");
  const handleChange = ({ target: { value } }) => setTokenMonoBank(value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (tokenMono !== "") {
      //   dispatch(operations.addContact(value));   //записать в стейт новое значение балланса
    }
    setTokenMonoBank("");
  };
  clientData()
  getUserTransactions()

  return (
    <>
    
      <button>
        <a href="https://api.monobank.ua/"> Подключить Моно</a>
      </button>
      <form onSubmit={handleSubmit}>
        <input
          //   className={`${styles.flex} ${styles.value}`}/
          type="text"
          value={tokenMono}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default GoToMono;
