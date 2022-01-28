import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import "./styles.css";

const Item = ({ match }) => {
  const [data] = useState([]);
  const currentItem = data.filter((item) => item.title === match.params.id);

  return (
    <Paper elevation={3}>
      <div className="item-info">
        <img src={currentItem[0].img} alt={currentItem[0].title} />
        <h1>{match.params.id}</h1>
      </div>
    </Paper>
  );
};

export default Item;
