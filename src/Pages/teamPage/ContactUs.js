import React from 'react';
import s from 'ContactUs.module.css';
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
        <div className={s.contactus_div_main}>
            <ul className={s.contactus_ul}>
                <li className={s.contactus_li}>
                    <img src={photo1} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>asfsadffa</p>
                    <p className={s.contactus_title_p}>Team Lead</p>
                    <p className={s.contactus_email_p}>afsdfs@gmail.com</p>
                </li>
                <li className={s.contactus_li}>
                    <img src={photo2} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>vdvsdfdsfb</p>
                    <p className={s.contactus_title_p}>sbdfbdfbd</p>
                    <p className={s.contactus_email_p}>sdfbdfbds@gmail.com</p>
                </li>
                <li className={s.contactus_li}>
                    <img src={photo3} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>sdfbdfb</p>
                    <p className={s.contactus_title_p}>Scrum Master</p>
                    <p className={s.contactus_email_p}>sdbfdfb@gmail.com</p>
                </li>
                <li className={s.contactus_li}>
                    <img src={photo4} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>sdfbdfbdfbs</p>
                    <p className={s.contactus_title_p}>bsdfbdfbdsfb</p>
                    <p className={s.contactus_email_p}>sdfgdfgdsg@gmail.com</p>
                </li>
                <li className={s.contactus_li}>
                    <img src={photo5} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>gdfgdfgds</p>
                    <p className={s.contactus_title_p}>gsdfgdfghff</p>
                    <p className={s.contactus_email_p}>gsfgdsfgdfss@gmail.com</p>
                </li>
                <li className={s.contactus_li}>
                    <img src={photo6} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>gsdfgdsfgggga</p>
                    <p className={s.contactus_title_p}>sdhdsfhds</p>
                    <p className={s.contactus_email_p}>gsdfgdsfga@gmail.com</p>
                </li>
                <li className={s.contactus_li}>
                    <img src={photo7} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>sdfdsfhdfgs</p>
                    <p className={s.contactus_title_p}>gsdfgdfgss</p>
                    <p className={s.contactus_email_p}>gsdfgdsfga@gmail.com</p>
                </li>
                <li className={s.contactus_li}>
                    <img src={photo8} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>hfghdfhd</p>
                    <p className={s.contactus_title_p}>sdhdshdsdf</p>
                    <p className={s.contactus_email_p}>sdgdfsgg@gmail.com</p>
                </li>
                <li className={s.contactus_li}>
                    <img src={photo9} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>hdgfghfghfd</p>
                    <p className={s.contactus_title_p}>sdgdsfgdsfghhh</p>
                    <p className={s.contactus_email_p}>sdgfdfgdfgs@gmail.com</p>
                </li>
                <li className={s.contactus_li}>
                    <img src={photo10} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>gsdfgdfgd</p>
                    <p className={s.contactus_title_p}>sdfgdsfgds</p>
                    <p className={s.contactus_email_p}>sdgdsfgdsfggg@gmail.com</p>
                </li>
            </ul>
        </div>
    );
};

export default ContactUs;