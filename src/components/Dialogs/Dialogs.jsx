import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d =>  <DialogItem avatar={d.avatar}  name={d.name} id={d.id}/> );

    let meassgesElements = props.state.messages.map (m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                { dialogsElements }

            </div>
            <div className={s.messages}>
                { meassgesElements }
            </div>
        </div>
    )

};

export default Dialogs;