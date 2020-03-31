import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = () =>{
    let posts = [
        {id: 1, message: 'Hi, how are you', likesCount: 13},
        {id: 2, message: 'Hi', likesCount: 4},
        {id: 3, message: 'Yo', likesCount: 26},
        {id: 4, message: 'It is cool', likesCount: 1},
        {id: 5, message: 'Good day', likesCount: 7},
    ];


    let postsElements =
        posts.map( p => <Posts message={p.message} likesCount={p.likesCount}/>)

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