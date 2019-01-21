import * as React from 'react';
import {connect} from 'react-redux';
import { newStore } from '../actions/storeActions';

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
        if (!!Object.keys(this.props.store).length) {
            const productItems = this.state.newStore.map((product: any, index: number) => (
                <div key={index}>
                    <p>{product.Name}</p>
                    <img src={product.Image}  height="300" />
                    <p>{"Size:" + " " + product.Size + " kg" }</p>
                    <p>{"Price:" + " " + product.Price + " UAH" }</p>
                </div>
            ));

            return (
                <div>
                    { productItems }
                </div>
            );
        }

        return (<div></div>);
    }
}

const mapStateToProps = (state: any) => ({
    store: state.fetchStore.store,
});

export default connect(mapStateToProps, { newStore })(Store);