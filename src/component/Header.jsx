import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <h1 className="app-title">Chat Norris</h1>
      <ul className="nav">
        <li>Account</li>
        <li>Settings</li>
        <li>Log Out</li>
      </ul>
    </header>
  );
};

export default Header;
