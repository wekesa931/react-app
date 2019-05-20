import React, {Component} from 'react';
import Routes from './routes'
import {BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentWillMount(){
        this.props.movieslist()
    }
    renderMovies = (movies)=>{
        return (
            movies ?
            movies.map((item)=>{
                return (
                    <div key={item.id}>
                        {item.name}
                    </div>
                )
            }): null
        )
        
    }
    render() {
        console.log(this.props)
        return ( 
            <div>
                <BrowserRouter>
                    {this.renderMovies(this.props.data.movies)}
                    <Routes/>
                </BrowserRouter>
            </div>
         );
    }
}
 
const mapStateToProps = (state)=>{
    return{
        data:state.movies
    }
}
export default connect(mapStateToProps,actions)(App);
