import s from './products.module.css'
import {useState} from "react";
import {PostRequest} from "../../Redux/ProductsReducer";

const Products = function (props) {
    let sortetproducts = []
    let [SortTypeAmount, SetSortAmount] = useState(true)
    let [SortTypeName, SetSortName] = useState(true)
    let sortAmount = () => {
        if (SortTypeAmount) {
            SetSortAmount(false);
            sortetproducts = (props.products.sort(function (a, b) {
                return a.count - b.count
            })).concat()
            props.sortProducts(sortetproducts)

        } else {
            SetSortAmount(true)
            sortetproducts = (props.products.sort(function (a, b) {
                return b.count - a.count
            })).concat()
            props.sortProducts(sortetproducts)
        }
    };
    let sortName = () => {
        if (SortTypeName) {
            SetSortName(false);
            sortetproducts = (props.products.sort(function (a, b) {
                if (a.name > b.name ) {
                    return 1
                } else return -1
            })).concat()
            props.sortProducts(sortetproducts)

        } else {
            SetSortName(true)
            sortetproducts = (props.products.sort(function (a, b) {
                if (a.name  < b.name ) {
                    return 1
                } else return -1
            })).concat()
            props.sortProducts(sortetproducts)
        }
    };
    let productCreator = () => {
        PostRequest({
            "id": 7,
            "imageUrl": "https://www.motherjones.com/wp-content/uploads/2019/12/Getty121719.jpg?w=990",
            "name": "Elefant",
            "count": 1,
            "size": {
                "width": 200,
                "height": 200
            },
            "weight": "5t",
            "comments": ['wooow']
        })
    }


    return (
        <div className={`container-fluid ${s.productsStore}`}>
            <div className={s.sorter}>
                Сортування по кількості
                <button onClick={sortAmount}>Сортувати</button>
                Сортування по імені
                <button onClick={sortName}>Сортувати</button>
                <button onClick={productCreator}>Send to serv</button>
            </div>
            {props.products.map(product => {
                if(!product) return undefined;
                return (
                    <div key={product.id} className={s.productHolder}>
                        <img className={s.productImageHolder} alt='image' src={product.imageUrl}/>
                        <div> Назва: {product.name}</div>
                        <div> Наявна кількість: {product.count}</div>
                        <div> Вага: {product.weight}</div>
                        <button>Замовити</button>
                    </div>


                )
            })}
        </div>
    )
};

export default Products;