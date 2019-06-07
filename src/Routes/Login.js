import React from 'react';
import Top from '../Components/Top/Top';
import LoginPage from '../Components/LoginPage/LoginPage';
import './Login.css';

export default class Login extends React.Component{
    render(){
        return (
            <div className="LoginPage">
                <Top />
                <div className="Login-Container">
                    <LoginPage />
                </div>
            </div>
        )
    }
}