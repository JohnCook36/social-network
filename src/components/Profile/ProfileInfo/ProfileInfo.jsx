import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className="headerImage" src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"></img>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src='https://i.pravatar.cc/150'></img>
                avatar + discription
            </div>
        </div>

    );
}

export default ProfileInfo;