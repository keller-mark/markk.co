import React from 'react';
import {
    Link
} from "react-router-dom";
import {
    Grid, Row, Column
} from 'carbon-components-react/es/components/Grid';

const presentations = [];

const screenRecordings = [
  {
    url: "https://youtu.be/XEsa2RYCuZA",
    title: "Segmentations and pathomic features in Vitessce",
  },
  {
    url: "https://youtu.be/Kb_IXVsu49w",
    title: "Segmentations in Vitessce, alternative example",
  },
  {
    url: "https://youtu.be/-Y47SsVTsag",
    title: "Segmentations in Vitessce, in KPMP Atlas",
  },
  {
    url: "https://youtu.be/lXuZj1YWQ5k",
    title: "Demo of SpatialQuery plugin for Vitessce",
  },
  {
    url: "https://youtu.be/_iPNGdJgvuI",
    title: "Demo of comparative visualizations in Vitessce, using KPMP data",
  },
  {
    url: "https://youtu.be/0eIClN4WNyU",
    title: "Polyphony demo",
  },
  {
    url: "https://youtu.be/Ic4wPJYnjBk",
    title: "SpatialQuery, alternative demo",
  },
  {
    url: "https://youtu.be/i_SHmJ2vdb0",
    title: "Vitessce demo - scATAC-seq",
  },
  {
    url: "https://youtu.be/iNdp0NizCu0",
    title: "Cistrome Explorer demo",
  },
  {
    url: "https://youtu.be/nwaeYcw-jEc",
    title: "Vitessce in KPMP Atlas, 10x Visium demo",
  },
  {
    url: "https://youtu.be/y-J26sT7NkM",
    title: "Vitessce in SenNet portal, histology image demo",
  },
  {
    url: "https://youtu.be/9Yto_uwKcQk",
    title: "Vitessce demo, smFISH example",
  },
  {
    url: "https://youtu.be/4crYwEK8NdU",
    title: "Vitessce demo, lightsheet microscopy volume (3D imaging) example",
  },
  {
    url: "https://youtu.be/5Pk9evkc3F4",
    title: "Vitessce Jupyter widget demo, Python notebook environment example",
  },
  {
    url: "https://youtu.be/flOPF-8l1A4",
    title: "Vitessce demo in HuBMAP Portal",
  },
  {
    url: "https://youtu.be/QX12x6nT5Go",
    title: "Vitessce demo, MERFISH prototype",
  },
  // Explosig
  {
    url: "https://youtu.be/v-Uws6upJA0",
    title: "ExploSig Workflows",
  },
  {
    url: "https://youtu.be/lP04GLkInpg",
    title: "ExploSig - Reproducing results from Kim et al. Nature Genetics 2016",
  },
  {
    url: "https://youtu.be/bX1CVdhOwq0",
    title: "ExploSig-Connect",
  },
];

function getYoutubeEmbedUrl(s) {
    return `https://www.youtube.com/embed/` + s.split('/').at(-1)
}

export default function Demos() {

  return (
    <Grid className="main-grid">
      <Row>
        <Column sm={12} lg={12} className="mk--pt-1 news-col">
          <h3>software demos</h3>
          <div className="demo-grid">
            {screenRecordings.map(item => (
              <div key={item.url} className="demo-item">
                <iframe height="400" src={getYoutubeEmbedUrl(item.url)} allow="fullscreen;" allowfullscreen></iframe>
                <span>{item.title}</span>
                
              </div>
            ))}
          </div>
        </Column>
      </Row>
    </Grid>
  );
}
