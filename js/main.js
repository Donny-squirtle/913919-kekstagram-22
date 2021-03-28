import '../nouislider/nouislider.js'
import './utils.js';
import { renderUsersPictures } from './picture.js';
import './big-picture.js';
import './download-img.js';
import './filter-img.js';
import './validation-form.js';
import { getPictureData } from './get-img-data.js';

getPictureData((pictures) => {
  renderUsersPictures(pictures);
});
