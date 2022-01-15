import style from './products.module.css'
import React, {useEffect, useState} from "react"
import Modal from "../baseComponents/Modal/modal"

const Products = function ({ products, deleteItemFromList, addNewItem }) {
    const [currentList, setList] = useState([])
    const [modal, setModal] = useState(false)
    useEffect(() => {
        setList((products))
    }, [products])

    const sorter = (byWhat) => {
        const sortedList = [...currentList]
        switch (byWhat) {
            case 'weight':
                sortedList.sort((a, b) => parseInt(b.weight) - parseInt(a.weight))
                break
            case 'count':
                sortedList.sort((a, b) => b.count - a.count)
                break
            case 'name':
                sortedList.sort((a, b) => {
                    if (a.name > b.name) return 1
                    if (a.name < b.name) return -1
                    return 0
                })
                break;
            default:
                break;
        }
        setList(sortedList)
    }

    function handleDelete(productId) {
        const result = window.confirm("Do You realy want to delete product?")
        if (result) deleteItemFromList(productId)
    }

    return (
        <div>
            <Modal active={modal} setActive={setModal} addNewItem={addNewItem}
                   itemsInArray={products.length}/>
            <div className={style.sorter}>
                Sort By
                <select
                    defaultValue="default"
                    className={style.selector}
                    onChange={event => sorter(event.target.value)}
                >
                    <option value="default" disabled>Sort By</option>
                    <option value="weight">Weight</option>
                    <option value="name">Name</option>
                    <option value="count">Count</option>
                </select>
            </div>
            <button className={style.createNewButton} onClick={() => setModal(true)}>Create new</button>
            <div className={style.productsStore}>
                {currentList.map(product => (
                        <div key={product.id} className={style.productHolder}>
                            <div className={style.deleteButton} onClick={() => handleDelete(product.id)}>X</div>
                            <img alt="" src={product.imageUrl}/>
                            <div> Name: {product.name}</div>
                            <div> Count: {product.count}</div>
                            <div> Weight: {product.weight}</div>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default Products;