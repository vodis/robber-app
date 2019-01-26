import * as React from 'react';
import {connect} from 'react-redux';
import { newStore } from '../actions/storeActions';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';




const useStyles = (theme: any) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        height: '100%',
    },
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});


type StoreState = {
    newStore: any,
}

interface StorePropsType {
    store: any,
    listOfProducts: any
}

class Store extends React.Component<StorePropsType, StoreState> {
    constructor(props: any) {
        super(props);
        this.state = {
            newStore: [
                {
                    Name: '',
                    Price: 0,
                    Size: 0,
                    Image: ''
                }
            ]
        };
    }

    componentWillReceiveProps(nextProps: any) {
        if (!!Object.keys(nextProps.store).length) {
            this.setState({
                newStore: nextProps.store
            });
        }
    }

    render() {
        const { classes } = this.props;

        if (!!Object.keys(this.props.store).length) {
            const productItems = this.state.newStore.map((product: any, index: number) => (
                <Grid item>
                    <Card className={classes.card} key={index}>
                        <CardHeader title={product.Name} />
                        <img src={product.Image}  height="300" />
                        <CardContent>
                            <Typography component="p">
                                {"Size:" + " " + product.Size + " g" }
                            </Typography>
                            <Typography component="p">
                                {"Price:" + " " + product.Price + " UAH" }
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ));

            return (
                <Paper className={classes.root}>
                    <Grid container>
                        { productItems }
                    </Grid>
                </Paper>
            );
        }

        return (<div></div>);
    }
}

const mapStateToProps = (state: any) => ({
    store: state.fetchStore.store,
});

export default connect(mapStateToProps, { newStore })(withStyles(useStyles)(Store));