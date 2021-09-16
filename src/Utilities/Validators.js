export const RequireField = (value) => {
    if (value) return undefined;
    return "Required Field!";
}
export const MaxLength = (maxLength) => (value) => {
    if( value && value.length> maxLength) return `To much Symbols! Use less ${maxLength} Symbols `;
    return  undefined
}
export const MoreThenZero = (value) => {
    if (value && value< 1) return `Choose more then 0 `;
    return undefined
}