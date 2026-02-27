import { getImagesByQuery, resetPage, nextPage, setQuery, getQuery } from "./js/pixabay-api.js";
import render from "./js/render-functions.js";
import iziToast from 'izitoast';

let form = document.querySelector('.form');
let loadMore = document.querySelector('.loadMore');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = document.querySelector('input').value.trim();

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
  resetPage();
  render.clearGallery();
  render.hideLoadMoreButton();
  render.showLoader();

  try {
    const images = await getImagesByQuery(query);
    render.hideLoader();

    if (images.length === 0) {
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

    render.createGallery(images);
    if (images.length === 15) {
      render.showLoadMoreButton();
    }
  } catch (error) {
    render.hideLoader();
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
  nextPage();
  const query = getQuery();

  render.showLoader();

  try {
    const images = await getImagesByQuery(query);
    render.hideLoader();
    render.createGallery(images);

    if (images.length < 15) {
      render.hideLoadMoreButton();
      iziToast.info({
        title: 'End of results',
        message: "We're sorry, but you've reached the end of search results.",
        titleColor: "#fff",
        messageColor: "#fff",
        position: 'topRight'
      });
    }
  } catch (error) {
    render.hideLoader();
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