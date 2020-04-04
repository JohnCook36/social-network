import React from "react";

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 13},
            {id: 2, message: 'Hi', likesCount: 4},
            {id: 3, message: 'Yo', likesCount: 26},
            {id: 4, message: 'It is cool', likesCount: 1},
            {id: 5, message: 'Good day', likesCount: 7},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Valeriy', avatar: 'https://i.pravatar.cc/150'},
            {id: 2, name: 'Anastasiya', avatar: 'https://i.pravatar.cc/150'},
            {id: 3, name: 'Victor', avatar: 'https://i.pravatar.cc/150'},
            {id: 4, name: 'Lena', avatar: 'https://i.pravatar.cc/150'},
            {id: 5, name: 'Ivan', avatar: 'https://i.pravatar.cc/150'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Good job'},
            {id: 5, message: 'Whay are you doing'}
        ]
    },
    sidebar:{
        friends: [
            {id: 1, name: 'Valeriy', avatar: 'https://i.pravatar.cc/150'},
            {id: 2, name: 'Anastasiya', avatar: 'https://i.pravatar.cc/150'},
            {id: 3, name: 'Victor', avatar: 'https://i.pravatar.cc/150'},
            {id: 4, name: 'Lena', avatar: 'https://i.pravatar.cc/150'},
            {id: 5, name: 'Ivan', avatar: 'https://i.pravatar.cc/150'}
        ],
    }
};

export default state;