import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './css/style.css';
import PageService from "../../services/PageService";

const pageTypeBlog = "blog";

export default function ArticlesList() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [articles, setArticles] = useState([]);

    const fetchData = () => {
        PageService.getByPageType(pageTypeBlog)
            .then(response => {
                setIsLoaded(true);
                setArticles(response.data);
            })
            .catch(e => {
                setIsLoaded(true);
                setError(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderDiv = (articleId, articleTitle, articleDescription) => {

        const urlLinkDetails = `/article-details?id=${articleId}`;

        return <div key={articleId} className="col-md-6" data-animated="0">
            <div className="item" key={articleId}>
                <div className="mb-thumb">
                    <img src="img/blog/1.jpg" className="img-responsive" alt=""/>
                    <span className="rmore">
                         <Link to={urlLinkDetails} data-hover="Подробнее">Подробнее</Link>
                    </span>
                </div>
                <h4><Link to={urlLinkDetails} data-hover={articleTitle}>{articleTitle}</Link></h4>
                <p>{articleDescription}</p>
            </div>
        </div>
    };

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        console.log(articles);

        const articleList = articles.map((article, index) => {

            if ((index) % 2 === 0) {
                return renderDiv(article.id, article.title, article.description);
            } else {
                return renderDiv(article.id, article.title, article.description);
            }
        });

        return (

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

                {articleList}
                <div className="page-nav" data-animated="0">
                    <ul>
                        <li className="active"><a href="#"><span>1</span></a></li>
                        <li><a href="#"><span>2</span></a></li>
                        <li><a href="#"><span>3</span></a></li>
                    </ul>
                </div>

            </div>

        )
    }

}
