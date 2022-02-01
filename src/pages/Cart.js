import React, { useEffect, useState } from "react";
import { Paper, Container, Typography } from "@material-ui/core";
import "./styles.css";
import { useSelector } from "react-redux";

const Cart = () => {
  // const [items, setItems] = useState([]);
  // let product = useSelector((state) => state.product);

  // useEffect(() => {
  //   setItems(product);
  // }, []);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <Typography variant="h4">Order summary</Typography>
        {/* {items.displayName} */}
      </Paper>
    </Container>
  );
};

export default Cart;
