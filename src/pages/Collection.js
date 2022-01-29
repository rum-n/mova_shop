import React, { useState } from "react";
import "./styles.css";

const Collection = ({ match }) => {
  const [data] = useState([]);
  const currentItem = data.filter((item) => item.title === match.params.id);

  return <div></div>;
};

export default Collection;
