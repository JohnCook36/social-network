import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reduser";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: false
        })
            .then(response => {
            });

    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, (setAuthUserData))(HeaderContainer);