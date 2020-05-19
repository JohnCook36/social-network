import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reduser";
import {AUTH_ME_URL} from "../../constants";

class HeaderContainer extends React.Component {

    componentDidMount() {

        const {setAuthUserData} = this.props

        axios.get(AUTH_ME_URL, {
            withCredentials: true
        })
            .then(({data: {resultCode, data} }) => {

                if(resultCode === 0) {
                    let {id, login, email} = data;
                    setAuthUserData(id, email, login);
                }
            });

    }

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});


export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer);
