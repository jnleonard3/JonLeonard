import React, { Component } from 'react';
import Styles from './root.css';
import FaceImage from './../public/face.jpg'
import TwitterIcon from './../public/twitter.png'
import LinkedinIcon from './../public/linkedin.png'
import GithubIcon from './../public/github.png'

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
          <a href="https://github.com/jnleonard3/JonLeonard">
            <img style={{position: 'absolute', top: 0, right: 0, border: 0}} src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"/>
          </a>
          <div className={Styles.container}>
            <div className={Styles.header}>
              <img className={Styles.faceHeader} src={FaceImage} />
              <div className={Styles.nameContainer}>
                <h1 className={Styles.nameHeader}>Jon Leonard</h1>
                <a className={Styles.emailHeader} href="mailto:jnleonard3@gmail.com">jnleonard3@gmail.com</a>
              </div>
              <div className={Styles.socialMedia}>
                <a href="https://twitter.com/jnleonard3">
                <img src={TwitterIcon} />
                </a>
                <a href="https://github.com/jnleonard3">
                <img src={GithubIcon} />
                </a>
                <a href="https://www.linkedin.com/in/jnleonard3">
                <img src={LinkedinIcon} />
                </a>
              </div>
            </div>
            <div className={Styles.blurb}>
              Software Developer. Currently a Front End Developer at <a href="https://www.viewpost.com">Viewpost</a> (circa 2015), previously a developer at Citigroup and Dignitas Technologies.
              <br/><br/>
              I develop awesome software to solve interesting problems.
            </div>
          </div>
        </body>
      </html>
    );
  }
}