import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";
import {useLocation} from 'react-router-dom'
import {Button} from 'react-bootstrap';
import './css/style.css'

// todo Разобраться как нода должна общаться с базой
// todo редусмотреть что в описание может быть ссылка на отчет. Сделать атк что бы привела в нужный рздел
// todo добавить возможность добавлять тэги


export default function AlbumDetails() {
    // todo Предусмотреть ссылку для возврата к списку альбомов
    // todo Подумать стоит ли это обозначать в меню

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    const albumImg = `https://i.imgur.com/${query.get('cover')}.jpg`;

    // todo придумать интерфес для редактирования
    // todo Добавить логику, если в БД пусто, то отображать то что пришло из запроса
    const albumTitle =  query.get('title');
    const albumDescription =  query.get('description');

    return (
        <>
            <Breadcrumbs title="Информация об альбоме" link="album-details"/>

            <div className="row" data-animated="0">
                <div className="col-md-12">
                    <div id="m-blog-content">

                        <div className="row">
                            <div className="col-md-12">
                                <article className="item">
                                    <div className="mb-thumb">
                                        <img src={albumImg} className="img-responsive" alt=""/>
                                       
                                    </div>

                                    <h4>{albumTitle}
                                        <Button variant="link">
                                            <div className="pw-inner-portfolio">
                                                <a href="#"><span><i className="fa fa-edit"></i></span></a>
                                            </div>
                                        </Button>
                                    </h4>

                                    <p>
                                        <span> {albumDescription} </span>
                                        <Button variant="link">
                                            <div className="pw-inner-portfolio">
                                                <a href="#"><span><i className="fa fa-edit"></i></span></a>
                                            </div>
                                        </Button>
                                    </p>


                                    {/*<div className="article-comment-form" data-animated="0">*/}
                                    {/*    <h5>Leave a Comment</h5>*/}
                                    {/*    <form>*/}
                                    {/*        <div className="row">*/}
                                    {/*            <div className="col-md-6">*/}
                                    {/*                <span><i className="fa fa-user"></i></span>*/}
                                    {/*                <input type="text" placeholder="Name">*/}
                                    {/*                    <span><i className="fa fa-envelope-o"></i></span>*/}
                                    {/*                    <input type="email" placeholder="e-mail">*/}
                                    {/*                        <span><i className="fa fa-link"></i></span>*/}
                                    {/*                        <input type="text" placeholder="website">*/}
                                    {/*            </div>*/}
                                    {/*            <div className="col-md-6">*/}
                                    {/*                <textarea placeholder="Message"></textarea>*/}
                                    {/*                <button type="submit">Post a Comment</button>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </form>*/}
                                    {/*</div>*/}
                                </article>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
);
}