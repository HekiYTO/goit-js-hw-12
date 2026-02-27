import axios from "axios";

const API_KEY = "54627953-91354900f2659ddc705c1dc29";

let pageCount = 1;
let currentQuery = "";

export async function getImagesByQuery(query) {
  const response = await axios.get("https://pixabay.com/api/", {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      per_page: 15,
      page: pageCount
    }
  });
  return response.data.hits;
}


export function resetPage() {
  pageCount = 1;
}

export function nextPage() {
  pageCount++;
}

export function getPage() {
  return pageCount
}

export function setQuery(query) {
  currentQuery = query;
}

export function getQuery() {
  return currentQuery;
}