import React from "react";
import { useParams } from "react-router-dom";
import "./OneItem.style.css";

const OneItem = () => {
  const { itemId } = useParams();
  console.log(itemId);
  return (
    <div className="card-cnp">
      <div className="container">ss</div>
    </div>
  );
};

export default OneItem;
