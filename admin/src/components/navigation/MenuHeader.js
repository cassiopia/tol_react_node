import React, {Component} from "react";
import logo from './img/logo.png';

class MenuHeader extends Component {
    render() {
        return (
            <>
                <button type="button" className="navbar-toggle" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/"><img src={logo} className="img-responsive" alt=""/></a>
            </>
        );
    }
}

export default MenuHeader;
