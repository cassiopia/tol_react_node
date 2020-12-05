import React, {Component, Suspense, lazy} from "react";
import {Switch, Route} from 'react-router-dom'

const Home = lazy(() => import("./home/Home"));
const About = lazy(() => import("./about/About"));
const Blog = lazy(() => import("./blog/Blog"));
const AddArticle = lazy(() => import("./blog/AddArticle"));
const ArticleDetails = lazy(() => import("./blog/ArticleDetails"));
const Contact = lazy(() => import("./contact/Contact"));
const Portfolio = lazy(() => import("./portfolio/Portfolio"));
const AlbumDetails = lazy(() => import("./portfolio/AlbumDetails"));
const Page = lazy(() => import("./Page"));

class Content extends Component {
    render() {
        return (
            <Switch>
                <Suspense style="color:red" fallback={<div>Loading...</div>}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/add-article" component={AddArticle}/>
                    <Route path="/article-details" component={ArticleDetails}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    {/*<Route path="/page/portfolio" component={Page}/>*/}
                    <Route path="/albom-details" component={AlbumDetails}/>
                </Suspense>
            </Switch>

        );
    }
}

export default Content;

