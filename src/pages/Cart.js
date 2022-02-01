// React Core
import React, { useEffect, useState } from "react";
import "./styles.css";

// Material UI
import { Paper, Container, Typography, Box, Button } from "@material-ui/core";

// Redux
import { removeFromCart } from "../redux/actions/index";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();

  useEffect(() => {
    let price = 0;
    let cartItems = [];

    cart.forEach((item) => {
      cartItems.push(item);
      price += item.price;
    });
    setItems(cartItems);
    setTotalPrice(price);
  }, [cart]);

  return (
    <Container maxWidth="md">
      <Paper elevation={3}>
        <Box sx={{ padding: "1rem" }}>
          <Typography variant="h4">Order summary</Typography>
          {items.map((product) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                border: "0.5px solid #aaa",
                borderRadius: "7px",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
              }}
              key={product.itemId}
            >
              <img
                className="cart-img"
                src={product.img}
                alt={product.displayName}
              />
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="h6">{product.size}</Typography>
              <Typography variant="h6">{product.price}</Typography>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => dispatch(removeFromCart({ id: product.itemId }))}
              >
                Remove
              </Button>
            </Box>
          ))}
          <Box sx={{ textAlign: "right", width: "70%" }}>
            <Typography variant="h5">Total price: {totalPrice}</Typography>
          </Box>
          <Box sx={{ margin: "3rem auto 1rem", width: "20%" }}>
            <Button variant="contained" color="primary">
              Place Order
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeFromCart: (id) => dispatch(removeFromCart(id)),
//   };
// };

export default connect(mapStateToProps, null)(Cart);
