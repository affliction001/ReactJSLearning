import React from 'react';

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
