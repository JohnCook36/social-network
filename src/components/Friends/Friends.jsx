import React from "react";
import s from './Friends.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {

    let friendsElements = props.state.dialogs.map (f => <FriendsItem avatar={f.avatar}  name={f.name} id={f.id}/>);



    return (
        <div className={s.friends}>
            { friendsElements }
        </div>
    );
};



export default Friends;