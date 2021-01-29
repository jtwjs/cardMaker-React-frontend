import React from 'react';
import styles from './footer.module.css';

const Footer = (props) => {
    return (
        <footer className={styles.footer}>
            <span className={styles.copyright}>
                Code your dream
            </span>
        </footer>
    );
};

export default Footer;