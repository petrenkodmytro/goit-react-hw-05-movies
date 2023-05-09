import axios from 'axios';

export async function fetchTrendMovie() {
  const API_URL = 'https://api.themoviedb.org/3/trending/movie/day';
  // параметри запиту на бекенд
  const options = {
    params: {
      api_key: '6eb92bed4e8effdfb5cc4dc890c8b1e8',
      language: 'en-US',
      // page: pageNumber,
     
    },
  };

  const response = await axios.get(API_URL, options);
  // console.log(response.data);
  return response;
}
