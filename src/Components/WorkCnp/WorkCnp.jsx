import React from "react";
import { Link } from "react-router-dom";
import items from "../../Data/data";
import "./Work.Style.css";

const WorkCnp = () => {
  return (
    <div>
      <main>
        <div className="container">
          {items.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/${item.id}`}>
                  <span className="item">{item.name}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default WorkCnp;
