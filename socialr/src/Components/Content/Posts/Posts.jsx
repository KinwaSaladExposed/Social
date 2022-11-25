import React from 'react'
import OP from '../Main/OnePost'
import arnold2 from '../../../img/pparnold.jpg'

let PText = React.createRef();


const Posts = (props) => {
    let createCo = () => {
    props.createCo(PText.current.value);
    PText.current.value = "";
    
    }
	return(
	<div className="Posts">
		<h2>My Posts</h2>
        {props.PMsg.map((e)=><OP message={e.message} like={e.like} id={e.id}/>)}
        <div>
        <input placeholder="Enter the post" ref={PText}/>
        <button onClick={createCo}>Add the Post</button>
        </div>
        
     </div>

    )
}

export default Posts;