import * as React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme: any) => ({
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
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

interface PropsType {
    children: JSX.Element,
    title: string,
    button: string,
    isHelloTrue: (e: any) => void,
    classes: any,
}

type HelloPropsType = {

}

class Hello extends React.Component<PropsType, HelloPropsType, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            isHello: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.checkIsHelloTrue = this.checkIsHelloTrue.bind(this);
    }

    handleClick() {
        this.setState({
            isHello: false
        });
    }

    componentDidUpdate() {
        this.checkIsHelloTrue(this.state);
    }

    checkIsHelloTrue(event: any) {
        this.props.isHelloTrue(event);
    }

    render() {
        const { classes } = this.props;

        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar src="https://as2.ftcdn.net/jpg/02/03/69/69/500_F_203696929_TSIc11Brg5HXhaSbX84n9Nm9CjBKmh85.jpg" className={classes.avatar} />
                    <Typography component="h1" variant="h5">
                        {this.props.title}
                    </Typography>
                    <Typography color="textSecondary">
                        {this.props.children}
                    </Typography>
                    <Button onClick={this.handleClick}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}>{this.props.button}</Button>
                </Paper>
            </main>
        )
    }
}

export default withStyles(styles)(Hello);