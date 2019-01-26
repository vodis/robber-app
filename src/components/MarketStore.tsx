import * as React from 'react';
import { fetchProducts, createProduct } from '../actions/marketStoreActions';
import { filtered } from '../actions/filterActions';
import { newStore } from '../actions/storeActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';







const styles = (theme: any) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
});

type MarketStoreState = {

}

interface MarketStorePropsType {
    filter: string,
    filtered: any,
    products: any,
    fetchProducts: any,
    createProduct: any,
    newStore: any,
}

class MarketStore extends React.Component<MarketStorePropsType, MarketStoreState> {
    constructor(props: any) {
        super(props);
        this.state = {
            newProduct: []
        };
    }

    componentWillMount() {
        this.props.fetchProducts();
    }

    componentWillReceiveProps(nextProps: any) {
        if (!!Object.keys(nextProps.newProduct).length) {
            this.props.products.unshift(nextProps.newProduct);
            this.props.createProduct({});
        }
    }

    handleAddProductToStore(this: any, product: any, ) {
        this.props.newStore(product);
    }

    render() {
        const { classes } = this.props;

        const searchItem = this.props.filter !== undefined ? this.props.products.filter(
            (item: any) => {
                return item.Name.indexOf(this.props.filter) !== -1;
            }
        ) : this.props.products;

        const productItems = searchItem.map((product: any, index: number) => (
            <ListItem component="nav" key={index}>
                <Grid container>
                    <Grid className="leftBar" item xs={10}>
                        <Typography component="span" className={classes.inline} color="textPrimary">
                            {product.Name}
                        </Typography>
                    </Grid>
                    <Grid className="leftBar" item xs={2}>
                        <Button color="primary" type="submit" onClick={this.handleAddProductToStore.bind(this, product)}><AddIcon /></Button>
                    </Grid>
                </Grid>
            </ListItem>
        ));

        return (
            <div className={classes.root}>
                { productItems }
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    products: state.getProducts.items,
    newProduct: state.getProducts.item,
    filter: state.fetchFilter.search,
    store: state.fetchStore.store,
});

export default connect(mapStateToProps, { fetchProducts, createProduct, filtered, newStore })(withStyles(styles)(MarketStore));