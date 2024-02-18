import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ id, title, img, genres }) => {
  return (
    <div>
      <Link to={`/${id}`}>{title}</Link>
      <img src={img} />
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
