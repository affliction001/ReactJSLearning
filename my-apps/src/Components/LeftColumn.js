import React from 'react';
import LeftNews from './LeftNews';
import './ComponentsStyles/LeftColumn.css';

class LeftColumn extends React.Component {
  render() {
    const data = this.props.data;
    let news = '';

    if (data.length) {
      news = data.map(item => {
        return (
          <LeftNews key={ item.id } data={ item }/>
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
      <section className="left-column">
        { news }
      </section>
    )
  }
}

export default LeftColumn;
