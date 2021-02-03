import React, {Component, Suspense, lazy} from "react";
import {Switch, Route as ReactRouter, Redirect} from 'react-router-dom'
import AuthenticationLayoutRoute from '../pages/_layouts/AuthenticationLayout';
import DefaultLayoutRoute from '../pages/_layouts/DefaultLayout';

const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const Blog = lazy(() => import("../pages/blog/Blog"));
const ArticleDetails = lazy(() => import("../pages/blog/ArticleDetails"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const Portfolio = lazy(() => import("../pages/portfolio/Portfolio"));
const AlbumDetails = lazy(() => import("../pages/portfolio/AlbumDetails"));
const LoginPage = lazy(() => import("../pages/authentication/LoginPage"));
const SignInSide = lazy(() => import("../pages/authentication/SignInSide"));


class Route extends Component {
    render() {
        return (
            <Switch>
                <Suspense style="color:red" fallback={<div>Loading...</div>}>
                    {/*todo Удалить когда когда хорошенько протесрибую меню*/}
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
                        <Redirect to="/layout1"/>
                    </ReactRouter>
                    {/*<AuthenticationLayoutRoute path="/layout1" component={LoginPage} />*/}
                    {/*<DefaultLayoutRoute path="/layout2" component={UserPage} />*/}
                    <AuthenticationLayoutRoute path="/layout1" component={LoginPage} />
                    <AuthenticationLayoutRoute path="/login" component={SignInSide} />
                    {/*<DefaultLayoutRoute path="/" component={Home} />*/}
                    <DefaultLayoutRoute path="/about" component={About} />
                    <DefaultLayoutRoute path="/blog" component={Blog} />
                    <DefaultLayoutRoute path="/article-details" component={ArticleDetails} />
                    <DefaultLayoutRoute path="/contact" component={Contact} />
                    <DefaultLayoutRoute path="/portfolio" component={Portfolio} />
                    <DefaultLayoutRoute path="/album-details" component={AlbumDetails} />
                </Suspense>
            </Switch>

        );
    }
}

export default Route;

