import React from "react";

const Header = () => {
  return (
    <header>
      <h2>
        Chat<img src="./img/chucky.png" alt="Chuck Was Here" />
      </h2>
      <div className="nav-menu">
        <ul>
          <li>Account</li>
          <li>Settings</li>
          <li>Log Out</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
