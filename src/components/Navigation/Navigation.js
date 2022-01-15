import React from "react";
import s from "./Navigation.module.css"
import {NavLink} from "react-router-dom";

const Navigation = function () {
    return (
        <nav className={`${s.navigation}  navigation navbar-nav`}>
            <div><NavLink to='/products' activeClassName={s.active}>Products list view</NavLink></div>
            <div><NavLink to='/view' activeClassName={s.active}>Product view</NavLink></div>
        </nav>
    )
}
export default Navigation;