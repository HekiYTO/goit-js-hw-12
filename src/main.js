import { getImagesByQuery, setQuery, getQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions.js";
import iziToast from 'izitoast';

let form = document.querySelector('.form');
let loadMore = document.querySelector('.loadMore');
let searchInput = document.querySelector('input[name="search-text"]');
let currentPage = 1;
let totalPages = 0;

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
      titleColor: "#fff",
      messageColor: "#fff",
      position: 'topRight'
    });
    return;
  }

  setQuery(query);
  currentPage = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, currentPage);
    hideLoader();

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'No results',
        message: 'Sorry, there are no images matching your search query. Please, try again!',
        titleColor: "#fff",
        messageColor: "#fff",
        backgroundColor: "#EF4040",
        position: 'topRight'
      });
      return;
    }

    totalPages = Math.ceil(data.totalHits / 15);
    createGallery(data.hits);

    if (currentPage < totalPages) {
      showLoadMoreButton();
    } else if (data.hits.length > 0) {
      iziToast.info({
        title: 'End of results',
        message: "We're sorry, but you've reached the end of search results.",
        titleColor: "#fff",
        messageColor: "#fff",
        position: 'topRight'
      });
    }
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again.',
      titleColor: "#fff",
      messageColor: "#fff",
      backgroundColor: "#EF4040",
      position: 'topRight'
    });
  }
});

loadMore.addEventListener('click', async () => {
  currentPage++;
  const query = getQuery();

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, currentPage);
    hideLoader();
    createGallery(data.hits);

    // Scroll to gallery
    const firstPhoto = document.querySelector('.photo-card');
    const photoHeight = firstPhoto.getBoundingClientRect().height;
    window.scrollBy({
      top: photoHeight * 2,
      behavior: 'smooth'
    });

    if (currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        title: 'End of results',
        message: "We're sorry, but you've reached the end of search results.",
        titleColor: "#fff",
        messageColor: "#fff",
        position: 'topRight'
      });
    }
  } catch (error) {
    hideLoader();
    showLoadMoreButton();
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again.',
      titleColor: "#fff",
      messageColor: "#fff",
      backgroundColor: "#EF4040",
      position: 'topRight'
    });
  }
});