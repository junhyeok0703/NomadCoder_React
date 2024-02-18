import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const { id } = params;
  const [movied, setMovie] = useState(null); // Initialize with null

  const getMovieData = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const json = await response.json();
      setMovie(json);
    } catch (error) {
      console.error("Error fetching movie data:", error);
      // Handle error state if needed
    }
  };
  console.log(movied);
  useEffect(() => {
    getMovieData();
  }, [id]); // Include id as a dependency

  if (!movied) {
    return <div>Loading...</div>;
  }

  const movieTitle = movied?.data?.movie?.title || "Unknown Title"; // Use optional chaining
  const movieImg = movied?.data?.movie?.medium_cover_image || "unknown img";
  return (
    <div>
      <h1>{movieTitle}</h1>
      <img src={movieImg} />
    </div>
  );
};

export default Detail;
