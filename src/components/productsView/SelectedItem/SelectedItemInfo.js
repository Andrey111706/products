import React, {useState} from 'react';
import s from './SelectedItemInfo.module.css'
import SelectedItemEditReduxForm from "./SelectedItemEditForm";
import Comment from "./Comments/Comment";
import CommentSendReduxForm from "./Comments/CommentSendForm";
import ItemInformationHolder from "./ItemInformationHolder";

const SelectedItemInfo = ({name, count, weight, id, imageUrl, comments, deleteComment, ChangeInfo,
                           ClearSendMessageForm, addComment
                        }) => {
    const [editMode, setEditMode] = useState(false)
    let deleteMessage = (messageID) => deleteComment({name, id ,count, weight, imageUrl, comments}, messageID)

    const changeProduct = (values) => {
        ChangeInfo(values)
        setEditMode(false)
    }

    const createNewMessage = (values) => {
        addComment({name, id ,count, weight, imageUrl, comments}, values)
        ClearSendMessageForm()
    }

    return (
        <div className={s.ItemHolder}>
            <div className={s.imageHolder}>
                <img src={imageUrl} alt=""/>
            </div>
            {editMode ? <SelectedItemEditReduxForm onSubmit={changeProduct} setEditMode={setEditMode}
                                                   initialValues={{
                                                      name: name,
                                                      count: count,
                                                      weight: weight,
                                                      id: id,
                                                      imageUrl: imageUrl,
                                                      comments: comments}}
                         />
                       : <ItemInformationHolder name={name}
                                               count={count}
                                               setEditMode={setEditMode}
                                               weight={weight}
                         />
            }
            <div>{comments.map((el) => {
                return <Comment key={el.id} id={el.id} description={el.description} date={el.date}
                                deleteMessage={deleteMessage}/>
            })}</div>
            <div className={s.messageFormHandler}><CommentSendReduxForm onSubmit={createNewMessage}/></div>
        </div>
    )
}

export default SelectedItemInfo;