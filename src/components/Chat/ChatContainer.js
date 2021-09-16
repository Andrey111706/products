import Chat from "./Chat";
import {connect} from "react-redux";
import {AddMessage} from "../../Redux/chatPageReducer";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        chatUsersData: state.chatPage.chatUsersData,
        chatMessageData: state.chatPage.chatMessageData,
        textOnchangeValue: state.chatPage.textValue,

    }
}

export default compose(connect(mapStateToProps, {AddMessage}))(Chat)
