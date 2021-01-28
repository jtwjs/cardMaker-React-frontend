import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => {
    return (
        <header className={styles.header}>
        {
            true && <button onClick={onLogout} className={styles.logout}>
                Logout
            </button>
            }
            <div className={styles.logo}>
                <img src="./images/logo.png" alt="logo"/>
            </div>
            <h2 className={styles.title}>
                Business Card Maker
            </h2>
        </header>
    );
};

export default Header;