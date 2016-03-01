import React, { Component } from 'react';
import Styles from './root.css';

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <html>
        <head>
          <title>Jon Leonard</title>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css"/>
          <link href="/styles.css" rel="stylesheet" type="text/css"/>
        </head>
        <body className={Styles.body}>
          derp derp derp
        </body>
      </html>
    );
  }
}