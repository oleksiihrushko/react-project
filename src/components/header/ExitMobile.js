import React from "react";
import { MatchMediaHOC } from "react-match-media";
import logout from "./img/logout.png";

const ExitMobile = ({ photo, open }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "space-beetween",
          alignItems: "center",
        }}
      >
        <div>
          {photo.length > 1 ? (
            <img
              height="30"
              style={{ marginRight: 10, borderRadius: "50%" }}
              src={photo}
              alt="avatar"
            />
          ) : (
            <p>{photo}</p>
          )}
        </div>
        <img src={logout} height="20" alt="logout" onClick={open} />
      </div>
    </>
  );
};

export default MatchMediaHOC(ExitMobile, "(max-width: 766px)");
