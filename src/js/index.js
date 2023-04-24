import '../css/styles.css';
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
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

API_KEY = "35640714-89aec83ac50fbde9100978e6e";

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

let currentPage = 1;
let searchQuery = "";

form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
    event.preventDefault();

    searchQuery = event.target.elements.searchQuery.value.trim();
    currentPage = 1;
    clearGallery(gallery);
    try {
        const images = await fetchImages(searchQuery, currentPage);
        if (images.length === 0) {
            Notiflix.Notify.failure(`Oops, there is no country with that ${searchQuery}`);
            loadMoreBtn.style.display = 'none';
            return;
        }
        renderGallery(images);
        Notiflix.Notify.info(`Hooray! We found ${images.length} images.`)
    } catch (error) {
        console.error(error);
    }
};

