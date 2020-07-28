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
                    <p className={s.contactus_name_p}>Виталий Калинбет</p>
                    <p className={s.contactus_title_p}>Team Lead</p>
                    <p className={s.contactus_email_p}>bosssvit@gmail.com</p>
                </li>
                <li className={s.contactus_li}>
                    <img src={photo2} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>Егор Васильев</p>
                    <p className={s.contactus_title_p}>Product Owner</p>
                    <p className={s.contactus_email_p}>egordelta@gmail.com</p>
                </li>
                <li className={s.contactus_li}>
                    <img src={photo3} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>Денис Беляк</p>
                    <p className={s.contactus_title_p}>Scrum Master</p>
                    <p className={s.contactus_email_p}>denis.belyak@gmail.com</p>
                </li>
                <li className={s.contactus_li}>
                    <img src={photo4} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>Виктория Ушакова</p>
                    <p className={s.contactus_title_p}>Frontend Developer</p>
                    <p className={s.contactus_email_p}>iamushakova@gmail.com</p>
                </li>
                <li className={s.contactus_li}>
                    <img src={photo5} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>Борис Демченко</p>
                    <p className={s.contactus_title_p}>Frontend Developer</p>
                    <p className={s.contactus_email_p}>demchenko_boris86@gmail.com</p>
                </li>
                <li className={s.contactus_li}>
                    <img src={photo6} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>Ольга Савицкая</p>
                    <p className={s.contactus_title_p}>Frontend Developer</p>
                    <p className={s.contactus_email_p}>о.savytska77@gmail.com</p>
                </li>
                    <li className={s.contactus_li}>
                    <img src={photo7} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>Владимир Потапенко</p>
                    <p className={s.contactus_title_p}>Frontend Developer</p>
                    <p className={s.contactus_email_p}>vlarus@ukr.net</p>
                </li>
                <li className={s.contactus_li}>
                    <img src={photo8} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>Евгений Рой</p>
                    <p className={s.contactus_title_p}>Frontend Developer</p>
                    <p className={s.contactus_email_p}>box.rz.box@gmail.com</p>
                </li>
                <li className={s.contactus_li}>
                    <img src={photo9} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>Дмитрий Велков</p>
                    <p className={s.contactus_title_p}>Frontend Developer</p>
                    <p className={s.contactus_email_p}>velkov55@gmail.com</p>
                </li>
                <li className={s.contactus_li}>
                    <img src={photo10} alt="us" className={s.contactus_img} />
                    <p className={s.contactus_name_p}>Ярослав Адашян</p>
                    <p className={s.contactus_title_p}>Project Manager</p>
                    <p className={s.contactus_email_p}>adashyan27@gmail.com</p>
                </li>
            </ul>
        </div>    
    );
};

export default ContactUs;