import React from "react";
import {Link} from 'react-router-dom'
import MenuPortfolio from './MenuPortfolio'

export default function MenuBody() {
    return (
        <ul className="nav navbar-nav navbar-right menu-effect">
            <li>
                <Link to="/portfolio" data-hover="Портфолио">Портфолио</Link>
            </li>
            <li>
                <Link to="/blog" data-hover="Блог">Блог</Link>
            </li>
        </ul>
    );
}
