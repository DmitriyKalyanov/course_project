import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './components/main';
import NavBar from './components/navBar';
import Users from '../app/components/users';
import UserPage from './components/userPage';
import Login from './components/login';

function App () {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:id" component={UserPage} />
                <Route path="/users" component={Users} />
                <Route path="/main" component={Main} />
                <Route path="/login" component={Login} />
                <Redirect path='/' to="/users" />
            </Switch>
            ;
        </div>
    );
}

export default App;
