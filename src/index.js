import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import { LandFooter } from "./components/Landingpage";
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render( 
<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/search/:keyword" component={Header} />
        </Switch>
    </BrowserRouter>
    <LandFooter />
</Provider>
, document.getElementById('root'));

registerServiceWorker();