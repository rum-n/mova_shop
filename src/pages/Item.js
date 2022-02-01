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
  Menu,
  MenuItem,
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
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
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

  const SizesButton = styled(Button)(() => ({
    margin: "1rem 0rem 0.5rem 1rem",
    padding: "0.5rem 1rem",
    border: "1px solid #aaa",
    fontWeight: "600",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#aaa",
      color: "#fff",
    },
  }));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSizeChoice = (size) => {
    setSize(size);
    setAnchorEl(null);
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
          <SizesButton
            id="select-size"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={(e) => handleClick(e)}
          >
            {size ? `Size: ${size}` : "Select size"}
          </SizesButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "select-size",
            }}
          >
            {attributes.availableSizes.map((size) => (
              <MenuItem key={size} onClick={() => handleSizeChoice(size)}>
                {size}
              </MenuItem>
            ))}
          </Menu>
          <CardActions>
            <AddToCartButton
              disabled={size ? false : true}
              onClick={() =>
                dispatch(
                  addToCart({
                    itemId: attributes.itemId,
                    size: size,
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
