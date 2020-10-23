import React from 'react';

export default function YearsList() {
    return (
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
    );

}