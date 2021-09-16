import {Field, reduxForm} from "redux-form";
import {NumberArea} from "../../Utilities/FormControls/FormControls";
import {MoreThenZero, RequireField} from "../../Utilities/Validators";
import React from "react";


let ProductAmountForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={NumberArea} name="number" placeholder={'Кількість'}
                   validate={[RequireField, MoreThenZero]}/>
            <div>
                <button>Refresh</button>
            </div>
        </form>
    )
}
const ProductAmountReduxForm = reduxForm({form: 'ProductAmountForm'})(ProductAmountForm)
export default ProductAmountReduxForm;