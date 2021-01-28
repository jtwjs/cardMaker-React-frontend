import React, {useState} from 'react';
import styles from './login.module.css';
import LoginButton from './login_button/login_button';
import Header from '../header/header';
import Footer from '../footer/footer';

const Login = ({authService}) => {
    const [state, setState] = useState([{text:'Google'},{text:'Github'}]);
    return (
        <section className={styles.modal}>
            <Header/>
            <article className={styles.container}>
                <h2 className={styles.title}>
                    Login
                </h2>
                <div className={styles.loginBtnsWrap}>
                    {
                    state.map((item,idx) => 
                    <LoginButton key={idx} loginFor ={item.text} authService={authService}/>)
                    }
                </div>
            </article>
            <Footer/>
        </section>
    );
};

export default Login;