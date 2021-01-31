import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({onLogout}) => {
    return (
        <header className={styles.header}>
        {
            onLogout && <button onClick={onLogout} className={styles.logout}>
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
});

export default Header;