import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button, InputAdornment, Typography, Card, CardContent } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import AccountCircle from '@material-ui/icons/AccountCircle';
import userActions from '../../actions';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class Login extends Component {
    constructor(props) {
        super(props);
        // reset login status
        this.props.dispatch(userActions.logout());
        this.state = {
            classes: props.classes,
            email: '',
            password: '',
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { history } = this.props;
        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            return dispatch(userActions.login({ email: email.toString(), password: password.toString() }))
            .then(() => history.push('/home'))
            .catch((err) => console.log(err));
        }
    };

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };

    render() {
        return (
            <Grid
            container
            className={this.state.classes.root} 
            direction='column'
            spacing={16}
            alignItems='center'
            justify='center'
            > 
            <Grid item xs={12} sm={12} md={6}>
                <Card raised className={this.state.classes.card}>
                    <CardContent className={this.state.classes.content} component='div'>
                        <Typography variant='title' className={this.state.classes.title}>
                            Login
                        </Typography>
                <TextField 
                margin='normal'
                placeholder='Email'
                value={this.state.email}
                onChange={this.handleChange('email')}
                fullWidth={true}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                    ),
                }}
                ></TextField>
                <TextField
                fullWidth={true}
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    type='password'
                    className={this.state.classes.textField}
                    margin='normal'
                ></TextField>
                <Grid
                container
                justify='center'
                alignItems='center'>
                <Grid item xs={12} sm={6}>
                <Button fullWidth={true} onClick={this.handleSubmit} variant="contained" color="primary">
                    Login
                    <Icon className={this.state.classes.rightIcon}>send</Icon>
                </Button>
                </Grid>
                </Grid>
                </CardContent>
                </Card>
                </Grid>
            </Grid>
        );
    }
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    const authorizing = state.authorizing;
    return {
        authorizing,
    };
}

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Login)));