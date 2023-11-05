import React, { useState } from 'react';
import { DeckGL } from '@deck.gl/react';
import { BitmapLayer } from '@deck.gl/layers';
import { COORDINATE_SYSTEM, OrthographicView } from '@deck.gl/core';
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
import { Masonry } from "masonic";
import photoList from './photo_list.json';

const DEFAULT_GL_OPTIONS = { webgl2: true };

function Zoomable(props) {
    const {
        imgUrl,
    } = props;

    const [viewState, setViewState] = useState({
        target: [4896/2, 3264/2],
        zoom: -1,
        minZoom: -40,
        maxZoom: 40
    });
    const [gl, setGl] = useState(null);

    const layers = [
        new BitmapLayer({
            id: 'BitmapLayer',
            //_imageCoordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
  
            /* props from BitmapLayer class */
            
            bounds: [0, 0, 4896, 3264],
            // desaturate: 0,
            image: 'https://pub-890deb189e5f4258b3201b990118f16b.r2.dev/20220408_florence/20220408-DSCF6185.png',
        }),
    ];

    const views = [
        new OrthographicView({
            id: 'ortho', flipY: false,
        })
    ];

    return (
        <div style={{ width: '500px', height: '500px', border: '1px solid gray', display: 'inline-block'}}>
            <DeckGL
                glOptions={DEFAULT_GL_OPTIONS}
                onWebGLInitialized={setGl}
                onViewStateChange={({ viewState: nextViewState }) => setViewState({ target: nextViewState.target, zoom: nextViewState.zoom })}
                useDevicePixels={true}
                viewState={viewState}
                controller={true}
                views={views} // id is a fix for https://github.com/uber/deck.gl/issues/3259
                layers={gl ? layers : []}
            />
        </div>
    )
}

function MasonryCard({ index, data: { id, name, src, handleClick }, width }) {
    return (
    <div onClick={handleClick}>
      {/*<img src={`https://pub-890deb189e5f4258b3201b990118f16b.r2.dev/${src}`} width={width} />*/}
    </div>
  );
}




export default function Gallery() {
    const [showZoomable, setShowZoomable] = useState(false);

    const handleClick = () => {
        setShowZoomable(true);
    }

    return (
        <Grid className="main-grid">
            <h3>Gallery</h3>
            <Zoomable />
            <Masonry
                items={photoList.map(v => ({ id: v, name: v, src: v, handleClick }))}
                render={MasonryCard}
                // Adds 8px of space between the grid cells
                columnGutter={8}
                // Sets the minimum column width to 172px
                columnWidth={400}
                // Pre-renders 5 windows worth of content
                overscanBy={2}
            />
        </Grid>
    );
}