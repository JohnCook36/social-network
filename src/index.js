import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you', likesCount: 13},
    {id: 2, message: 'Hi', likesCount: 4},
    {id: 3, message: 'Yo', likesCount: 26},
    {id: 4, message: 'It is cool', likesCount: 1},
    {id: 5, message: 'Good day', likesCount: 7},
];

let dialogs = [
    {id: 1, name: 'Valeriy'},
    {id: 2, name: 'Anastasiya'},
    {id: 3, name: 'Victor'},
    {id: 4, name: 'Lena'},
    {id: 5, name: 'Ivan'}
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Good job'},
    {id: 5, message: 'Whay are you doing'}
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
