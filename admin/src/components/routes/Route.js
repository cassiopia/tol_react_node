import React, {Component, Suspense, lazy} from "react";
import {Switch, Route as ReactRouter, Redirect} from 'react-router-dom'
import AuthenticationLayoutRoute from '../pages/_layouts/AuthenticationLayout';
import DefaultLayoutRoute from '../pages/_layouts/DefaultLayout';

const Blog = lazy(() => import("../pages/blog/Blog"));
const ArticleDetails = lazy(() => import("../pages/blog/ArticleDetails"));
const Portfolio = lazy(() => import("../pages/portfolio/Portfolio"));
const AlbumDetails = lazy(() => import("../pages/portfolio/AlbumDetails"));
const Login = lazy(() => import("../pages/authentication/Login"));
const Registration = lazy(() => import("../pages/authentication/Registration"));

class Route extends Component {

    render() {
        return (
            <Switch>
                <Suspense style="color:red" fallback={<div>Loading ^))))...</div>}>
                    <ReactRouter exact path="/">
                        <Redirect to="/login"/>
                    </ReactRouter>

                    <DefaultLayoutRoute path="/blog" component={Blog}/>
                    <DefaultLayoutRoute path="/article-details" component={ArticleDetails}/>
                    <DefaultLayoutRoute path="/portfolio" component={Portfolio}/>
                    <DefaultLayoutRoute path="/album-details" component={AlbumDetails}/>

                    <AuthenticationLayoutRoute path="/login" component={Login}/>
                    <AuthenticationLayoutRoute path="/registration" component={Registration}/>
                </Suspense>
            </Switch>
        );
    }
}

export default Route;
