import React from 'react';
import postsApiService from '../../Services/posts-api-service';
import './BlogMain.css';


export default class BlogMain extends React.Component{
    constructor(props){
        super(props)
        this.state={
            posts:[],
            reviews:[{post_id:''}]
        }
    }
    checkReviews =(post) =>{
        if (this.state.reviews[0].post_id === post.id){
            return this.serializeReviews()
        }
        else{
            return <></>
        }
    }
    getReviews(id){
        postsApiService.getReviewsForPost(id)
        .then( res => res.json())
        .then(json => console.log(json))
        .then(rev => this.setState({
            reviews:rev
        }))
    }
    serializePosts(){
        const { posts } = this.state
        const out = posts.map(post => {
            
            const num = Math.floor((Math.random()*15)+1)
            return(

                <div className="Post-Container" id={`Post${post.id}`} key={post.id}>
                    <h3>{post.title}</h3>
                    <div className="View-Btn"> 
                    <button type="button" className="View-Btn" onClick={()=>{
                        postsApiService.getReviewsForPost(post.id)
                        .then( res => res.json())
                        .then(rev => this.setState({
                            reviews:rev
                        }))
                    }}>View More</button>
                    </div>
                    <div className="Image-container">
                        <img className="Post-img" src={require(`../../img-store/cactus-img/${num}.png`)} alt="cactus" />
                    </div>
                    <div className="Reviews-Container">
                        {this.state.reviews[0].post_id===post.id ? 
                        <>
                            <div className="Post-Content-Container">
                                {post.content}
                            </div>
                            {this.serializeReviews()} 
                            <button type="button" className="Back-Btn" onClick={this.handleReviewBack}>
                                Back
                            </button> 
                            </> : 
                            <>
                            </>
                        }
                    </div>
                </div>
            )
        })
        return out
    }
    componentWillMount(){
        this.setState({
            posts:this.props.posts
        })
    }
    handleReviewBack= () => {
        const empty=[{post_id:''}]
        this.setState({
            reviews:empty
        })
    }
    componentWillUnmount(){
        this.handleReviewBack()
    }
    serializeReviews(reviews){
        const out =this.state.reviews.map(
            rev =>{
                return (
                    <div className="Review-Container" id={`Review${rev.id}`} key={rev.id}>
                        <div className="Review_user_name">
                            <p>
                                {rev.user.user_name}
                            </p>
                        </div>
                        <div className="Review_content">
                            <p>
                                {rev.content}
                            </p>
                        </div>
                        <div className="Date-Container">
                            <span className="Date-Created">
                                {rev.date_created}
                            </span>
                        </div>
                    </div>
                )
            }
        )
        return out
    }
    renderDisplay(){
        // if (this.state.reviews.length>0){
        //     const num = Math.floor((Math.random()*15)+1)
        //     const post = this.state.posts.find(pos => pos.post_id===this.state.reviews[0].post_id)
        //     return(
        //         <div>
        //             <button onClick={this.handleReviewBack} type="button">
        //                 Back
        //             </button>
        //             <img className="Post-Review-img" src={require(`../../img-store/cactus-img/${num}.png`)} alt="cactus"/>
        //             <h2>
        //                 {post.title}
        //             </h2>
        //             <p>
        //                 {post.content}
        //             </p>
        //             <div className="Review-Container">
        //                 {this.serializeReviews()}
        //             </div>
        //         </div>
        //     )
        // }
        return(
            <div className="Posts-Container">
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