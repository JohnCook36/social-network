import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = (props) => {
  return (
    <div>
      My Post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Posts message='Hi, how are you?' likesCount='0' />
        <Posts message="It's my first post" likesCount='23' />
      </div>
    </div>
  );
}

export default MyPosts;