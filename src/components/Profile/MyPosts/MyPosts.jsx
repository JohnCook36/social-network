import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = (props) => {

    let postData = [
        {id: 1, message: 'Hi, how are you', likeCount:12 },
        {id: 2, message: 'It is good day', likeCount: 10}
    ]


    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>

                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Posts message={postData[0].message} likesCount={postData[0].likeCount}/>
                <Posts message={postData[1].message} likesCount={postData[1].likeCount}/>
            </div>
        </div>
    )
        ;
}

export default MyPosts;