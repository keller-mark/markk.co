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

const news = [
  {
    date: "October 26, 2023",
    slug: "ieee-vis-fall-2023",
    description: (<p>
      Presented at the 2023 <a href="https://ieeevis.org">IEEE VIS</a> conference during the Application Spotlight titled <a href="https://ieeevis.org/year/2023/info/spotlights#spot1">Visualization for spatial single-cell atlases</a> in Melbourne, Australia.
    </p>),
  },
  {
    date: "October 4, 2023",
    slug: "kpmp-f2f-fall-2023",
    description: (<p>
      Attended the 2023 Kidney Precision Medicine Project fall <a href="https://www.kpmp.org/meetings">meeting</a> in Bethesda, MD.
    </p>),
  },
  {
    date: "September 21, 2023",
    slug: "alpenglow-fall-2023",
    description: (<p>
      Attended the <a href="https://www.alpenglowbiosciences.com/events/p/3d-spatial-summit">Spatial Biology Summit</a> hosted by Alpenglow Biosciences in Cambridge, MA.
    </p>),
  },
  {
    date: "September 14, 2023",
    slug: "dbmi-science-day-fall-2023",
    description: (<p>
      Presented a poster at the HMS Department of Biomedical Informatics <a href="https://www.eventbrite.com/e/dbmi-science-day-2023-tickets-686569075587">Science Day</a>.
    </p>),
  },
  {
    date: "September 6, 2023",
    slug: "trainee-talk-fall-2023",
    description: (<p>
      Presented research-in-progress at the HMS Department of Biomedical Informatics trainee talk series.
    </p>),
  },
  {
    date: "August 28, 2023",
    slug: "sennet-fall-2023",
    description: (<p>
      Attended the SenNet Consortium Meeting on <a href="https://sennetconsortium.org/fall-2023-2/">Single Cell Spatial Transcriptomics/Proteomics</a> in Washington, DC.
    </p>),
  },
  // TODO
  {
    date: "July 10, 2023",
    slug: "ome-zarr-published",
    description: (<p>
      OME-Zarr ecosystem manuscript published in <a href="https://doi.org/10.1007/s00418-023-02209-1">Histochemistry and Cell Biology</a>.
    </p>),
  },
  {
    date: "June 16, 2023",
    slug: "vim-meeting-2023",
    description: (<p>
      Presented at the Inter-Lab Meeting on <a href="https://vis-image-management.github.io/vim-web/">Visualization and Image Data Management</a>.
    </p>),
  },
  {
    date: "June 13, 2023",
    slug: "nsf-workshop",
    description: (<p>
      Attended NSF workshop on <a href="https://www.mines.edu/id4/vis-workshop/">Interactive Visualization and Analysis of High-Dimensional Scientific Data</a>.
    </p>),
  },
  {
    date: "June 10, 2023",
    slug: "chromatin-landscape-preprint",
    description: (<p>
      Contributed to <a href="https://doi.org/10.1101/2023.06.07.543965 ">preprint</a> about the kidney chromatin landscape by developing a visualization tool to <a href="https://kpmp.github.io/gisch-et-al-2023/">explore the data</a>.
    </p>),
  },
  {
    date: "March 28, 2023",
    slug: "beat-pd-published",
    description: (<p>
      BEAT-PD manuscript published in <a href="https://doi.org/10.1371/journal.pdig.0000208">PLOS Digital Health</a>.
    </p>),
  },
  {
    date: "March 20, 2023",
    slug: "dac-initial",
    description: (<p>
      Initial <a href="https://bmiphd.hms.harvard.edu/big-track/BIG-dac">dissertation advisory committee</a> meeting.
    </p>),
  },
  {
    date: "February 28, 2023",
    slug: "vitessce-kpmp-segmentations",
    description: (<p>
      Presented at the 2023 Kidney Precision Medicine Project spring <a href="https://www.kpmp.org/meetings">meeting</a> in Washington, DC.
    </p>),
  },
  {
    date: "February 25, 2023",
    slug: "ome-zarr-usage-preprint",
    description: (<p>
      Contributed to <a href="https://doi.org/10.1101/2023.02.17.528834">preprint</a> about OME-Zarr ecosystem.
    </p>),
  },
  {
    date: "January 23, 2023",
    slug: "cistrome-explorer-published",
    description: (<p>
      Cistrome Explorer published in <a href="https://doi.org/10.1093/bioinformatics/btad018">Bioinformatics</a>.
    </p>),
  },
  {
    date: "October 19, 2022",
    slug: "polyphony-ieee-vis",
    description: (<p>
      Polyphony was presented at <a href="https://ieeevis.org/year/2022/info/papers-sessions">IEEE VIS 2022</a> in Oklahoma City, OK by Furui Cheng.
    </p>),
  },
  {
    date: "September 26, 2022",
    slug: "polyphony-published",
    description: (<p>
      Polyphony published in <a href="http://doi.org/10.1109/TVCG.2022.3209408">IEEE TVCG</a>.
    </p>),
  },
  {
    date: "July 13, 2022",
    slug: "ismb-polyphony-biovis",
    description: (<p>
      Presented Polyphony at the ISMB <a href="https://www.iscb.org/ismb2022-program/abstracts/biovis">BioVis COSI</a>, winning the best long abstract award.
    </p>),
  },
  {
    date: "July 11, 2022",
    slug: "ismb-vitessce-tech-track",
    description: (<p>
      Presented Vitessce at the ISMB <a href="https://www.iscb.org/ismb2022-program/tech-track">Technology Track</a> in Madison, WI.
    </p>),
  },
  /*{
    date: "June 16, 2022",
    slug: "cistrome-explorer-preprint",
    description: (<p>
      Cistrome Explorer preprint uploaded to <a href="https://osf.io/asbz2/">OSF Preprints</a>.
    </p>),
  },*/
  {
    date: "May 11, 2022",
    slug: "viv-published",
    description: (<p>
      Viv published in <a href="https://doi.org/10.1038/s41592-022-01482-7">Nature Methods</a>.
    </p>),
  },
  {
    date: "April 6, 2022",
    slug: "keystone-scb-2022",
    description: (<p>
      Presented Vitessce at Keystone Symposium on <a href="https://www.keystonesymposia.org/conferences/conference-listing/meeting?eventid=6802">Single Cell Biology</a> in Florence, Italy.
    </p>),
  },
  /*{
    date: "March 31, 2022",
    slug: "polyphony-preprint",
    description: (<p>
      Polyphony preprint uploaded to <a href="https://osf.io/b76nt/">OSF Preprints</a>.
    </p>),
  },*/
  {
    date: "January 19, 2022",
    slug: "big-pqe",
    description: (<p>
      Completed preliminary qualifying exam (<a href="https://bmiphd.hms.harvard.edu/big-track/BIG-pqe">PQE</a>).
    </p>),
  },
  {
    date: "October 18, 2021",
    slug: "vitessce-preprint",
    description: (<p>
      Vitessce preprint uploaded to <a href="https://osf.io/y8thv/">OSF Preprints</a>.
    </p>),
  },
  {
    date: "September 2, 2020",
    slug: "start-gradschool",
    description: (<p>
      First day of PhD program.
    </p>),
  },
];

const featuredProjects = [
  {
    title: "Vitessce",
    slug: "vitessce",
    img: "vitessce.png",
    description: (<p>
      Since 2019, I have worked with the Gehlenborg Lab
      on <a href="http://vitessce.io/">Vitessce</a>, an interactive visualization tool for spatial single-cell multi-omics experiments.
      Vitessce can be used as a <a href="https://github.com/vitessce/vitessce">React component</a>, <a href="https://github.com/vitessce/vitessce-python">Jupyter widget</a>, or <a href="https://github.com/vitessce/vitessceR">R htmlwidget</a>, and the React component has been integrated into the <a href="https://portal.hubmapconsortium.org/">HuBMAP data portal</a>.

      This work was presented as a poster at BioVis@ISMB 2019 and BioVis@ISMB 2020.
    </p>),
  },
  {
    title: "Polyphony",
    slug: "polyphony",
    img: "polyphony.png",
    description: (<p>
      In 2022, I contributed to the development of <a href="https://github.com/scPolyphony">Polyphony</a>, an interactive transfer learning framework for single-cell data analysis.
    </p>),
  },
  {
    title: "Cistrome Explorer",
    slug: "cistrome-explorer",
    img: "cistrome-explorer.png",
    description: (<p>
      Prior to starting graduate studies, I worked with the <a href="http://gehlenborglab.org">Gehlenborg Lab</a> on <a href="http://cisvis.gehlenborglab.org">Cistrome Explorer</a>, a wrapper component for <a href="http://higlass.io">HiGlass</a> with features for viewing <a href="http://cistrome.org/db/">CistromeDB</a> data and querying <a href="http://toolkit.cistrome.org/">CistromeDB Toolkit</a>.

      This work was presented as a poster at BioVis@ISMB 2020, NCI ITCR 2020, and Genome Informatics 2020.
    </p>),
  },
  {
    title: "4CE",
    slug: "forsee",
    img: "4ce.png",
    description: (<p>
      During the COVID-19 pandemic, I contributed to <a href="https://github.com/covidclinical/visualization-notebooks">data visualization &amp; analysis</a> and <a href="https://github.com/covidclinical/website">web development</a> with the Consortium for Clinical Characterization of COVID-19 by EHR (<a href="http://covidclinical.net">4CE</a>).
    </p>),
  },
  {
    title: "BEAT-PD",
    slug: "beat-pd",
    img: "beat-pd.png",
    description: (<p>
      During the summer of 2020, I participated in the <a href="https://www.braincommons.org/beat-pd-dream-challenge-winners-announced/">BEAT-PD DREAM Challenge</a> on winning team dbmi.
      My contributions included exploratory data analysis and a <a href="https://github.com/huangy6/beat_pd/tree/keller-mark/more-snakemake">snakemake pipeline</a> for our team's feature extraction and training code.
    </p>),
  },
  {
    title: "ExploSig",
    slug: "explosig",
    img: "explosig.png",
    description: (<p>
      As an undergraduate research assistant in the <a href="https://lrgr.io">Leiserson Research Group</a> at the University of Maryland,
      I led the development of <a href="https://github.com/lrgr/explosig">ExploSig</a>, a web-based tool to enable exploration and interactive visualization of mutation signatures in human cancer and their etiology.
      ExploSig was presented as a late-breaking poster at <a href="https://recombccb.recomb2019.org/abstracts/">RECOMB 2019</a> and won best poster at <a href="http://biovis.net/2019/index.html">BioVis@ISMB 2019</a>.
      <br/><br/>
      This work also included writing a pipeline for processing somatic mutation data and clinical data from TCGA, ICGC, PCAWG, and cBioPortal.
      This data processing is acknowledged in <a href="https://doi.org/10.1093/bioinformatics/btz340">Robinson et al. Bioinformatics 2019</a> and <a href="http://doi.org/10.1007/978-3-030-17083-7_15">Sason et al. RECOMB 2019</a>.
    </p>),
  },
]

export default function Intro() {

  return (
    <Grid className="main-grid">
      <Row>
        <Column sm={4} md={1} className="intro-img-col">
          <div className="intro-img" style={{ backgroundImage: `url(${imgUrl})` }} />
        </Column>
        <Column sm={4} md={7} className="mk--pt-1">
          <p>
            I am a PhD candidate in the Bioinformatics and Integrative Genomics (<a href="https://bigphd.hms.harvard.edu/" target="_blank">BIG</a>) program at Harvard Medical School, advised by Professor <a href="http://gehlenborglab.org/">Nils Gehlenborg</a>.
            I graduated from the University of Maryland, College Park in 2019, where I studied Computer Science.
            My research lies in the intersection of data visualization, bioinformatics, and human-computer interaction.
          </p>
        </Column>
      </Row>
      <Row>
        <Column sm={4} lg={6} className="mk--pt-1 projects-col">
          <h3>featured projects</h3>
          <Accordion className="mk--pt-1">
            {featuredProjects.map(project => (
              <AccordionItem key={project.slug} title={project.title}>
                {project.description}
              </AccordionItem>
            ))}
          </Accordion>
        </Column>
        <Column sm={4} lg={6} className="mk--pt-1 news-col">
          <h3>news</h3>
          <div>
            {news.map(item => (
              <Row key={item.slug}>
                <Column sm={1} className="date-col">{item.date}</Column>
                <Column sm={3}>{item.description}</Column>
              </Row>
            ))}
          </div>
        </Column>
      </Row>
    </Grid>
  );
}
