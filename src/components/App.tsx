import * as React from 'react';
import Hello from './Hello';
import Knapsack from './Knapsack';
import {any} from "prop-types";

interface AppPropsType {

}

class App extends React.Component<AppPropsType, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isHello: true,
            isKnapsack: false
        };
        this.setStateHello = this.setStateHello.bind(this);
    }

    setStateHello(value: any) {debugger;
        this.setState({
            isHello: value.isHello,
            isKnapsack: true
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
                    <Knapsack />
                );
                break;
        };
    }
};

export default App;