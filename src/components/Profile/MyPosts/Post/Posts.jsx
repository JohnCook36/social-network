import React from 'react';
import s from './Posts.module.css';

export const RANDOM_AVA_URL = 'https://i.pravatar.cc/150';

const Posts = (props) => {
    return (
        <div className={s.item}>
            <img src= {RANDOM_AVA_URL}/>
            {props.message};
            <div>
                <span>Like </span>{props.likesCount}
            </div>
        </div>


    );
}

export default Posts;