import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from './utils/typography'


class App extends Component {
  render() {
    return (
      <div>
        <TypographyStyle typography={typography} />
        <Header />
      </div>
    );
  }
}

export default App;
