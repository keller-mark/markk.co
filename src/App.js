import React from 'react';
import Header from './Header';
import Intro from './Intro';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/blog">
                    <p>Coming soon.</p>
                </Route>
                <Route path="/photos">
                    <p>Coming soon. For now some photos can be viewed on <a href="https://www.flickr.com/photos/83712651@N04/">Flickr</a>.</p>
                </Route>
                <Route path="/">
                    <Intro/>
                </Route>
            </Switch>    
        </Router>
    );
}