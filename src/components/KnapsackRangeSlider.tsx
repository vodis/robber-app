import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

const styles = {
    root: {
        width: 300,
    },
    slider: {
        padding: '22px 0px',
    },
};

type ClassNames = { classes: { [className in keyof typeof styles]: string } };

interface KnapsackRangeSliderPropsType {

}

class KnapsackRangeSlider extends React.Component<ClassNames, KnapsackRangeSliderPropsType> {
    state = {
        value: 50,
    };

    handleChange = (event: any, value: any) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
        <Typography id="label">{Math.round(this.state.value)}</Typography>
        <Slider
        classes={{ container: classes.slider }}
        value={value}
        aria-labelledby="label"
        onChange={this.handleChange}
        />
        </div>
    );
    }
}

// SliderRangeSlider.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(KnapsackRangeSlider);