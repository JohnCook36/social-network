import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <img className="headerImage"
                 src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"></img>
            <div>
                <img src='https://i.pravatar.cc/150'></img>
                avatar + discription
            </div>
            <MyPosts/>
        </div>

    );
}

export default Profile;