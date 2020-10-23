import React, {Component} from "react";

class MenuFooter extends Component {
    render() {
        return (
            <>
                <div className="m-header">
                    <ul className="mh-social">
                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <p className="mh-copy">&copy; 2020 Семейный сайт Наталии Рудаковой и Поль Сергея</p>
                </div>
                <div className="m-hide"><i className="fa fa-plus-circle"></i></div>
            </>
        );
    }
}

export default MenuFooter;