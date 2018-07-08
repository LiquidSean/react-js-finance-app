import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { connect } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton, Button, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NavDrawer from './nav-drawer';

import PrivateRoute from '../PrivateRoute';
import Login from '../Login';
import Signup from '../Signup';
import Home from '../Home';
import Account from '../Account';
import Settings from '../Settings';
import userActions from '../../actions';


import { Link } from 'react-router-dom'

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
      },
      flex: {
          flex: 1,
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginLeft: 12,
        marginRight: 36,
      },
      hide: {
        display: 'none',
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
      pages: {
          paddingTop: '5em',
      }
});

const LoginLink = props => <Link to="/login" {...props} />
const SignupLink = props => <Link to="/signup" {...props} />

class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    }

    handleLogout = () => {
        const { dispatch } = this.props;
        const { history } = this.props;
        return dispatch(userActions.logout())
            .then(() => history.push('/login'))
            .catch((err) => console.log(err));
    };
    
    handleDrawerOpen = () => {
    this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        let button;

        if (this.props.authorized === false) {
            button = <Button component={LoginLink} color="inherit">Login</Button>
        } else {
            button = <Button onClick={this.handleLogout} color="inherit">Logout</Button>
        }

        return (
            <div className={classes.root}>
              <AppBar 
                position="absolute" 
                color="primary"
                className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                <Toolbar disableGutters={!this.state.open}>
                <IconButton 
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(classes.menuButton, this.state.open && classes.hide)}>
                    <MenuIcon />
                  </IconButton>
                  <Typography className={classes.flex} variant="title" color="inherit" noWrap>
                  It's My Money and I Want it Now
                  </Typography>
                  
                  <Button component={SignupLink} color="inherit">Sign Up</Button>
                  {button}
                </Toolbar>
              </AppBar>
              <NavDrawer handleDrawerClose={this.handleDrawerClose} open={this.state.open}/>
              <Grid container className={classes.pages}>
              <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={Signup}/>
                <PrivateRoute path='/home' component={Home}/>
                <PrivateRoute path='/settings' component={Settings}/>
                <PrivateRoute path='/account' component={Account}/>
            </Switch>
                  </Grid>
            </div>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    const userState = state.userState;
    return {
        userState: userState,
        authorized: userState.authorized,
    };
  }

export default withRouter(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(NavBar)));