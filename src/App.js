import React from "react";
import {Route, withRouter} from "react-router-dom";
import {compose} from "redux";

import Navigation from "./components/Navigation/Navigation";
import ProductsContainer from "./components/Products/ProductsContainer";
import ViewListContainer from "./components/productsView/ViewListContainer";
import ChoosenItemInfoContainer from "./components/productsView/SelectedItem/SelectedItemContainer";

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navigation/>
                <div className='app-content'>
                    <Route path={['/products']}
                           render={() => <ProductsContainer/>}/>
                    <Route exact path={['/view']}
                           render={() => <ViewListContainer/>}/>
                    <Route path={['/view/:id']}
                           render={() => <ChoosenItemInfoContainer/>}/>
                </div>
            </div>
        );
    }
}
export default compose(withRouter)(App);
