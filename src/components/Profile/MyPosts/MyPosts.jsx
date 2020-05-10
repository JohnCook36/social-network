import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount} key={p.id}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
         props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>

                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

};

export default MyPosts;


// let addPost= () => {
//     let text = newPostElement.current.value;
//     props.addPost(text);
//     newPostElement.current.value = '';
// };
//
// let onPostChange = () => {
//     let text = newPostElement.current.value;
//     props.updateNewPostText(text);
// };
//
// return (
//     <div className={s.postsBlock}>
//         <h3>My Post</h3>
//         <div>
//             <div>
//                     <textarea onPostChange={onPostChange} ref={newPostElement}
//                               value={props.newPostText}/>
//             </div>
//
//             <div>
//                 <button onClick={ addPost }>Add post</button>
//             </div>