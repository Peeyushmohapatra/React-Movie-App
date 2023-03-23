
export const getMovieList = async ( setDataFromApi,category) => {

  const apiData = await fetch(
    `https://api.themoviedb.org/3/movie/${category ? category : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
  );
  const res = await apiData.text();
  const jsonData = JSON.parse(res);
  setDataFromApi(jsonData.results);
};
