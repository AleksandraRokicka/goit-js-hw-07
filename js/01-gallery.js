import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listGallery = document.querySelector(".gallery");

galleryItems.forEach((img) => {
  listGallery.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`
  );
});

listGallery.addEventListener("click", modalImg);
//podpięcie funkcji przez referencję do niej//
function modalImg(event) {
  event.preventDefault();
  console.log(event.target);
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
<img src="${event.target.dataset.source}" width="800" height="600">`);
  instance.show();



  document.addEventListener("keydown", (escapeKey) => {
    if (escapeKey.key === "Escape") {
      instance.close();
      console.log("esc");
    }
  });
}
console.log(galleryItems);
