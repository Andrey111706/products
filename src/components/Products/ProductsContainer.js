import React, {useEffect} from "react";
import Products from "./Products";
import {connect} from "react-redux";
import {GetProducts, PostRequest, sortProducts} from "../../Redux/ProductsReducer";

const ProductsContainer = function (props) {
    useEffect(() => {
        props.GetProducts();
    },[]);

    return (
        <div>

            <Products products={props.products} sortProducts={props.sortProducts} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps,
{
    GetProducts,sortProducts,PostRequest
}
)(ProductsContainer);