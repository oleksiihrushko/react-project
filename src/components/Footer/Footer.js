import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
    return (
    <footer className={footerInfo}>
        <div className={info}>
            <span>
            All Rights Reserved | © 2020 | 
            </span>
        </div>
        <div className={infoTeam}>
            <a href="#contacts">development team</a>
        </div>
    </footer>    
    )

}