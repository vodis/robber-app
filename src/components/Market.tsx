import * as React from 'react';
import MarketStore from './MarketStore';

import KnapsackRangeSlider from './KnapsackRangeSlider';

import { connect } from "react-redux";
import { newKnapsackSize } from "../actions/knapsackActions";


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
                <div>Filter</div>
                <MarketStore/>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    fetchSize:  state.fetchSize.curentSize,
});

export default connect(mapStateToProps, { newKnapsackSize })(Market);