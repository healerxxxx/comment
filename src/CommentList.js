import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component {
  static defaultProps ={
    comments:[]
  }

  handelDeleteComment = (index) =>{
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
  render() {
    
    return (
      <div>
        {this.props.comments.map((comment, i) => (
          <Comment comment={comment} 
          key={i} 
          index ={i}
          onDeleteComment ={this.handelDeleteComment}/>
        ))}
      </div>
    )
  }
}

CommentList.propTypes = {
  comments: PropTypes.array
}

export default CommentList
