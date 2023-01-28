import React from 'react';
import {
    Link
} from "react-router-dom";
import {
    Grid, Row, Column
} from 'carbon-components-react/es/components/Grid';
import {
    default as Accordion,
    AccordionItem, 
} from 'carbon-components-react/es/components/Accordion';
import imgUrl from './img/mark.png'

const posts = [
  {
    date: "October 13, 2022",
    url: "http://vitessce.io/blog/internal-refactoring/",
    title: "Vitessce: Internal code refactoring",
  },
  {
    date: "July 16, 2022",
    url: "http://vitessce.io/blog/obs-by-feature-update/",
    title: "Vitessce: Observation-by-feature support has arrived",
  },
];

export default function Blog() {

  return (
    <Grid className="main-grid">
      <Row>
        <Column sm={4} lg={6} className="mk--pt-1 news-col">
          <h3>blog</h3>
          <div>
            {posts.map(item => (
              <Row key={item.url} className="blog-item">
                <Column sm={2}>
                  <a href={item.url} target="_blank">{item.title}</a>
                </Column>
                <Column sm={1}>{item.date}</Column>
                
              </Row>
            ))}
          </div>
        </Column>
      </Row>
    </Grid>
  );
}
