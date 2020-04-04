import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = (props) => {

    let friendsComponent = props.state.friends.map(f => <friendsComponent friends={f.friends}/>);

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
                <NavLink to={'/friends'} className={s.friendsComponent}>
                    { friendsComponent }
                </NavLink>
                <NavLink to={'/friends'}  className={s.friendsComponent}>
                    { friendsComponent }
                </NavLink>
                <NavLink to={'/friends'}  className={s.friendsComponent}>
                    { friendsComponent }
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;