import React, { Component } from 'react';
import { Card, CardContent} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
});

class Account extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className={this.props.classes.root}>
                <Card>
                <CardContent> WOW ACCOUNT </CardContent>
                </Card>
                </div>
        );
    }
}

export default withStyles(styles)(Account);