import React, { useState, useEffect } from 'react';
import {
  clientData,
  getUserTransactions2,
  // getUserTransactions,
  clientData2,
} from './apiMono';
import { addCosts } from '../../../redux/finance/financeOperations';
import { useDispatch } from 'react-redux';

const GoToMono = () => {
  const dispatch = useDispatch();
  const [tokenMono, setTokenMonoBank] = useState('');
  const handleChange = ({ target: { value } }) => setTokenMonoBank(value);
  getUserTransactions2();
  console.log('222', 222);

  const handleSubmit = e => {
    e.preventDefault();
    const date = Date.now();
    const costDescription = 'abc';
    const categoryID = '5de1370769338f285fd33d00';
    const productId = '3242werkwjflsdjfjlh'
    const total = 11111;
    dispatch(
      addCosts(
        costDescription,
        categoryID,
        productId,
        new Date(date).toISOString(),
        Number(total),
      ),
    );
  // };

  // status: "success", balance: -1168,…}
  // balance: -1168
  // createdCosts: {product: {name: "Булка", category: {name: "Продукты", categoryId: "5ddaefec2a022d8ddf05cddb"},…},…}
  // amount: 200
  // costsId: "5f32921ff8b3ad413cb98dcc"
  // date: "2020-07-09T00:00:00.000Z"
  // forDeleteId: "5f32921ff1ca95d4bdd00ed2"
  // product: {name: "Булка", category: {name: "Продукты", categoryId: "5ddaefec2a022d8ddf05cddb"},…}
  // category: {name: "Продукты", categoryId: "5ddaefec2a022d8ddf05cddb"}
  // name: "Булка"
  // productId: "5f31d238c903e43b534bd79e"
  // status: "success"









  // const handleSubmit = event => {
  //   event.preventDefault();
  //   console.log('111', 111)
  //   // if (tokenMono !== '') {
  //     //   dispatch(operations.addContact(value));   //записать в стейт новое значение балланса

  //     dispatch(
  //       // console.log('333', 333),
  //       addCosts(
  //         'abc',
  //         '5de1370769338f285fd33d00',
  //         '34234234sfsdf',
  //         new Date(Date.now()).toISOString(),
  //         Number(1111),
  //       ),
  //     );
  //   // }
  //   // console.log('tokenMono', tokenMono)
  //   // setTokenMonoBank('');
  //   // console.log('tokenMono', tokenMono)
  // };
  // // clientData()
  // // clientData2()

  // // export const addCosts = (
  // //   costDescription,
  // //   categoryId,
  // //   productId,
  // //   date,
  // //   amount,
  // // )

  // // categoryId(pin):"5de1370769338f285fd33d00"

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
