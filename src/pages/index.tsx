import { Link } from 'waku';
//import { Counter } from '../components/counter';

export default async function HomePage() {
  const data = await getData();

  return (
    <div className="padded-content">
      <title>{data.title}</title>
      <p className="about">
        <div className="blob" style={{ backgroundImage: `url(${data.profilePhoto})` }}></div>
        I'm a Research Fellow in Biomedical Informatics at Harvard Medical School.
        My <Link to="/research">research</Link> addresses challenges in visual analysis of large-scale, interconnected, and heterogeneous biological datasets.
        I apply techniques from <strong>bioinformatics</strong>, <strong>information visualization</strong>, and <strong>computer science</strong>.
        <br/>
        <br/>
        In 2025, I completed my <a href="https://phd.markk.co" target="_blank">PhD</a> in Bioinformatics and Integrative Genomics at Harvard Medical School, advised by <a href="https://hidivelab.org" target="_blank">Nils Gehlenborg</a>.
        During my PhD, I explored how visual analytics systems can be used for interactive visualization of multimodal and spatial single-cell datasets, addressing challenges that range in scale from individual experiments to whole atlases.
        <br/>
        <br/>

        I received my undergraduate degree from the University of Maryland, College Park 🐢 in 2019, where I studied <a href="https://www.cs.umd.edu/" target="_blank">Computer Science</a> and worked as an <a href="https://github.com/keller-mark/cmsc499a-visualization-paper/blob/gh-pages/main.pdf" target="_blank">undergraduate research assistant</a> in the <a href="https://web.archive.org/web/20240708034205/https://lrgr.io/">Leiserson Research Group</a> on analysis of cancer genomics data using mutational signature decomposition techniques.
        <br/>
        <br/>
        My long-term goal is to develop tools that enable interpretation and communication of complex and interconnected biological datasets, informed by close collaboration with target users and existing literature.
      </p>

    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Mark Keller',
    profilePhoto: '/images/mark.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
