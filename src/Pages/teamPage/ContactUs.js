import React from 'react';
import s from './ContactUs.module.css';
import noImage from './pageContactUs/noFace.jpg';
import teamList from '../teamPage/teamList';
import Typewriter from 'typewriter-effect';

const ContactUs = () => {
    return (
    <section className={s.teamPage}>
      <div className='container'>
        <ul className={s.lcontainer}>
            {teamList.map(contact => {
                return (
                    <li>
                           
                    <div className={s.bgamecard}>
                        <div className={s.bgamecard__cover}>
                            <img className={s.imgContact} src = {contact.photo ? contact.photo : noImage}
                            alt="us"
                            />
                        </div>  
                        <div className={s.typewriter}>
                                <Typewriter className={s.typewriter}
                                options={{
                                    strings: ['Hello', 'World'],
                                    autoStart: true,
                                    loop: true,
                                   }}
                                />
                        </div>
                    </div>
                    </li>)
        })}
            
        </ul>
    </div>
    </section>
    );
};

export default ContactUs;
{/* <p className={s.textP}>{contact.firstName}</p>
<p>{contact.lastName}</p>
<p>{contact.email}</p> */}