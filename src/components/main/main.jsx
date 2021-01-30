import React, {useCallback, useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Maker from '../maker/maker';
import Preview from '../preview/preview';
import styles from './main.module.css';

const Main = ({authService}) => {
    const [cards, setCards] = useState([{
        id: '1',
        name: 'woong',
        company: 'apple',
        theme: 'dark',
        title: 'Software Enginner',
        email: 'xodnd9503@gmail.com',
        message: 'back to basic!',
        fileName: 'woong',
        fileURL: null,
    },
    {
        id: '2',
        name: 'woong',
        company: 'apple',
        theme: 'light',
        title: 'Software Enginner',
        email: 'xodnd9503@gmail.com',
        message: 'back to basic!',
        fileName: 'woong',
        fileURL: null,
    },
    {
        id: '3',
        name: 'woong',
        company: 'apple',
        theme: 'colorful',
        title: 'Software Enginner',
        email: 'xodnd9503@gmail.com',
        message: 'back to basic!',
        fileName: 'woong',
        fileURL: 'woong.png',
    },]);

    const addCard = (value) => {
        setCards([...cards,value]);
    }

    const history = useHistory();
    const onLogout = useCallback(() => {
        authService.logout();   
      }, [authService]);

      useEffect(() => {
          authService.onAuthChange(user => {
              if(!user) {
                history.push('/');
              }
          });
      });

    return (
        <>
            <Header onLogout={onLogout}/>
            <main className={styles.main}>
                <Maker cards={cards} onSubmit={addCard}/>
                <Preview cards={cards}/>
            </main>
            <Footer/>
        </>
    );
};

export default Main;