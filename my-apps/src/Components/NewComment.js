import React from 'react';
import './ComponentsStyles/NewComment.css';

class NewComment extends React.Component {
  render() {
    const { userName, userComment } = this.props.data;
    return (
      <div>
        <div className="comment">
          <p className="comment__author">{ userName }</p>
          <p className="comment__text">{ userComment }</p>
        </div>
      </div>
    )
  }
}

export default NewComment;
