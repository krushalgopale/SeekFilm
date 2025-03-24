const api_Key = import.meta.env.VITE_API_KEY;
const api_Url = import.meta.env.VITE_API_URL;


export const getPopularMovies = async () => {
  const response = await fetch(`${api_Url}/movie/popular?api_key=${api_Key}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${api_Url}/search/movie?api_key=${api_Key}&query=${encodeURIComponent(query)}`,
  );
  const data = await response.json();
  return data.results;
};
