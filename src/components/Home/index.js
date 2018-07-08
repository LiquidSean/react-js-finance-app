import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent } from '@material-ui/core';

const styles = theme => ({ 
    root: {
        flexGrow: 1,
    }
});

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <Card>
                <CardContent> WOW HOME </CardContent>
                </Card>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    const userState = state.userState;
    return {
        user: userState,
        authorized: userState.authorized,
    };
  }


export default withRouter(connect(mapStateToProps)(withStyles(styles)(Home)));