import React, { useLayoutEffect } from 'react';
import Header from './Header';
import Intro from './Intro';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default function App() {
    // Support squircles.
    useLayoutEffect(() => {
        if (CSS && CSS.paintWorklet) {
            // Reference: https://css-houdini.rocks/smooth-corners/
            const src = `
            registerPaint('smooth-corners', class {
                static get inputProperties() {
                    return [
                        '--smooth-corners'
                    ]
                }
                paint(ctx, geom, properties) {
                    const c = properties.get('--smooth-corners').toString()
            
                    ctx.fillStyle = 'black'
            
                    const n = c
                    let m = n
                    if (n > 100) m = 100
                    if (n < 0.00000000001) m = 0.00000000001
                    const r = geom.width / 2
                    const w = geom.width / 2
                    const h = geom.height / 2
            
                    ctx.beginPath();
            
                    for (let i = 0; i < (2*r+1); i++) {
                        const x = (i-r) + w
                        const y = (Math.pow(Math.abs(Math.pow(r,m)-Math.pow(Math.abs(i-r),m)),1/m)) + h
            
                        if (i == 0)
                            ctx.moveTo(x, y)
                        else
                            ctx.lineTo(x, y)
                    }
            
                    for (let i = (2*r); i < (4*r+1); i++) {
                        const x = (3*r-i) + w
                        const y = (-Math.pow(Math.abs(Math.pow(r,m)-Math.pow(Math.abs(3*r-i),m)),1/m)) + h
                        ctx.lineTo(x, y)
                    }
            
                    ctx.closePath()
                    ctx.fill()
                }
            })
            `;
            const blob = new Blob([src], { type: 'text/javascript' });
            CSS.paintWorklet.addModule(URL.createObjectURL(blob));
          }
    }, []);

    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/blog">
                    <p>Coming soon.</p>
                </Route>
                <Route path="/photos">
                    <p>Coming soon. For now some photos can be viewed on <a href="https://www.flickr.com/photos/83712651@N04/">Flickr</a>.</p>
                </Route>
                <Route path="/">
                    <Intro/>
                </Route>
            </Switch>    
        </Router>
    );
}