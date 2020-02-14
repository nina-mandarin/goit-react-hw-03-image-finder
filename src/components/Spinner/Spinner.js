import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.Loader}>
      <Loader
        type="Triangle"
        color="#3f51b5"
        height={100}
        width={100}
      />
      <span className={styles.LoaderText}>Loading ...</span>
    </div>
  )
}

export default Spinner;