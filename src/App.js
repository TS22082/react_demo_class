import { useState } from "react";
import { searchByTitle } from "./API/API";
import "./App.css";
import Shown from "./Components/Shown/Shown";

function App() {
  const [movies, setMovies] = useState([]);
  const [moviesSearch, setMoviesSearch] = useState("");
  const [display, setDisplay] = useState(false);

  const getMovieData = async () => {
    const data = await searchByTitle(moviesSearch);
    setMovies(data.Search);
  };

  return (
    <div className="App">
      <h1>hello world</h1>
      <input
        type="text"
        name="searchText"
        onChange={(e) => setMoviesSearch(e.target.value)}
      />
      <button onClick={() => getMovieData()}>Click Me</button>

      <div>
        {movies.map((movie, index) => (
          <div key={index}>
            <h1>{movie.Title}</h1>
            <h1>{movie.Year}</h1>
            <img src={movie.Poster} alt="Broken" srcset="" />
          </div>
        ))}
      </div>

      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display ? <Shown /> : null}
    </div>
  );
}

export default App;
