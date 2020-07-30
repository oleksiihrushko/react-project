import React, { useState } from 'react'
import { Link } from "react-router-dom";
import googleIcon from "../../ui/google-icon.png";
import styles from "./authForm.module.css";

const AuthForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [typeRegister, setTypeRegister] = useState(false);
  
  const handleInputFirstName = (e) => {e.preventDefault(); setFirstName(e.target.value)}
  const handleInputLastName = (e) => {e.preventDefault(); setLastName(e.target.value)}
  const handleInputEmail = (e) => {e.preventDefault(); setEmail(e.target.value)}
  const handleInputPassword = (e) => {e.preventDefault(); setPassword(e.target.value)}
  const handleTypeRegister = (e) => {e.preventDefault(); setTypeRegister(currentState=> {if(currentState){
    return false;
  } else {
    return true;
  }
})}
  

    return (
      <div className={styles.authWrapper}>
       <form onSubmit={()=>{}}>
  
  <p className={styles.googleDescr}>
    Вы можете авторизироваться с помощью Google account:
  </p>
  <Link className={styles.google} href="#">
    <img
      className={styles.googleIcon}
      src={googleIcon}
      alt="google-icon"
    />
    Google
  </Link>
  <p className={styles.authDescr}>
    Или зайти в приложение с помощью имейла и пароля, сперва
    зарегистрировавшись:
  </p>

  {typeRegister && 
  <>
  <label className={styles.label} for="name">
    Имя
  </label>

  <input
    id="name"
    className={styles.input}
    type="text"
    placeholder="First name"
    name="firstName"
    value={firstName}
    onChange={handleInputFirstName}
  />

  <label className={styles.label} for="lastName">
  Фамилия
  </label>

  <input
    id="lastName"
    className={styles.input}
    type="text"
    placeholder="Last name"
    name="lastName"
    value={lastName}
    onChange={handleInputLastName}
  />
  </>}

  <label className={styles.label} for="email">
    Электронная почта
  </label>

  <input
    id="email"
    className={styles.input}
    type="email"
    placeholder="Your@email.com"
    name="email"
    value={email}
    onChange={handleInputEmail}
  />
  <label className={styles.label} for="password">
    Пароль
  </label>

  <input
    id="password"
    className={styles.input + " " + styles.inputPassword}
    type="password"
    placeholder="Пароль"
    name="password"
    value={password}
    onChange={handleInputPassword}
  />

  <div className={styles.authBtnWrapper}>
    <button className={styles.buttonLogin} type="submit">
      войти
    </button>
    <button className={styles.buttonRegister} type="submit" onClick={handleTypeRegister}>
      {typeRegister ? 'логинизация' : 'регистрация'}
    </button>
  </div>

</form>
      </div>
    );
  }


export default AuthForm;
  