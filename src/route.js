import React from 'react';
import {Route} from 'react-router-dom';
import Auths from './components/auth';
import Layout from './components/HOC/layout';
import Home from './components/home';
import SignIn from './components/signin';
import { Container } from 'reactstrap';
// import Dashboard from './components/dashboard';

const Routes = () => {
    return ( 
        <Container>
            <Layout>
                <Route path="/auth/signup" exact component={Auths}/>
                <Route path="/auth/signin" exact component={SignIn}/>
                <Route path="/home" exact component={Home}/>
            </Layout>
        </Container>
     );
}
 
export default Routes;