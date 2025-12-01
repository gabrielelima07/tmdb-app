import axios from "axios";

const API_BASE = "https://api.tvmaze.com";

export const getPopularShows = async () => {
  const { data } = await axios.get(`${API_BASE}/shows`);
  return data;
};

export const searchShows = async (query) => {
  const { data } = await axios.get(`${API_BASE}/search/shows?q=${query}`);
  return data;
};

export const getEpisodes = async (id) => {
  const { data } = await axios.get(`${API_BASE}/shows/${id}/episodes`);
  return data;
};
