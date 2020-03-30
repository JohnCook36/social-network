import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message =(props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name='Valeryi' id='1'/>
                <DialogItem name='Anastasiya' id='2'/>
                <DialogItem name='Victor' id='3'/>
                <DialogItem name='Lena' id='4'/>
                <DialogItem name='Ivan' id='5'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you'/>
                <Message message='How are you'/>
                <Message message='YO'/>
                <Message message='YO'/>
            </div>
        </div>
    )

}

export default Dialogs;