import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../ui/homePage/currency/hryvnia_logo.svg";

const Header = () => {
  const state = useSelector((state) => state);
  return (
      <header className={`${styles.header} container`}>
        <ul className={styles.headerList}>
          <li>
            <Link to='/' className={styles.headerLink}>
              <Logo className={styles.logo}/>
              <p className={styles.logoTitle}>KARBO</p>
            </Link>
          </li>
          {state.auth.token && <li><UserMenu /></li>}
        </ul>
      </header>
  );
};

export default Header;
