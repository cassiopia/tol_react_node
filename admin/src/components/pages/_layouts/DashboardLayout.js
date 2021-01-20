import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Menu from '../../navigation/Menu';

const DashboardLayout = ({children, ...rest}) => {
    return (
        <>
            <div className="col-md-3 m-left">
                <Menu/>
            </div>

            <div className="col-md-9 m-right">
                <div className="page page-dashboard">
                    <div className="sidebar">This is the Second Layout</div>
                    <div className="main">{children}</div>
                </div>
            </div>
        </>
    )
};

const DashboardLayoutRoute = ({component: Component, ...rest}) => {
    return (

        <Route {...rest} render={matchProps => (
            <DashboardLayout>
                <Component {...matchProps} />
            </DashboardLayout>
        )}/>
    )
};

export default DashboardLayoutRoute;