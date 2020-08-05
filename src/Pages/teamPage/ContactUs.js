import React from 'react';
import s from './ContactUs.module.css';
// import s from './TeamPageMobail.module.css';
import photo1 from './pageContactUs/photo1.jpg';
import photo2 from './pageContactUs/photo2.jpg';
import photo3 from './pageContactUs/photo3.jpg';
import photo4 from './pageContactUs/photo4.jpg';
import photo5 from './pageContactUs/photo5.jpg';
import photo6 from './pageContactUs/photo6.jpg';
import photo7 from './pageContactUs/photo7.jpg';
import photo8 from './pageContactUs/photo8.jpg';
import photo9 from './pageContactUs/photo9.jpg';
import photo10 from './pageContactUs/photo10.jpg';

const ContactUs = () => {
    return (
        <div className={`${s.contactus_div_main} container`}>
            <ul className={s.contactus_ul}>
                <li className={s.card}>
                    <div className={s.imgBox}>
                        <img src={photo1} alt="us" width="300" className={s.contactus_img} />
                    </div>
                    <div className={s.text}>
                        <p className={s.contactus_name_p}>asfsadffa</p>
                        <p className={s.contactus_title_p}>Team Lead</p>
                        <p className={s.contactus_email_p}>afsdfs@gmail.com</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ContactUs;