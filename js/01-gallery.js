import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const containerGallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (element) =>
      `<li class= "gallery__item">
      <a class= "gallery__link" href="${element.original}">
        <img
            class= "gallery__image"
            src= "${element.preview}"
            data-source= "${element.original}"
            alt= "${element.description}"
          />
      </a>
    </li>`
  )
  .join("");

containerGallery.insertAdjacentHTML("afterbegin", galleryMarkup);
containerGallery.addEventListener("click", originalIMage); 

function originalIMage(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );
  instance.show();

  containerGallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
