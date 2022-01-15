import React from "react";
import {Field, reduxForm} from "redux-form";
import {MoreThenZero, RequireField} from "../../../Utilities/Validators";
import {Input, NumberArea} from "../../FormControls/FormControls";

let ProductAmountForm = props => {
    const cancelModal = (e) => {
        e.preventDefault()
        props.setActive(false)
    }
    return (
        <form onSubmit={props.handleSubmit}>
            <div>Name
                <Field component={Input} name="name" placeholder={'Name'}
                       validate={[RequireField]}/></div>
            <div>Count
                <Field component={NumberArea} name="count" placeholder={'Count'}
                       validate={[RequireField, MoreThenZero]}/></div>
            <div>Weight
                <Field component={NumberArea} name="weight" placeholder={'Weight'}
                       validate={[RequireField, MoreThenZero]}/></div>
            <div>Image URL
                <Field component={Input} name="imageUrl" placeholder={'imageUrl'}
                       validate={[RequireField, MoreThenZero]}/></div>
            <div>
                <button>Create</button>
                <button onClick={cancelModal}>Cancel</button>
            </div>
        </form>
    )
}
const ProductAmountReduxForm = reduxForm({form: 'ProductAmountForm'})(ProductAmountForm)
export default ProductAmountReduxForm