import React from 'react';
import { Link, useHistory, useLocation} from 'react-router-dom';
import s from './TeamPage.module.css';
import ContactUs from "./ContactUs";
import { ReactComponent as ArrowBackHome } from './btnBackPageContact/back.svg';

const TeamPage = () => {
    // const history = useHistory;
    // const location = useLocation;
    // const Contacts = location.pathname.split('/')[1] === 'team';
    // const location = useLocation();
    // const ClickBack = (props) => {
    //     state: {from: location };
    // }
{/* <Link
  to={{
    pathname: '/team',
    state: { from: 'useHistory' },
  }}
/> */}
// console.log(this.props.location);
// console.log(this.props.location.state.from)
//     const handleGoBack = () => {
//     this.props.history.push(useHistory);
//   };
        return (
            <div className={s.contacts_div_main}>
                {(
                    <>
                    <button
                    className={s.arrowBtn}
                    type="button"
                    // onClick={handleGoBack}
                    ><ArrowBackHome />
                    <p className={s.textBackBtn}>Назад</p>
                    </button>
                    </>
                )}
                <ContactUs />
                
            </div>
        );
}

export default TeamPage;