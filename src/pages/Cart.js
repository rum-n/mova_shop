import React from "react";
import { Paper, Container, Typography } from "@material-ui/core";
import "./styles.css";

const Cart = () => {
  // const [items, setItems] = useState([]);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        <Typography variant="h4">Order summary</Typography>
      </Paper>
    </Container>
  );
};

export default Cart;
