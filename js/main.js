import './utils.js';
import { getPictureData } from './get-img-data.js';
import { renderUsersPictures } from './picture.js';
import './big-picture.js';
import './editor.js';
import './filter-img.js';
import './validation-form.js';
import { setPictureFilter } from './post-filter.js';
import './download-img.js';

getPictureData((pictures) => {
  renderUsersPictures(pictures);
  setPictureFilter(pictures);
});
