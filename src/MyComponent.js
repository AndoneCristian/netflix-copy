import React, { useState, useEffect } from "react";
import axios from "axios";

const MyComponent = () => {
  const KEY = "43f1a9d5bce7c0e037be1d5c4bc1bd69";

  const [movies, setmovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}`)
      .then((response) => {
        setmovies(response.data.results);
      });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className=" w-full h-[500px] relative ">
      <div className="w-full h-full ">
        <div className=" absolute w-full h-full bg-gradient-to-r from-black"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path} `}
          alt="/"
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full top-[30%] text-white px-5 ">
          <h1 className="text-4xl">{movie?.title}</h1>
          <div className=" flex gap-2 mt-4">
            <button className="p-3 px-6 bg-white text-black">Play</button>
            <button className="border-white border-2 p-3">Watch Later</button>
          </div>
          <p className="text-gray-400 text-sm mt-3">
            Release: {movie?.release_date}
          </p>
          <p className="text-md mt-2">{truncateString(movie?.overview, 150)}</p>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
