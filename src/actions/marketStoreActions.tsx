import { FETCH_PRODUCTS, NEW_PRODUCT } from "./types";
import axios from "axios";

export const fetchProducts = () => (dispatch: any) => {
        axios.get('/store.json')
            .then(res => res.data)
            .then(products => dispatch({
                    type: FETCH_PRODUCTS,
                    payload: products.products
                })
            );
};

export const createProduct = (productData: any) => (dispatch: any) => {
    axios.get('/store.json')
        .then(res => res.data)
        .then(products => dispatch({
                type: NEW_PRODUCT,
                payload: productData
            })
        );
};

// export const createProduct = (productData: any) => (dispatch: any) => {
//     axios.post('/store.json',
//         JSON.stringify(productData),
//         {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => response)
//         .then((product: object) => dispatch({
//             type: FETCH_PRODUCTS,
//             payload: product
//         }))
//         .catch(function (error) {
//             console.log(error.response);
//         });
// };