import { useParams } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import "./movielist.css";
const Movielist = () => {

  const { category } = useParams();


  return (
    <>
      <div className="movieList">
        <h2>{category && category.toUpperCase()}</h2>
        <div className="movie_list">
          <MovieCard />
        </div>
      </div>
    </>
  );
};

export default Movielist;
