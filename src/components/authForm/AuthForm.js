import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import googleIcon from "../../ui/google-icon.png";
import styles from "./authForm.module.css";
import { register, login, logOut } from "../../redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";
import api from "../../services/api";

const AuthForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typeRegister, setTypeRegister] = useState(false);

  const dispatch = useDispatch();

  const token = useSelector((state) => authSelectors.token(state));

  useEffect(() => {
    console.log("useEffect");
    if (token) {
      console.log("token", token);
      api.token.set(token);
    }
  }, []);

  const handleInputFirstName = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const handleInputLastName = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  };
  const handleInputEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleInputPassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleTypeRegister = () => {
    setTypeRegister((currentState) => {
      if (currentState) {
        return false;
      } else {
        return true;
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeRegister) {
      const setRegParams = (firstName, lastName, email, password) => ({
        email: email,
        password: password,
        name: {
          fullName: `${firstName} ${lastName}`,
          firstName: firstName,
          lastName: lastName,
        },
      });
      dispatch(register(setRegParams(firstName, lastName, email, password)));
    } else {
      const setLoginParams = (email, password) => ({
        email: email,
        password: password,
      });
      dispatch(login(setLoginParams(email, password)));
    }
  };

  return (
    <div className={styles.authWrapper}>
      <form onSubmit={handleSubmit}>
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

        {typeRegister && (
          <>
            <label className={styles.label} htmlFor="name">
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

            <label className={styles.label} htmlFor="lastName">
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
          </>
        )}

        <label className={styles.label} htmlFor="email">
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
        <label className={styles.label} htmlFor="password">
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
            {typeRegister ? "создать" : "войти"}
          </button>
          <button
            className={styles.buttonRegister}
            type="button"
            onClick={handleTypeRegister}
          >
            {typeRegister ? "логинизация" : "регистрация"}
          </button>
          <button
            className={styles.buttonRegister}
            type="button"
            onClick={() => dispatch(logOut())}
          >
            logOut
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
