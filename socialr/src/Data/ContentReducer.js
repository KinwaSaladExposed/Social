let addPost = "add-post";
let Postchange = "Post-Change";

let Reducer = (action, state) => {
	if(action.type == addPost) {
            let NewComment = {
                message:this._state.Comment.newPosts,id:4,like:40
            }
            this._state.PMsg.unshift(NewComment)
            this._state.newPosts = ""
        }
        else if(action.type == Postchange) {
            //this._state.Comment.newPosts = message;
            this._state.newPosts = action.text;
        }


	return state;
}

export default Reducer;

export let addPost_AC = () => {

    return {type:addPost, id:1};
}
export let postChange_AC = (text) => {

    return {type:Postchange, text:text};
}