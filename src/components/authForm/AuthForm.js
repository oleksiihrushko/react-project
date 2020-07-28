import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styles from './authForm.module.css'

class AuthForm extends Component {
  state = {
    email: ""
  }
  render() {
    return (
      <div className={styles.authWrapper}>
        <form>
          <p className={styles.googleDescr}>Вы можете авторизироваться с помощью  google account:</p>
          <Link className={styles.google} href="#">Google</Link>
          <p className={styles.authDescr}>Или зайти в приложение с помощью имейла и пароля, сперва зарегистрировавшись:</p>
          <label>
          Email
          <input
            type="email"
            placeholder="your@email.com"
            name="email"
            value=""
            onChange={()=>{}}
          />
        </label>
        <label>
        Password
          <input
            type="password"
            placeholder="password"
            name="password"
            value=""
            onChange={()=>{}}
          />
        </label>

        <button type="submit">Sign up as "login"</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;