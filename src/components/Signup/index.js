import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { Typography, Card, CardContent, Button, Grid, FormControl, FormGroup, InputLabel, Input } from '@material-ui/core';

const styles = theme => ({
    root: {
        marginTop: '5%',
        marginBottom: '5%',
    },
    container: {
      display: 'block',
    },
    formControl: {
      margin: theme.spacing.unit,
    },
    label: {
        margin: 'normal',
    },
    card: {
        'max-height': '60vh',
        marginBottom: '5%',
    },
    title: {
        marginBottom: 16,
        fontSize: 20,
    },
    content: {
        height: '70vh',
    },
    button: {
        marginTop: '5%',
        marginBottom: '5%',
    }
});

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: props.classes,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    handleClick = () => {
        
      };

    render() {
        return (
            <Grid 
            container
            className={this.state.classes.root} 
            alignItems='center'
            justify='center'
            margin='normal'
            >
                <Grid item md={6} sm={12} xs={12}>
                
                <Card raised className={this.state.classes.card}>
                    <CardContent className={this.state.classes.content} component='div'>
                        <Typography variant='title' className={this.state.classes.title}>
                            Sign Up
                        </Typography>
                <FormGroup>
                <FormControl className={this.state.classes.formControl}>
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <Input id="firstName" onChange={this.handleChange('firstName')} value={this.state.firstName} />
                </FormControl>
                </FormGroup>
                <FormGroup>
                <FormControl className={this.state.classes.formControl}>
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <Input id="lastName" onChange={this.handleChange('lastName')} value={this.state.lastName} />
                </FormControl>
                </FormGroup>
                <FormGroup>
                <FormControl className={this.state.classes.formControl}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input id="email" onChange={this.handleChange('email')} value={this.state.email} />
                </FormControl>
                </FormGroup>
                <FormGroup>
                <FormControl className={this.state.classes.formControl}>
                    <InputLabel htmlFor="email">Password</InputLabel>
                    <Input id="password" type='password' onChange={this.handleChange('password')} value={this.state.password} />
                </FormControl>
                </FormGroup>
                <FormGroup>
                <FormControl className={this.state.classes.formControl}>
                    <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                    <Input id="confirmPassword" type='password' onChange={this.handleChange('confirmPassword')} value={this.state.confirmPassword} />
                </FormControl>
                </FormGroup>
                <Grid 
                container
                alignItems='center'
                justify='center'
                >
                <Grid item xs={12} sm={6}>
                    <Button fullWidth={true} onClick={this.handleClick()} variant="contained" color="primary" className={this.state.classes.button}>
                        Submit
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
}

Signup.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Signup);