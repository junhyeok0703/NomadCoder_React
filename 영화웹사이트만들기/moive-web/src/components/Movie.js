import React from "react";

const Movie = ({ title, img, genres }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={img} />
      <ul>
        {genres.map((g) => (
          <li>{g}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
