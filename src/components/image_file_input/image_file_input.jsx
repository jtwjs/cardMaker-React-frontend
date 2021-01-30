import React from 'react';
import styles from './image_file_input.module.css';


const ImageFileInput = ({fileName}) => {

  const hasFile = fileName ? styles.file  : styles[`no-file`];

  return (
    <button className={`${styles.button} ${hasFile}`}>
      {fileName || `No file`}
    </button>
  );
};

export default ImageFileInput;