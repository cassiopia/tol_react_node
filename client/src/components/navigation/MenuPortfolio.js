import React from "react";
import {Link} from 'react-router-dom'

export default function MenuPortfolio() {

    return (
        <ul className="v-dropdown">
            <li>
                <Link to="/photos/2019" data-hover="2019">2019</Link>
            </li>
            <li>
                <Link to="/photos/2018" data-hover="2018">2018</Link>
            </li>
            <li>
                <Link to="/photos/2017" data-hover="2017">2017</Link>
            </li>
        </ul>
    );
}
