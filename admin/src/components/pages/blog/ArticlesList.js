import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './css/style.css';

export default function ArticlesList() {

    return (
        <>
        <div className="row">

            <div className="addArticleDiv col-md-12">

                <div className="article-comment-form">
                    {/*todo Убрать спец эффекты возникающие при клике: оранжевую рамку вокруг кромки, возможность кликнуть только на линку, мимолетную рамку вокруг линки*/}
                    <button type="submit">
                        <Link to="/add-article" data-hover="Добавить статью">Добавить статью</Link>
                    </button>
                </div>
            </div>

            <div className="col-md-6" data-animated="0">
                <div className="item">
                    <div className="mb-thumb">
                        <img src="img/blog/1.jpg" className="img-responsive" alt=""/>
                        <div className="date">18<span>aug</span></div>
                        <span className="rmore"><a href="/article-details">Подробнее</a></span>
                    </div>
                    <h4><a href="/article-details">Improving and Removing Envato Market Image
                        Watermarking</a></h4>

                    <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
                        auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor</p>
                </div>
            </div>

            <div className="col-md-6" data-animated="0">
                <div className="item">
                    <div className="mb-thumb">
                        <img src="img/blog/2.jpg" className="img-responsive" alt=""/>
                        <div className="date">06<span>aug</span></div>
                        <span className="rmore"><a href="/article-details">Подробнее</a></span>
                    </div>
                    <h4><a href="/article-details">A More Balanced Envato MarketImportant
                        Changes!</a></h4>

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
        </>

    )

}
