// React Core
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

// Material UI
import {
  Paper,
  Container,
  Typography,
  CardMedia,
  CardActions,
  Button,
} from "@material-ui/core";
import { createTheme, ThemeProvider, styled } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

// Axios
import axios from "axios";

//  Redux
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/index";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cart: state.cart,
  };
};

const Item = () => {
  const [singleItem, setSingleItem] = useState([]);
  const [size, setSize] = useState("");
  const params = useParams();
  const theme = createTheme();
  const itemsDetails = ` https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items`;
  const dispatch = useDispatch();

  useEffect(() => {
    let isSubscribed = true;
    axios.get(itemsDetails).then((response) => {
      if (isSubscribed) {
        const oneItem = response.data.filter(
          (item) => item.itemId === params.itemId
        );
        setSingleItem(oneItem);
      }
    });
    return () => {
      isSubscribed = false;
    };
  }, [itemsDetails, params.itemId]);

  theme.typography.h5 = {
    padding: "1rem",
  };

  theme.typography.subtitle1 = {
    paddingLeft: "1rem",
    marginBottom: "2rem",
    display: "inline",
    fontSize: "1.5rem",
  };

  theme.typography.subtitle2 = {
    paddingLeft: "0.5rem",
    display: "inline",
    fontSize: "1.2rem",
    textDecoration: "line-through",
  };

  theme.typography.body2 = {
    padding: "1rem",
    fontSize: "1rem",
  };

  const AddToCartButton = styled(Button)(() => ({
    padding: "0.5rem 1rem",
    margin: "1rem 0rem 0.5rem 0.5rem",
    border: "1px solid #aaa",
    fontWeight: "600",
    backgroundColor: purple[50],
    "&:hover": {
      backgroundColor: purple[400],
      color: "#fff",
    },
  }));

  const handleSizeChoice = (event) => {
    setSize(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      {singleItem.map((attributes) => (
        <Paper key={attributes.itemId} elevation={3}>
          <CardMedia
            component="img"
            height="auto"
            image={attributes.picture}
            alt={attributes.displayName}
          />
          <Typography variant="h5">{attributes.displayName}</Typography>
          <ThemeProvider theme={theme}>
            <Typography color="primary" variant="subtitle1">
              ${attributes.currentPrice}
            </Typography>
            <Typography color="secondary" variant="subtitle2">
              ${attributes.originalPrice}
            </Typography>
            <Typography variant="body2">{attributes.description}</Typography>
          </ThemeProvider>
          <select
            id="size"
            placeholder="Select size"
            name="size"
            className="size-dropdown"
            value={size}
            onChange={handleSizeChoice}
          >
            <option disabled selected>
              Select size
            </option>
            {attributes.availableSizes.map((size) => (
              <option value={size} key={size}>
                Size: {size}
              </option>
            ))}
          </select>
          <CardActions>
            <AddToCartButton
              disabled={size ? false : true}
              onClick={() =>
                dispatch(
                  addToCart({
                    name: attributes.displayName,
                    itemId: attributes.itemId,
                    size: size,
                    price: attributes.currentPrice,
                    img: attributes.picture,
                  })
                )
              }
            >
              Add to Cart
            </AddToCartButton>
          </CardActions>
        </Paper>
      ))}
    </Container>
  );
};

export default connect(mapStateToProps, null)(Item);
