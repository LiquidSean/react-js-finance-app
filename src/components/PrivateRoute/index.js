import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...props, ...rest }) => (
  <Route
    {...rest}
    render={function() {
        return props.authorized === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
    }
  />
);

const mapStateToProps = state => {
    return {
        authorized: state.userState.authorized
    };
};

export default withRouter(connect(mapStateToProps)(PrivateRoute));