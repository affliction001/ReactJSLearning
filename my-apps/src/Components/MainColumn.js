import React from 'react';
import News from './News';
import './ComponentsStyles/MainColumn.css';

class MainColumn extends React.Component {
  render() {
    const { data } = this.props;
    let news = '';

    if (data.length > 0) {
      news = data.map(item => {
        return (
          <News data={ item } key={ item.id }/>
        )
      })
    } else {
      news = (
        <div className="news-container">
          <p>You have not news.</p>
        </div>
      )
    }

    return (
      <section className="main-column">
        { news }
      </section>
    )
  }
}

export default MainColumn;
