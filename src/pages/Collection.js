import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Chip,
  Box,
} from "@material-ui/core";
import { createTheme, ThemeProvider, styled } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import axios from "axios";
import "./styles.css";

const Collection = () => {
  const [items, setItems] = useState([]);
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState([]);

  const itemsInCollection = `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items?collection=${params.collectionId}`;
  const theme = createTheme();

  const tagClicked = (tag) => {
    const newItems = items.filter((item) => item.tags.includes(tag));
    setItems(newItems);
    setTags(tag);
  };

  const removeTag = () => {
    axios.get(itemsInCollection).then((response) => {
      setItems(response.data);
    });
    setTags([]);
  };

  theme.typography.h5 = {
    padding: "1rem",
    fontSize: "1rem",
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

  const DetailsButton = styled(Button)(() => ({
    margin: "1rem 0rem 0.5rem 0.5rem",
    border: "1px solid #aaa",
    fontWeight: "600",
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: purple[400],
      color: "#fff",
    },
  }));

  useEffect(() => {
    axios.get(itemsInCollection).then((response) => {
      setItems(response.data);
    });
    setLoading(false);
  }, [itemsInCollection]);

  return (
    <Container>
      {tags.length > 0 && (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h5">Tag:</Typography>
          <Chip label={tags} size="small" onClick={() => removeTag()} />
        </Box>
      )}
      {!loading && (
        <Grid container spacing={2}>
          {items.length > 0 ? (
            items.map((item) => (
              <Grid key={item.itemId} item xs={3}>
                <Card sx={{ maxWidth: 345, padding: 25 }} variant="outlined">
                  <CardMedia
                    component="img"
                    height="350"
                    image={item.picture}
                    alt={item.displayName}
                  />
                  <ThemeProvider theme={theme}>
                    <Typography gutterBottom variant="h5">
                      {item.displayName}
                    </Typography>
                    <Box
                      sx={{
                        paddingLeft: "1rem",
                        marginBottom: "1rem",
                        marginTop: "-1rem",
                        fontSize: "0.2rem",
                      }}
                    >
                      {item.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          onClick={() => tagClicked(tag)}
                        />
                      ))}
                    </Box>
                    <Typography color="primary" variant="subtitle1">
                      ${item.currentPrice}
                    </Typography>
                    <Typography color="secondary" variant="subtitle2">
                      ${item.originalPrice}
                    </Typography>
                  </ThemeProvider>
                  <CardActions>
                    <Link
                      to={{
                        pathname: `/item/${item.itemId}`,
                      }}
                    >
                      <DetailsButton size="small">View Details</DetailsButton>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <h2 className="no-items-msg">
              {"Sorry, there are currently no items in this category!"}
            </h2>
          )}
        </Grid>
      )}
    </Container>
  );
};

export default Collection;
