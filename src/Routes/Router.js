import React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home} from './index';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        );
    }
}

export default Router;