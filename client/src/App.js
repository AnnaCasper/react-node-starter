import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { withRouter, hashHistory } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// Import Global Styles
import style from './styles/main.scss';

//Import Pages
import Home from './pages/Home/Home';
import NewPage from './pages/NewPage';

// Routing components
const ReactRouter = require('react-router-dom');
// const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
// const Redirect = ReactRouter.Redirect;
const BrowserRouter = ReactRouter.BrowserRouter;

const history = createHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/new-page" component={NewPage}/>
            {/* <Route exact path="*" component={PageNotFound} /> */}
          </Switch>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
  };
} 

export default connect(mapStateToProps)(App)