import * as React from 'react';
import { fetchProducts } from '../actions/marketStoreActions';
import { createProduct } from '../actions/marketStoreActions';
import { filtered } from '../actions/filterActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

type MarketStoreState = {
}

interface MarketStorePropsType {
    filter: string,
    filtered: any,
    products: any,
    fetchProducts: any,
}

class MarketStore extends React.Component<MarketStorePropsType, MarketStoreState> {
    componentWillMount() {
        this.props.fetchProducts();
    }

    componentWillReceiveProps(nextProps: any) {
        if (!!Object.keys(nextProps.newProduct).length) {
            this.props.products.unshift(nextProps.newProduct);
        }
    }

    render() {
        const searchItem = this.props.filter !== undefined ? this.props.products.filter(
            (item: any) => {
                return item.Name.indexOf(this.props.filter) !== -1;
            }
        ) : this.props.products;

        const productItems = searchItem.map((product: any, index: number) => (
            <p key={index}>{product.Name}</p>
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
});

export default connect(mapStateToProps, { fetchProducts, createProduct, filtered })(MarketStore);