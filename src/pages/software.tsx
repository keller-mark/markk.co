import { Link } from 'waku';

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

function getYoutubeEmbedUrl(s: string) {
  return `https://www.youtube.com/embed/` + s.split('/').at(-1);
}

export default async function SoftwarePage() {
  const data = await getData();

  return (
    <div className="padded-content software-page">
      <title>{data.title}</title>
      <div className="software-text-col">
        <p>
          To achieve my <Link to="/research">research goals</Link>, I develop software.
          This includes web-based tools for interactive visualization, as well as many utilities that solve common problems that have arisen in my work.
          <br/>
          <br/>
          I have created the following open-source tools and utilities.
        </p>
        <ul className="open-source-list">
          <li><a target="_blank" href="https://github.com/keller-mark/use-coordination">use-coordination</a>: Library that enables visualization developers to implement coordinated multiple views in React-based visualization systems.</li>
          <li><a target="_blank" href="https://github.com/keller-mark/pizzarr">pizzarr</a>: R package for reading and writing data in
          Zarr (v2) format.</li>
          <li><a target="_blank" href="https://github.com/keller-mark/esbuild-py">esbuild-py</a>, <a target="_blank" href="https://github.com/keller-mark/esbuildR">esbuildR</a>, and <a target="_blank" href="https://github.com/keller-mark/oxc-py">oxc-py</a>: Bindings to esbuild and oxc, enabling transformation of JSX to JS and thereby usage of JSX without NodeJS (e.g., during AnyWidget development).</li>
          <li><a target="_blank" href="https://github.com/keller-mark/dynamic-importmap">dynamic-importmap</a>: Rewrite bare import specifiers at runtime in the browser. Enables usage of importmaps in contexts such as AnyWidget.</li>
          <li><a target="_blank" href="https://github.com/keller-mark/anyhtmlwidget">anyhtmlwidget</a>: Brings core concepts from anywidget to R.</li>
          <li><a target="_blank" href="https://github.com/keller-mark/miqc-py">miqc-py</a>: Python implementation of miQC: probablistic quality control of scRNA-seq data.</li>
          <li><a target="_blank" href="https://github.com/keller-mark/qdpx-to-json">qdpx-to-json</a>: Convert QDPX files (exported from qualitative coding software such as AtlasTI) into JSON and PNG files.</li>
          <li><a target="_blank" href="https://github.com/higlass/higlass-zarr-datafetchers">higlass-zarr-datafetchers</a>: Plugin data fetchers for HiGlass, supporting visualization of Zarr-based files located in object storage systems.</li>
          <li><a target="_blank" href="https://github.com/keller-mark/hd-vis-scripts">hd-vis-scripts</a>: Scripts for bibliometric analysis of literature which cites dimensionality reduction method papers.</li>
        </ul>
        <br/>
        <p>I have contributed here and there to open-source projects led by others.</p>
        <ul className="open-source-list">
          <li><a target="_blank" href="https://github.com/hms-dbmi/viv">viv</a>: JavaScript library for loading and rendering
          OME-TIFF and OME-Zarr bioimaging data using WebGL</li>
          <li><a target="_blank" href="https://github.com/manzt/zarrita.js">zarrita.js</a>: JavaScript library for reading data in Zarr
          format</li>
          <li><a target="_blank" href="https://github.com/manzt/anywidget">anywidget</a>: Abstraction for streamlined creation of Jupyter widgets that support all notebook environments.</li>
          <li><a target="_blank" href="https://github.com/higlass/higlass-bigwig-datafetcher">higlass-bigwig-datafetcher</a>: Plugin data fetcher for HiGlass, enabling visualization of BigWig files.</li>
        </ul>
        <br/>
        <p>
          Prior to my experiences developing software in academic research settings, I worked as a software
          engineering intern in the financial and defense sectors. Together, these experiences taught me best
          practices such as agile methodologies, continuous integration and deployment, unit and integration testing,
          cloud services, industry-standard frameworks for user interfaces and documentation, and information security. I
          bring this expertise to my current research software engineering efforts, and I continue to grow my skills
          through close collaboration with other engineers and those in adjacent roles, such as UI/UX designers, in the
          HIDIVE Lab, in nearby labs at HMS, and in collaborating organizations.
          <br/>
          <br/>
          See more of my open-source activities and contributions on <a target="_blank" href="https://github.com/keller-mark">GitHub</a>.
          <br/>
          <br/>
        </p>
      </div>
      <div className="software-videos-col">
        <h4>software demos</h4>
        <div className="demo-grid">
          {screenRecordings.map(item => (
            <div key={item.url} className="demo-item">
              <iframe height="400" src={getYoutubeEmbedUrl(item.url)} allow="fullscreen;" allowFullScreen></iframe>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Software | Mark',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
