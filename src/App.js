import './App.css';
import {Route, withRouter} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import React from "react";
import {compose} from "redux";
import ProductsContainer from "./components/Products/ProductsContainer";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navigation/>
                <div className='app-content'>
                    <Route path={['/products']}
                           render={() => <ProductsContainer/>}/>
                    <Route path={['[/product/']}
                           render={() => <ProductsContainer/>}/>
                </div>

            </div>
        );

    }
}


export default compose(withRouter)(App);
