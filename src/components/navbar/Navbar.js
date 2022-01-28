import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import "./styles.css";

const Navbar = () => {
  const CartButton = styled(Button)(({ theme }) => ({
    marginRight: "5rem",
    "&:hover": {
      backgroundColor: purple[400],
    },
  }));

  return (
    <nav>
      <NavLink to="/">
        <div className="logo">
          <h1>
            <span>MOVA</span> SHOP
          </h1>
        </div>
      </NavLink>
      <CartButton variant="outlined" href="/cart">
        Cart
      </CartButton>
    </nav>
  );
};

export default Navbar;
