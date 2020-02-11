import React, {Component, Suspense, lazy} from "react";
import {Switch, Route} from 'react-router-dom'

const Blogs = lazy(() => import("views/blog/Blog/Blogs.jsx"));
const SingleBlog = lazy(() => import("views/blog/Blog/SingleBlog.jsx"));
const AddBlog = lazy(() => import("views/blog/Blog/AddBlog.jsx"));
const EditBlog = lazy(() => import("views/blog/Blog/EditBlog.jsx"));
const BlogSearch = lazy(() => import("views/blog/Blog/Search.jsx"));


class BlogMenuLazy extends Component {
    render() {
        return (
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/blog/blogs" component={Blogs}/>
                    <Route exact path="/blog/blog-view" component={SingleBlog}/>
                    <Route exact path="/blog/add-blog" component={AddBlog}/>
                    <Route exact path="/blog/edit-blog" component={EditBlog}/>
                    <Route exact path="/blog/search" component={BlogSearch}/>
                </Suspense>
            </Switch>

        );
    }
}

export default BlogMenuLazy;

