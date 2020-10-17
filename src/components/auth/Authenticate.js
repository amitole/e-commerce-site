import React, { useState } from "react";
import logo from "../../imgs/logo.svg";

const Authenticate = () => {
  const [submitVal, setSubmitVal] = useState("Login");

  const optionsClick = (e) => {
    setSubmitVal(e.target.id);
  };

  let loginclass =
    submitVal === "Login"
      ? "auth__options--login auth__options--clicked"
      : "auth__options--login";

  let signupClass =
    submitVal === "Signup"
      ? "auth__options--login auth__options--clicked"
      : "auth__options--login";

  return (
    <div className="auth__contanier">
      <div className="auth__options">
        <div className={loginclass} id="Login" onClick={(e) => optionsClick(e)}>
          Login
        </div>
        <div
          className={signupClass}
          id="Signup"
          onClick={(e) => optionsClick(e)}
        >
          Signup
        </div>
      </div>
      <div className="auth">
        <img className="auth__header" src={logo} alt="logo" />
        <form className="auth__form">
          <input
            className="auth__form--input"
            type="text"
            placeholder="Email"
          />
          <input
            className="auth__form--input"
            type="password"
            placeholder="Password"
          />
          <input className="auth__form--submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Authenticate;
