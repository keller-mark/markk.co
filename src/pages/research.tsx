import { Link } from 'waku';

// Copied from https://github.com/keller-mark/markk.co/blob/87ecbd028c2409e80c6f1b243e9913a48d11bf12/src/Intro.jsx
const news = [
  {
    date: "January 28, 2026",
    slug: "bwh-seminar-jan-2026",
    description: (<p>
      Presented at the Multiple Omics Seminar at Channing Division of Network Medicine at Brigham and Women's Hospital, Boston, MA.
    </p>),
  },
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

export default async function ResearchPage() {
  const data = await getData();

  return (
    <div className="padded-content">
      <title>{data.title}</title>
      <h2 style={{ marginBottom: '10px' }}>Research Themes</h2>
      <div className="theme-grid">
        <div>
          <h3>Visual Analytics Systems for Multi-Modal and Spatial Single-Cell Data</h3>
          <p>
            Since 2019, I have led the development of the <a href="https://vitessce.io">Vitessce</a> framework, which enables visualization of data from widely used single-cell data formats directly in a web browser.
            <div className="pills">
              <span><a href="https://vitessce.io">Vitessce</a></span>
              <span><a href="https://github.com/vitessce/easy_vitessce">EasyVitessce</a></span>
              <span className="thesis-pill"><a href="https://phd.markk.co">Thesis Chapter 3</a></span>
            </div>
            <details>
              <summary>Details</summary>
              Vitessce supports multiple interactive plot types, ranging from dimensionality reduction
              scatterplots to scalable heatmaps to domain-specific dot plots to statistical charts such as histograms and
              violin plots. Leveraging my experience in working with genome-mapped and bioimaging data, Vitessce also
              enables analysts to integratively view these data types alongside single-cell data in a single interactive tool,
              reducing friction and enabling relation of findings across data modalities. Vitessce has been integrated into
              specialized applications, such as Polyphony for human-in-the-loop cell type annotation, as well as large
              atlas mapping consortia data portals and commercial software solutions. Analysts can use Vitessce directly
              in scripts and notebooks via packages in Python and R.
            </details>
          </p>
        </div>
        <div>
          <h3>Comparative Analysis of Data from Multiple Single-Cell Experiments</h3>
          <p>
            In multiple projects, I have used Vitessce to build interactive visualization systems
            tailored to comparison of multiple single-cell datasets (i.e., between conditions, such as health vs. disease or between disease subtypes).
            <div className="pills">
              <span><a href="https://github.com/scpolyphony">Polyphony</a></span>
              <span><a href="https://github.com/hms-dbmi/cistrome-explorer">Cistrome Explorer</a></span>
              <span className="thesis-pill"><a href="https://phd.markk.co">Thesis Chapter 4</a></span>
            </div>
            <details>
              <summary>Details</summary>
              A key goal of the single-cell field is to leverage metadata (e.g., clinical variables of tissue donors) to make comparisons between conditions
              that can inform the development of diagnostics, prognostics, and therapeutics.
              <br/>
              <br/>
              In the Polyphony project, I contributed to the development of an interactive system for reference-based cell
              type annotation. Reference-based cell type annotation reduces the effort required
              to annotate cells by projecting a new "query" dataset onto an existing, well-annotated
              "reference" dataset and transferring cell type labels from reference to query.
              Polyphony is a human-in-the-loop system that enables expert users to steer a machine learning model to make improved cell
              type annotation predictions.
              <br/>
              <br/>
              In the Compasce (COMPAre Single Cell Experiments) project, I developed an interactive system to explore and confirm the
              results of comparative analysis of single-cell data, focusing on comparisons between
              case and control conditions (e.g., samples from donors with Acute Kidney Injury versus
              reference/non-disease samples).
              The design of this system has been informed by interviews that I conducted with individuals from its intended user audience, comprising biologists, pathologists, and clinicians within the Kidney Precision Medicine Project (KPMP).
              Compasce contains both confirmatory (e.g., How does abundance of a biomarker of interest differ between groups?) and exploratory (e.g., What are the most significant differences between groups?) interfaces and visualizations.
            </details>
          </p>
        </div>
        <div>
          <h3>Reproducibility in Research Software Development and Scientific Data Processing</h3>
          <p>
            I am passionate about reproducibility in my scientific and software development work
            <div className="pills">
              <span><a href="https://github.com/keller-mark/use-coordination">Use-Coordination</a></span>
              <span className="thesis-pill"><a href="https://phd.markk.co">Thesis Appendix A</a></span>
            </div>
            <details>
              <summary>Details</summary>
              I use and advocate for workflow management tools such as <a href={`https://github.com/search?q=owner%3Akeller-mark%20snakemake&type=code`}>Snakemake</a> to develop efficient data processing pipelines that can be executed with a single command.
              In my visualization tool development, I have integrated techniques such as <a href="https://use-coordination.dev/docs/provenance-example/">provenance tracking</a> (e.g., undo/redo for action recovery).
              My tools load data from community standard data formats (e.g., AnnData, SpatialData, OME-TIFF, OME-Zarr).
              When possible, I use client-side web architectures that avoid complex server-side infrastructure requirements.
            </details>
          </p>
        </div>
        <div>
          <h3>Domain-Specific Literature Surveys to inform Visualization Research</h3>
          <p>
            I am interested in meta-science and leveraging the wealth of information that is contained in the scientific literature to inform future visualization research.
            <div className="pills">
              <span><a href="https://keller-mark.github.io/sc-star-site/">Single-Cell Survey</a></span>
              <span><a href="https://dimension-reduction-vis.github.io/">Dimensionality Reduction Survey</a></span>
              <span className="thesis-pill"><a href="https://phd.markk.co">Thesis Chapter 2</a></span>
            </div>
            <details>
              <summary>Details</summary>
              I conducted a survey of over 1,800 figures appearing within 45 publications describing
              single-cell data to provide an overview of the landscape of static single-cell data visualizations.
              I annotated the figures with 85 categories related to plot types, data types,
              figure purpose, and other visualization characteristics.
              This survey has enabled quantification of visualization usage patterns within the single-cell literature and provides background on the single-cell field for researchers from other domains.
            </details>
          </p>
        </div>
      </div>
      <h2 style={{ marginTop: '30px', marginBottom: '10px' }}>Latest News</h2>
      <div className="research-news">
        {news.map(item => (
          <div className="news-item" key={item.slug}>
            <div className="date-col">{item.date}</div>
            <div className="desc-col">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Research | Mark',
    headline: 'Research page',
    body: 'Some publications page contents here...',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
