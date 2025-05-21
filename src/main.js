import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js'; 
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

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
    clearGallery();
    showLoader();
    hideLoader();
  
    try {
      const data = await fetchImages(query);
      showLoader();
  
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