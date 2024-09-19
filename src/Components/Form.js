// export default function Form(props){
//     // The component must return some JSX
//     return <h1>The Form Component</h1>;
//   };

// export default function Form(props) {
//     return (
//       <div>
//         <form>
//           <input type="text" />
//           <input type="submit" value="submit" />
//         </form>
//       </div>
//     );
//   }

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

export default function MovieDisplay({ movie }){
    // Function to return loaded JSX
    const loaded = () => {
      return (
        <>
          <h1>{movie.Title}</h1>
          <h2>{movie.Genre}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <h2>{movie.Year}</h2>
        </>
      );
    };
  
    // Function to return loading JSX
    const loading = () => {
      return <h1>No Movie to Display</h1>;
    };
  
    // Ternary operator will determine which functions JSX we will return
    return movie ? loaded() : loading();
  }