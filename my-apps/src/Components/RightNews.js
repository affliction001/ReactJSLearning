import React from 'react';
import './ComponentsStyles/RightNews.css';

class RightNews extends React.Component {
  render() {
    const { title, text } = this.props.data;
    return (
      <div className="side-container">
        <h3 className="side-container__title">{ title }</h3>
        <p className="side-container__text">{ text }</p>
      </div>
    )
  }
}

export default RightNews;
