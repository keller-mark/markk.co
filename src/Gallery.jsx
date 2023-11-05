import React from 'react';
import photoList from './photo_list.json';
import Mlickr from './Mlickr';

export default function Gallery() {

    return (
        <div>
            <h3>Gallery</h3>
            <p>Old photos can be viewed on <a href="https://www.flickr.com/photos/83712651@N04/">Flickr</a>.</p>
            <Mlickr photoList={photoList} />
        </div>
    );
}