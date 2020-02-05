import React, {Component} from 'react';
import Menu from './components/navigation/Menu';
import Content from './components/pages/Content';

class App extends Component {
    render() {
        return (
            <>
                <div className="col-md-3 m-left">
                    <Menu/>
                </div>

                <div className="col-md-9 m-right">
                    <Content/>
                </div>
            </>

        );
    }
}

export default App;