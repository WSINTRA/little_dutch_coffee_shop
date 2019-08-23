import React from 'react'

function Posts(props) {
	
	return (
		<div className="container">
	
		<div>
		{props.allPosts.map(post => <li>{post.title}<p>{post.content}</p></li>)}

		</div>
		
		</div>)

}

export default Posts;