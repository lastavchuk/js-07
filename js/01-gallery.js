import { galleryItems } from "./gallery-items.js";
// Change code below this line

function render(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
           <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join("");
}

const gallery = document.querySelector(".gallery");

gallery.innerHTML = render(galleryItems);

let instanceImg = {};

gallery.addEventListener("click", event => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") return;

  instanceImg = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}" width="1280">`
  );
  instanceImg.show();
});

document.body.addEventListener("keyup", event => {
  if (event.code === "Escape") instanceImg.close();
});
