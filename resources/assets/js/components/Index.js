import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Router';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

