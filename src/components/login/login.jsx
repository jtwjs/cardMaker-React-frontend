import React, { useEffect,useCallback }  from 'react';
import styles from './login.module.css';
import LoginButton from '../login_button/login_button';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router';

const Login = ({authService}) => {
    const loginFor = [
        {service: 'Github'},
        {service: 'Google'},
    ];
    const history = useHistory();

    const goToMain = useCallback((userId) => {
        history.push({
            pathname: '/main',
            state: {id: userId},
        });
   },[history]);

    useEffect(() => {
        authService.onAuthChange(user => {
            user && goToMain(user.uid);
        });
    });

    return (
        <section className={styles.modal}>
            <Header/>
            <article className={styles.container}>
                <h2 className={styles.title}>
                    Login
                </h2>
                <div className={styles.loginBtnsWrap}>
                    {
                    loginFor.map((item) => 
                    <LoginButton key={item.service} loginFor ={item.service} authService={authService} goToMain={goToMain}/>)
                    }
                </div>
            </article>
            <Footer/>
        </section>
    );
};

export default Login;