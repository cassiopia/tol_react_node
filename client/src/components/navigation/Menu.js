import React, {Component} from "react";
import MenuHeader from './MenuHeader';
import MenuBody from './MenuBody';
import MenuFooter from './MenuFooter';

class Menu extends Component {
    render() {
        return (
            <>
                <header>
                    <nav className="navbar navbar-default">
                        <div className="navbar-header">
                            <MenuHeader/>
                        </div>
                        <MenuBody/>
                    </nav>
                    <MenuFooter />
                </header>
            </>
        );
    }
}

export default Menu;

