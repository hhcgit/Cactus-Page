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
    componentWillMount(){
        postsApiService.getAllPosts()
        .then(res=>res.json())
        .then(json =>
            this.setState({
                posts:json
            })
        )
        
    }
    render(){
        return (
            <>
                <Top />
            <div className="Blog-Main">
                {this.state.posts[0] && <BlogMain posts={this.state.posts}/>}
            </div>
            </>
        )
    }
}