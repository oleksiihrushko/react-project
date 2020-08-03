import React from "react";
import { MatchMediaHOC } from "react-match-media";

const styles = {
  fontSize: "16px",
  textAlign: "center",
  marginLeft: "10px",
  borderLeft: "1px solid #222",
  paddingLeft: 10,
  textDecoration: "underline",
  fontFamily: "RobotoRegular",
  cursor: "pointer",
};

const Exit = ({ name, open }) => {
  console.log(name);
  return (
    <>
      <ul style={{ display: "flex", paddingLeft: 10 }}>
        <li>
          <div style={{ width: "100px", fontFamily: "RobotoRegular" }}>
            {name}
          </div>
        </li>
        <li>
          <div style={styles} onClick={open}>
            Выйти
          </div>
        </li>
      </ul>
    </>
  );
};

export default MatchMediaHOC(Exit, "(min-width: 700px)");
