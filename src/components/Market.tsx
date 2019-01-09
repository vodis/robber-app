import * as React from 'react';

interface MarketPropsType {

}

class Market extends React.Component<MarketPropsType, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                New Market
            </div>
        );
    }
}

export default Market;