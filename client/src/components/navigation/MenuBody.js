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
                    <Link className="dropdown" data-hover="Портфолио" to="/contact">Портфолио &#9662;</Link>
                    <ul className="v-dropdown">
                        <li>
                            <Link to="/portfolio" data-hover="2019">2019</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" data-hover="2018">2018</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" data-hover="2017">2017</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" data-hover="2019">2019</Link>
                        </li>
                    </ul>
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
}

export default MenuBody;




