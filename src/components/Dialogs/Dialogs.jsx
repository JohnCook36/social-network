import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Valeriy'},
        {id: 2, name: 'Anastasiya'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Lena'},
        {id: 5, name: 'Ivan'}
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Good job'},
        {id: 5, message: 'Whay are you doing'}
    ];

    let dialogsElements = dialogs.map(d =>  <DialogItem name={d.name} id={d.id}/> );
    let meaasgesElements = messages.map (m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                { dialogsElements }

            </div>
            <div className={s.messages}>
                { meaasgesElements }
            </div>
        </div>
    )

};

export default Dialogs;