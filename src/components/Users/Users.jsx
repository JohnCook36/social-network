import React from "react";
import s from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://i.pravatar.cc/150',
                    followed: false, fullName: 'Valeriy',
                    status: 'I am a boss',
                    location: {city: 'Russia', country: 'Voronezh'}
                },
                {
                    id: 2,
                    photoUrl: 'https://i.pravatar.cc/150',
                    followed: true, fullName: 'Ivan',
                    status: 'I am a boss too',
                    location: {city: 'Russia', country: 'Moscow'}
                },
                {
                    id: 3,
                    photoUrl: 'https://i.pravatar.cc/150',
                    followed: false,
                    fullName: 'Petr',
                    status: 'I am a boss too',
                    location: {city: 'Russia', country: 'Voronezh'}
                }
            ]
        )
    }

return <div>
    {
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={s.usersPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unFollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}

                </div>
            </span>
            <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
        </div>)
    }
</div>
}

export default Users;