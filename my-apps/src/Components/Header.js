import React from 'react';
import {text_header} from '../data';
import './ComponentsStyles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>{text_header}</h1>
      </header>
    );
  }
}

export default Header;
