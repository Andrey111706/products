import s from "./FormControls.module.css"

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <textarea   {...input} {...props}/>
            </div>
            <div className={s.errorContainer}>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )}
export const NumberArea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <input type={'number'}{...input} {...props}/>
            </div>
            <div className={s.errorContainer}>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )}
export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <input   {...input} {...props}/>
            </div>
            <div className={s.errorContainer}>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )}