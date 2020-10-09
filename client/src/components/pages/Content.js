import React, {Component, Suspense, lazy} from "react";
import {Switch, Route} from 'react-router-dom'

const Home = lazy(() => import("./home/Home"));
const About = lazy(() => import("./about/About"));
const Blog = lazy(() => import("./blog/Blog"));
const Contact = lazy(() => import("./contact/Contact"));
const Portfolio = lazy(() => import("./portfolio/Portfolio"));
const Photos = lazy(() => import("./portfolio/Photos"));

function Content() {

    return (
        <Switch>
            <Suspense style="color:red" fallback={<div>Loading...</div>}>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/photos/:year" component={Photos}/>
            </Suspense>
        </Switch>

    );
}

export default Content;

