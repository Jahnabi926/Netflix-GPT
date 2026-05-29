import { useEffect } from "react";
import { API_OPTIONS } from "../components/utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../components/utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  //fetching the movies data from TMDB API and putting the data into the store( updating the store)
  //Refactoring the code by creating a custom hook to avoid code being messy
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS, // THIS RETURNS A PROMISE
    );
    const json = await data.json(); //converts data to json
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
