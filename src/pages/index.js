import React, { Component } from 'react';
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import './index.css';


class IndexPage extends Component {

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
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
        <br/>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug;
          const icon = get(node, 'frontmatter.icon');
          const color = get(node, 'frontmatter.color');
          return (
            <Link 
              to={node.fields.slug} 
              className="index-post" 
              key={node.fields.slug}
              style={{ WebkitFilter: 'drop-shadow(0px 0px 30px ' + color + ')'}}
            >
              <img src={icon} />
            
            </Link>
          )
        })}
      </div>
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            icon
            color
          }
        }
      }
    }
  }
`

