import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { register, login } from '../../redux/auth/authOperations';
import { createGoogleUser } from '../../services/helpers';
import authSlice from '../../redux/auth/authSlice';
import googleIcon from '../../ui/google-icon.png';
import styles from './authForm.module.css';

const AuthForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [typeRegister, setTypeRegister] = useState(false);

  const dispatch = useDispatch();

  const setGoogleUser = googleUser => {
    const user = createGoogleUser(googleUser);
    dispatch(authSlice.actions.loginSuccess(user));
  };

  const googleSignIn = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signIn({
      scope: 'profile email',
    }).then(
      user => setGoogleUser(user),
      error => dispatch(authSlice.actions.loginError(error)),
    );
  };

  useEffect(() => {
    window.gapi.load('auth2', function () {
      window.gapi.auth2
        .init({
          // client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          client_id: '460326880610-0ski7kotqh77ijrc6cg9t0eusr3dfict',
        })
        .then(
          () => console.log('Google init Success'),
          error => dispatch(authSlice.actions.loginError(error)),
        );
    });
    return;
  }, []);

  const handleInputFirstName = e => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const handleInputLastName = e => {
    e.preventDefault();
    setLastName(e.target.value);
  };
  const handleInputEmail = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleInputPassword = e => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleTypeRegister = () => {
    setTypeRegister(currentState => {
      if (currentState) {
        return false;
      } else {
        return true;
      }
    });
  };

  const handleSubmit = e => {
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
        {/* --------- form start --------- */}

        <p className={styles.googleDescr}>
          Вы можете авторизироваться с помощью Google account:
        </p>

        {/* --------- google button--------- */}
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
            {/* --------- first name input --------- */}
            <label className={styles.label} htmlFor="name">
              Имя
            </label>

            <input
              className={styles.input}
              pattern="(^[A-Za-zА-Яа-яЁё]).{3,}"
              maxLength="20"
              id="name"
              type="text"
              placeholder="First name"
              name="firstName"
              value={firstName}
              onChange={handleInputFirstName}
              required
              autoFocus
            />

            {/* --------- last name input --------- */}
            <label className={styles.label} htmlFor="lastName">
              Фамилия
            </label>

            <input
              className={styles.input}
              pattern="(^[A-Za-zА-Яа-яЁё]).{3,}"
              maxLength="20"
              id="lastName"
              placeholder="Last name"
              name="lastName"
              type="text"
              value={lastName}
              onChange={handleInputLastName}
              required
            />
          </>
        )}

        {/* --------- email input --------- */}
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
          required
          autoFocus
        />

        {/* --------- password input --------- */}
        <label className={styles.label} htmlFor="password">
          Пароль
        </label>

        <input
          className={styles.input + ' ' + styles.inputPassword}
          placeholder="Пароль"
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleInputPassword}
          minLength="6"
          maxLength="15"
          required
        />

        {/* --------- buttons login/register --------- */}
        <div className={styles.authBtnWrapper}>
          <button className={styles.buttonLogin} type="submit">
            {typeRegister ? 'создать' : 'войти'}
          </button>
          <button
            className={styles.buttonRegister}
            type="button"
            onClick={handleTypeRegister}
          >
            {typeRegister ? 'аккаунт' : 'регистрация'}
          </button>
        </div>

        {/* --------- /form end --------- */}
      </form>
    </div>
  );
};

export default AuthForm;
