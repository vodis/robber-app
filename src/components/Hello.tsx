import * as React from 'react';

interface PropsType {
    children: JSX.Element,
    title: string,
    button: string,
    isHelloTrue: (e: any) => void
}

class Hello extends React.Component<PropsType, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            isHello: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.checkIsHelloTrue = this.checkIsHelloTrue.bind(this);
    }

    handleClick() {
        this.setState({
            isHello: false
        });
    }

    componentDidUpdate() {
        this.checkIsHelloTrue(this.state);
    }

    checkIsHelloTrue(event: any) {
        this.props.isHelloTrue(event);
    }

    render() {
        return (
            <div>
                <h2>
                    {this.props.title}
                </h2>
                {this.props.children}
                <button onClick={this.handleClick}>{this.props.button}</button>
            </div>
        )
    }
}

export default Hello;