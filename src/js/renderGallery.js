const gallery = document.querySelector('.gallery');
export const renderGallery = (images) => {
    images.forEach((image) => {
        const photoCard = document.createElement('div');
        photoCard.classList.add("photo-card");
        photoCard.innerHTML = `
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
            </div>`;
        
        gallery.appendChild(photoCard);
    });
};

export const clearGallery = () => {
  gallery.innerHTML = "";
};