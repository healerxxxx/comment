import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  handelDeleteComment = (index) => {
    const onDeleteComment = this.props.onDeleteComment;
    if (onDeleteComment) {
      onDeleteComment(index);
    }
  }
  render() {
    const comments = this.props.comments;
    return (
      <div>
        {comments.map((comment, i) => (
          <Comment comment={comment}
            key={i}
            index={i}
            onDeleteComment={this.handelDeleteComment} />
        ))}
      </div>
    );
  }
}

CommentList.propTypes = {
  onDeleteComment: PropTypes.func,
  comments: PropTypes.array,
};

export default CommentList;
