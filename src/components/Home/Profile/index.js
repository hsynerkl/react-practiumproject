import React from "react";
import "./index.css";
import ProfileImg from "../../../assets/images/profile.jpg";
import { Button } from "../../Shared/Button";

export const Profile = (props) => {
  const handleClick = () => {
    props.props.setIsLogin(false);
    props.props.setName("");
    localStorage.setItem("user", "");
  };
  return (
    <div className="profile">
      <div>
        <h2 className="profileSettings"> Settings</h2>
      </div>
      <div>
        <div className="profile-image">
          <img
            src={ProfileImg}
            alt="profile-image"
            width="50"
            height="50"
            style={{ borderRadius: "50%" }}
          />
        </div>
      </div>
      <div className="profile-name">
        Name:
        <span className="profile-name-name"> {props.props.name}</span>
      </div>
      <div className="profile-button">
        <Button text={"Log Out"} onClick={handleClick} />
      </div>
    </div>
  );
};
