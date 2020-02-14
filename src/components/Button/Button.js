import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <button className={styles.Button} type="button" onClick={onLoadMore}>Load more</button>
  )
}

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired
}

export default Button;