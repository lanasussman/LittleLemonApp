import React from "react";

function Header() {

  return (
    <div className="main-grid">
      <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/#reservatinos">Reservations</a></li>
        <li><a href="/#login">Login</a></li>
      </ul>
    </nav>
    </div>
  );
};
export default Header;