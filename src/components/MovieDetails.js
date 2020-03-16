import React from "react";
import MovieItem from "./MovieItem";

const MovieDetails = ({ movie, recommendations, loadDetails }) => {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://upload.wikimedia.org/wikipedia/en/f/f9/No-image-available.jpg";
  const recommend = recommendations.length ? (
    <>
      <h3>Recomendations</h3>
      <ul>
        {recommendations.map(item => (
          <MovieItem key={item.id} item={item} loadDetails={loadDetails} />
        ))}
      </ul>
    </>
  ) : null;

  return (
    <div className="movieDetailsContainer">
      <img className="imageContainer" src={poster} alt="Poster here" />
      <h1>{movie.title}</h1>
      <p>{movie.overview || "No description available."}</p>

      {recommend}
      
    </div>
  );
};

export default MovieDetails;
