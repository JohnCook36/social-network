import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users-reduser";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));;
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);