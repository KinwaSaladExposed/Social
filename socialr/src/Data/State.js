import Reducer from './ContentReducer.js'

let store = {

    dispatch(action) {
        this._state.Comment = Reducer(this._state.Comment, action);
        this.run(this._state); 
        if(action.type == "add-msg") {
            let NewMsg = {
            message:this._state.Dial.Dialogue_Names.newmsg,id:1
        }
        this._state.Dial.Message_Obj.unshift(NewMsg)
        this.run(this._state)
        }
        else if(action.type == "msg-change") {
            this._state.Dial.Dialogue_Names.newmsg = action.text
            this.run(this._state)
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
      {message:"Hello", id:1},
      {message:"Hi", id:2},
      {message:"how have u been?", id:3}
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


