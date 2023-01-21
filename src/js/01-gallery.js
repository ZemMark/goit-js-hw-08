// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { makeGalleryItem } from './partial-js-01/create-el-fn';
import { galleryItemsMarkup } from './partial-js-01/galleryItemsMarkup';
import * as container from './partial-js-01/addingElementsInContainer';
import lightbox from './partial-js-01/lightboxSettings';
// Change code below this line
// const container = document.querySelector('.gallery');
// makeGalleryItem();
// const imgLink = document.querySelector("gallery__link");
// container.addEventListener("click", onImgClick);
// const makeGalleryItem = function (galleryItem) {
//   return galleryItem.map(({ preview, original, description }) => {
//     return `

//     <a class="gallery__item" href="${original}">
//   <img class="gallery__image" src="${preview}" alt="${description}" />
// </a>

//         `;
//   });
// };
// const galleryItemsMarkup = makeGalleryItem(galleryItems).join('');
// container.insertAdjacentHTML('beforeend', galleryItemsMarkup);

// container.onclick = e => {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }
//   // const overlay = document.closest(".sl-overlay");
//   // overlay.style.background = "#ccc";
//   // overlay.target.style.opacity = "0.9";
//   // const overlay = document.querySelector(".sl-overlay ");
//   // console.log(overlay.dataset);
//   lightbox.open;
// };

// var lightbox = new SimpleLightbox('.gallery a', {
//   captionSelector: 'a',
//   captionPosition: 'bottom',
//   captionDelay: '250ms',
//   captionsData: 'alt',
//   captionSelector: 'img',
//   // scaleImageToRatio: true,
// });
// console.log(galleryItems);
