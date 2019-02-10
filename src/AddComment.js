import React from 'react';

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    addNewComment = () => {
        this.props.addComment(this.state.text);
        this.setState({
            text: ''
        });
    }
    render() {
        return (
            <div>
                <input className='input' type='text' value={this.state.text} placeholder='comment' onChange={this.onChange} />
                <button className='comment-btn' onClick={this.addNewComment}>add</button>
            </div>
        )
    }
}

export default AddComment;