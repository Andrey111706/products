import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux_store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

let renderTree = () => {


    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App store={store}/>
                </BrowserRouter>

            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderTree(store.getState())
store.subscribe(() => {
    renderTree()
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
