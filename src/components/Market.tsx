import * as React from 'react';
import MarketStore from './MarketStore';
import KnapsackRangeSlider from './KnapsackRangeSlider';
import Filter from './Filter';
import AddNewProduct from './AddNewProduct';
import Store from './Store';

interface MarketPropsType {

}

class Market extends React.Component<MarketPropsType, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <KnapsackRangeSlider />
                    <AddNewProduct />
                    <Filter />
                    <MarketStore/>
                </div>
                <div>
                    <Store />
                </div>
            </div>
        );
    }
}

export default Market;