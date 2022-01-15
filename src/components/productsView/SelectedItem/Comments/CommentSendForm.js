import React from 'react';
import {MaxLength} from "../../../../Utilities/Validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../FormControls/FormControls";

const MaxLength150 = MaxLength(150)

const CommentSendForm = (props) => {
const resetSendForm = (event)=>{
    event.preventDefault()
    props.reset()
}
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="text" placeholder={'Write, please!'}
                   validate={[MaxLength150]}/>
            <div>
                <button >Send</button>
                <button onClick={resetSendForm}>Reset</button>
            </div>
        </form>
    );
};

const CommentSendReduxForm = reduxForm({form: 'CommentSendMessageForm'})(CommentSendForm)
export default CommentSendReduxForm;




