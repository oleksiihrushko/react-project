import React from 'react';
import { MatchMediaHOC } from 'react-match-media';
import logout from './img/logout.png';

// const styles = {
//   backgroundColor: '#ccc',
//   color: 'red',
//   fontSize: '16px',
//   textAlign: 'center',
// };

const ExitMobile = ({ photo, open }) => {
  return (
    <>
      <div>
        {photo.length > 1 ? <img src={photo} alt="avatar" /> : <p>{photo}</p>}
      </div>
      <img src={logout} alt="logout" onClick={open} />
    </>
  );
};

export default MatchMediaHOC(ExitMobile, '(max-width: 699px)');
