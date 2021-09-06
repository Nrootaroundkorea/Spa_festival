import React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home,Login,Community,F_main,F_Gallery,F_Board,A_main,Write} from './index';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Community/:num" component={Community} />
                <Route exact path="/F_main/:num" component={F_main} />
                <Route exact path="/F_Gallery/:num" component={F_Gallery} />
                <Route exact path="/F_Board/:num" component={F_Board} />
                <Route exact path="/A_main/:num" component={A_main} />
                <Route exact path="/Write" component={Write} />
            </Switch>
        );
    }
}

export default Router;