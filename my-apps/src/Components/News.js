import React from 'react';
import './ComponentsStyles/News.css';

class News extends React.Component {
  render() {
    const { title, text } = this.props.data;
    return (
      <div className="news-container">
        <h2>{ title }</h2>
        <p>{ text }</p>
      </div>
    )
  }
}

export default News;
