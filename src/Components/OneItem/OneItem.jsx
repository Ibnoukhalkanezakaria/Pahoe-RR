import React from "react";
import { useParams } from "react-router-dom";
import "./OneItem.style.css";
import items from "../../Data/data";

const OneItem = () => {
  const { itemId } = useParams();
  const item = items.find((e) => e.id === itemId);
  const { date, name, imageOne, imageTwo, scope } = item;

  return (
    <div className="card-cnp">
      <div className="container">
        <div className="start">
          <h2>{name}</h2>
          <div className="row">
            <div className="col">
              <span className="date">Date</span>
              <span>{date}</span>
            </div>
            <div className="col">
              <span className="scope">Scope</span>
              <span>{scope}</span>
            </div>
          </div>
        </div>
        <div className="images">
          <div className="img">
            <img src={imageOne} alt="image" />
          </div>
          <div className="img">
            <img src={imageTwo} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneItem;
