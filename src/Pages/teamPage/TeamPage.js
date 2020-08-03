import React from 'react';
import { useHistory, useLocation} from 'react-router-dom';
import s from './TeamPage.module.css';
import ContactUs from "./ContactUs";
import { ReactComponent as ArrowBackHome } from './btnBackPageContact/back.svg';

const TeamPage = () => {
    // const history = useHistory;
    // const location = useLocation;
    // const isContacts = location.pathname.split('/')[1] === 'contacts';
    // const handleClickBack = () => {
    //     history.push('/');

        return (
            <div className={s.contacts_div_main}>
                {(
                    <>
                    <button
                    className={s.arrowBtn}
                    type="button"
                    // onClick={handleClickBack}
                    ><ArrowBackHome />
                    <p className={s.textBackBtn}></p>
                    </button>
                    </>
                )}
                <ContactUs />
                
            </div>
        );
}

export default TeamPage;