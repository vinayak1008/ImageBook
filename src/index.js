import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Route, Switch, Router } from 'react-router-dom';
import Homepage from './homepage';
import App from './App';
import Picture from './Picture';
import Season from './season';
import VideoList from './videolist';

const history = createBrowserHistory();
ReactDOM.render(
    <div>
        <Router history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/homepage" component={Homepage} />
                    <Route exact path="/season" component={Season} />
                    <Route exact path="/Picture" component={Picture} />
                    <Route exact path="/videolist" component={VideoList} />
                </Switch>
            </div>
        </Router>
    </div>
    , document.getElementById('root')
);