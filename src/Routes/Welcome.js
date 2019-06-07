import React from 'react';
import Hero from '../Components/Hero/Hero';
import Top from '../Components/Top/Top';


export default class Welcome extends React.Component{
    
    render(){        
        return(
           <>
            <Top />
            <Hero />
           </>
        )
    }
}