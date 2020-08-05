import React from 'react';
import s from './ContactUs.module.css';
import noImage from './pageContactUs/noFace.jpg';
import teamList from '../teamPage/teamList';

const ContactUs = () => {
    return (
        <ul className={s.lcontainer}>
            {teamList.map(contact => {
                return (
                    <li className={s.bgamecard}>
                        <div className={s.bgamecard__cover}>
                            <img src = {contact.photo ? contact.photo : noImage}
                            alt="us"
                            width = "300"
                           />
                            <p>{contact.firstName}</p>
                            <p>{contact.lastName}</p>
                            <p>{contact.email}</p>
                        </div>
                    </li>)
        })}
            
        </ul>
    );
};

export default ContactUs;