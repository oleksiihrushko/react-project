import React from 'react';
import styles from './style.module.css';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';

const Header = () => {
  const state = useSelector(state => state);
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.headerUl}>
          <li>LOGO</li>
          <li>{state.auth.token && <UserMenu />}</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
