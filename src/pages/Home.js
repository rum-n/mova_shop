import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { Container, Grid } from "@material-ui/core";
import snoflake from "./../assets/winter.png";
import tshirt from "./../assets/tshirt.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [collections, setCollections] = useState([]);
  const [activeMenu, setActiveMenu] = useState("");

  const categoriesUrl =
    "https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/categories";
  const collectionsUrl =
    "https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/collections";

  useEffect(() => {
    axios.get(categoriesUrl).then((response) => {
      setCategories(response.data);
    });
    axios.get(collectionsUrl).then((response) => {
      setCollections(response.data);
    });
  }, [collectionsUrl, categoriesUrl]);

  const toggleCategory = () => {
    setActiveMenu("category");
  };
  const toggleCollection = () => {
    setActiveMenu("collection");
  };

  return (
    <Container maxWidth="lg">
      <div className="intro">
        <h1 className="title">Your one-stop shop for sportswear</h1>
        <h2>Shop for shoes, hoodies, dresses and many more!</h2>
      </div>
      <Grid container spacing={5} justify="center">
        <Grid
          item
          xs={12}
          sm={5}
          className={
            activeMenu === "category" ? "active-menu-item" : "categories"
          }
          onClick={toggleCategory}
        >
          <img className="menu-img" src={tshirt} alt="Categories" />
          <h1>Shop Categories</h1>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          className={
            activeMenu === "collection" ? "active-menu-item" : "collections"
          }
          onClick={toggleCollection}
        >
          <img className="menu-img" src={snoflake} alt="Collections" />
          <h1>Shop Collections</h1>
        </Grid>
      </Grid>

      <div className="secondary-menu">
        {activeMenu === "collection" &&
          collections.map((option) => (
            <Link
              key={option.collectionId}
              to={{
                pathname: `/collection/${option.collectionId}`,
              }}
            >
              <div className="menu-card">
                <p>{option.displayName}</p>
              </div>
            </Link>
          ))}

        {activeMenu === "category" &&
          categories.map((option) => (
            <Link
              key={option.categoryId}
              to={{
                pathname: `/category/${option.categoryId}`,
              }}
            >
              <div className="menu-card">
                <p>{option.displayName}</p>
              </div>
            </Link>
          ))}
      </div>
    </Container>
  );
};

export default Home;
