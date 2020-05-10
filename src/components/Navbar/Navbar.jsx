import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const NavbarTopFriend = ({ friend: { avatar, name } }) => {
    return (
        <NavLink to={'/friends'}>
            <img src={avatar} alt={name} className={s.friendsComponent}/>
        </NavLink>);
}

const Navbar = ({ state: { friends }}) => {
    let friendsToDisplay = friends.slice(0, 3);
    let navbarTopFriends = friendsToDisplay.map(friend => <NavbarTopFriend friend={friend} key={friend.id}/>);

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Massages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={`${s.item} ${s.elements}`}>
                <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
            </div>
            <div className={s.friendsList}>
                {navbarTopFriends}
            </div>
        </nav>
    );
}

export default Navbar;
