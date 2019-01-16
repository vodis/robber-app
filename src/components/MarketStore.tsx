import * as React from 'react';
import axios from 'axios';

import KnapsackRangeSlider from './KnapsackRangeSlider';
import Filter from './Filter';
import AddNewProduct from './AddNewProduct';
import { filtered } from "../actions/filterActions";
import {connect} from "react-redux";

type MarketStoreState = {
    products: any,
}

interface MarketStorePropsType {
    filter: string,
    filtered: any,
}

class MarketStore extends React.Component<MarketStorePropsType, MarketStoreState, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            products: [],
        };
    }

    componentWillMount() {
        axios.get('/store.json')
            .then(res => res.data)
            .then(data => {
                this.setState({ products: data.products })
            })
        ;
    }

    render() {
        const searchItem = this.props.filter !== undefined ? this.state.products.filter(
            (item: any) => {
                return item.Name.indexOf(this.props.filter) !== -1;
            }
        ) : this.state.products;

        const products  = searchItem.map((product: any, index: number) => (
            <p key={index}>{product.Name}</p>
        ));

        return (
            <div>
                <KnapsackRangeSlider />
                <AddNewProduct />
                <br />
                <Filter />
                { products }
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    filter: state.fetchFilter.search,
});

export default connect(mapStateToProps, { filtered })(MarketStore);