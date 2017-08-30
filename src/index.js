import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/Game';
import './style.css';

ReactDOM.render(
  <Game componentWillMount={this.componentWillMount}/>,
  document.getElementById('root')
);
