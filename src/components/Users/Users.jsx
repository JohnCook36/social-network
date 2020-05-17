import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    if (pages.length > 20){
        pages = [...pages.slice(0, 10), '...', ...pages.slice(pages.length - 10, pages.length)]
    }

    return <div>
        <div>
            {pages.map(p =>
                <span className={props.currentPage === p ? s.activePagePointer : s.pagePointer }
                    onClick={(e) => p !=='...' && props.onPageChanged(p)}
                    key={p}
                >
                    {p}
                </span>
            )}
        </div>

        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null
                        ? u.photos.small
                        : userPhoto}
                         className={s.usersPhoto}/>
                         </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={(e) => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={(e) => {
                            props.follow(u.id)
                        }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
        </div>)
        }
    </div>
}

export default Users;
