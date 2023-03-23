import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useContext } from "react";
import { Globaldata } from "../../App";
import { Link } from "react-router-dom";

const Home = () => {
  const dataFromContext = useContext(Globaldata);
  console.log(dataFromContext);

  return (
    <div className="home">
      <div className="poster">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          transitionTime={3}
          showStatus={false}
        >
          {dataFromContext.dataFromPopularApi.map((ele) => {
            return (
              <>
                <Link to={`/movie/${ele.id}`}>
                  <div className="posterContainer">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${
                        ele && ele.backdrop_path
                      }`}
                      alt=""
                    />
                  </div>
                  <div className="posterImage_overlay">
                    <div className="posterImage_title">
                      {ele && ele.original_title}
                    </div>
                    <div className="posterImage_realisingDate_rating">
                      {ele && ele.release_date}
                      <span>{ele && ele.vote_average}</span>
                    </div>
                    <div className="posterImageDiscription">
                      {ele && ele.overview}
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
