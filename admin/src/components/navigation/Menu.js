import React, {Component} from "react";
import MenuHeader from '../navigation/MenuHeader';
import MenuBody from '../navigation/MenuBody';

class Menu extends Component {
    render() {
        return (
            <>
                <header>
                    <nav class="navbar navbar-default">
                        <div class="navbar-header">
                            <MenuHeader/>
                        </div>
                        <MenuBody/>
                    </nav>
                </header>
            </>
        );
    }
}

export default Menu;

