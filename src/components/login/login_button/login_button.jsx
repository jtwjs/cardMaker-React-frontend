import React from 'react';
import styels from './login_button.module.css';

const LoginButton = ({loginFor, authService}) => {
    const onLogin = (e) => {
        authService
            .login(loginFor)
            .then(console.log);
    }
    return (
        <button className={styels.button} onClick={onLogin}>
            {loginFor}
        </button>
    );
};


export default LoginButton;