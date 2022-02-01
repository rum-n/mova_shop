import React, { useEffect, useState } from "react";
import { Paper, Container, Typography, Box } from "@material-ui/core";
import "./styles.css";
import { removeFromCart } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cart: state.cart,
  };
};

const Cart = ({ cart }) => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  let product = useSelector((state) => state.product);

  useEffect(() => {
    let items = 0;
    let price = 0;
    let cartItems = [];

    cart.forEach((item) => {
      console.log(item);
      cartItems.push(item);
      // items += item;
      // price += item * item.price;
    });
    setItems(cartItems);
    console.log(cartItems);
    // setTotalItems(items);
    // setTotalPrice(price);
  }, []);

  return (
    <Container maxWidth="md">
      <Paper elevation={3}>
        <Box sx={{ padding: "1rem" }}>
          <Typography variant="h4">Order summary</Typography>
          {items.map((product) => (
            <p>{product.itemId}</p>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default connect(mapStateToProps, null)(Cart);
