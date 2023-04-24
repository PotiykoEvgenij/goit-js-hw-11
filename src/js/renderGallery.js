import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

// export const renderGallery = (images) => {
//   clearGallery();

//   images.forEach((image) => {
//     const photoCard = document.createElement('div');
//     photoCard.classList.add("gallery__item");

//     const link = document.createElement('a');
//     link.classList.add("gallery__link");
//     link.href = image.largeImageURL;

//     const img = document.createElement('img');
//     img.src = image.webformatURL;
//     img.alt = image.tags;
//     img.loading = "lazy";

//     const info = document.createElement('div');
//     info.classList.add("info");

//     const likes = document.createElement('p');
//     likes.classList.add("info-item");
//     likes.innerHTML = `<b>Likes</b> ${image.likes}`;

//     const views = document.createElement('p');
//     views.classList.add("info-item");
//     views.innerHTML = `<b>Views</b> ${image.views}`;

//     const comments = document.createElement('p');
//     comments.classList.add("info-item");
//     comments.innerHTML = `<b>Comments</b> ${image.comments}`;

//     const downloads = document.createElement('p');
//     downloads.classList.add("info-item");
//     downloads.innerHTML = `<b>Downloads</b> ${image.downloads}`;

//     info.appendChild(likes);
//     info.appendChild(views);
//     info.appendChild(comments);
//     info.appendChild(downloads);

//     link.appendChild(img);
//     photoCard.appendChild(link);
//     photoCard.appendChild(info);

//     gallery.appendChild(photoCard);
//   });
// };

// export const renderGallery = (images) => {
//   clearGallery();

//   images.forEach((image) => {
//       const photoCard = document.createElement('div');
//       photoCard.classList.add("gallery__item");
//       photoCard.innerHTML = `
//         <a class="gallery__link" href="${image.largeImageURL}">
//         <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        
//             <div class="info">
//                 <p class="info-item">
//                   <b>Likes</b>${image.likes}
//                 </p>
//                 <p class="info-item">
//                   <b>Views</b>${image.views}
//                 </p>
//                 <p class="info-item">
//                   <b>Comments</b>${image.comments}
//                 </p>
//                 <p class="info-item">
//                   <b>Downloads</b>${image.downloads}
//                 </p>
//             </div>
//         </a>`;
//     console.log(photoCard);
//         gallery.appendChild(photoCard);
//     });
// };
export const renderGallery = (images) => {
  clearGallery();

  let galleryCards = [];

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
};