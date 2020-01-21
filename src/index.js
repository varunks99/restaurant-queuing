import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import BookTable from './book-table';
import RestaurantUI from './RestaurantUI';
import Home from './home';
import LogIn from './login';
import RestaurantList from './restaurantList';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/restaurantList" component={RestaurantList} />
      <Route path="/login" component={LogIn} />
      <Route path="/restaurantUI" component={RestaurantUI} />
      <Route path="/book-table" component={BookTable} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
