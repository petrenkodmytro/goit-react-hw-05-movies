import axios from 'axios';

export async function fetchTrendMovie(pageNumber, controller) {
  const API_URL = 'https://api.themoviedb.org/3/trending/movie/day';
  // параметри запиту на бекенд
  const options = {
    signal: controller.signal,
    params: {
      api_key: '6eb92bed4e8effdfb5cc4dc890c8b1e8',
      language: 'en-US',
      page: pageNumber,
    },
  };

  const response = await axios.get(API_URL, options);
  // console.log(response.data);
  return response;
}

export async function fetchMovieByName(query, pageNumber) {
  const API_URL = 'https://api.themoviedb.org/3/search/movie';
  // параметри запиту на бекенд
  const options = {
    params: {
      query,
      api_key: '6eb92bed4e8effdfb5cc4dc890c8b1e8',
      language: 'en-US',
      page: pageNumber,
      include_adult: false,
    },
  };

  const response = await axios.get(API_URL, options);
  // console.log(response.data);
  return response;
}

export async function fetchMovieById(movieId) {
  const API_URL = `https://api.themoviedb.org/3/movie/${movieId}`;
  // параметри запиту на бекенд
  const options = {
    params: {
      api_key: '6eb92bed4e8effdfb5cc4dc890c8b1e8',
      language: 'en-US',
    },
  };

  const response = await axios.get(API_URL, options);
  // console.log(response.data);
  return response;
}

export async function fetchCastById(movieId) {
  const API_URL = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  // параметри запиту на бекенд
  const options = {
    params: {
      api_key: '6eb92bed4e8effdfb5cc4dc890c8b1e8',
      language: 'en-US',
    },
  };

  const response = await axios.get(API_URL, options);
  // console.log(response.data);
  return response;
}

export async function fetchReviewsById(movieId) {
  const API_URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  // параметри запиту на бекенд
  const options = {
    params: {
      api_key: '6eb92bed4e8effdfb5cc4dc890c8b1e8',
      language: 'en-US',
    },
  };

  const response = await axios.get(API_URL, options);
  // console.log(response.data);
  return response;
}

export async function fetchActors(query, pageNumber) {
  const API_URL = 'https://api.themoviedb.org/3/search/person';
  // параметри запиту на бекенд
  const options = {
    params: {
      query,
      api_key: '6eb92bed4e8effdfb5cc4dc890c8b1e8',
      language: 'en-US',
      page: pageNumber,
      include_adult: false,
    },
  };

  const response = await axios.get(API_URL, options);
  // console.log(response.data);
  return response;
}
