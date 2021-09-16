import {getProductsRequest, postRequestToServ} from "../API/api";
//CONST CASES

const GET_PRODUCTS_SUCCESS = 'GetProductsSuccess'
const GET_PRODUCTS_ERROR = 'GetProductsError'
const SORT_PRODUCTS = 'sortProducts'



let initState = {
    products: []
}
const ProductsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                products: action.payload
            };
        }

        case GET_PRODUCTS_ERROR: {
            console.log(action.payload)
            return {
                ...state,
                error: action.payload,
            };
        }
        case SORT_PRODUCTS: {

            return {
                ...state,
                products: action.sortedProducts,
            };
        }

        default:
            return state;
    }
}
export default ProductsReducer;

//AC

export const onGetProductsSuccess = (data) => {
    return {type: GET_PRODUCTS_SUCCESS, payload:data}
}
export const onGetProductsError = (error) => {
    return {type: GET_PRODUCTS_ERROR, payload:error}
}
export  const sortProducts = (array) => {
    return {type:SORT_PRODUCTS, sortedProducts:array
    }
}




//Thunks
export const PostRequest = (object)  => {
    postRequestToServ(object).then(() => {
    });
    GetProducts()
}



export const GetProducts = () => dispatch => {
    getProductsRequest().then((response) => {
        dispatch(onGetProductsSuccess(response.data));
    }).catch((error) => {
        dispatch(onGetProductsSuccess(error))
    });
}
