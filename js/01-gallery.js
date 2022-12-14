import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListElement = document.querySelector('.gallery');
const galleryMarkup = creatGalleryItemsMarkup(galleryItems);

galleryListElement.insertAdjacentHTML('beforeend', galleryMarkup);

function creatGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, description }) => {
      return `<li><img src = '${preview}' alt = '${description}' width=320></li>`;
    })
    .join('');
}
