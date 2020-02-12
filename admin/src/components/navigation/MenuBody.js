import React, {Component} from "react";
import {Link} from 'react-router-dom'

class MenuBody extends Component {
    render() {
        return (
            <ul className="nav navbar-nav navbar-right menu-effect">
                <li className="current"><a href="/" data-hover="Домашняя">Домашняя</a></li>
                <li>
                    <Link to="/about" data-hover="О сайте">О сайте</Link>
                </li>
                <li>
                    <Link className="dropdown" data-hover="Портфолио" to="/contact">Блог &#9662;</Link>
                    <ul className="v-dropdown">
                        <li>
                            <Link to="/portfolio" data-hover="Список постов">Список постов</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" data-hover="Добавить пост">Добавить пост</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" data-hover="Редактировать пост">Редактировать пост</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        );
    }
}

export default MenuBody;




