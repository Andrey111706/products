import axios from "axios";

let instance = axios.create({
    baseURL:'http://localhost:3030/',

})
export const getProductsRequest = () => {
    return instance.get(`products`)
}
export  const postRequestToServ = (product) => {
    return instance.post('products',{product})

}
