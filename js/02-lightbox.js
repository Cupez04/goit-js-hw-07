import { galleryItems } from './gallery-items.js';
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
            alt= "${element.description}"
          />
      </a>
    </li>`
  )
  .join("");

containerGallery.insertAdjacentHTML("afterbegin", galleryMarkup);
containerGallery.addEventListener('click', (event) => event.preventDefault())

let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
 });
 document.addEventListener('keydown', function(event) {
    // Verificar si se presionó la tecla de flecha izquierda
    if (event.code === 37) {
      // Llamar al método prev para retroceder a la imagen anterior
      prev.simplelightbox();
    }
    // Verificar si se presionó la tecla de flecha derecha
    else if (event.code === 39) {
      // Llamar al método next para avanzar a la siguiente imagen
      next.simplelightbox();
    }
  });

