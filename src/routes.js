import React from 'react';
import {Route} from 'react-router-dom';
import Auths from './components/Auth/auth';
import Layout from './components/statics/layout';
import Home from './components/Home/home';
import SignIn from './components/Signin/signin';
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