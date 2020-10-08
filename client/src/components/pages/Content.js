import React, {Component, Suspense, lazy} from "react";
import {Switch, Route} from 'react-router-dom'

const Home = lazy(() => import("./home/Home"));
const About = lazy(() => import("./about/About"));
const Blog = lazy(() => import("./blog/Blog"));
const Contact = lazy(() => import("./contact/Contact"));
const Portfolio = lazy(() => import("./portfolio/Portfolio"));
const Photos2019 = lazy(() => import("./portfolio/Photos2019"));
const Photos2018 = lazy(() => import("./portfolio/Photos2018"));
const Photos2017 = lazy(() => import("./portfolio/Photos2017"));

class Content extends Component {
    render() {
        return (
            <Switch>
                <Suspense style="color:red" fallback={<div>Loading...</div>}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/photos2019" component={Photos2019}/>
                    <Route path="/photos2018" component={Photos2018}/>
                    <Route path="/photos2017" component={Photos2017}/>
                </Suspense>
            </Switch>

        );
    }
}

export default Content;

