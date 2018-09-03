import React, { Component } from 'react';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import './index.css';
import './../style/icomoon/style.css';
import 'normalize.css/normalize.css';

import Header from '../components/header';

class Layout extends Component {

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

        this.setState({ height: (width * 1.2) });
  }
  
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    let { data, children } = this.props;
    return (
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ParallaxProvider>
          <div className="app">
            <div className="content">
              <div className="main">
                <div className="wrap">
                  {children()}
                </div>
              </div>
            </div>
            <div className="footer" style={{ height: (this.state.height - 200) + 'px' }}>
              <Parallax
                  className="custom-class"
                  offsetYMax={'0px'}
                  offsetYMin={'-0px'}
              >
                <div id="mark-sky" style={{ height: this.state.height + 'px' }}></div>
              </Parallax>
              <Parallax
                  className="custom-class"
                  offsetYMax={'0px'}
                  offsetYMin={'-200px'}
              >
                <div id="mark-trees" style={{ height: (this.state.height) + 'px' }}></div>
              </Parallax>
              <a 
                id="flickr-overlay" 
                title="View more on Flickr" 
                href="https://www.flickr.com/photos/83712651@N04/"
              >
                <span id="flickr-logo"></span>
              </a>
              
            </div>
          </div>
        </ParallaxProvider>
      </div>
    );
  }
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
