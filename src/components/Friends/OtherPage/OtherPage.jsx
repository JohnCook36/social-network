import React from 'react';
import s from './OtherPage.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const OtherPage = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} />
        </div>

    );
};

export default Profile;