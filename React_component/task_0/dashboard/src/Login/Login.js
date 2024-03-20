import React from 'react';
import '../Login/Login.css';

const Login = () => {
  const handleLabelClick = (event) => {
    const inputId = event.target.htmlFor;
    document.getElementById(inputId).focus();
  };

  return (
    <>
      <p>Login to access the full dashboard</p>
      <div className="Login-input">
        <label htmlFor="email" onClick={handleLabelClick}>
          Email:
        </label>
        <input type="email" id="email" />
        <label htmlFor="password" onClick={handleLabelClick}>
          Password:
        </label>
        <input type="passwrod" id="password" />
        <button type="button">OK</button>
      </div>
    </>
  );
};

export default Login;
