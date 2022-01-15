import React from 'react';
import store from "./redux/redux_store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

let renderTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    )
}
renderTree(store.getState())
store.subscribe(() => {renderTree()})

