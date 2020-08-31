import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import { babel } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import scss from 'rollup-plugin-scss';
import visualizer from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';

import { join } from 'path';
import merge from 'lodash/merge';
import React from 'react';
import ReactIs from 'react-is';

import pkg from './package.json';
import { htmlFromTemplate } from './rollup.config.utils';


// Constants for output files:
const SRC_DIR = 'src';
const BUILD_DIR = 'build';
const OUTPUT_JS = {
    'production': 'index.min.js',
    'development': 'index.js',
};
const OUTPUT_CSS = 'index.css';
const OUTPUT_HTML = 'index.html';

// Only import dev server if necessary:
let serve = (() => {});
let livereload = (() => {});
if(process.env.NODE_ENV === 'development') {
    serve = require('rollup-plugin-serve');
    livereload = require('rollup-plugin-livereload');
}

// The base rollup configuration. To be merged with dev or prod object.
const baseConfig = {
    input: join(SRC_DIR, 'index.js'),
    output: {
        file: join(BUILD_DIR, OUTPUT_JS[process.env.NODE_ENV]),
        // We want sourcemap files to be created for debugging purposes.
        // https://rollupjs.org/guide/en/#outputsourcemap
        sourcemap: true,
    },
    plugins: [
        // Tell Rollup how to resolve packages in node_modules.
        // Reference: https://github.com/rollup/plugins/tree/master/packages/commonjs#using-with-rollupplugin-node-resolve
        resolve({
            browser: true,
            preferBuiltins: false,
        }),
        // Tell Rollup how to handle CSS and SCSS imports.
        scss({
            output: join(BUILD_DIR, OUTPUT_CSS),
        }),
        // Tell Rollup how to handle JSON imports.
        json(),
        // Need to convert CommonJS modules in node_modules to ES6.
        // Reference: https://github.com/rollup/plugins/tree/master/packages/node-resolve#using-with-rollupplugin-commonjs
        commonjs({
            // Using this RegEx rather than 'node_modules/**' is suggested, to enable symlinks.
            // Reference: https://github.com/rollup/plugins/tree/master/packages/commonjs#usage-with-symlinks
            include: /node_modules/,
            namedExports: {
                // Need to explicitly tell Rollup how to handle imports like `React, { useState }`
                // Reference: https://github.com/rollup/rollup-plugin-commonjs/issues/407#issuecomment-527837831
                // Reference: https://github.com/facebook/react/issues/11503
                'node_modules/react/index.js': Object.keys(React),
                'node_modules/react-is/index.js': Object.keys(ReactIs),
            },
        }),
        // Tell Rollup to compile our source files with Babel.
        // Note: This plugin respects Babel config files by default.
        // Reference: https://github.com/rollup/plugins/tree/master/packages/babel
        babel({
            // The 'runtime' option is recommended when bundling libraries.
            // Reference: https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
            babelHelpers: 'runtime',
            // Reference: https://github.com/rollup/plugins/issues/381#issuecomment-627215009
            skipPreflightCheck: true,
            // Only transpile our source code.
            // Reference: https://github.com/rollup/plugins/tree/master/packages/babel#extensions
            exclude: 'node_modules/**' // only transpile our source code
        }),
        replace({
            // React uses process.env to determine whether a development or production environment.
            // Reference: https://github.com/rollup/rollup/issues/487#issuecomment-177596512
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        html({
            title: pkg.name,
            publicPath: '/',
            fileName: OUTPUT_HTML,
            template: ({ publicPath, title }) => {
                return htmlFromTemplate({
                    publicPath: (process.env.NODE_ENV === 'production' ? publicPath : './'),
                    title: title,
                    nodeEnv: process.env.NODE_ENV,
                    cssFile: OUTPUT_CSS,
                    jsFile: OUTPUT_JS[process.env.NODE_ENV],
                });
            }
        })
    ],
};

const devConfig = {
    output: {
        format: 'umd',
    },
    plugins: [
        ...baseConfig.plugins.map(() => {}),
        visualizer({
            filename: join(BUILD_DIR, 'stats.html')
        }),
        serve({
            port: 8000,
            contentBase: BUILD_DIR
        }),
        livereload(BUILD_DIR)
    ]
};

const prodConfig = {
    output: {
        format: 'iife',
        plugins: [
            terser()
        ],
    }
};

export default merge(
    (process.env.NODE_ENV === 'development' ? devConfig : prodConfig), 
    baseConfig
);