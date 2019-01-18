import * as React from 'react';
import MarketStore from './MarketStore';
import KnapsackRangeSlider from './KnapsackRangeSlider';
import Filter from './Filter';
import AddNewProduct from './AddNewProduct';

interface MarketPropsType {

}

class Market extends React.Component<MarketPropsType, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <KnapsackRangeSlider />
                <AddNewProduct />
                <Filter />
                <MarketStore/>
            </div>
        );
    }
}

export default Market;