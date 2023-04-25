import '../css/styles.css';
import Notiflix from 'notiflix';
import { fetchImages } from './fetchImg';
import { renderGallery, clearGallery } from './renderGallery';

Notiflix.Notify.init({
  position: 'right-top',
  distance: '10px',
  borderRadius: '5px',
  width: '300px',
  opacity: 0.9,
  timeout: 3000,
});

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

let currentPage = 1;
let searchQuery = "";

form.addEventListener('submit', handleFormSubmit);
loadMoreBtn.addEventListener('click', handleLoadMore);

async function handleFormSubmit(event) {
    event.preventDefault();

    searchQuery = event.target.elements.searchQuery.value.trim();
    currentPage = 1;
    clearGallery(gallery);
    try {
        const { hits, totalHits } = await fetchImages(searchQuery, currentPage);
        if (hits.length === 0) {
            Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
            loadMoreBtn.classList.add('hidden-button');
            return;
        }
        renderGallery(hits);
        loadMoreBtn.classList.remove('hidden-button');
        Notiflix.Notify.info(`Hooray! We found ${totalHits} images.`);
    } catch (error) {
        console.error(error);
    }
};

async function handleLoadMore() {
    loadMoreBtn.classList.add('hidden-button');
    currentPage++;
    try {
        const { hits, totalHits } = await fetchImages(searchQuery, currentPage);
        if (totalHits < currentPage * 40 ) {
            Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
            loadMoreBtn.classList.add('hidden-button');
            return;
        }
        renderGallery(hits);
        loadMoreBtn.classList.remove('hidden-button');
    } catch (error) {
        console.error(error);
    }
};
