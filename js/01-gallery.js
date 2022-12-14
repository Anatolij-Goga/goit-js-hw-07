import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListElement = document.querySelector('.gallery');
const galleryMarkup = creatGalleryItemsMarkup(galleryItems);

galleryListElement.insertAdjacentHTML('beforeend', galleryMarkup);

function creatGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}
