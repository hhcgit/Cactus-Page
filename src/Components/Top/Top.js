import React from 'react';
import './Top.css';
import BtnSet1 from '../Top/Top';

export default class Top extends React.Component{
    render(){
        const pic=require('../../img-store/logo.png')
        return (
        <header>
            <div className="Container">
                <div className="Logo-wrap">
                    <div className="Table-wrap">
                        <img src={pic} alt="logo" className="Logo" />
                    </div>
                </div>

                <BtnSet1 />
            </div>
         </header>
        )
    }
}