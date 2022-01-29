import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Paper, Container } from "@material-ui/core";
import axios from "axios";
import "./styles.css";

const Item = () => {
  const [items, setItems] = useState([]);
  const [singleItem, setSingleItem] = useState({});
  const params = useParams();

  const itemsDetails = ` https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items`;

  useEffect(() => {
    axios
      .get(itemsDetails)
      .then((response) => {
        setItems(response.data);
        console.log(response.data);
        console.log(params.itemId);
      })
      .then(() => {
        setSingleItem(items.filter((item) => item.itemId === params.itemId));
      });
    console.log(singleItem);
  }, [itemsDetails]);

  return (
    <Container>
      {/* {items.map((item) => (
        <Paper elevation={3}>{item.itemId === params.itemId}</Paper>
        ))} */}
      <Paper elevation={3}>{singleItem.displayName}</Paper>
    </Container>
  );
};

export default Item;
