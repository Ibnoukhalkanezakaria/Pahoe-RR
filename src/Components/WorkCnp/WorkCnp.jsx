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
              <Link>
                <span className="item" key={item.id}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default WorkCnp;
