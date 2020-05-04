const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {


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
            ],

        },
        newMessageText: "Видно?",
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
    _callSubcriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubcriber = observer; // наблюдатель observer
    },

    dispatch(action) { // ( type: 'ADD-POST')
        if (action.type === ADD_POST) {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubcriber(this._state);
        } else
            if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubcriber(this._state);
        } else
            if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.newMessageText,
            };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.newMessageText = '';
        this._callSubcriber(this._state);
        } else
            if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.newMessageText = action.newMessage;
            this._callSubcriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

export default store;
window.state = store;

// store - OOP