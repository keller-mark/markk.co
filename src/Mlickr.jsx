import React, { useState } from 'react';
import { DeckGL } from '@deck.gl/react';
import { BitmapLayer } from '@deck.gl/layers';
import { OrthographicView } from '@deck.gl/core';
import { Masonry } from "masonic";

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
        minZoom: -3,
        maxZoom: 3
    });
    const [gl, setGl] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const bitmapLayer = new BitmapLayer({
        id: imgUrl,
        bounds: [0, 0, imgWidth, imgHeight],
        image: imgUrl,
        loadOptions: {
            fetch: async (p1, p2) => {
                const r = await fetch(p1, p2);
                setIsLoading(p1);
                return r;
            },
        },
        visible: true,
        updateTriggers: {
            image: [imgUrl],
            bounds: [imgUrl]
        }
    });

    const layers = [
        bitmapLayer,
    ];

    const views = [
        new OrthographicView({
            id: 'ortho',
            flipY: false,
        })
    ];

    return (
        <div style={{ width: '100%', height: '80vh', backgroundColor: 'rgb(146, 146, 146)', display: 'inline-block', position: 'relative'}}>
            {isLoading === imgUrl ? null : (
                <div style={{ position: 'absolute', top: 0, left: 0 }}>
                    <h3>Loading...</h3>
                </div>
            )}
            <DeckGL
                glOptions={DEFAULT_GL_OPTIONS}
                onWebGLInitialized={setGl}
                onViewStateChange={({ viewState: nextViewState }) => setViewState({
                    target: nextViewState.target,
                    zoom: nextViewState.zoom,
                    minZoom: nextViewState.minZoom,
                    maxZoom: nextViewState.maxZoom,
                })}
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




export default function Mlickr(props) {
    const {
        photoList,
    } = props;
    const [showZoomable, setShowZoomable] = useState(false);
    const [thumbnailSize, setThumbnailSize] = useState(300);

    function handleClick(imgUrl, imgWidth, imgHeight) {
        setShowZoomable({ imgUrl, imgWidth, imgHeight });
    }

    function handleSliderChange(event) {
        setThumbnailSize(parseInt(event.target.value));
    }

    return (
        <div>
            <input type="range" min={100} max={500} step={1} value={thumbnailSize} onChange={handleSliderChange} />
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
                // Adds 5px of space between the grid cells
                columnGutter={5}
                // Sets the minimum column width to 172px
                columnWidth={thumbnailSize}
                // Pre-renders 5 windows worth of content
                overscanBy={2}
            />
        </div>
    );
}