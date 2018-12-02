import React from 'react';
import Header from './Header';
import Container from './Container';
import Messages from './Messages';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container />
        <Messages />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
