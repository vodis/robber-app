import * as React from 'react';
import MarketStore from './MarketStore';




interface MarketPropsType {

}

class Market extends React.Component<MarketPropsType, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <MarketStore/>
            </div>
        );
    }
}

export default Market;