import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import ProductsReducer from "./ProductsReducer";

let reducers = combineReducers({
    products: ProductsReducer,
    form: formReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
));
window.store = store
export default store;
