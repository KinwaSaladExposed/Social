import React from 'react'
import OP from '../Main/OnePost'
import arnold2 from '../../../img/pparnold.jpg'

function Posts(props) {
	return(
	<div className="Posts">
		<h2>My Posts</h2>
        <input placeholder="Enter the post" />
        <button>Add the Post</button>

        {/*<OP message="Today I started my post" />
        <OP message="Yesterday I finished my post"/>
        <OP message="Im taking a break from posting"/>*/}
        {props.PMsg.map((e)=><OP message={e.message} like={e.like} id={e.id}/>)}
     </div>
    )
}

export default Posts;