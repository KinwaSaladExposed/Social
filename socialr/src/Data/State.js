let state = {
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
}

export let createCo = (txt) => {
    let NewComment = {
        message:txt,id:4,like:40
    }
    state.Comment.PMsg.unshift(NewComment);
    state.Comment.newPosts = "";
    run(state);
}
export let postMsg = (text) => {
    let NewMsg = {
        message:text,id:1
    }
    state.Dial.Message_Obj.push(NewMsg);
    run(state);
}

export let OPC = (Otext) => {
    state.Comment.newPosts = Otext;
    run(state);
}
export let NM = (MMtext) => {
    state.Dial.newmsg = MMtext;
    run(state);
}




let run = () => {
    console.log("Test");
}

export let subscribe = (observer) => {
    run = observer;
}

export default state