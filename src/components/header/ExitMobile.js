import React from "react";
import { MatchMediaHOC } from "react-match-media";
import logout from "./img/logout.png";

const ExitMobile = ({ firstLetter, open }) => {
  return <img onClick={open} src={logout} alt="exit" />;
};

export default MatchMediaHOC(ExitMobile, "(max-width: 766px)");
