import React, { useEffect, useState } from "react";
import axios from "axios";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((response) => setMovies(response.data.results));
  }, [fetchURL]);
  console.log(movies);

  return (
    <>
      <h2 className="text-white font-bold text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => {
            return (
              <div className="w-[160px] inline-block cursor-pointer relative p-2">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                  alt="/"
                  className="w-full h-auto block"
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white flex items-center justify-center">
                  <p className="text-xs overflow-hidden">{item?.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Row;
