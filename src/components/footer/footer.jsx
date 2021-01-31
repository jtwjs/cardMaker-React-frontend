import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => {
    return (
        <footer className={styles.footer}>
            <span className={styles.copyright}>
                Code your dream
            </span>
        </footer>
    );
});

export default Footer;