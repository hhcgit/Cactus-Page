import React from 'react';
import postsApiService from '../../Services/posts-api-service';

export default class BlogMain extends React.Component{
    state={
        posts:[],
        reviews:[]
    }
    
    serializePosts(){
        const { posts } = this.state
        const out = posts.map(post => {
            const num = Math.floor((Math.random()*15)+1)
            return(
                <div className="Post-Container" id={`Post${post.id}`}>
                    <h3>{post.title}</h3>
                    <img className="Post-img" src={require(`../../img-store/cactus-img/${num}.png`)} alt="cactus"/>
                </div>
            )
        })
        return out
    }
    componentWillMount(){
        postsApiService.getAllPosts()
        .then(res => console.log(res))
        // .then(posts => {
        //     console.log(posts)
        //     this.setState({
        //         posts
        //     })
        // })
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
    serializeReviews(reviews){
        const out =this.state.reviews.map(
            rev =>{
                return (
                    <div className="Review-Container" id={`Review${rev.id}`}>
                        <h3>{rev.content}</h3>
                        <p>
                            {rev.user.user_name}
                        </p>
                        <span className="Date-Created">
                            {rev.date_created}
                        </span>
                    </div>
                )
            }
        )
        return out
    }
    renderDisplay(){
        if (this.state.reviews.length>0){
            const num = Math.floor((Math.random()*15)+1)
            const post = this.state.posts.find(pos => pos.post_id===this.state.reviews[0].post_id)
            return(
                <div>
                    <img className="Post-Review-img" src={require(`../../img-store/cactus-img/${num}.png`)} alt="cactus"/>
                    <h2>
                        {post.title}
                    </h2>
                    <p>
                        {post.content}
                    </p>
                    <div className="Review-Container">
                        {this.serializeReviews()}
                    </div>
                </div>
            )
        }
        return(
            <div className="Post-Container">
                {this.serializePosts()}
            </div>
        )
    }
    render(){
        return(
            <>
                {this.renderDisplay()}
            </>
        )
    }

}