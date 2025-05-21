import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
let lightbox = null;
export function renderGallery(images) {
    return images.map(image => {
      return `
        <li class="gallery-item">
          <a href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}" />
          </a>
          <div class="info">
            <p>Likes: ${image.likes}</p>
            <p>Views: ${image.views}</p>
            <p>Comments: ${image.comments}</p>
            <p>Downloads: ${image.downloads}</p>
          </div>
        </li>
      `;
    }).join('');
    gallery.insertAdjacentHTML('beforeend',markup);

    if (!lightbox) {
      lightbox = new SimpleLightbox('.gallery a');
    }else {
      lightbox.refresh();
    }
  }

  export function clearGallery() {
    gallery.innerHTML = '';
  }

  export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}