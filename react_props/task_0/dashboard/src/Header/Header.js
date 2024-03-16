import React from "react";
import hlogo from '../assets/holberton-logo.jpg';
import '../Header/Header.css';

const Header = () => {
  return (
    <div className="App-header">
      <img src={hlogo} className="App-logo" alt="holberton logo" />
      <h1>School dashboard</h1>
    </div>
  );
};

export default Header;