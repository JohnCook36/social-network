import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reduser";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {getUsers} from "../../api/api";





class UserContainer extends React.Component {
    componentDidMount() {

        const {toggleIsFetching, currentPage, pageSize, setUsers, totalCount, setTotalUsersCount} = this.props

        toggleIsFetching(true);

        getUsers(currentPage, pageSize)
            .then(({data: {items, totalCount} }) => {
            setTotalUsersCount(totalCount);
            setUsers(items)
        }).finally(() => {
            console.log('totalCount',totalCount)
            toggleIsFetching(false);

        })
    }

    onPageChanged = (pageNumber) => {

        const {setCurrentPage, toggleIsFetching, pageSize, setUsers } = this.props;

        setCurrentPage(pageNumber);
        toggleIsFetching(true);
        getUsers(pageNumber, pageSize)
        .then(({data: {items} }) => {

                setUsers(items);
            }). finally (() => {
            toggleIsFetching(false);
        })
    }

    render() {

        const {isFetching, totalUsersCount, pageSize, currentPage, users, follow, unfollow, toggleFollowingProgress, followingInProgress} = this.props

        return <>
            {isFetching ? <Preloader/> : null}
            <Users totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={this.onPageChanged}
                   users={users}
                   follow={follow}
                   unfollow={unfollow}
                   toggleFollowingProgress={toggleFollowingProgress}
                   followingInProgress={followingInProgress}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const ConnectedUsersContainer = connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})(UserContainer);

export default (ConnectedUsersContainer);
