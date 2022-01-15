export const RequireField = (value) => {
    if (value) return null
    return "Required Field!"
}
export const MaxLength = (maxLength) => (value) => {
    if( value && value.length> maxLength) return `To much Symbols! Use less ${maxLength} Symbols `
    return  null
}
export const MoreThenZero = (value) => {
    if (value && value< 1) return `Choose more then 0 `
    return null
}