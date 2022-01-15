import React, {useEffect} from "react"
import {connect} from "react-redux"
import { addNewItem, deleteItemFromList, GetProducts } from "../../redux/ProductsReducer"
import Products from "./Products"

const ProductsContainer = function ({ products, addNewItem, deleteItemFromList,GetProducts }) {
    useEffect(() => {
        if (products.length === 0) GetProducts()
    }, [products,GetProducts])
    if (products.length === 0) return <div>Wait</div>

    return (
        <Products
            currentList={products}
            addNewItem={addNewItem}
            products={products}
            deleteItemFromList={deleteItemFromList}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}
export default connect(mapStateToProps, {GetProducts, addNewItem, deleteItemFromList})(ProductsContainer);