import React, {useCallback, useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Maker from '../maker/maker';
import Preview from '../preview/preview';
import styles from './main.module.css';

const Main = ({FileInput, authService}) => {
    const [cards, setCards] = useState({
        1: {
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
        2: {
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
        3: {
            id: '3',
            name: 'woong',
            company: 'apple',
            theme: 'colorful',
            title: 'Software Enginner',
            email: 'xodnd9503@gmail.com',
            message: 'back to basic!',
            fileName: 'woong',
            fileURL: 'woong.png',
        }
    });

    const deleteCard = (card) => {
        setCards(cards => {
            const update = {...cards};
            delete update[card.id];
            return update;
        });
    }

    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const update = {...cards};
            update[card.id] = card;
            return update;
        });
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
            <Maker 
                FileInput={FileInput}
                cards={cards} 
                addCard={createOrUpdateCard} 
                deleteCard={deleteCard} 
                updateCard={createOrUpdateCard}
                />
                <Preview cards={cards}/>
            </main>
            <Footer/>
        </>
    );
};

export default Main;