import * as React from 'react';
import MarketStore from './MarketStore';
import KnapsackRangeSlider from './KnapsackRangeSlider';
import Filter from './Filter';
import AddNewProduct from './AddNewProduct';
import Store from './Store';
import { connect } from "react-redux";
import { newKnapsackSize } from "../actions/knapsackActions";

import './Market.scss';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';



import {connect} from "react-redux";
import {newKnapsackSize} from "../actions/knapsackActions";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: 0,
        marginRight: 0,
    },
    badge: {
        top: '10%',
        right: -3,
        // The border color match the background color.
        border: `2px solid ${
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
            }`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
        width: 30,
        height: 30,
    },
});

interface MarketPropsType {
    classes: any,
    size: any
}

class Market extends React.Component<MarketPropsType, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: this.props.size,
        };
    }

    componentWillReceiveProps(nextProps: any) {
        if (nextProps.size) {
            this.setState({
                value: this.props.size,
            });
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Grid item xs={2} >
                            <KnapsackRangeSlider />
                        </Grid>
                        <Grid item xs={10} dir="rtl">
                            <IconButton aria-label="Cart">
                                <Badge badgeContent={this.state.value} color="primary" classes={{ badge: classes.badge }}>
                                    <Avatar src="https://cdn4.iconfinder.com/data/icons/school-backpack-satchel/128/7-512.png" className={classes.avatar} />
                                </Badge>
                            </IconButton>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid item xs={4}>

                    <AddNewProduct />
                    <hr />
                    <Filter />
                    <MarketStore/>
                </Grid>
                <Grid item xs={4}>
                    <Store />
                </Grid>
                <Grid item xs={4}>
                    <div>Card</div>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    size: state.fetchSize.currentSize,
});

export default connect(mapStateToProps, { newKnapsackSize })(withStyles(styles)(Market));