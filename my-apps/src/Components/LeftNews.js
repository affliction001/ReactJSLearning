import React from 'react';
import './ComponentsStyles/LeftNews.css';

class LeftNews extends React.Component {
  state = {
    visible: false,
  }

  showMoreText = (event) => {
    event.preventDefault();
    this.setState({visible: true});
  }

  hideMoreText = (event) => {
    event.preventDefault();
    this.setState({visible: false});
  }

  render() {
    const { title, text, fullText } = this.props.data;
    const { visible } = this.state;

    return (
      <div className="side-container">
        <h3 className="side-container__title">{ title }</h3>
        {
          visible ?
            <p className="side-container__text">
              { fullText }
              <a href="#" onClick={this.hideMoreText}> Hidden </a>
            </p> :
            <p className="side-container__text">
              { text }
              <a href="#" onClick={this.showMoreText}> Show more </a>
            </p>
        }
      </div>
    )
  }
}

export default LeftNews;
