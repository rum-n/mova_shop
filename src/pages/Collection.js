import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import axios from "axios";
import "./styles.css";

const Collection = () => {
  const [items, setItems] = useState([]);
  const params = useParams();
  const [loading, setLoading] = useState(true);

  const itemsInCollection = `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items?collection=${params.collectionId}`;

  useEffect(() => {
    axios.get(itemsInCollection).then((response) => {
      setItems(response.data);
      console.log(response.data);
    });
    setLoading(false);
  }, [itemsInCollection]);

  return (
    <Container>
      {!loading && (
        <Grid container spacing={2}>
          {items.length > 0 ? (
            items.map((item) => (
              <Grid item xs={3}>
                <Card
                  sx={{ maxWidth: 345, padding: 25 }}
                  variant="outlined"
                  key={item.itemId}
                >
                  <CardMedia
                    component="img"
                    height="350"
                    image={item.picture}
                    alt={item.displayName}
                  />
                  <Typography gutterBottom variant="h6">
                    {item.displayName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <CardActions>
                    <Button size="small">Add to Cart</Button>
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
