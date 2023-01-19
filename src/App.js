import { useState, useEffect } from "react";
import Movies from "./components/movies/Movies";
import Appbar from "./components/appbar/Appbar";
import { Grid } from '@mui/material';

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ae1de2df4195d62c2eb7041fd1ec3c5c&language=en-US&page=1`)
    .then(res => res.json())
    .then(data => setMovies(data.results) );
  }, []);
  return (
    <>
    <Appbar ></Appbar>
    <h1 align='center'>Top {movies.length} Movies</h1>
    <Grid container >
          {
           movies.map(movie => <Movies movie={movie} key={movie.id}></Movies>)
          }
    </Grid>
    </>
  );
}

export default App;
