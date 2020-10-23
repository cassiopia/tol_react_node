import React, {Component} from "react";
import MenuHeader from './MenuHeader';
import MenuBody from './MenuBody';
import MenuFooter from './MenuFooter';

// todo Сделать что бы корректно выделялось меню домашнее или воообще убрать . подумать что лучше сделать по умолчанию
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

