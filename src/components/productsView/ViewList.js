import React, {useEffect, useState} from 'react'
import style from "./../Products/products.module.css"
import {NavLink} from "react-router-dom"

const ViewList = (props) => {
    const [currentList, setList] = useState([props.products])
    useEffect(() => {
        setList((props.products))
    }, [props.products])

    return (
        <div>
            <div>About</div>
            <div className={style.productsStore}>
                {currentList.map(product => {
                    return (
                        <div key={product.id + 'listview'} className={style.productHolder}>
                            <NavLink to={`/view/${product.id}`}>
                                <div>
                                    <img alt='' src={product.imageUrl}/>
                                </div>
                                <div>{product.name}</div>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ViewList