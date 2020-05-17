import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {API_URL} from "../Users/UsersContainer";
import {withRouter} from "react-router-dom";

export const PROFILE_URL = `${API_URL}/profile/`;


class ProfileContainer extends React.Component {

    componentDidMount() {
        const {match, setUserProfile } = this.props;

        let userId = match.params.userId;
        if(!userId) {
            userId = 8161;
        }

        axios.get(PROFILE_URL + userId )
            .then(response => {
                setUserProfile(response.data);
            });
    }

    render() {
        const {profile } = this.props
            return (
                <Profile {...this.props} profile={profile} />

            );
        }
    };

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);



export default connect (mapStateToProps, {setUserProfile} )  (withUrlDataContainerComponent)