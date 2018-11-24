{/*let text_header = 'Hello, React.';

let text_main = [
  {
    id: '1',
    title: 'First title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit'
  },
  {
    id: '2',
    title: 'Second title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit'
  },
  {
    id: '3',
    title: 'Third title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit'
  }
];

let left_datas = [
  {
    id: '1',
    title: 'Left 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit'
  },
  {
    id: '2',
    title: 'Left 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit'
  },
  {
    id: '3',
    title: 'Left 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit'
  }
];

let right_datas = [
  {
    id: '1',
    title: 'Left 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit'
  },
  {
    id: '2',
    title: 'Left 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit'
  },
  {
    id: '3',
    title: 'Left 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit'
  }
];

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>{ text_header }</h1>
      </header>
    )
  }
}

class LeftNews extends React.Component {
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

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <LeftColumn data={ left_datas }/>
        <MainColumn data={ text_main } />
        <RightColumn data={ right_datas }/>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p>Footer</p>
      </footer>
    )
  }
}

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Container />
      <Footer />
    </React.Fragment>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/}
