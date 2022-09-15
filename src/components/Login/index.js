import React from "react";
import "./index.css";
import loginImage from "../../assets/images/loginImage.png";
import { InputWithText } from "../Shared/InputWithText";
import { Button } from "../Shared/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = (props) => {
  const notify = (text) => toast(text);

  const handleClick = () => {
    if (props.name != "") {
      localStorage.setItem("user", JSON.stringify(props.name));
      props.setIsLogin(true);
    } else notify("İsim Boş Bırakılamaz.");
  };

  return (
    <div className="login">
      <div className="login-container">
        <div>
          <img src={loginImage} alt="login-image" />
        </div>
        <div className="login-input">
          <InputWithText onChange={(e) => props.setName(e)} />
        </div>
        <div className="login-button">
          <Button text={"Log In"} onClick={handleClick} />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
