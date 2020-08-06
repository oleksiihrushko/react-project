import React from "react";
import styles from "./style.module.css";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
import logo from "./img/logoreact.png";

const Header = () => {
  const state = useSelector((state) => state);
  const linkLogo = () => {};
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.headerUl}>
          <li>
            <a href="/">
              <img style={{ width: 90, height: 43 }} src={logo} alt="logo" />
            </a>
          </li>
          <li>{state.auth.token && <UserMenu />}</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
