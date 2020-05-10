
let initialState = {
    friends: [
        {id: 1, name: 'Valeriy', avatar: 'https://i.pravatar.cc/150'},
        {id: 2, name: 'Anastasiya', avatar: 'https://i.pravatar.cc/150'},
        {id: 3, name: 'Victor', avatar: 'https://i.pravatar.cc/150'},
        {id: 4, name: 'Lena', avatar: 'https://i.pravatar.cc/150'},
        {id: 5, name: 'Ivan', avatar: 'https://i.pravatar.cc/150'},
    ],
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;