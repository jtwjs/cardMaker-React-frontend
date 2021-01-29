import React from 'react';
import PreviewItem from '../preview_item/preview_item';
import styles from './preview.module.css';

const Preview = ({cards}) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Preview</h1>
      <ul className={styles.list}>
        {
          cards.map(card => {
          return  <PreviewItem key={card.id} card={card}/>
          })
        }
      </ul>
    </section>
  );
};

export default Preview;