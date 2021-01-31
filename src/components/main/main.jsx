import React, {useCallback, useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import Maker from '../maker/maker';
import Preview from '../preview/preview';
import styles from './main.module.css';

const Main = ({FileInput, authService, cardRepository}) => {
    const historyState = useHistory().state;
    const [cards, setCards] = useState({ });
    const [userId, setUserId] = useState(historyState && historyState.id);

    const deleteCard = (card) => {
        setCards(cards => {
            const update = {...cards};
            delete update[card.id];
            return update;
        });
        cardRepository.removeCard(userId, card);
    }

    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const update = {...cards};
            update[card.id] = card;
            return update;
        });
        cardRepository.saveCard(userId, card);
    }

    const history = useHistory();
    const onLogout = useCallback(() => {
        authService.logout();   
      }, [authService]);

      useEffect(() => {
        if(!userId) {
            return;
        }
        const stopSync = cardRepository.syncCards(userId, cards => {
            setCards(cards);
        });
        return () => stopSync();
      },[cardRepository, userId]);

      useEffect(() => {
          authService.onAuthChange(user => {
              if(user) {
                setUserId(user.uid);
              } else {
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