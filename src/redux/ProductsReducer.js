import {getProductsRequest} from "../api/api"
import {reset} from "redux-form"

//CONST CASES
const GET_PRODUCTS_SUCCESS = 'GetProductsSuccess'
const ADD_NEW_ITEM_TO_THE_LIST = 'AddNewItemToList'
const DELETE_ITEM_FROM_STORE = 'DeleteItemFromStore'
const DELETE_COMMENT_FROM_ITEM = 'DeleteCommentFromItem'

let initState = {
    products: []
}

const ProductsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                products: [...new Set([...state.products, ...action.payload])]
            }
        }
        case ADD_NEW_ITEM_TO_THE_LIST: {
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        }
        case DELETE_ITEM_FROM_STORE: {
            return {
                ...state,
                products: [...state.products.filter((el) => {
                    return el.id !== action.payload
                })]
            }
        }
        case DELETE_COMMENT_FROM_ITEM: {
            return {
                ...state,
            }
        }


        default:
            return state;
    }
}
export default ProductsReducer;

//AC
export const onGetProductsSuccess = (data) => {
    return {type: GET_PRODUCTS_SUCCESS, payload: data}
}
export const deleteItemFromList = (id) => {
    return {type: DELETE_ITEM_FROM_STORE, payload: id}
}
export const addNewItem = data => {
    const newItem = {
        id: data.itemsInArray + 20 || data.id,
        imageUrl: data.imageUrl,
        name: data.name,
        count: data.count,
        size: {
            width: 200, height: 200
        },
        weight: data.weight + 'g',
        comments: data.comments || []

    }

    return {type: ADD_NEW_ITEM_TO_THE_LIST, payload: newItem}
}

//Thunks
export const ChangeInfo = data => dispatch => {
    dispatch(deleteItemFromList(data.id))
    dispatch(addNewItem(data))
}
export const deleteComment = (data, commentID) => dispatch => {
    const result = {
        ...data,
        comments: data.comments.filter((el) => {
            return el.id !== commentID
        })
    }
    dispatch(deleteItemFromList(data.id))
    dispatch(addNewItem(result))
}
export const addComment = (data, message) => dispatch => {
    const newComment = {
        id: data.comments.length + 1,
        productId: data.id,
        description: message.text,
        date: "22.01.2021",
    }
    data.comments.push(newComment)
    dispatch(deleteItemFromList(data.id))
    dispatch(addNewItem(data))

}
export const GetProducts = () => dispatch => {
    getProductsRequest().then((response) => {
        dispatch(onGetProductsSuccess(response.data))
    })
}
export const ClearSendMessageForm = () => dispatch => {
    dispatch(reset('CommentSendMessageForm'))
}
