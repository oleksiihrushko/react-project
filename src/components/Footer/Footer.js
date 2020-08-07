import React from 'react';
import s from './Footer.module.css';
import { Link, useLocation } from 'react-router-dom';

const Footer = (props) => {
    const location = useLocation();
    return (
    <footer className={s.footerInfo}>
        <div className={s.info}>
            <p className={s.infoSpan}>
            All Rights Reserved | © 2020 | 
            <Link to={{
                pathname:'/team',
                state: {from: location },}}
                className={s.linkInfoTeam}> development team</Link>
            </p>
        </div>
    </footer>    
    )
}
export default Footer;