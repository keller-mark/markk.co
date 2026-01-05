'use client';

import React from 'react';
import Mlickr from './Mlickr.jsx';

export default function Gallery(props) {
  const {
    photoList,
    baseUrl = "https://pub-890deb189e5f4258b3201b990118f16b.r2.dev",
  } = props;
    return (
        <div style={{ height: 'calc(100vh - 95px)', display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(33, 33, 36)' }}>
            {/*<p>Old photos can be viewed on <a href="https://www.flickr.com/photos/83712651@N04/">Flickr</a>.</p>*/}
            <div style={{ width: '100%', height: '100%' }}>
                <Mlickr
                    photoList={photoList}
                    baseUrl={baseUrl}
                />
            </div>
        </div>
    );
}
