import React, { useState } from 'react';
import { Link, useHistory, useLocation} from 'react-router-dom';
import s from './TeamPage.module.css';
import ContactUs from "./ContactUs";
import { ReactComponent as ArrowBackHome } from './btnBackPageContact/back.svg';
import { useSelector } from 'react-redux';

const TeamPage = () => {

const history = useHistory();  
        return (
            <div className={s.contacts_div_main}>
                {(
                    <>
                    <div className='container'>
                    <button
                    className={s.arrowBtn}
                    type="button"
                    onClick={()=>history.goBack()}
                    ><ArrowBackHome />
                    <p className={s.textBackBtn}>Назад</p>
                    </button>
                    </div>
                    </>
                )}
                <ContactUs />               
            </div>
        );
}

export default TeamPage;