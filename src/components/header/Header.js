import React from 'react';
import styles from './style.module.css';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';
import logo from './img/logoreact.png';

const Header = () => {
  const state = useSelector(state => state);
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.headerUl}>
          <li>
            <img style={{ width: 100, height: 40 }} src={logo} alt="logo" />
          </li>
          <li>{state.auth.token && <UserMenu />}</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
