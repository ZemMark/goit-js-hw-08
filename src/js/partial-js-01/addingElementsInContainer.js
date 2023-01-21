import { galleryItemsMarkup } from './galleryItemsMarkup';
export const container = document.querySelector('.gallery');

container.insertAdjacentHTML('beforeend', galleryItemsMarkup);

container.onclick = e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  // const overlay = document.closest(".sl-overlay");
  // overlay.style.background = "#ccc";
  // overlay.target.style.opacity = "0.9";
  // const overlay = document.querySelector(".sl-overlay ");
  // console.log(overlay.dataset);
  // lightbox.open;
};

export default { container };
