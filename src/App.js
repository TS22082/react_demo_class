import "./App.css";
import { useEffect } from "react";

function App() {
  const requestByTitle = async (movieName) => {
    const res = await fetch(
      `http://www.omdbapi.com/?t=${movieName}&apikey=${process.env.REACT_APP_KEY}`
    );

    const data = await res.json();
    console.log(data);
  };

  const requestByID = async (id) => {
    const res = await fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_KEY}`
    );

    const data = await res.json();
    console.log("Movie Data ===>", data);
  };

  useEffect(() => {
    requestByTitle("The Matrix");
    requestByID("tt0133093");
  }, []);

  const me = ["Thomas", "William", "Thomas"];

  return (
    <div className="App">
      <div>
        <h3>Hi</h3>
        {me.map((name, index) => (
          <h1 key={index}>{name}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
