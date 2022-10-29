import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ name, image, rate, alt, id, game }) {
  return (
    <div className="card">
      <p>{name}</p>
      <Link to={`/info/:${id}`}>
        <div>
          <img src={image} alt={alt} width="200px" />
        </div>
      </Link>
      <div>
        <Rater total={5} rating={rate} interactive={false} />
      </div>
      <Link to={`/screenshots/:${game}`}>
        <div>
          <button>Screenshots</button>
        </div>
      </Link>
    </div>
  );
}

export default Card;
