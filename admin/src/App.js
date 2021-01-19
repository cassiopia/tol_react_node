import React, {Component} from 'react';
import Menu from './components/navigation/Menu';
import Route from './components/routes/Route';

class App extends Component {
    render() {
        return (
            <>
                <div className="col-md-3 m-left">
                    <Menu/>
                </div>

                <div className="col-md-9 m-right">
                    <Route/>
                </div>
            </>

        );
    }
}

export default App;