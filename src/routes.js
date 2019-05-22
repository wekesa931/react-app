import React from 'react';
import {Route} from 'react-router-dom';
import Auths from './components/auth';
import Layout from './components/statics/layout';
import Home from './components/home';
import SignIn from './components/signin';
import { Container } from 'reactstrap';

const Routes = () => {
    return ( 
        <Container>
            <Layout>
                <Route path="/" exact component={Auths}/>
                <Route path="/auth/signin" exact component={SignIn}/>
                <Route path="/home" exact component={Home}/>
            </Layout>
        </Container>
     );
}
 
export default Routes;