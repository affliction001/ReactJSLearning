import React from 'react';
import RightNews from './RightNews';
import './ComponentsStyles/RightColumn.css';

class RightColumn extends React.Component {
  render() {
    const data = this.props.data;
    let news = '';

    if (data.length) {
      news = data.map(item => {
        return (
          <RightNews key={ item.id } data={ item }/>
        )
      })
    } else {
      news = (
        <div className="side-container">
          <p>You have not news.</p>
        </div>
      )
    }

    return (
      <section className="right-column">
        { news }
      </section>
    )
  }
}

export default RightColumn;
