import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id}/>);

    let meassgesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newMessagesElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = () => {
        let text = newMessagesElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                {dialogsElements}

            </div>
            <div className={s.messages}>
                {meassgesElements}

                <div>
                    <textarea onChange={onMessageChange} ref={newMessagesElement}
                              value={props.newMessageText}/>
                </div>

                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )

};

export default Dialogs;