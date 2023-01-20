// const imgLink = document.querySelector("gallery__link");
// container.addEventListener("click", onImgClick);
export const makeGalleryItem = function (galleryItem) {
  return galleryItem.map(({ preview, original, description }) => {
    return `
    
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        
        `;
  });
};
