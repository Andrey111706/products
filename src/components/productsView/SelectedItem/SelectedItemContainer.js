import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {Redirect, withRouter} from "react-router-dom";
import SelectedItemInfo from "./SelectedItemInfo";
import {addComment, ChangeInfo, ClearSendMessageForm, deleteComment} from "../../../redux/ProductsReducer";


const SelectedItemContainer = ({products, match, ChangeInfo, deleteComment, addComment , ClearSendMessageForm }) => {
    if (products.length === 0) {
        return <Redirect to={'/view'}/>
    }

    const currentItem = products.find((el) => {
        return el.id === +match.params.id
    })

    return (
        <div>
            <SelectedItemInfo comments={currentItem.comments} count={currentItem.count}
                              id={currentItem.id} imageUrl={currentItem.imageUrl} name={currentItem.name}
                              weight={parseInt(currentItem.weight, 10)} ChangeInfo={ChangeInfo}
                              deleteComment={deleteComment} addComment={addComment}
                              ClearSendMessageForm={ClearSendMessageForm}
            />
        </div>
    );
};

const mapStateToProps = ({products}) => ({
    products: products.products
})

export default compose(withRouter, connect(mapStateToProps, {
    ChangeInfo,
    deleteComment,
    addComment,
    ClearSendMessageForm
}))(SelectedItemContainer);