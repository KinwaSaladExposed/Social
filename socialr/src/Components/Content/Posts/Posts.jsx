import React from 'react'
import OP from '../Main/OnePost'
import arnold2 from '../../../img/pparnold.jpg'

function Posts() {
	return(
	<div className="Posts">
		<h2>My Posts</h2>
        <input placeholder="Enter the post" />
        <button>Add the Post</button>

        <OP message="Today I started my post" />
        <OP message="Yesterday I finished my post"/>
        <OP message="Im taking a break from posting"/>
     </div>
    )
}

export default Posts;