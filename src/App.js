import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [movieData, setMovieData] = useState();

  const requestByTitle = async (movieName) => {
    const res = await fetch(
      `http://www.omdbapi.com/?t=${movieName}&apikey=${process.env.REACT_APP_KEY}`
    );

    const data = await res.json();
    setMovieData(data);
  };

  const requestByID = async (id, cb) => {
    const res = await fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_KEY}`
    );
    const data = await res.json();
  };

  useEffect(() => {
    requestByTitle("The Matrix");
  }, []);

  return (
    <div className="App">
      <div>
        <h3>Actors: {movieData?.Actors}</h3>
        <h3>Year released: {movieData?.Released}</h3>
        <h3>Directors: {movieData?.Director}</h3>
        <img src={movieData.Poster} alt="broken image" />
      </div>
    </div>
  );
}

export default App;
