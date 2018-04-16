import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { withRouter, hashHistory } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// Import Global Styles
import style from './styles/main.scss';

//Import Pages
import Home from './pages/Home';

// Routing components
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Redirect = ReactRouter.Redirect;
const HashRouter = ReactRouter.HashRouter;

const history = createHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            {/* <Route exact path="*" component={PageNotFound} /> */}
          </Switch>
      </HashRouter>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
  };
} 

export default connect(mapStateToProps)(App)