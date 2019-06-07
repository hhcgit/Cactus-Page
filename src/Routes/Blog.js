import React from 'react';
import Top from '../Components/Top/Top';
import BlogMain from '../Components/Blog/BlogMain';
import postsApiService from '../Services/posts-api-service';

export default class Blog extends React.Component{
    state={
        posts:[],
        reviews:[],
        error:''
    }
    setReviews=(reviews) =>{
        this.setState({
            reviews
        })
    }
    clearReviews=()=>{
        const emptyArray= []
        this.setState({
            reviews:emptyArray
        })
    }
    componentDidMount(){
        fetch('https://limitless-cove-20632.herokuapp.com/api/posts',{
            headers: {
            },
          })
        .then(res=> console.log(res))
    }
    render(){
        return (
            <body>
                <Top />
            <div className="Blog-Main">
                {/* <BlogMain /> */}
            </div>
            </body>
        )
    }
}