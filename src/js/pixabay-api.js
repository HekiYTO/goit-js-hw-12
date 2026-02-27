import axios from "axios";

const API_KEY = "54627953-91354900f2659ddc705c1dc29";
const BASE_URL = "https://pixabay.com/api/";

let currentQuery = "";

export async function getImagesByQuery(query, page = 1) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      per_page: 15,
      page: page
    }
  });
  return response.data;
}

export function setQuery(query) {
  currentQuery = query;
}

export function getQuery() {
  return currentQuery;
}