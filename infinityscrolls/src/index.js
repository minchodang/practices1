import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import GlobalStyles from '../src/Components/GlobalStyles';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Router />
  </>,

  document.getElementById('root')
);
