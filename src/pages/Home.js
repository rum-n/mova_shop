import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Container from "@material-ui/core/Container";
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
  }, []);

  const toggleCategory = () => {
    setActiveMenu("category");
  };
  const toggleCollection = () => {
    setActiveMenu("collection");
  };

  return (
    <Container maxWidth="lg">
      <div className="main-menu">
        <div
          className={
            activeMenu === "category" ? "active-menu-item" : "categories"
          }
          onClick={toggleCategory}
        >
          <img className="menu-img" src={tshirt} alt="Categories" />
          <h1>Shop Categories</h1>
        </div>
        <div
          className={
            activeMenu === "collection" ? "active-menu-item" : "collections"
          }
          onClick={toggleCollection}
        >
          <img className="menu-img" src={snoflake} alt="Collections" />
          <h1>Shop Collections</h1>
        </div>
      </div>

      <div className="secondary-menu">
        {activeMenu === "collection" &&
          collections.map((option) => (
            <Link to={option.collectionId}>
              <div className="menu-card">
                <p>{option.displayName}</p>
              </div>
            </Link>
          ))}

        {activeMenu === "category" &&
          categories.map((option) => (
            <Link to={option.categoryId}>
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
