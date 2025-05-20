import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50401137-cdbb52678a54314c233e4ec11';

export async function fetchImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}

function renderGallery(images) {
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
  }
  const form = document.querySelector('#search-form');
  const gallery = document.querySelector('.gallery');
  const loader = document.querySelector('.loader');
  let lightbox = new SimpleLightbox('.gallery a');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const query = e.target.elements.searchQuery.value.trim();
  
    if (!query) {
      iziToast.error({
        title: 'Oops',
        message: `Sorry, there are no images matching your search. Please try again!`,
      });
      lightbox.refresh();
      return
    }
  
    gallery.innerHTML = '';
    loader.classList.remove('hidden');
  
    try {
      const data = await fetchImages(query);
      loader.classList.add('hidden');
  
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Oops',
          message: `Sorry, there are no images matching your search ${e.target.elements.searchQuery.value}. Please try again!`,
        });
        return;
      }
  
      const markup = renderGallery(data.hits);
      gallery.innerHTML = markup;
  
      lightbox.refresh();
    } catch (error) {
      loader.classList.add('hidden');
      iziToast.error({ title: 'Hata', message: 'Görseller alınamadı!' });
    }
  });

