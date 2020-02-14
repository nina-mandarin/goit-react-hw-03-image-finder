import React from 'react';
import PropTypes from 'prop-types';

import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onClickImg }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem key={id} src={webformatURL} alt="There is a picture" onClick={() => onClickImg(largeImageURL)} />
        )
      })}
    </ul>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired
  })).isRequired,
  onClickImg: PropTypes.func.isRequired
}

export default ImageGallery;