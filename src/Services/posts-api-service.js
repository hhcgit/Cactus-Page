const baseUrl='https://limitless-cove-20632.herokuapp.com/api';
const postsApiService = {
    getAllPosts(){
        return fetch(baseUrl+'/posts',
        {
            method:"GET"
        })
    },
    getReviewsForPost(post_id){
        return fetch(baseUrl+`/posts/${post_id}/reviews`,
        {
            method:"GET"
        })
    }
}

export default postsApiService;
