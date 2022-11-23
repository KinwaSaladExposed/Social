let state = {
Dial:{	
	Dialogue_Names:[
  {name:"Mr. Cool",id:1},
  {name:"Mr. Uncool",id:2},
  {name:"Mr. Very Cool",id:3}
],
	Message_Obj:[
  {message:"Hi, How have you been",id:1},
  {message:"Bad",id:2},
  {message:"Thats no good",id:3},
  {message:"Can you stop texting me",id:4}
]},

Comment:{
	PMsg:[
  {message:"Today I started my post",like:400,id:1},
  {message:"Yesterday I finished my post",like:2,id:2},
  {message:"Im taking a break from posting",like:69,id:3}
]}
}

export let createCo = (txt) => {
    let NewComment = {
        text:txt,id:4,like:40
    }
    state.Comment.PMsg.push(NewComment);
    console.log(state);
}

export default state