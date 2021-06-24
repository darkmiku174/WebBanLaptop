import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from "./components/User/Layout"

import routes from './routes';

class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <div className="App">
                        {this.showContentMenus(routes)}
                    </div>
                </ Layout>
            </Router>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                        render={route.render}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }

}

export default App;