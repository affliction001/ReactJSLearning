import React from 'react';
import CommentsForm from './CommentsForm';
import CommentsField from './CommentsField';
import './ComponentsStyles/Messages.css';

class Messages extends React.Component {
  render() {
    return (
      <div>
        <CommentsForm />
        <CommentsField />
      </div>
    );
  }
}

export default Messages;
