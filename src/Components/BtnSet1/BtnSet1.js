import React from 'react';
import './BtnSet1.css';
import { Link } from 'react-router-dom';

export default class BtnSet1 extends React.Component{
    render(){
        return(
            <nav className="Menu">
                <div className="Header__Btn">
                    <Link to="/">
                            Home
                    </Link>
                </div>
            </nav>
        )
    }
}