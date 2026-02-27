import SimpleLightbox from "simplelightbox";

let gallery = new SimpleLightbox('.gallery a', {
  navButtons: true,
  navText: ['←', '→'],
  showCounter: true
});

export function createGallery(images) {
  const galleryContainer = document.querySelector(".gallery");

  const markup = images
    .map(image => `
      <li class="photo-card">
        <a href="${image.largeImageURL}">
          <img class="gal_element" src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <div class="stats">
          <div class="stat-item">
            <p class="stat-title">Likes</p>
            <p>${image.likes}</p>
          </div>
          <div class="stat-item">
            <p class="stat-title">Views</p>
            <p>${image.views}</p>
          </div>
          <div class="stat-item">
            <p class="stat-title">Comments</p>
            <p>${image.comments}</p>
          </div>
          <div class="stat-item">
            <p class="stat-title">Downloads</p>
            <p>${image.downloads}</p>
          </div>
        </div>
      </li>
    `)
    .join("");

  galleryContainer.insertAdjacentHTML("beforeend", markup);
  gallery.refresh();
}

export function clearGallery() {
  const galleryContainer = document.querySelector(".gallery");
  galleryContainer.innerHTML = "";
}

export function showLoader() {
  const loader = document.querySelector(".loader");
  loader.classList.add("is-loading");
}

export function hideLoader() {
  const loader = document.querySelector(".loader");
  loader.classList.remove("is-loading");
}

export function showLoadMoreButton() {
  const loadMore = document.querySelector(".loadMore");
  loadMore.classList.remove("hidden");
}

export function hideLoadMoreButton() {
  const loadMore = document.querySelector(".loadMore");
  loadMore.classList.add("hidden");
}