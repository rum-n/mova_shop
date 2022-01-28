import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <header>
      <NavLink to="/">
        <div className="logo">
          <h1>MOVA SHOP</h1>
        </div>
      </NavLink>
      <nav>
        <ul className="menu">
          <li>
            <NavLink className="main-blue" to="/main">
              <button>Join Now</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
