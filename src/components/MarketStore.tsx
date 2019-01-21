import * as React from 'react';
import { fetchProducts, createProduct } from '../actions/marketStoreActions';
import { filtered } from '../actions/filterActions';
import { newStore } from '../actions/storeActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

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
        const searchItem = this.props.filter !== undefined ? this.props.products.filter(
            (item: any) => {
                return item.Name.indexOf(this.props.filter) !== -1;
            }
        ) : this.props.products;

        const productItems = searchItem.map((product: any, index: number) => (
            <div key={index}>
                <p>{product.Name}</p>
                <button type="submit" onClick={this.handleAddProductToStore.bind(this, product)}>Add to market</button>
            </div>
        ));

        return (
            <div>
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

export default connect(mapStateToProps, { fetchProducts, createProduct, filtered, newStore })(MarketStore);