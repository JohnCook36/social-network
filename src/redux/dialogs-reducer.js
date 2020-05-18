
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
            ...state,
            newMessageBody: action.body
        };
    case SEND_MESSAGE:
        let body = state.newMessageBody;
        return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages,{id: 6, message: body} ]
        };
    default:
        return state;
    };
};

export const sendMessage = () => ({type: SEND_MESSAGE});
export const updateNewMessageBody = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default dialogsReducer;


//
// ADD_MESSAGE:
//     let newMessage = {
//         id: 6,
//         message: state.newMessageText,
//     };
// state.dialogsPage.newMessageText;
// state.dialogsPage.messages.push(newMessage);
// state.newMessageText = '';
// return state;
