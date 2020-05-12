import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route, Redirect} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route parth='/users'
                       render={ () => <UsersContainer/>}/>
                <Route path='/friends'
                       render={() => <Friends state={props.state.sidebar}/>}/>
                <Route path='/' exact={true} render={() => <Redirect to='/profile'/>}/>
            </div>
        </div>
    );
};

export default App;

