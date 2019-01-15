import * as React from 'react';
import { connect } from "react-redux";
import { filtered } from "../actions/filterActions";


type FilterType = {
    filtered: any,
}

interface FilterProps {
    search: any,
}

class Filter extends React.Component<FilterType, FilterProps, {}> {
    constructor(props: any) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        this.props.filtered();
    }

    onChange(e: any) {
    const searching = e.target.value.substr(0, 20);
        this.props.filtered(searching);
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <input type="text"
                               name="search"
                               onChange={this.onChange}
                               placeholder="Search"
                        />
                        <label>Filter by name</label>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    filter: state.fetchFilter.currentSize,
});

export default connect(mapStateToProps, { filtered })(Filter);