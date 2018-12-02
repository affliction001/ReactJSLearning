import React from 'react';
import {comments} from '../data';
import './ComponentsStyles/CommentsForm.css';

class CommentsForm extends React.Component {
  state = {
    userName: "",
    userComment: "",
  }

  enterUserName = (event) => {
    this.setState({ userName: event.currentTarget.value })
  }

  enterUserComment = (event) => {
    this.setState({ userComment: event.currentTarget.value })
  }

  sendComment = (event) => {
    const userName = document.querySelector('#userName').value;
    const userComment = document.querySelector('#userComment').value;
    document.querySelector('#userComment').value = '';
    comments.push({ 'userName': userName,
                    'userComment': userComment });
  }

  render() {
    return (
      <form className="form">
        <input onChange={ this.enterUserName }
               id="userName"
               type="text"
               className="form__input_name"
               value={ this.state.userName }
               placeholder="Enter your name" />
        <input onChange={ this.enterUserComment }
               id="userComment"
               type="text"
               className="form__input_comment"
               value={ this.state.userComment }
               placeholder="Enter your comment" />
        <input type="button"
               className="form__button"
               value="Send"
               onClick={ this.sendComment } />
      </form>
    )
  }
}

export default CommentsForm;
