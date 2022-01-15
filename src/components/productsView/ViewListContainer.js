import React, {useEffect} from "react";
import {connect} from "react-redux";
import {GetProducts} from "../../redux/ProductsReducer";
import ViewList from "./ViewList";

const ViewListContainer = function ({ products, GetProducts }) {
    useEffect(() => {
        if (products.length === 0) GetProducts()
    }, [products,GetProducts])
    if (products.length === 0) return <div>Wait</div>

    return (
        <div>
            <ViewList products={products}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}
export default connect(mapStateToProps, {GetProducts})(ViewListContainer);