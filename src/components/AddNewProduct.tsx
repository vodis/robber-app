import * as React from 'react';
import { createProduct } from '../actions/marketStoreActions';
import { connect } from 'react-redux';
import {any} from "prop-types";

type AddNewProductType = {
    isOpen: boolean,
    product: object,
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
            }
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
        this.props.createProduct(this.state.product);
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
        const Constructor = (
            <form onSubmit={this.confirmForm}>
                <label>Name</label>
                <input type="text"
                       name="Name"
                       onChange={this.onChange}
                       placeholder="Name"
                       ref="name"
                />
                <label>Price</label>
                <input type="text"
                       name="Price"
                       onChange={this.onChange}
                       placeholder="Price"
                       ref="price"
                />
                <label>Size</label>
                <input type="text"
                       name="Size"
                       onChange={this.onChange}
                       placeholder="Size"
                       ref="size"
                />
                <label>Image</label>
                <input type="text"
                       name="Image"
                       onChange={this.onChange}
                       placeholder="https://"
                       ref="image"
                />
                <button type="submit">Add</button>
            </form>
        );

        return (
            <div>
                <button onClick={this.openForm}>{ !this.state.isOpen ? 'Add new product' : 'Close the form'}</button>
                { !!this.state.isOpen ? Constructor : "" }
            </div>
        );
    }
}

export default connect(null, { createProduct })(AddNewProduct);