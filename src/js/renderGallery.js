import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    navText: ['←', '→'],
    overlayOpacity: 0.9,
    animationSpeed: 200,
    doubleTapZoom: 1.5,
});

const gallery = document.querySelector('.gallery');

export const renderGallery = (images) => {
    images.forEach((image) => {
        const photoCard = document.createElement('div');
        photoCard.classList.add("photo-card");
      photoCard.innerHTML = `
        <a class="gallery__link" href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
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
        </a>`;
        gallery.appendChild(photoCard);
    });
};

export const clearGallery = () => {
  gallery.innerHTML = "";
};