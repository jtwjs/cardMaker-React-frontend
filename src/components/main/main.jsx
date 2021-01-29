import React, {useCallback, useEffect} from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css';

const Main = ({authService}) => {
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
            
            </main>
            <Footer/>
        </>
    );
};

export default Main;