let store = {

    dispatch(action) {
        if(action.type == "add-post") {
            let NewComment = {
                message:this._state.Comment.newPosts,id:4,like:40
            }
            this._state.Comment.PMsg.unshift(NewComment)
            this._state.Comment.newPosts = ""
            this.run(this._state)
        }
        else if(action.type == "Post-Change") {
            //this._state.Comment.newPosts = message;
            this.run(this._state);
            this._state.Comment.newPosts = action.text;
        }
    },

   _state: {
    Dial:{  
        Dialogue_Names:[
      {name:"Mr. Cool",id:1},
      {name:"Mr. Uncool",id:2},
      {name:"Mr. Very Cool",id:3}
    ],
        Message_Obj:[
      
    ], newmsg:"hello"
    },

    Comment:{
        PMsg:[
      {message:"Today I started my post",like:400,id:1},
      {message:"Yesterday I finished my post",like:2,id:2},
      {message:"Im taking a break from posting",like:69,id:3}
    ],
    newPosts:"hello"
    },

    Friends:{
        FNames:[
            {name:"John",id:1},
            {name:"Ronald",id:2},
            {name:"Frank",id:3}
        ]
    }
    },

    postMsg(text) {
        let NewMsg = {
            message:text,id:1
        }
        this._state.Dial.Message_Obj.push(NewMsg)
        this.run(this._state)
    },

    NM(MMtext) {
        this._state.Dial.newmsg = MMtext
        this.run(this._state)
    },

    


    run() {
        console.log("Test");
    },

    subscribe(observer) {
        this.run = observer
    },

    getState() {
        return this._state
    }

    
}
export default store;


