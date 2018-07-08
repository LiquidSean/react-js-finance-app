import React, { Component } from 'react';
import { Card, CardContent} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
});

class Settings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Card>
                <CardContent> SO MUCH SETTINGS </CardContent>
                </Card>
                </div>
        );
    }
};

export default withStyles(styles)(Settings);