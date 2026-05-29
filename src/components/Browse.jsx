import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
      App planning --

      ---Main Container
         --Video background
         --Video Title
      --Secondary Container
        --Movies List * n
          --Cards * n
       */}
    </div>
  );
};

export default Browse;
