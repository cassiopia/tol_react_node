import React from "react";
import {Link} from 'react-router-dom'
import MenuPortfolio from './MenuPortfolio'

export default function MenuBody() {
    return (
        <ul className="nav navbar-nav navbar-right menu-effect">
            <li className="current"><a href="/" data-hover="Домашняя">Домашняя</a></li>
            <li>
                <Link to="/about" data-hover="О сайте">О сайте</Link>
            </li>
            <li>
                <Link className="dropdown" data-hover="Портфолио" to="/contact">Портфолио &#9662;</Link>
                <MenuPortfolio/>
            </li>
            <li>
                <Link to="/blog" data-hover="Блог">Блог</Link>
            </li>
            <li>
                <Link to="/contact" data-hover="Контакты">Контакты</Link>
            </li>
        </ul>
    );
}
