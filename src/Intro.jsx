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
    date: "November 18, 2025",
    slug: "easyvitessce-talk",
    description: (<p>
      Our work on <a href="https://github.com/vitessce/easy_vitessce">EasyVitessce</a> was presented at the <a href="https://scverse.org/conference2025">Scverse Conference 2025</a> and in a <a href="https://www.vues.events/past-events/easyvitessce:-adding-interactivity-to-scverse-single-cell-and-spatial-biology-plots">VUES seminar</a>.
    </p>),
  },
  {
    date: "November 7, 2025",
    slug: "hubmap-portal-preprint",
    description: (<p>
      Preprint on the HuBMAP Data Portal uploaded to <a href="https://doi.org/10.48550/arXiv.2511.05708">arXiv</a>.
    </p>),
  },
  {
    date: "October 23, 2025",
    slug: "segmentations-and-pathomics-preprint",
    description: (<p>
      Preprint on visualization of micro-compartmental segmentations and pathomic features uploaded to <a href="https://doi.org/10.48550/arXiv.2510.19499">arXiv</a>.
    </p>),
  },
  {
    date: "October 22, 2025",
    slug: "easy-vitessce-preprint",
    description: (<p>
      EasyVitessce preprint uploaded to <a href="https://doi.org/10.48550/arXiv.2510.19532">arXiv</a>.
    </p>),
  },
  {
    date: "October 16, 2025",
    slug: "embl-conf-2025",
    description: (<p>
     Presented a mini-talk describing recent updates to Vitessce during the data visualization session of the <a href="https://www.embl.org/about/info/course-and-conference-office/events/spb25-01/">Spatial biology</a> conference organized by EMBL and the European Society for Spatial Biology (ESSB).
    </p>),
  },
  {
    date: "September 30, 2025",
    slug: "dbmi-science-day-2025",
    description: (<p>
      Presented a poster at the 2025 HMS Department of Biomedical Informatics Science Day.
    </p>),
  },
  {
    date: "June 17, 2025",
    slug: "scstar-acceptance-june-2025",
    description: (<p>
     🎉 Our report on <em>The State of Single-Cell Atlas Data Visualization in the Biological Literature</em> has been published at <a href="https://doi.org/10.1109/MCG.2025.3583979">IEEE Computer Graphics and Applications</a>. It is accompanied by extensive supplementary materials and an interactive <a href="https://keller-mark.github.io/sc-star-site/">survey browser</a>.
    </p>),
  },
  {
    date: "May 5, 2025",
    slug: "sydney-pdsc-may-2025",
    description: (<p>
     Presented at The University of Sydney Precision Data Science Centre's <a href="https://spds.sydney.edu.au/event/vitessce-framework-for-interactive-visualization-of-single-cell-data-and-its-applications/">Statistical Bioinformatics Seminar</a> series.
    </p>),
  },
  {
    date: "April 29, 2025",
    slug: "phd-defense-2025",
    description: (<p>
     ✅ Defense of PhD
    </p>),
  },
  {
    date: "January 28, 2025",
    slug: "scstar-preprint-jan-2025",
    description: (<p>
     Our report on <em>The State of Single-Cell Atlas Data Visualization in the Biological Literature</em> has been uploaded to <a href="https://osf.io/preprints/osf/yt3xz">OSF Preprints</a>.
    </p>),
  },
  {
    date: "November 12, 2024",
    slug: "spatialdata-workshop-2024",
    description: (<p>
     Co-led the visualization interoperability track at the 2024 <a href="https://spatialdata.scverse.org/en/stable/">SpatialData</a> Workshop in Basel, Switzerland (described in a BioHackrXiv <a href="https://osf.io/preprints/biohackrxiv/8ck3e_v1">preprint</a>).
    </p>),
  },
  {
    date: "October 24, 2024",
    slug: "bmi-709-fall-2024",
    description: (<p>
      Served as a teaching fellow for <a href="https://dbmi.hms.harvard.edu/education/courses/bmi-709">BMI 709</a> Creating Biomedical Dashboards with R Shiny.
    </p>),
  },
  {
    date: "October 16, 2024",
    slug: "use-coordination-published",
    description: (<p>
      🎉 Our paper describing <a href="https://use-coordination.dev">Use-Coordination</a> was presented at <a href="https://ieeevis.org/year/2024/program/paper_v-short-1096.html">IEEE VIS 2024</a> and is published in <a href="https://doi.org/10.1109/VIS55277.2024.00041">IEEE Xplore</a>!
    </p>),
  },
  {
    date: "October 8, 2024",
    slug: "dac-meeting-3",
    description: (<p>
      Third meeting with dissertation advisory committee.
    </p>),
  },
  {
    date: "September 27, 2024",
    slug: "vitessce-published",
    description: (<p>
      🎉 Our paper describing <a href="https://vitessce.io">Vitessce</a> has been published in <a href="https://doi.org/10.1038/s41592-024-02436-x">Nature Methods</a>!
    </p>),
  },
  {
    date: "September 16, 2024",
    slug: "kpmp-f2f-fall-2024",
    description: (<p>
      Presented at the 2024 Kidney Precision Medicine Project fall <a href="https://www.kpmp.org/meetings-events">meeting</a> in Bethesda, MD.
    </p>),
  },
  {
    date: "September 12, 2024",
    slug: "dbmi-science-day-2024",
    description: (<p>
      Presented a poster at the 2024 HMS Department of Biomedical Informatics Science Day.
    </p>),
  },
  {
    date: "August 28, 2024",
    slug: "amgen-biotech-day-2024",
    description: (<p>
      Attended the 2024 Amgen Biotech Day in Cambridge, MA.
    </p>),
  },
  /*{
    date: "August 16, 2024",
    slug: "vitessce-paper-acceptance",
    description: (<p>
      Vitessce paper accepted.
    </p>),
  },*/
  {
    date: "July 9, 2024",
    slug: "sibmi-2024-workshop",
    description: (<p>
      Presented at a workshop for trainees during the 2024 <a href="https://dbmi.hms.harvard.edu/education/sibmi">Summer Institute in Biomedical Informatics</a>.
    </p>),
  },
  /*{
    date: "June 15, 2024",
    slug: "use-coordination-acceptance",
    description: (<p>
      Use-Coordination short paper accepted.
    </p>),
  },*/
  {
    date: "May 1, 2024",
    slug: "dac-meeting-2",
    description: (<p>
      Second meeting with dissertation advisory committee.
    </p>),
  },
  {
    date: "April 27, 2024",
    slug: "use-coordination-preprint",
    description: (<p>
      Use-Coordination preprint uploaded to <a href="https://osf.io/vhs7m">OSF Preprints</a>.
    </p>),
  },
  {
    date: "April 2, 2024",
    slug: "scverse-boston-2024",
    description: (<p>
      Co-organized the <a href="https://scverse.org/">Scverse</a> <a href="https://hms-dbmi.github.io/scverse-hackathon-spring-2024/">hackathon</a> in Boston and co-led a project to improve visualization of <a href="https://spatialdata.scverse.org/">SpatialData</a> in Vitessce.
    </p>),
  },
  {
    date: "April 1, 2024",
    slug: "mr-hybrid-preprint-2024",
    description: (<p>
      Contributed to <a href="https://osf.io/preprints/osf/zka2j">preprint</a> describing our approach to visualize 3D spatial data in a mixed reality environment with linked views on a 2D display.
    </p>),
  },
  {
    date: "March 20, 2024",
    slug: "curegn-2024",
    description: (<p>
      Presented our work on interactive visualization of kidney micro-compartmental segmentations at both the <a href="https://repository.niddk.nih.gov/studies/curegn_prime/">CureGN</a> Analytic Workshop and <a href="https://repository.niddk.nih.gov/studies/neptune/">NEPTUNE</a> Pathology Committee meetings.
    </p>),
  },
  {
    date: "March 17, 2024",
    slug: "ji-atlas-builders-2024",
    description: (<p>
      Presented a poster at the NIH-CZI Junior Investigators <a href="https://events.cancer.gov/nci/juniorinvestigatorsatlasbuilders/">Atlas Builders</a> meeting in Bethesda, MD.
    </p>),
  },
  {
    date: "December 5, 2023",
    slug: "ascb-cellbio-fall-2023",
    description: (<p>
      Co-led a roundtable discussion at the 2023 <a href="https://www.ascb.org/cellbio2023/organize/roundtables/">ASCB Cell Bio</a> conference titled <em>Data Visualization in the Age of Cell Atlases: How will spatial technologies influence visualization in cell biology?</em> in Boston, MA.
    </p>),
  },
  {
    date: "October 30, 2023",
    slug: "bmi-709-fall-2023",
    description: (<p>
      Served as a teaching fellow for <a href="https://dbmi.hms.harvard.edu/education/courses/bmi-709">BMI 709</a> Creating Biomedical Dashboards with R Shiny.
    </p>),
  },
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
      Attended the 2023 Kidney Precision Medicine Project fall <a href="https://www.kpmp.org/meetings-events">meeting</a> in Bethesda, MD.
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
    date: "September 17, 2023",
    slug: "asn-kidney-week-2023",
    description: (<p>
      Poster accepted for presentation at the 2023 ASN Kidney Week meeting in Philadelphia, PA.
    </p>),
  },
  {
    date: "September 14, 2023",
    slug: "dbmi-science-day-fall-2023",
    description: (<p>
      Presented a poster at the 2023 HMS Department of Biomedical Informatics <a href="https://www.eventbrite.com/e/dbmi-science-day-2023-tickets-686569075587">Science Day</a>.
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
      🎉 OME-Zarr ecosystem manuscript published in <a href="https://doi.org/10.1007/s00418-023-02209-1">Histochemistry and Cell Biology</a>.
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
    date: "May 19, 2023",
    slug: "big-retreat-2023",
    description: (<p>
      Presented a lightning talk at the 2023 HMS BIG PhD program retreat.
    </p>),
  },
  {
    date: "March 28, 2023",
    slug: "beat-pd-published",
    description: (<p>
      🎉 BEAT-PD manuscript published in <a href="https://doi.org/10.1371/journal.pdig.0000208">PLOS Digital Health</a>.
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
      Presented at the 2023 Kidney Precision Medicine Project spring <a href="https://www.kpmp.org/meetings-events">meeting</a> in Washington, DC.
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
      🎉 Cistrome Explorer published in <a href="https://doi.org/10.1093/bioinformatics/btad018">Bioinformatics</a>.
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
      🎉 Polyphony published in <a href="http://doi.org/10.1109/TVCG.2022.3209408">IEEE TVCG</a>.
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
      🎉 Viv published in <a href="https://doi.org/10.1038/s41592-022-01482-7">Nature Methods</a>.
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
    date: "January 24, 2022",
    slug: "bst-281-spring-2022",
    description: (<p>
      Served as a teaching fellow for <a href="https://www.hsph.harvard.edu/pqg/courses/">BST 281</a> Genomic Data Manipulation.
    </p>),
  },
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
      🎒 First day of PhD <a href="https://bigphd.hms.harvard.edu/" target="_blank">program</a>.
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
      Vitessce can be used as a <a href="https://github.com/vitessce/vitessce">React component</a>, <a href="https://github.com/vitessce/vitessce-python">Jupyter widget</a>, or <a href="https://github.com/vitessce/vitessceR">R htmlwidget</a>, and has been integrated into the <a href="https://portal.hubmapconsortium.org/">HuBMAP data portal</a> as well as <a href="https://vitessce.io/docs/showcase/">several other projects</a>.
      My blog posts related to this project can be found at the Vitessce <a href="https://vitessce.io/blog/">blog</a>.

      {/*This work was presented as a poster at BioVis@ISMB 2019 and BioVis@ISMB 2020.*/}
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
      During the summer of 2020, I participated in the <a href="https://web.archive.org/web/20240423212221/https://www.braincommons.org/beat-pd-dream-challenge-winners-announced/">BEAT-PD DREAM Challenge</a> on winning team dbmi.
      My contributions included exploratory data analysis and a <a href="https://github.com/huangy6/beat_pd/tree/keller-mark/more-snakemake">snakemake pipeline</a> for our team's feature extraction and training code.
    </p>),
  },
  {
    title: "ExploSig",
    slug: "explosig",
    img: "explosig.png",
    description: (<p>
      As an undergraduate research assistant in the <a href="https://web.archive.org/web/20240708034205/https://lrgr.io/">Leiserson Research Group</a> at the University of Maryland,
      I led the development of <a href="https://github.com/lrgr/explosig">ExploSig</a>, a web-based tool to enable exploration and interactive visualization of mutation signatures in human cancer and their etiology.
      ExploSig was presented as a late-breaking poster at <a href="https://recombccb.recomb2019.org/abstracts/">RECOMB 2019</a> and won best poster at <a href="http://biovis.net/2019/index.html">BioVis@ISMB 2019</a>.
      A screenshot is featured in a <a href="https://youtu.be/671Tn7ASHtA?si=747j6tnwVp_HS9nL&t=68">video</a> about the research group.
      More details can be found in my <a href="https://github.com/keller-mark/cmsc499a-visualization-paper/blob/gh-pages/main.pdf">final paper</a> for the course CMSC499A.
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
            In 2025, I completed my <a href="https://phd.markk.co" target="_blank">PhD</a> in Bioinformatics and Integrative Genomics at Harvard Medical School, advised by Professor <a href="http://gehlenborglab.org/">Nils Gehlenborg</a>.
            I received my undergraduate degree from the University of Maryland, College Park in 2019, where I studied Computer Science.
            My research focuses on interactive visualization of single-cell atlas data.
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
          <h3 className="open-source-title">open source</h3>
          <p>I maintain the following open-source tools and utilities.</p>
          <ul className="open-source-list">
            <li><a target="_blank" href="https://github.com/keller-mark/pizzarr">pizzarr</a></li>
            <li><a target="_blank" href="https://github.com/keller-mark/esbuild-py">esbuild-py</a>, <a target="_blank" href="https://github.com/keller-mark/esbuildR">esbuildR</a>, and <a target="_blank" href="https://github.com/keller-mark/oxc-py">oxc-py</a></li>
            <li><a target="_blank" href="https://github.com/keller-mark/dynamic-importmap">dynamic-importmap</a></li>
            <li><a target="_blank" href="https://github.com/keller-mark/anyhtmlwidget">anyhtmlwidget</a></li>
            <li><a target="_blank" href="https://github.com/keller-mark/miqc-py">miqc-py</a></li>
            <li><a target="_blank" href="https://github.com/keller-mark/qdpx-to-json">qdpx-to-json</a></li>
            <li><a target="_blank" href="https://github.com/higlass/higlass-zarr-datafetchers">higlass-zarr-datafetchers</a></li>
            <li><a target="_blank" href="https://github.com/keller-mark/hd-vis-scripts">hd-vis-scripts</a></li>
          </ul>
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
