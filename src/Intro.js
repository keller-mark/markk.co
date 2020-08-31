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


const featuredProjects = [
    {
        title: "Cistrome Explorer",
        slug: "cistrome-explorer",
        img: "cistrome-explorer.png",
        description: (<p>
            Prior to starting graduate studies, I worked with the <a href="http://gehlenborglab.org">Gehlenborg Lab</a> on <a href="http://cisvis.gehlenborglab.org">Cistrome Explorer</a>, a wrapper component for <a href="http://higlass.io">HiGlass</a> with features for viewing <a href="http://cistrome.org/db/">CistromeDB</a> data and querying <a href="http://toolkit.cistrome.org/">CistromeDB Toolkit</a>.
        </p>),
    },
    {
        title: "4CE",
        slug: "forsee",
        img: "4ce.png",
        description: (<p>
            During the spring and summer of 2020, I contributed to <a href="https://github.com/covidclinical/visualization-notebooks">visualization and analysis</a> of COVID-19 data with the Consortium for Clinical Characterization of COVID-19 by EHR (<a href="http://covidclinical.net">4CE</a>).
        </p>),
    },
    {
        title: "BEAT-PD",
        slug: "beat-pd",
        img: "beat-pd.png",
        description: (<p>
            During the summer of 2020, I participated in the <a href="https://www.braincommons.org/beat-pd-dream-challenge-winners-announced/">BEAT-PD DREAM Challenge</a> on team dbmi.
            My contributions included exploratory data analysis and a <a href="https://snakemake.readthedocs.io/en/stable/">snakemake</a> pipeline for our team's feature extraction and training code.
        </p>),
    },
    {
        title: "ExploSig",
        slug: "explosig",
        img: "explosig.png",
        description: (<p>
            As an undergraduate research assistant in the <a href="https://lrgr.io">Leiserson Research Group</a> at the University of Maryland,
            I led the development of <a href="http://explosig.lrgr.io">ExploSig</a>, a web-based tool to enable exploration and interactive visualization of mutation signatures in human cancer and their etiology.
            ExploSig was presented as a late-breaking poster at <a href="https://recombccb.recomb2019.org/abstracts/">RECOMB 2019</a> and won best poster at <a href="http://biovis.net/2019/index.html">BioVis@ISMB 2019</a>.
        </p>),
    },
]

export default function Intro() {

    return (
        <Grid>
            <Row>
                <Column sm={4} className="mk--pt-1">
                <p>
                    I am currently a student in the Bioinformatics and Integrative Genomics PhD program at Harvard Medical School.
                    I recently graduated from the University of Maryland, College Park where I studied Computer Science.
                    My research interests include data visualization and computational biology.
                </p>
                </Column>
            </Row>
            <Row>
                <Column sm={4} lg={6} className="mk--pt-1">
                <h3>Featured Projects</h3>
                <Accordion className="mk--pt-1">
                    {featuredProjects.map(project => (
                        <AccordionItem key={project.slug} title={project.title}>
                            {project.description}
                        </AccordionItem>
                    ))}
                </Accordion>
                </Column>
            </Row>
        </Grid>
    );
}