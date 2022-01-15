import React from 'react';
import s from './modal.module.css'
import ProductAmountReduxForm from "../../Products/newItemModal/productAmountForm";
const Modal = ({active,setActive,addNewItem,itemsInArray}) => {
    function addNewProduct(values){
        addNewItem({...values,itemsInArray})
    }
    return (
        <div className={active? `${s.modal} ${s.active} `: s.modal} onClick={()=> setActive(false)}>
            <div className={s.content} onClick={event => event.stopPropagation()}>
                <div>Create new item</div>
                <ProductAmountReduxForm onSubmit={addNewProduct} setActive={setActive}/>
            </div>
            
        </div>
    );
};



export default Modal;