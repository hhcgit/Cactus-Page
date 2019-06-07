function getDayPic(day){
        
    if(day.includes('T-Storms') || day.includes('Showers')){
        
        return ({
            text:'Warning! Too much water kills your cactus',
            pic:'T-Storm.png'
        })
    }
    else if(day.includes('Dreary') || day==='Fog' || day.includes('Hazy')){
        return ({
            text:'Not enough Sunlight for your cactus.',
            pic:'Dreary.png'
        })
    }
    else if(day.includes('Hot')){
        return ({
            text:'Hope your cactus can tolerate the heat!!',
            pic:'Hot.png'
        })
    }
    else if(day.includes('Cold')){
        return ({
            text:'Hope your cactus can tolerate the cold!!',
            pic:'Cold.png'
        })
        
    }
    else if(day.includes('Windy')){
        
        return ({
            text:"Hold your pot! Don't let the wind take your plant!",
            pic:'Windy.png'
        })
    }
    else if(day.includes('Snow') || day.includes('Sleet') ||day.includes('Freezing Rain')){
        
        return ({
            text:'It looks good when decorating you cactus with snow, but keep it inside.',
            pic:'Snow.png'
        })
    }
    else if(day.includes('Flurries')){
        
        return ({
            text:'No Comments.',
            pic:'Flurry.png'
        })
    }
    else if(day.includes('Ice')){
        
        return ({
            text:'Hmm... Cactus Popsicle might taste good.',
            pic:'Ice.png'
        })
    }
    else if(day.includes('Sunny') || day.includes('Cloudy')){
        
        return ({
            text:'What a Nice Day!',
            pic:'Sunny.png'
        })
}}
function getNightPic(night){
    if(night.includes('T-Storms') || night.includes('Showers')){
        return ({
            text:'Warning! Too much water kills your cactus',
            pic:'N-Shower.png'
        })
    }
    else if(night.includes('Snow') || night === 'Ice'){
        return ({
            text:'It looks good when decorating you cactus with snow, but keep it inside.',
            pic:'Snow.png'
        })
    }
    else if(night.includes('Hot')){
        return ({
            text:'Seem like it is a hot night.',
            pic:'Hot.png'
        })
    }
    else if(night.includes('Snow') || night.includes('Flurries')){
        return ({
            text:'It looks good when decorating you cactus with snow, but keep it inside.',
            pic:'Snow.png'
        })
    }
    else if(night.includes('Clear')){
        return ({
            text:'A good night to watch the moon.',
            pic:'N-Clear.png'
        })
    }
    else if(night.includes('Hazy') ){
        return ({
            text:'A Misty Night',
            pic:'Hazy.png'
        })
    }
    else if(night.includes('Cloud')){
        return ({
            text:'A Cloudy Night',
            pic:'N-Cloudy.png'
        })
    }}
export default{
getDayPic,
getNightPic
}