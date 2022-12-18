import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListElement = document.querySelector('.gallery');
const galleryMarkup = creatGalleryItemsMarkup(galleryItems);

galleryListElement.insertAdjacentHTML('beforeend', galleryMarkup);

galleryListElement.addEventListener('click', onGalleryContainerClick);

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

function onGalleryContainerClick(event) {
  event.preventDefault();

  if (event.target.classList.contains('gallery')) return;

  const source = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);

  instance.show();

  galleryListElement.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close(() => {
        galleryListElement.removeEventListener;
      });
    }
  });
}

console.log(galleryItems);
