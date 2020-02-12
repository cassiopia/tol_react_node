import React, {Component} from "react";
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';

class Blog extends Component {
    render() {
        return (
            <>
                <Breadcrumbs title="Блог" link="blog"/>
                <div className="row" data-animated="0">
                    <div className="col-md-12">
                        <div id="m-blog-content">
                            <div className="row">
                                <div className="col-md-6" data-animated="0">
                                    <div className="item">
                                        <div className="mb-thumb">
                                            <img src="img/blog/1.jpg" className="img-responsive" alt=""/>
                                            <div className="date">18<span>aug</span></div>
                                            <span className="rmore"><a href="./single-post.html">read more</a></span>
                                        </div>
                                        <h4><a href="./single-post.html">Improving and Removing Envato Market Image
                                            Watermarking</a></h4>
                                        <div className="blog-meta">
                                            <span><i className="fa fa-comments"></i> 2 comments</span>
                                            <span><i className="fa fa-user"></i> premiumlayers</span>
                                        </div>
                                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                                            auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor</p>
                                    </div>
                                </div>

                                <div className="col-md-6" data-animated="0">
                                    <div className="item">
                                        <div className="mb-thumb">
                                            <img src="img/blog/2.jpg" className="img-responsive" alt=""/>
                                            <div className="date">06<span>aug</span></div>
                                            <span className="rmore"><a href="./single-post.html">read more</a></span>
                                        </div>
                                        <h4><a href="./single-post.html">A More Balanced Envato MarketImportant
                                            Changes!</a></h4>
                                        <div className="blog-meta">
                                            <span><i className="fa fa-comments"></i> 4 comments</span>
                                            <span><i className="fa fa-user"></i> admin</span>
                                        </div>
                                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                                            auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor</p>
                                    </div>
                                </div>

                                <div className="col-md-6" data-animated="0">
                                    <div className="item">
                                        <div className="mb-thumb">
                                            <img src="img/blog/3.jpg" className="img-responsive" alt=""/>
                                            <div className="date">18<span>aug</span></div>
                                            <span className="rmore"><a href="./single-post.html">read more</a></span>
                                        </div>
                                        <h4><a href="./single-post.html">Improving and Removing Envato Market Image
                                            Watermarking</a></h4>
                                        <div className="blog-meta">
                                            <span><i className="fa fa-comments"></i> 2 comments</span>
                                            <span><i className="fa fa-user"></i> premiumlayers</span>
                                        </div>
                                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                                            auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor</p>
                                    </div>
                                </div>

                                <div className="col-md-6" data-animated="0">
                                    <div className="item">
                                        <div className="mb-thumb">
                                            <img src="img/blog/4.jpg" className="img-responsive" alt=""/>
                                            <div className="date">06<span>aug</span></div>
                                            <span className="rmore"><a href="./single-post.html">read more</a></span>
                                        </div>
                                        <h4><a href="./single-post.html">A More Balanced Envato MarketImportant
                                            Changes!</a></h4>
                                        <div className="blog-meta">
                                            <span><i className="fa fa-comments"></i> 4 comments</span>
                                            <span><i className="fa fa-user"></i> admin</span>
                                        </div>
                                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                                            auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor</p>
                                    </div>
                                </div>

                                <div className="col-md-6" data-animated="0">
                                    <div className="item">
                                        <div className="mb-thumb">
                                            <img src="img/blog/5.jpg" className="img-responsive" alt=""/>
                                            <div className="date">18<span>aug</span></div>
                                            <span className="rmore"><a href="./single-post.html">read more</a></span>
                                        </div>
                                        <h4><a href="./single-post.html">Improving and Removing Envato Market Image
                                            Watermarking</a></h4>
                                        <div className="blog-meta">
                                            <span><i className="fa fa-comments"></i> 2 comments</span>
                                            <span><i className="fa fa-user"></i> premiumlayers</span>
                                        </div>
                                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                                            auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor</p>
                                    </div>
                                </div>

                                <div className="col-md-6" data-animated="0">
                                    <div className="item">
                                        <div className="mb-thumb">
                                            <img src="img/blog/6.jpg" className="img-responsive" alt=""/>
                                            <div className="date">06<span>aug</span></div>
                                            <span className="rmore"><a href="./single-post.html">read more</a></span>
                                        </div>
                                        <h4><a href="./single-post.html">A More Balanced Envato MarketImportant
                                            Changes!</a></h4>
                                        <div className="blog-meta">
                                            <span><i className="fa fa-comments"></i> 4 comments</span>
                                            <span><i className="fa fa-user"></i> admin</span>
                                        </div>
                                        <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                                            auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor</p>
                                    </div>
                                </div>

                                <div className="page-nav" data-animated="0">
                                    <ul>
                                        <li className="active"><a href="#"><span>1</span></a></li>
                                        <li><a href="#"><span>2</span></a></li>
                                        <li><a href="#"><span>3</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Blog;
