import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './css/style.css';
import PageService from "../../services/PageService";
import Notification from "../../notification/Notification";
import Filter from "../../filter/Filter";

const pageTypeBlog = "blog";

export default function ArticlesList() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [articles, setArticles] = useState([]);

    const retrieveArticles = () => {
        PageService.getByPageType(pageTypeBlog)
            .then(response => {
                setIsLoaded(true);
                setArticles(response.data);
            })
            .catch(e => {
                setIsLoaded(true);
                setError(error);
                Notification.errorNotification('Ошибка загрузки данных!');
            });
    };

    useEffect(() => {
        retrieveArticles();
    }, []);

    const removePage = (articleId) => {
        //eslint-disable-next-line no-restricted-globals
        event.preventDefault();

        PageService.remove(articleId)
            .then(response => {
                retrieveArticles();
            })
            .catch(e => {
                console.log(e);
            });
    };

    const renderDiv = (articleId, articleTitle, articleDescription, articleImage) => {

        const urlLinkDetails = `/article-details?id=${articleId}`;
        const styleUrl = {backgroundImage: `url(${articleImage})`};

        return <div key={articleId} className="col-md-6" data-animated="0">
            <div className="item" key={articleId}>
                <div className="mp-thumb articleImg" style={styleUrl}>
                    <span className="rmoreBlog">
                        <Link to={urlLinkDetails} data-hover="Подробнее">Подробнее</Link>
                    </span>
                    <div className="overlay1-hr">
                        <a href="/" onClick={() => removePage(articleId)} className="link">
                            <i className="fa fa-trash-o fa-lg"></i>
                        </a>
                    </div>
                </div>
                <h4><Link to={urlLinkDetails} data-hover={articleTitle}>{articleTitle}</Link></h4>
                <p>{articleDescription}</p>
            </div>
        </div>
    };

    const selectedIds = (tagIds) => {

        // todo Реализовать метод
    };


    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        const articleList = articles.map((article, index) => {
            return renderDiv(article.id, article.title, article.description, article.PageImages[0].image_src, index);
        });

        return (
            <>
                <div className="row">
                    <div className="addArticleDiv col-md-12">
                        <div className="article-comment-form">
                            <Link to="/article-details" data-hover="Добавить статью">
                                <button type="submit">
                                    Добавить статью
                                </button>
                            </Link>
                        </div>
                    </div>
                    <Filter pageType={pageTypeBlog} parentCallback={selectedIds}/>
                    {articleList}
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
}
