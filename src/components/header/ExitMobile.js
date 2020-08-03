import React from 'react';
import { MatchMediaHOC } from 'react-match-media';
import logout from './img/logout.png';
const styles = {
  backgroundColor: '#ccc',
  color: 'red',
  fontSize: '16px',
  textAlign: 'center',
};

const ExitMobile = ({ firstLetter }) => {
  console.log(firstLetter);
  return <img src={logout} />;
};

export default MatchMediaHOC(ExitMobile, '(max-width: 700px)');
