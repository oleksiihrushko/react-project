import React from 'react';
import s from './ContactUs.module.css';
import noImage from './pageContactUs/noFace.jpg';
import teamList from '../teamPage/teamList';
import Typewriter from 'typewriter-effect';

const ContactUs = () => {

    // Typewriter.typeString

    return (
    <section className={s.teamPage}>
      <div className='container'>
        <ul className={s.lcontainer}>
            {teamList.map(contact => {
                return (
                    <li>
                        {console.log(contact)}
                           
                    <div className={s.bgamecard}>
                        <div className={s.bgamecard__cover}>
                            <img className={s.imgContact} src = {contact.photo ? contact.photo : noImage}
                            alt="us"
                            />
                        </div>  
                        <div className={s.typewriter}>
                                {/* <Typewriter className={s.typewriter}
                                options={{
                                    strings: [contact.firstName, ],
                                    autoStart: true,
                                    loop: true,
                                    deleteAll: 0,
                                    delay : 300,
                                    loop : false,
                                   }}
                                /> */}
                                <Typewriter className={s.typewriter}
                                onInit={(typewriter) => {
                                typewriter.typeString(`${contact.firstName} ${contact.lastName} ${contact.email}` )
                                .callFunction(() => {
                                console.log('String typed out!');
                                })
                                .pauseFor(2500)
                                .deleteAll(1000000000)
                                .callFunction(() => {
                                console.log('All strings were deleted');
                                })
                                .start();
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