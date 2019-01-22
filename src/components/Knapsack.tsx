import * as React from 'react';

import KnapsackRangeSlider from './KnapsackRangeSlider';
import { connect } from "react-redux";
import { newKnapsackSize } from "../actions/knapsackActions";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import green from '@material-ui/core/colors/green';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme: any) => ({
    root: {
        width: 300,
    },
    slider: {
        padding: '22px 0px',
    },
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
        width: 200,
        height: 200,
    },
    greenAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: green[500],
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

interface KnapsackPropsType {
    isKnapsackTrue: (e: any) => void,
    classes: any,
    size: any,
}

class Knapsack extends React.Component<KnapsackPropsType, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            isKnapsack: true,
        };
        this.handleClick = this.handleClick.bind(this);
        this.checkIsKnapsackTrue = this.checkIsKnapsackTrue.bind(this);
    }

    componentDidUpdate() {
        this.checkIsKnapsackTrue(this.state);
    }

    handleClick() {
        this.setState({
            isKnapsack: false
        });
    }

    checkIsKnapsackTrue(event: any) {
        this.props.isKnapsackTrue(event);
    }

    render() {
        const { classes } = this.props;

        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar src="https://cdn4.iconfinder.com/data/icons/school-backpack-satchel/128/7-512.png" className={classes.avatar} />
                    <Typography component="h1" variant="h5">Knapsack</Typography>
                    <Typography color="textSecondary">Pick size in kg.</Typography>
                    <Avatar className={classes.greenAvatar}>{this.props.size}</Avatar>
                    <KnapsackRangeSlider />
                    <Button onClick={this.handleClick}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}>Continion</Button>
                </Paper>
            </main>
        );
    }
}

const mapStateToProps = (state: any) => ({
    size: state.fetchSize.currentSize,
});

export default connect(mapStateToProps, { newKnapsackSize })(withStyles(styles)(Knapsack));