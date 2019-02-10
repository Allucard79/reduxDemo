import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment}) => 
	<li>
		{text} <span className='votes'>{votes}</span> 
		<div className='buttons'>
			<button onClick={() => thumbUpComment(id)}><i className='fa fa-thumbs-up'></i></button>
			<button onClick={() => thumbDownComment(id)}><i className='fa fa-thumbs-down'></i></button>
			<button onClick={() => removeComment(id)}><i className='fa fa-times'></i></button>
			<button onClick={() => editComment(id, prompt('edit comment'))}><i className='fa fa-pencil'></i></button>
		</div>
	</li>;

export default Comment;