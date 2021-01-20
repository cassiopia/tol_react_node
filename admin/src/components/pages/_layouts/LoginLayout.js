import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './css/styles.css';

const LoginLayout = ({children}) => (
    <div className='layout1'>
        <p>This is the First Layout</p>
        {children}
    </div>
);

const LoginLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <LoginLayout>
                <Component {...matchProps} />
            </LoginLayout>
        )}/>
    )
};

export default LoginLayoutRoute;