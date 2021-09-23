import "./App.css";
import { useEffect, useState } from "react";
import MovieContainer from "./Components/MovieContainer/MovieContainer";

function App() {
  const [movieData, setMovieData] = useState({});
  const [searchText, setSearchText] = useState("");

  const requestByTitle = async (movieName) => {
    const res = await fetch(
      `http://www.omdbapi.com/?t=${movieName}&apikey=${process.env.REACT_APP_KEY}`
    );

    const data = await res.json();
    setMovieData(data);
  };

  const requestByID = async (id) => {
    const res = await fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_KEY}`
    );
    const data = await res.json();
  };

  useEffect(() => {
    requestByTitle("The Matrix");
  }, []);

  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  const launchSearch = () => {
    requestByTitle(searchText);
  };

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          launchSearch();
        }}
      >
        <input onChange={(e) => onChange(e)} type="text" />
        <button>Search</button>
      </form>
      <div>
        <h3>Actors: {movieData?.Actors}</h3>
        <h3>Year released: {movieData?.Released}</h3>
        <h3>Directors: {movieData?.Director}</h3>
        <img src={movieData?.Poster} alt="broken image" />
      </div>

      <MovieContainer color="blue">Happy camper</MovieContainer>
      <MovieContainer color="red">Panda</MovieContainer>
      <MovieContainer color="blue">Person</MovieContainer>
    </div>
  );
}

export default App;
