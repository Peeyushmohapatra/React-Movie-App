import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { getMovieList } from "./functions/getMovieList";
import Movielist from "./Components/MovieList/Movielist";
import Moviedetails from "./Components/MovieDetails/Moviedetails";

export const Globaldata = createContext();

function App() {
  const [dataFromPopularApi, setDataFromPopularApi] = useState([]);
  const [dataFromUpcomingApi, setDataFromUpcomingApi] = useState([]);
  const [dataFromTopratedApi, setDataFromTopratedApi] = useState([]);

  useEffect(() => {
    getMovieList(setDataFromPopularApi, "popular");
    getMovieList(setDataFromUpcomingApi, "upcoming");
    getMovieList(setDataFromTopratedApi, "top_rated");
  }, []);

  return (
    <>
      <Globaldata.Provider
        value={{
          dataFromPopularApi: dataFromPopularApi,
          dataFromUpcomingApi: dataFromUpcomingApi,
          dataFromTopratedApi: dataFromTopratedApi,
        }}
      >
        <div className="App">
          <Router>
            <Header />
            <Routes>
              {/* <Route path="/home" element={<Home />}/> */}
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<Moviedetails />} />
              <Route path="/movies/:category" element={<Movielist />} />
              <Route path="/*" element={<>404 Page not found</>} />
            </Routes>
          </Router>
        </div>
      </Globaldata.Provider>
    </>
  );
}

export default App;
