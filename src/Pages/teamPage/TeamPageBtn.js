import react from 'react';
import { useHistory, useLocation} from 'react-router-dom';
import s from './TeamPage.module.css'

const TeamPageBtnBack = () => {
    const history = useHistory;
    const location = ureLocation;
    const isContacts = location.pathname.split('/')[1] === 'contacts';
    const handleClickBack = () => {
        history.push('/');
    }

    return (
        <div>
            isContacts && (
                <button
                className={s.arrowBtn}
                type="button"
                onClick={handleClickBack}
                >
                <p className={s.textBackBtn}>Назад</p>
                </button>
            )
        </div>

    );
} 

export default TeamPageBtnBack;