import React, { Component } from 'react';
import Link from 'gatsby-link'
import './index.css';


class IndexPage extends Component {

  render() {
    return (
      <p className="about">
        I am a junior at the University of Maryland studying Computer Science.
        Feel free to browse some projects that I have worked on below.
        <br/><br/>
        Or find me elsewhere on the interwebs:&nbsp;
          <a href="https://github.com/keller-mark">
            GitHub <i className="icon-logo-github"></i>
          </a>, &nbsp;
          <a href="https://www.linkedin.com/in/mark-keller-514574b0">
          LinkedIn <i className="icon-logo-linkedin"></i>
          </a>.
      </p>    
    );
  }
}

export default IndexPage

