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
        imgWidth,
        imgHeight,
    } = props;

    const [viewState, setViewState] = useState({
        target: [imgWidth/2, imgHeight/2],
        zoom: -1,
        minZoom: -40,
        maxZoom: 40
    });
    const [gl, setGl] = useState(null);

    const layers = [
        new BitmapLayer({
            id: 'BitmapLayer',
            bounds: [0, 0, imgWidth, imgHeight],
            image: imgUrl,
        }),
    ];

    const views = [
        new OrthographicView({
            id: 'ortho', flipY: false,
        })
    ];

    return (
        <div style={{ width: '100%', height: '80vh', backgroundColor: 'rgb(146, 146, 146)', display: 'inline-block', position: 'relative'}}>
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
    const imgUrl = `https://pub-890deb189e5f4258b3201b990118f16b.r2.dev/${src}`;
    const [imgHeight, setImgHeight] = useState(null);
    const [imgWidth, setImgWidth] = useState(null);

    function handleLoad({ nativeEvent: { target } }) {
        setImgHeight(target.naturalHeight);
        setImgWidth(target.naturalWidth);
    }

    return (
        <img
            src={imgUrl}
            width={width}
            onLoad={handleLoad}
            onClick={() => handleClick(imgUrl, imgWidth, imgHeight)}
        />
  );
}




export default function Gallery() {
    const [showZoomable, setShowZoomable] = useState(false);

    function handleClick(imgUrl, imgWidth, imgHeight) {
        setShowZoomable({ imgUrl, imgWidth, imgHeight });
    }

    return (
        <Grid className="main-grid">
            <h3>Gallery</h3>
            {showZoomable ? (
                <Zoomable
                    imgUrl={showZoomable.imgUrl}
                    imgWidth={showZoomable.imgWidth}
                    imgHeight={showZoomable.imgHeight}
                />
            ) : null}
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