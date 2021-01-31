import React, { useRef, memo } from 'react';
import styles from './maker_form.module.css';
import MakeButton from '../maker_button/maker_button';

const MakerItem = memo(({FileInput, card, deleteCard, updateCard}) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
  } = card;

  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    deleteCard(card);
  } 

  const onFileChange = file => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  }

  const onChange = (e) => {
    if(e.currentTarget === null) {
      return ;
    }
    e.preventDefault();
    
    updateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  return (
    <li className={styles.item}>
      <form className={styles.form}>
        <input ref={nameRef}  type="text" className={styles.input} name="name" value={name} onChange={onChange}/>
        <input ref={companyRef} type="text" className={styles.input} name="company" value={company}onChange={onChange} />
        <select ref={themeRef} type="text" className={styles.select} name="theme" value={theme} onChange={onChange} >
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
          <option value='colorful'>Colorful</option>
        </select>
        <input ref={titleRef} type="text" className={styles.input} name="title" value={title} onChange={onChange}/>
        <input ref={emailRef} type="text" className={styles.input} name="email" value={email} onChange={onChange}/>
        <textarea ref={messageRef}  type="text" className={styles.textarea} name="message" value={message} onChange={onChange}/>
        <div className={styles.fileInput}>
          <FileInput name={card.fileName} onFileChange={onFileChange}/>
        </div>
        <div className={styles.button}>
          <MakeButton name="Delete" onSubmit={onSubmit}/>
        </div>
      </form>
    </li>
  );
});

export default MakerItem;