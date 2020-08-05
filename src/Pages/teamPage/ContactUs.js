import React from 'react';
import s from './ContactUs.module.css';
import noImage from './pageContactUs/noFace.jpg';
import teamList from '../teamPage/teamList';
import Typewriter from 'typewriter-effect';
// import { getRandomInteger } from '../../services/helpers';

const ContactUs = () => {
  return (
    <section className={s.teamPage}>
      <div className="container">
        <ul className={s.lcontainer}>
          {teamList.map(contact => {
            console.log(contact.timer);
            return (
              <li>
                <div className={s.bgamecard}>
                  <div className={s.bgamecard__cover}>
                    <img
                      className={s.imgContact}
                      src={contact.photo ? contact.photo : noImage}
                      alt="us"
                    />
                  </div>
                  <div className={s.typewriter}>
                    <Typewriter
                      options={{
                        delay: contact.timer,
                      }}
                      className={s.typewriter}
                      onInit={typewriter => {
                        typewriter
                          .typeString(
                            `${contact.firstName} ${contact.lastName} ${contact.email}`,
                          )
                          .callFunction(() => {
                            console.log('String typed out!');
                          })
                          .callFunction(() => {
                            console.log('All strings were deleted');
                          })
                          .start();
                      }}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ContactUs;
