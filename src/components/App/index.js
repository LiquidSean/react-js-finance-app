import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import './index.css';
import { connect } from 'react-redux';
import PrivateRoute from '../PrivateRoute';
import NavBar from '../NavBar';
import Login from '../Login';
import Signup from '../Signup';
import Home from '../Home';
import Account from '../Account';
import Settings from '../Settings';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const userState = state.userState;
  return {
      user: userState,
  };
}

export default withRouter(connect(mapStateToProps)(App));
