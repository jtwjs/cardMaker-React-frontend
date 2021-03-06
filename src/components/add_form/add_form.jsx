import React, {useRef, useState, memo} from 'react';
import styles from './add_form.module.css';
import MakeButton from '../maker_button/maker_button';

const AddForm = memo(({FileInput, addCard}) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({fileName: null, fileURL: null});


  const onFileChange = file => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value || '',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    }
    console.log(card);
    formRef.current.reset();
    setFile({
      fileName: null,
      fileURL: null,
    })
    addCard(card);
  }

  return (
    <li className={styles.item}>
      <form ref={formRef} className={styles.form}>
        <input ref={nameRef} type="text" name="name" placeholder="name" className={styles.input}  />
        <input ref={companyRef} type="text" name="company" placeholder="company" className={styles.input} />
        <select ref={themeRef} type="text" name="theme" placeholder="theme" className={styles.select}  >
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
          <option value='colorful'>Colorful</option>
        </select>
        <input ref={titleRef} type="text" name="title" placeholder="title" className={styles.input}  />
        <input ref={emailRef} type="text" name="email" placeholder="email" className={styles.input} />
        <textarea ref={messageRef} type="text" name="message" placeholder="message" className={styles.textarea} />
        <div className={styles.fileInput}>
          <FileInput name={file.fileName} onFileChange={onFileChange}/>
        </div>
        <div className={styles.button}>
          <MakeButton name="Add" onSubmit={onSubmit}/>
        </div>
      </form>
    </li>
  );
});

export default AddForm;