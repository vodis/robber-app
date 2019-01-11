import * as React from 'react';
import axios from 'axios';

interface MarketStorePropsType {
}

type MarketStoreState = {
    products: any
}

class MarketStore extends React.Component<MarketStorePropsType, MarketStoreState, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            products: []
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
        const Name = this.state.products.map((product: any, index: number) => (
            <p key={index}>{product.Name}</p>
        ));

        return (
            <div>
                {Name}
            </div>
        );
    }
}

export default MarketStore;