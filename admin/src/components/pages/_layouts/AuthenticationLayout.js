import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './css/styles.css';

const AuthenticationLayout = ({children}) => (
    <div>
        {children}
    </div>
);

const LoginLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <AuthenticationLayout>
                <Component {...matchProps} />
            </AuthenticationLayout>
        )}/>
    )
};

export default LoginLayoutRoute;