import React, {Component, Suspense, lazy} from "react";
import {Switch, Route as ReactRouter, Redirect} from 'react-router-dom'
import LoginLayoutRoute from '../pages/_layouts/LoginLayout';
import DashboardLayoutRoute from '../pages/_layouts/DashboardLayout';

const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const Blog = lazy(() => import("../pages/blog/Blog"));
const ArticleDetails = lazy(() => import("../pages/blog/ArticleDetails"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Portfolio = lazy(() => import("../pages/portfolio/Portfolio"));
const AlbumDetails = lazy(() => import("../pages/portfolio/AlbumDetails"));
//const Register = lazy(() => import("../pages/authentication/Register"));

const LoginPage = lazy(() => import("../pages/authentication/LoginPage"));
const UserPage = lazy(() => import("../pages/authentication/UserPage"));


class Route extends Component {
    render() {
        return (
            <Switch>
                <Suspense style="color:red" fallback={<div>Loading...</div>}>
                {/*<Suspense style="color:red" fallback={<div>Loading...</div>}>*/}
                {/*    <ReactRouter exact path="/" component={Home}/>*/}
                {/*    <ReactRouter path="/about" component={About}/>*/}
                {/*    <ReactRouter path="/blog" component={Blog}/>*/}
                {/*    /!*<Route path="/add-article" component={AddArticle}/>*!/*/}
                {/*    <ReactRouter path="/article-details" component={ArticleDetails}/>*/}
                {/*    <ReactRouter path="/contact" component={Contact}/>*/}
                {/*    <ReactRouter path="/portfolio" component={Portfolio}/>*/}
                {/*    /!*<Route path="/page/portfolio" component={Page}/>*!/*/}
                {/*    <ReactRouter path="/album-details" component={AlbumDetails}/>*/}
                {/*    /!*<ReactRouter path="/register" component={Register}/>*!/*/}
                {/*</Suspense>*/}
                <ReactRouter exact path="/">
                    <Redirect to="/layout1" />
                </ReactRouter>
                <LoginLayoutRoute path="/layout1" component={LoginPage} />
                <DashboardLayoutRoute path="/layout2" component={UserPage} />
                </Suspense>
            </Switch>

        );
    }
}

export default Route;

