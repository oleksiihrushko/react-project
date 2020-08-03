import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
    return (
    <footer className={s.footerInfo}>
        <div className={s.info}>
            <p className={s.infoSpan}>
            All Rights Reserved | © 2020 | 
            <a href="#contacts" className={s.linkInfoTeam}> development team</a>
            </p>
        </div>
    </footer>    
    )
}
export default Footer;