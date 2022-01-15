import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input, NumberArea} from "../../FormControls/FormControls";
import {MoreThenZero, RequireField} from "../../../Utilities/Validators";
import s from "./SelectedItemInfo.module.css";

const SelectedItemEditForm = ({handleSubmit,setEditMode}) => {
    return (
        <form onSubmit={handleSubmit} className={s.ItemInfo}>
            <div>Name
                <Field component={Input} name="name" placeholder={'Name'}
                       validate={[RequireField]}/>
            </div>
            <div>Count
                <Field component={NumberArea} name="count" placeholder={'Count'}
                       validate={[RequireField, MoreThenZero]}/>
            </div>
            <div>Weight
                <Field component={NumberArea} name="weight" placeholder={'Weight'}
                       validate={[RequireField, MoreThenZero]}/>
            </div>
            <div>
                <button>Change</button>
                <button onClick={()=> setEditMode(false)}>Close</button>
            </div>
        </form>
    );
};

const SelectedItemEditReduxForm = reduxForm({form: 'SelectedItemEditForm'})(SelectedItemEditForm)
export default SelectedItemEditReduxForm;
