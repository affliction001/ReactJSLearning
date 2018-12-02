import React from 'react';
import LeftColumn from './LeftColumn';
import MainColumn from './MainColumn';
import RightColumn from './RightColumn';
import './ComponentsStyles/Container.css';
import {left_datas, text_main, right_datas} from '../data';

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <LeftColumn data={ left_datas }/>
        <MainColumn data={ text_main } />
        <RightColumn data={ right_datas }/>
      </div>
    );
  }
}

export default Container;
