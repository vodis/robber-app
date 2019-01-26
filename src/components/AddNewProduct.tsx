import * as React from 'react';
import { createProduct } from '../actions/marketStoreActions';
import { connect } from 'react-redux';
import {any} from "prop-types";

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import "./App.scss";

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = (theme: any) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 300,
    },
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    bt: {
        display: 'grid',
        margin: '30px 7px',
    },
});

type AddNewProductType = {
    classes: {
        [className in keyof typeof styles]: string
    },
    isOpen: boolean,
    product: object,
    left: boolean,
}

interface AddNewProductPropsType {
    createProduct: any,
}

class AddNewProduct extends React.Component<AddNewProductPropsType, AddNewProductType, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
            product: {
                Name: "",
                Price: "",
                Size: "",
                Image: "",
            },
            left: false,
        };
        this.openForm = this.openForm.bind(this);
        this.onChange = this.onChange.bind(this);
        this.confirmForm = this.confirmForm.bind(this);
    }

    openForm() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    onChange(e: any) {
        let item = this.state.product;
        for (let key in item) {
            if (key == e.target.name) {
                return item[key] = e.target.value
            }
        }
    }

    confirmForm(e: any) {
        e.preventDefault();
        if (this.state.product.Name.length > 3 && this.state.product.Price.length > 0 && this.state.product.Size.length > 0) {
            this.props.createProduct(this.state.product);
        }
        this.setState({
            product: {
                Name: "",
                Price: "",
                Size: "",
                Image: "",
            }
        });
        this.refs.name.value = "";
        this.refs.price.value = "";
        this.refs.size.value = "";
        this.refs.image.value = "";
    }

    render() {
        const toggleDrawer = (side: string, open: boolean) => () => {
            this.setState({ ...this.state, [side]: open });
        };
        const { classes } = this.props;

        const Constructor = (
            <div className="drawersList">
                <form onSubmit={this.confirmForm}>
                    <TextField
                        id="outlined-name"
                        label="Name"
                        className={classes.textField}
                        type="text"
                        name="Name"
                        onChange={this.onChange}
                        placeholder="Name"
                        ref="name"
                    />
                    <TextField
                        id="outlined-number"
                        className={classes.textField}
                        type="Number"
                        name="Price"
                        onChange={this.onChange}
                        placeholder="Price"
                        ref="price"
                    />
                    <TextField
                        id="outlined-number"
                        className={classes.textField}
                        type="Number"
                        name="Size"
                        onChange={this.onChange}
                        placeholder="Size"
                        ref="size"
                    />
                    <TextField
                        id="outlined-name"
                        label="Image"
                        className={classes.textField}
                        type="text"
                        name="Image"
                        onChange={this.onChange}
                        placeholder="https://"
                        ref="image"
                    />
                    <div className={classes.bt}>
                        <Button variant="contained" color="primary" type="submit" onClick={toggleDrawer('left', false)}>Add</Button>
                    </div>
                </form>
            </div>
        );

        const { classes } = this.props;

        return (
            <div>
                <Fab
                    onClick={toggleDrawer('left', true)}
                    color="primary"
                    size="small"
                    aria-label="Add"
                    className={classes.fab}
                >
                    <AddIcon />
                </Fab>
                <Drawer open={this.state.left} onClose={toggleDrawer('left', false)}>
                    <div tabIndex={0} role="button">
                        { Constructor }
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default connect(null, { createProduct })(withStyles(styles)(AddNewProduct));
