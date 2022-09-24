import { useEffect } from "react";
import HomeHero from "../components/home/HomeHero";
import useMovies from "../hook/useMovies";

const HomePage = () => {
  const { readMovies } = useMovies();

  useEffect(() => {
    readMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <HomeHero />
  );
};

export default HomePage;