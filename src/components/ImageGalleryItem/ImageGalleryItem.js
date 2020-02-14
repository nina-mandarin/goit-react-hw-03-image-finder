import React from 'react';
import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img src={src} alt={alt} className={styles.ImageGalleryItemImage} onClick={onClick} />
    </li>
  )
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ImageGalleryItem;