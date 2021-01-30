import React from 'react';
import styles from './maker_form.module.css';
import MakeButton from '../maker_button/maker_button';
import ImageFileInput from '../image_file_input/image_file_input';

const MakerItem = ({card}) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card;

  const onSubmit = (e) => {
    e.preventDefault();
  } 

  return (
    <li className={styles.item}>
      <form className={styles.form}>
        <input type="text" className={styles.input} name="name" value={name} />
        <input type="text" className={styles.input} name="company" value={company}/>
        <select type="text" className={styles.select} name="theme" value={theme} >
          <option value='light'>Light</option>
          <option value='darl'>Dark</option>
          <option value='colorful'>Colorful</option>
        </select>
        <input type="text" className={styles.input} name="title" value={title} />
        <input type="text" className={styles.input} name="email" value={email}/>
        <textarea type="text" className={styles.textarea} name="message" value={message}/>
        <div className={styles.fileInput}>
          <ImageFileInput fileName={fileName} />
        </div>
        <div className={styles.button}>
          <MakeButton name="Delete" onClick={onSubmit}/>
        </div>
      </form>
    </li>
  );
};

export default MakerItem;