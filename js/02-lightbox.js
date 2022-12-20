import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listGallery = document.querySelector(".gallery");
galleryItems.forEach((img) => {
  listGallery.insertAdjacentHTML(
    "beforeend",
    `<a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a>`
  );
});
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
