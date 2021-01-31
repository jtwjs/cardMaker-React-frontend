import React from 'react';
import styles from './preview_item.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

const PreviewItem = ({card}) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileURL,
  } = card;

  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.item} ${getStyles(theme)}`}>
        <div className={styles.profile}>
          <img src={url} alt ="profile img"/>
        </div>
        <div className={styles.info}>
          <div className={styles.infoTop}>
            <h2 className={styles.name}>
              {name}
            </h2>
            <span className={styles.text}>
              {company}
            </span>
          </div>
          <div className={styles.infoBottom}>
            <span className={styles.text}>
              {title}
            </span>
            <span className={styles.text}>
              {email}
            </span>
            <span className={styles.text}>
              {message}
            </span>
          </div>
        </div>
    </li>
  );
};

function getStyles(theme) {
  switch(theme) {
    case 'dark': 
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
      default:
        throw new Error(`unknown theme: ${theme}`)
  }
}

export default PreviewItem;