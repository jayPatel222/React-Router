const initState = {
 posts:[
     {id:'1',title:'Hello',body:'bom bom'},
     {id:'2',title:'Hello',body:'bom bom'},
     {id:'3',title:'Hello',body:'bom bom1'}
 ]
}
const rootReducers = (state=initState,action) =>{
    if (action.type === "DELETE_POSTS"){
        let newPost = state.posts.filter(post => {
          return action.id !== post.id;
        });
        return {
            ...state,
            posts: newPost
        }
    }
    return state;
}
export default rootReducers;