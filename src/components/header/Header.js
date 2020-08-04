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
          <li>
            {state.auth.token && (
              <ul className={styles.headerUlUl}>
                <li>
                  <span
                    style={{
                      fontFamily: 'RobotoRegular',
                      backgroundColor: '#f4f7fa',
                      paddingBottom: 5,
                      paddingTop: 5,
                      paddingLeft: 10,
                      paddingRight: 10,
                      borderRadius: '50%',
                      fontSize: 14,
                    }}
                  >
                    {state.firstLetter}
                  </span>
                </li>
                <li>
                  <ExitMobile />
                  {/* <Exit name={this.state.users.user.userData.name.fullName} /> */}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
