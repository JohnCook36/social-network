const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://i.pravatar.cc/150', followed: false, fullName: 'Valeriy',
            status: 'I am a boss', location: {city: 'Russia', country: 'Voronezh'} },
        {id: 2, photoUrl: 'https://i.pravatar.cc/150', followed: true, fullName: 'Ivan',
            status: 'I am a boss too', location: {city: 'Russia', country: 'Moscow'} },
        {id: 3, photoUrl: 'https://i.pravatar.cc/150', followed: false, fullName: 'Petr',
            status: 'I am a boss too', location: {city: 'Russia', country: 'Voronezh'} }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return { ...state, users: [ ...state.users, ...action.users]}
        }
        default:
            return state;
    }

};

export const followAC = (userId) => ({ type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (userId) => ({type: SET_USERS, userId});

export default usersReducer;
