import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link exact to="/">Home </Link>
          </li>

          <li>
            <Link to="/statictics">Statictics</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
