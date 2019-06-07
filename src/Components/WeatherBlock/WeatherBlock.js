import { getDayPic , getNightPic } from './WeatherBlock-Service';
import React from 'react';

export default class WeatherBlock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            error:'',
            weather: [
                {IconPhrase:''},
                {IconPhrase:''}
                    ]
        }
    }
    fetchData= (loc) => {
        return fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?q=${loc}&apikey=RlmjBwPlSGEeWBo17JbXdrd61Aol5p8B`,
        {
            method: 'GET'
        })
        .then(res => {if (res[0]){
            return res.json()
        }
        throw Error("Invalid City Name")
        })
        .then(cities => {
            return cities[0].Key
        })
        .then(cityKey =>{
            return fetch(`https://limitless-cove-20632.herokuapp.com/api/weather/${cityKey}`,
            {
                method: 'GET'
            })   
        })
        .then(res2=> {
            if (res2){
                return res2.json()
            }
            throw Error("No Weather Info on this City")
        })
        .then (w => 
            this.setState({
                weather:w
            })
        )
        .catch(err => 
            this.setState({
                error:err
            })
        )
    }
    closeError= (ev) => {
        ev.preventDefault()
        this.setState({
            error:''
        })
    }
    clearCity= (ev) => {
        ev.preventDefault()
        this.setState({
            weather:[
                {IconPhrase:''},
                {IconPhrase:''}
                    ]
        })
    }

    render(){
        return(
        
        )
    }