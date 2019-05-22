import React, {Component} from 'react';
import Routes from './routes'
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
        
    render() {
        return ( 
            <div>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </div>
         );
    }
}

export default App;
