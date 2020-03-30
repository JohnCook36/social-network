import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'Hi, how are you', likeCount:12 },
        {id: 2, message: 'It is good day', likeCount: 10},
        {id: 2, message: ' good ', likeCount: 10},
        {id: 2, message: 'Hi', likeCount: 10}
    ]

    let postsElements =
        posts.map( p => <Posts message={p.message} likesCount={p.likeCount}/>)

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
                { postsElements }
            </div>
        </div>
    )
        ;
}

export default MyPosts;