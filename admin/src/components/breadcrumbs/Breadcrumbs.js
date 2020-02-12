import React, {Component} from "react";
import PropTypes from 'prop-types';

class Breadcrumbs extends Component {
    render() {
        return (
            <div>
                <div className="row" data-animated="0">
                    <div className="col-md-12">
                        <div id="page-header">
                            <h3><span>{this.props.title}</span></h3>
                            <ul className="bread_crumbs">
                                <li><a href="/">home</a></li>
                                <li>{this.props.link}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Breadcrumbs.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string
};

export default Breadcrumbs;