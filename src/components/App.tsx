import * as React from 'react';
import Hello from './Hello';
import Knapsack from './Knapsack';
import Market from './Market';

interface AppPropsType {

}

class App extends React.Component<AppPropsType, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isHello: true,
            isKnapsack: false,
            isMarket: false,
            sizeOfKnapsack: 0
        };
        this.setStateHello = this.setStateHello.bind(this);
        this.setStateKnapsack = this.setStateKnapsack.bind(this);
    }

    setStateHello(value: any) {
        this.setState({
            isHello: value.isHello,
            isKnapsack: true,
            isMarket: false
        });
    }

    setStateKnapsack(value: any) {
        this.setState({
            isHello: false,
            isKnapsack: value.isKnapsack,
            isMarket: true
        });
    }

    render() {
        switch(true) {
            case !!this.state.isHello:
                return (
                    <div>
                        <Hello title="Robber App" button="Start" isHelloTrue={this.setStateHello}>
                            <p>This is a tool that helps a robber to understand which items from a market he could steal using his knapsack to optimize his profit.</p>
                        </Hello>
                    </div>
                );
                break;

            case !!this.state.isKnapsack:
                return (
                    <Knapsack
                        isKnapsackTrue={this.setStateKnapsack}
                    />
                );
                break;

            case !!this.state.isMarket:
                return (
                    <Market />
                );
                break;
        };
    }
};

export default App;