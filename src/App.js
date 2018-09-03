import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import './App.css';
import 'normalize.css/normalize.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };

    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth;

        this.setState({ height: (width * 1.5) });
  }
  
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <div className="header">
            <div className="wrap">
              <span className="title">Mark Keller</span>
              <div className="header-right">
                <span>Student at the University of Maryland</span>
              </div>
            </div>
          </div>
          <div className="main">
            <div className="wrap">
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
            </div>
          </div>
        </div>
        <div className="footer">
          <Parallax
              className="custom-class"
              offsetYMax={0}
              offsetYMin={-0}
          >
            <div id="mark-sky" style={{ height: (this.state.height) + 'px' }}></div>
          </Parallax>
          <Parallax
              className="custom-class"
              offsetYMax={0}
              offsetYMin={-10}
          >
            <div id="mark-trees" style={{ height: (this.state.height) + 'px' }}></div>
          </Parallax>
          <a id="flickr-overlay" title="View more on Flickr" href="https://www.flickr.com/photos/83712651@N04/">
            <span id="flickr-logo"></span>
          </a>
          <div className="footer-inner">
            <p>
              Copyright &copy; 2018 Mark Keller
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
