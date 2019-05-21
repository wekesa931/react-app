import React, {Component} from 'react';
import Routes from './routes'
import {BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {  logIn, loginLogic } from './actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentWillMount(){
        loginLogic()
            .then(token => this.props.logIn(token))
        
    }
    renderItem = (items)=>(
            items ? items.map((item)=>(
                <div key={item.id}>{item.name}</div>
            )) : null
        
    )
    render() {
        return ( 
            <div>
                <BrowserRouter>
                    {this.renderItem(this.props.data.user)}
                    <Routes/>
                </BrowserRouter>
            </div>
         );
    }
}
 
const mapStateToProps = (state)=>{
    // console.log(state)
    return{
        data:state.user
    }
}


export default connect(mapStateToProps, { logIn })(App);
