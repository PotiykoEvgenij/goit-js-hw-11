import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

let galleryCards = [];

export const renderGallery = (images) => {

  images.forEach((image) => {
    const galleryCard = `
    <div class="photo-card">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />  
      </a>    
      <div class="info">
          <p class="info-item">
            <b>Likes</b>${image.likes}
          </p>
          <p class="info-item">
            <b>Views</b>${image.views}
          </p>
          <p class="info-item">
            <b>Comments</b>${image.comments}
          </p>
          <p class="info-item">
            <b>Downloads</b>${image.downloads}
          </p>
      </div>
    </div>`;
    galleryCards.push(galleryCard);
  });
  gallery.innerHTML = galleryCards.join('');

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    navText: ['←', '→'],
    overlayOpacity: 0.9,
    animationSpeed: 200,
    doubleTapZoom: 1.5,
    captions: false,
});
};

export const clearGallery = () => {
  gallery.innerHTML = "";
  galleryCards = []
};