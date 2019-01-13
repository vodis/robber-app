import * as React from 'react';
import * as PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

import { connect } from "react-redux";
import { newKnapsackSize } from "../actions/knapsackActions";

const styles = {
    root: {
        width: 300,
    },
    slider: {
        padding: '22px 0px',
    },
};

type ClassNames = {
    classes: {
        [className in keyof typeof styles]: string
    },
    newKnapsackSize: any,
    fetchSize: any,
    size: any
}

interface KnapsackRangeSliderPropsType {
    value: any

}

class KnapsackRangeSlider extends React.Component<ClassNames, KnapsackRangeSliderPropsType> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: this.props.size
        };
    }

    componentWillMount() {
        this.props.newKnapsackSize();
    }

    componentWillReceiveProps(nextProps: any) {
        if (nextProps.size) {
            this.setState({
                value: this.props.size,
            });
        }
    }

    handleChange = (event: any, value: any) => {
        let count = Math.round(value);
        this.setState({
            value: count
        });
        this.props.newKnapsackSize(count);
    };

    render() {
        const { classes } = this.props;
        const value = this.state.value;

        return (
            <div className={classes.root}>
                <Typography id="label">{value}</Typography>
                <Slider
                    classes={{ container: classes.slider }}
                    value={value}
                    aria-labelledby="label"
                    onChange={this.handleChange}
                />
            </div>
        );
    };
}

KnapsackRangeSlider.propTypes = {
    classes: PropTypes.object.isRequired,
    fetchSize: PropTypes.number.isRequired,
    newKnapsackSize: PropTypes.func.isRequired,
};

const mapStateToProps = (state: any) => ({
    size: state.fetchSize.currentSize,
});

export default connect(mapStateToProps, { newKnapsackSize })(withStyles(styles)(KnapsackRangeSlider));