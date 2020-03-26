import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {
  return (
    <div className={s.item}>
      <img src='https://i.pravatar.cc/150'></img>
           {props.message}
      <div>
        <span>Like </span>{props.likesCount}
      </div>
    </div>

    
  );
}

export default Posts;