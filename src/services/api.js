import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '60a715fce62209309f2548458cd3862d',
    language: 'en-US',
  },
});
export async function getTrendingMovies(page) {
  const query = `/trending/movie/week`;
  try {
    const { data } = await instance.get(query, {
      params: {
        page,
      },
    });

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getMovieDetails(id) {
  const query = `/movie/${id}`;
  try {
    const { data } = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getMovieCast(id) {
  const query = `/movie/${id}/credits`;
  try {
    const { data } = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getMovieReviews(id) {
  const query = `/movie/${id}/reviews`;
  try {
    const { data } = await instance.get(query);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function searchMovie(queryString, page) {
  const query = `/search/movie?query=${queryString}`;
  try {
    const data = await instance.get(query, {
      params: {
        page,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}
