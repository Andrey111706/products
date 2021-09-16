import React from "react";
import s from "./Navigation.module.css"
import {NavLink} from "react-router-dom";

const Navigation = function () {
    return (
        <nav className={`${s.navigation}  navigation navbar-nav`}>
            <NavLink to='/products' activeClassName={s.active}>Products</NavLink>
        </nav>
    )
}
export default Navigation;