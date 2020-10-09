import React, {Component} from "react";
import MenuHeader from '../navigation/MenuHeader';
import MenuBody from '../navigation/MenuBody';
import MenuFooter from '../navigation/MenuFooter';

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

