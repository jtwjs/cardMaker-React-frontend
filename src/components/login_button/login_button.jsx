import React from 'react';
import styels from './login_button.module.css';

const LoginButton = ({loginFor, authService, goToMain}) => {
    

    const onLogin = (e) => {
        authService
            .login(loginFor)
            .then(data => goToMain(data.user.uid));
            
    }
    return (
        <button className={styels.button} onClick={onLogin}>
            {loginFor}
        </button>
    );
};


export default LoginButton;