// import { useEffect } from "react";

// const MoviesPage = () => {

//   useEffect(() => {
//     document.title = 'Películas I Sin E Spoiler';
//   }, []);

//   return (
//     <h1>Movies Page</h1>
//   );
// };

// export default MoviesPage;
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieHero from "../components/movie/MovieHero";
import useMovies from "../hook/useMovies";

const MoviePage = () => {
  const { id: movieId } = useParams();
  const { movie, readMovie } = useMovies();

  useEffect(() => {
    document.title = 'Película I Sin E Spoiler';
    readMovie(movieId);
    // eslint-disable-next-line
  }, []);

  if (Object.keys(movie).length === 0) {
    return (<h2>Cargando</h2>);
  } else {
    return (
      <MovieHero movie={movie} />
    );
  }

};

export default MoviePage;