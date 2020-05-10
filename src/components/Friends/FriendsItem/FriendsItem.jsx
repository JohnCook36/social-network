import React from "react";
import s from './FriendsItem.module.css';
import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {

    let path = '/friends/' + props.id;

    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img className={s.img} src = {props.avatar} alt={props.name} />
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
};

export default FriendsItem;
