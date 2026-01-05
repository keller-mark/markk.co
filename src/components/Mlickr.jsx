'use client';

// Mlicker = Mark's Flickr alternative (RIP)

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { DeckGL } from '@deck.gl/react';
import { BitmapLayer } from '@deck.gl/layers';
import { OrthographicView } from '@deck.gl/core';
import { Masonry } from "masonic";
import { create } from 'zustand'

const useThumbnailStore = create((set) => ({
    // Mapping from thumbnail path to [width, height]
    thumbnailToShapeMap: {},
    setThumbnailShape: (imgPath, width, height) => set((state) => ({
        thumbnailToShapeMap: { ...state.thumbnailToShapeMap, [imgPath]: [width, height] }
    })),
}))

const DEFAULT_GL_OPTIONS = { webgl2: true };

function getThumbnailUrl(baseUrl, imgPath) {
    const [album, img] = imgPath.split('/');
    return `${baseUrl}/${album}/thumbnails/${img}`;
}

function getFullUrl(baseUrl, imgPath) {
    return `${baseUrl}/${imgPath}`;
}

function niceAlbumName(albumName) {
    const [date, place] = albumName.split('_');

    const year = date.substring(0, 4);
    const month = date.substring(4, 6);

    return place.charAt(0).toUpperCase() + place.slice(1) + ' (' + month + '-' + year + ')';
}

function Zoomable(props) {
    const {
        imgUrl,
        imgWidth,
        imgHeight,
    } = props;

    const [viewState, setViewState] = useState({
        target: [0, 0],
        zoom: 0.5,
        minZoom: 0,
        maxZoom: 5
    });
    const [gl, setGl] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const bitmapLayer = new BitmapLayer({
        id: imgUrl,
        bounds: [-imgWidth/2, -imgHeight/2, imgWidth/2, imgHeight/2],
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
        <div style={{ width: '100%', height: '100%', backgroundColor: 'rgb(33, 33, 36)', display: 'inline-block', position: 'relative'}}>
            {isLoading === imgUrl ? null : (
                <div style={{ position: 'absolute', top: 0, left: 0 }}>
                    <h3 style={{ color: 'silver' }}>Loading...</h3>
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

function ImageView(props) {
    const {
        photoList,
        currIndex,
        setCurrIndex,
        baseUrl,
    } = props;



    const imgPath = photoList[currIndex];
    const fullUrl = getFullUrl(baseUrl, imgPath);

    const thumbnailToShapeMap = useThumbnailStore((state) => state.thumbnailToShapeMap);

    const [imgWidth, imgHeight] = thumbnailToShapeMap?.[imgPath] || [1, 1];

    const handlePrev = useCallback(() => {
        setCurrIndex(prev => (prev - 1 < 0 ? photoList.length-1 : prev-1))
    }, [photoList]);

    const handleNext = useCallback(() => {
        setCurrIndex(prev => (prev+1 > photoList.length-1 ? 0 : prev+1));
    }, [photoList]);

    useEffect(() => {
        function onKeyDown(e) {
            if(e.key === "ArrowLeft") {
                handlePrev();
            }
            if(e.key === "ArrowRight") {
                handleNext();
            }
        }
        window.addEventListener("keydown", onKeyDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
        }
    }, [handlePrev, handleNext]);

    return (
        <div className="image-view-inner">
            <button onClick={handlePrev}>Previous</button>
            <Zoomable
                imgUrl={fullUrl}
                imgWidth={imgWidth}
                imgHeight={imgHeight}
            />
            <button onClick={handleNext}>Next</button>
        </div>
    );
}

function MasonryCard({ index, data: { id, name, src, handleClick, setThumbnailShape, baseUrl }, width }) {
    const thumbUrl = getThumbnailUrl(baseUrl, src);
    const [imgHeight, setImgHeight] = useState(null);
    const [imgWidth, setImgWidth] = useState(null);

    function handleLoad({ nativeEvent: { target } }) {
        setImgHeight(target.naturalHeight);
        setImgWidth(target.naturalWidth);
        setThumbnailShape(src, target.naturalWidth, target.naturalHeight)
    }

    return (
            <img
                style={{ cursor: 'pointer' }}
                src={thumbUrl}
                width={width}
                height={(width/imgWidth * imgHeight) || 300}
                onLoad={handleLoad}
                onClick={() => handleClick(index)}
            />
  );
}

function AlbumView(props) {
    const {
        albumId,
        photoList,
        setAlbum,
        baseUrl,
    } = props;

    const setThumbnailShape = useThumbnailStore((state) => state.setThumbnailShape);

    const [currIndex, setCurrIndex] = useState(null);

    const [thumbnailSize, setThumbnailSize] = useState(300);

    function handleClick(nextIndex) {
        setCurrIndex(nextIndex);
    }

    function handleSliderChange(event) {
        setThumbnailSize(parseInt(event.target.value));
    }

    const isSingleImage = currIndex !== null;

    return (
        <div className="album-view">
            <div className="album-view-toolbar">
                {!isSingleImage ? (<button onClick={() => setAlbum(null)}>Back to albums list</button>) : null}
                {isSingleImage ? (<button onClick={() => setCurrIndex(null)}>Back to album</button>) : null}
                <h4 className="album-view-title">{niceAlbumName(albumId)}</h4>
                {!isSingleImage ? (<input type="range" min={100} max={500} step={1} value={thumbnailSize} onChange={handleSliderChange} />) : null}
            </div>
            {isSingleImage ? (
                <div className="image-view">
                    <ImageView
                        photoList={photoList}
                        currIndex={currIndex}
                        setCurrIndex={setCurrIndex}
                        baseUrl={baseUrl}
                    />
                </div>
            ) : (
                <div style={{ backgroundColor: 'rgb(33, 33, 36)' }}>
                    <Masonry
                        items={photoList.map((v) => ({ id: v, name: v, src: v, handleClick, setThumbnailShape, baseUrl }))}
                        render={MasonryCard}
                        // Adds 5px of space between the grid cells
                        columnGutter={5}
                        // Sets the minimum column width to 172px
                        columnWidth={thumbnailSize}
                        // Pre-renders 5 windows worth of content
                        itemHeightEstimate={300}
                    />
                </div>
            )}
        </div>
    );
}

function AlbumListMasonryCard({ index, data: { id, albumName, albumList, setAlbum, baseUrl }, width }) {
    const firstImgUrl = getThumbnailUrl(baseUrl, albumList[0]);
    return (
        <div key={albumName} className="album-card-container">
            <div key={albumName} className="album-card" onClick={() => setAlbum(albumName)}>
                <img
                    width="300px"
                    src={firstImgUrl}
                />
                <div className="album-card-overlay">
                    <div className="album-card-text">
                        <p className="album-title">{niceAlbumName(albumName)}</p>
                        <p className="album-subtitle">{albumList.length} photos</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AlbumList(props) {
    const {
        albums,
        baseUrl,
        setAlbum,
    } = props;

    return (
        <div className="album-grid-container">
            <div className="album-grid">
                <Masonry
                    items={Object.entries(albums).map(([albumName, albumList]) => ({ id: albumName, albumName, albumList, setAlbum, baseUrl }))}
                    render={AlbumListMasonryCard}
                    // Adds 5px of space between the grid cells
                    columnGutter={5}
                    // Sets the minimum column width to 172px
                    columnWidth={300}
                    // Pre-renders 5 windows worth of content
                    overscanBy={2}
                />
            </div>
        </div>
    );
}


export default function Mlickr(props) {
    const {
        baseUrl,
        photoList,
    } = props;

    const [currAlbum, setAlbum] = useState(null);

    const albums = useMemo(() => photoList.reduce((a, h) => {
        const [album] = h.split('/');
        if (!a[album]) {
            a[album] = [h];
        } else {
            a[album].push(h);
        }
        return a;
    }, {}), [photoList]);

    return (currAlbum ? (
        <AlbumView
            albumId={currAlbum}
            photoList={albums[currAlbum]}
            setAlbum={setAlbum}
            baseUrl={baseUrl}
        />
    ) : (
        <AlbumList
            albums={albums}
            baseUrl={baseUrl}
            setAlbum={setAlbum}
        />
    ));
}
