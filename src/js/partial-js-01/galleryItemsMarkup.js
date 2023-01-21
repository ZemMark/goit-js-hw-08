import { makeGalleryItem } from './create-el-fn';
import { galleryItems } from '../gallery-items';
export const galleryItemsMarkup = makeGalleryItem(galleryItems).join('');
