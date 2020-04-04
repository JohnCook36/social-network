import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
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
            <div className={s.friendsItem}>
                <a href={'/friends'} className={s.friendsComponent}>
                </a>
                <a href={'/friends'}  className={s.friendsComponent}>
                </a>
                <a href={'/friends'}  className={s.friendsComponent}>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;