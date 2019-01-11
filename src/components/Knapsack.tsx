import * as React from 'react';
import KnapsackRangeSlider from './KnapsackRangeSlider';

const styles = {
    root: {
        width: 300,
    },
    slider: {
        padding: '22px 0px',
    },
};

interface KnapsackPropsType {
    isKnapsackTrue: (e: any) => void
}

class Knapsack extends React.Component<KnapsackPropsType, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            isKnapsack: true,
        };
        this.handleClick = this.handleClick.bind(this);
        this.checkIsKnapsackTrue = this.checkIsKnapsackTrue.bind(this);
    }

    handleClick() {
        this.setState({
            isKnapsack: false
        });
    }

    componentDidUpdate() {
        this.checkIsKnapsackTrue(this.state);
    }

    checkIsKnapsackTrue(event: any) {
        this.props.isKnapsackTrue(event);
    }

    render() {
        return (
            <div>
                <p>Pick size of knapsack</p>
                <KnapsackRangeSlider />
                <button onClick={this.handleClick}>Continion</button>
            </div>
        );
    }
}

export default Knapsack;