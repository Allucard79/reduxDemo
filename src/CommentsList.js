import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({comments, addComment}) => 
	<ul>
		{comments.map(comment => <Comment key={comment.id} {...comment}/>)}
        <button className='comment-btn' onClick={() => {let text = prompt('new comment'); addComment(text)}}>comment</button>
	</ul>;

export default CommentsList;