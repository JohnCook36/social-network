import React from "react";

let store = {
    _state : {


        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 13},
                {id: 2, message: 'Hi', likesCount: 4},
                {id: 3, message: 'Yo', likesCount: 26},
                {id: 4, message: 'It is cool', likesCount: 1},
                {id: 5, message: 'Good day', likesCount: 7},
            ],
            newPostText: "Напиши что нибудь"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Valeriy', avatar: 'https://i.pravatar.cc/150'},
                {id: 2, name: 'Anastasiya', avatar: 'https://i.pravatar.cc/150'},
                {id: 3, name: 'Victor', avatar: 'https://i.pravatar.cc/150'},
                {id: 4, name: 'Lena', avatar: 'https://i.pravatar.cc/150'},
                {id: 5, name: 'Ivan', avatar: 'https://i.pravatar.cc/150'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Good job'},
                {id: 5, message: 'What are you doing'},
            ]
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Valeriy', avatar: 'https://i.pravatar.cc/150'},
                {id: 2, name: 'Anastasiya', avatar: 'https://i.pravatar.cc/150'},
                {id: 3, name: 'Victor', avatar: 'https://i.pravatar.cc/150'},
                {id: 4, name: 'Lena', avatar: 'https://i.pravatar.cc/150'},
                {id: 5, name: 'Ivan', avatar: 'https://i.pravatar.cc/150'},
            ],
        }
    },

    getState () {
    return this._state;
},
    _callSubcriber ()  {
        console.log('state changed');
    },

    addPost () {
        let newPost = {
            id: 6,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubcriber(this._state);
    },
    updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText;
        this._callSubcriber(this._state);
    },
    subscribe (observer) {
    this._callSubcriber = observer; // наблюдатель observer
    }
};

export default store;
window.state = store;

// store - OOP