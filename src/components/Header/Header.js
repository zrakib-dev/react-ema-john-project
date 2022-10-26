import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <nav className="menu">
      <img src={logo} alt="emajohn-simple" />
      <div>
        <a href="order">Order</a>
        <a href="reveiw">Order Reveiw</a>
        <a href="inventory">Manage Inventory</a>
        <a href="login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
