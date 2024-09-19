// import { useState, useEffect } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// // Import our components
// import MovieDisplay from "./components/MovieDisplay";
// import Form from "./components/Form";

// export default function App() {
//   return (
//     <div className="App">
//       <Form />
//       <MovieDisplay />
//     </div>
//   );
// }

// import {useState, useEffect} from "react";
// import logo from "./logo.svg";
// import "./App.css";

// import MovieDisplay from "./components/MovieDisplay";
// import Form from "./components/Form";

// export default function App() {
//   // Constant with your API Key
//   const apiKey = "98e3fb1f";

//   // State to hold movie data
//   const [movie, setMovie] = useState(null);

//   // Function to get movies
//   const getMovie = async(searchTerm) => {
//     // Make fetch request and store the response
//     const response = await fetch(
//       `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
//     );
//     // Parse JSON response into a JavaScript object
//     const data = await response.json();
//     // Set the Movie state to the received data
//     setMovie(data);
//   };

//   // We pass the getMovie function as a prop called moviesearch
//   return (
//     <div className="App">
//       <Form moviesearch={getMovie} />
//       <MovieDisplay />
//     </div>
//   );
// }

// import {useState, useEffect} from "react";
// import logo from "./logo.svg";
// import "./App.css";

// import MovieDisplay from "./components/MovieDisplay";
// import Form from "./components/Form";

// export default function App() {
//   // Variable with your API Key
//   const apiKey = "98e3fb1f";

//   // State to hold movie data
//   const [movie, setMovie] = useState(null);

//   // Function to get movies
//   const getMovie = async (searchTerm) => {
//     // Make fetch request and store the response
//     const response = await fetch(
//       `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
//     );
//     // Parse JSON response into a JavaScript object
//     const data = await response.json();
//     // Set the Movie state to the received data
//     setMovie(data);
//   };

//   // We pass the getMovie function as a prop called moviesearch
//   // We pass movie as props to movie display
//   return (
//     <div className="App">
//       <Form moviesearch={getMovie} />
//       <MovieDisplay movie={movie} />
//     </div>
//   );
// }

import {useState, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  const apiKey = "98e3fb1f";

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    const data = await response.json();
    setMovie(data);
  };

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
