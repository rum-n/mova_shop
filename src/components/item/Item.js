import React, { useState } from "react";
// import { useSpring } from "react-spring";
import Paper from "@material-ui/core/Paper";
import "./styles.css";

const Item = ({ match }) => {
  // const fade = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 400 });
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
