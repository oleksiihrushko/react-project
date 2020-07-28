import react from 'react';
import { useHustory, useLocation} from 'react-router-dom';

const TeamPageBtnBack = () => {
    const history = useHustory;
    const location = ureLocation;
    const isContacts = location.pathname.split('/')[1] === 'contacts';
    const handleClickBack = () => {
        history.push('/');
    }

    return (1);
} 

export default TeamPageBtnBack;