import React from "react";
import web from "../src/images/hero2.png";
import { NavLink } from "react-router-dom";

const Card = props => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <h5 className="card-body font-weight-bold">{props.title}</h5>
          <div className="card-title">
            <p className="card-text">
              some of the quick exple text to build on the card title
            </p>
            <NavLink to="" className="btn btn-primary">
              go everywhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
