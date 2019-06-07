
import React from 'react';
import Slider from 'react-slick';

export default class Gallery extends React.Component{

    render(){
        const settings = {
            dot:true
        }
        return(
        <div className="Gallery-Container">
            <Slider { ...settings } >
                <div>
                    <img src={require('../../img-store/cactus-img/1.png')} alt="cactus"/>
                </div>
                <div>
                    <img src={require('../../img-store/cactus-img/2.png')} alt="cactus"/>
                </div>
                <div>
                    <img src={require('../../img-store/cactus-img/3.png')} alt="cactus"/>
                </div>
                <div>
                    <img src={require('../../img-store/cactus-img/4.png')} alt="cactus"/>
                </div>
            </Slider>
        </div>
        )
    }
}