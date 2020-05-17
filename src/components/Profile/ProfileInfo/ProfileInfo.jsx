import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img className="headerImage" src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src={props.profile.photos.small !=null ? props.profile.photos.small : userPhoto}/>
            </div>
        </div>

    );
}

export default ProfileInfo;