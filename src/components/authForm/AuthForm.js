import React, { useState, useEffect } from "react";
import googleIcon from "../../ui/google-icon.png";
import styles from "./authForm.module.css";
import { register, login, logOut } from "../../redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";
import api from "../../services/api";
import authSlice from "../../redux/auth/authSlice";

const AuthForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typeRegister, setTypeRegister] = useState(false);

  const dispatch = useDispatch();

  const token = useSelector((state) => authSelectors.token(state));
  const photo = useSelector((state) => authSelectors.getPhoto(state));
  const googleUser = useSelector((state) => authSelectors.googleUser(state));

  const setGoogleUser = (googleUser) => {
    const user = {
      userData: {
        name: {
          fullName: googleUser.getBasicProfile().getName(),
          firstName: googleUser.getBasicProfile().getGivenName(),
          lastName: googleUser.getBasicProfile().getFamilyName(),
        },
      },
      photo: googleUser.getBasicProfile().getImageUrl(),
      token: googleUser.wc.access_token,
      googleLogin: true,
    };
    dispatch(authSlice.actions.loginSuccess(user));
  };

  const googleSignIn = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signIn({
      scope: "profile email",
    }).then(
      (user) => setGoogleUser(user),
      () => console.log("signIn ERROR")
    );
  };

  const signOut = (googleUser) => {
    if (googleUser) {
      const googleSignOut = () => {
        const GoogleAuth = window.gapi.auth2.getAuthInstance();
        GoogleAuth.signOut({
          scope: "profile email",
        }).then(
          () => console.log("signOut SUCCESS"),
          () => console.log("signOut ERROR")
        );
      };
      googleSignOut();
      dispatch(authSlice.actions.logoutGoogleSuccess());
    } else {
      dispatch(logOut());
    }
  };

  useEffect(() => {
    window.gapi.load("auth2", function () {
      window.gapi.auth2
        .init({
          // client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          client_id: "460326880610-0ski7kotqh77ijrc6cg9t0eusr3dfict",
        })
        .then(
          () => console.log("SUCCESS"),
          () => console.log("ERROR")
        );
    });
    return;
  }, []);

  useEffect(() => {
    if (token) {
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
        <button type="button" onClick={googleSignIn} className={styles.google}>
          <img
            className={styles.googleIcon}
            src={googleIcon}
            alt="google-icon"
          />
          Google
        </button>
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
            {typeRegister ? "аккаунт" : "регистрация"}
          </button>
        </div>
      </form>

      <br />
      <img src={photo} alt="img"></img>
      <button
        className={styles.buttonRegister}
        type="button"
        onClick={() => signOut(googleUser)}
      >
        logOut_g
      </button>
    </div>
  );
};

export default AuthForm;
