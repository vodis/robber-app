import * as React from 'react';
import { createProduct } from '../actions/marketStoreActions';
import { connect } from 'react-redux';

type AddNewProductType = {
    isOpen: boolean,
    product: object,
}

interface AddNewProductPropsType {
    createProduct: any
}

class AddNewProduct extends React.Component<AddNewProductPropsType, AddNewProductType> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
            product: {
                Name: "",
                Price: 0,
                Size: 0,
                Image: ""
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

        const product = {
            Name: this.state.product["Name"],
            Price: this.state.product["Price"],
            Size: this.state.product["Size"],
            Image: this.state.product["Image"]
        };

        this.props.createProduct(product);
    }

    render() {
        const Constructor = (
            <form onSubmit={this.confirmForm}>
                <label>Name</label>
                <input type="text"
                       name="Name"
                       onChange={this.onChange}
                       placeholder="Name"
                />
                <label>Price</label>
                <input type="text"
                       name="Price"
                       onChange={this.onChange}
                       placeholder="Price"
                />
                <label>Size</label>
                <input type="text"
                       name="Size"
                       onChange={this.onChange}
                       placeholder="Size"
                />
                <label>Image</label>
                <input type="text"
                       name="Image"
                       onChange={this.onChange}
                       placeholder="https://"
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