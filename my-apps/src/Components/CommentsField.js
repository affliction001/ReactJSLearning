import React from 'react';
import NewComment from './NewComment';
import {comments} from '../data';
import keygenerator from '../keygenerator';
import './ComponentsStyles/CommentsField.css';

class CommentsField extends React.Component {
  state = {
    data: ''
  }

  setComments = () => {
    this.setState({ data: comments });
  }

  getComments = () => {
    return this.state.data;
  }

  render() {
    const data = this.getComments();

    let dataLength = data.length;
    let commentsToDisplay = '';

    if (data.length === 0) {
      commentsToDisplay = <div className="comment"><p className="comment__text">No comments.</p></div>;
    } else {
      commentsToDisplay = data.map(comment => {
        return <NewComment key={ keygenerator() } data={ comment } />
      })
    }

    // Здесь имитация ajax, прием данных с сервера. Ожидание добавления нового комментария.
    setInterval(() => {
      if (comments.length !== dataLength) {
        dataLength = comments.length;
        this.setComments();
      }
    }, 1000);

    return (
      <React.Fragment>
        { commentsToDisplay }
      </React.Fragment>
    )
  }
}

export default CommentsField;
