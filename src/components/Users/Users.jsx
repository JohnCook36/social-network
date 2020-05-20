import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {API_KEY, FOLLOW_URL} from "../../constants";

let Users = (props) => {

    const {totalUsersCount,pageSize} = props;

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    if (pages.length > 20) {
        pages = [...pages.slice(0, 10), '...', ...pages.slice(pages.length - 10, pages.length)]
    }

    const handleUnfollow = (u) => {
        props.toggleFollowingProgress(true, u.id)
        axios.delete(`${FOLLOW_URL}/${u.id}` , {
            withCredentials: true,
            headers:{
                "API-KEY": API_KEY,
            }
        })
            .then(response => {
                if (response.data.resultCode == 0)
                    props.unfollow(u.id);
                props.toggleFollowingProgress(false, u.id)
            })
    }

    const handleFollow = (u) => {
        props.toggleFollowingProgress(true, u.id)
        axios.post(`${FOLLOW_URL}/${u.id}`,{
        }, {
            withCredentials: true,
            headers:{
                "API-KEY": API_KEY,
            }
        })
            .then(response => {
                if (response.data.resultCode == 0)
                    props.follow(u.id);
                props.toggleFollowingProgress(false, u.id)
            })
    }
const { users ,currentPage, onPageChanged, followingInProgress } = props

    return <div>
        <div>
            {pages.map(p =>
                <span className={currentPage === p ? s.activePagePointer : s.pagePointer}
                      onClick={(e) => p !== '...' && onPageChanged(p)}
                      key={p}
                >
                    {p}
                </span>
            )}
        </div>

        {users.map(u => <div key={u.id}>
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
                        ? <button disabled={followingInProgress.some (id => id === u.id)} onClick={() => handleUnfollow(u)}>Unfollow</button>
                        : <button disabled={followingInProgress.some (id => id === u.id)} onClick={() => handleFollow(u)}>Follow</button>
                    }
                </div>
            </span>
            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>

                </span>
        </div>)
        }
    </div>
}

export default Users;
