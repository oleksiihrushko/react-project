import React, { Component } from "react";
import { Link } from "react-router-dom";
import googleIcon from "../../ui/google-icon.png";
import styles from "./authForm.module.css";

class AuthForm extends Component {
  state = {
    email: "",
  };
  render() {
    return (
      <div className={styles.authWrapper}>
        <form>
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
          <label className={styles.label} for="email">
            Электронная почта
          </label>
          <input
            id="email"
            className={styles.input}
            type="email"
            placeholder="Your@email.com"
            name="email"
            value=""
            onChange={() => {}}
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
            value=""
            onChange={() => {}}
          />

          <div className={styles.authBtnWrapper}>
            <button className={styles.buttonLogin} type="submit">
              войти
            </button>
            <button className={styles.buttonRegister} type="submit">
              регистрация
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AuthForm;
