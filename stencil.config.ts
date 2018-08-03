import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import * as autoprefixer from 'autoprefixer';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'adaept',
  bundles: [
    { components: ['ae-logo-component', 'ae-devlist-component', 'ae-svg-component', 'ae-spinner-component', 'ae-icons-component'] }
  ],
  outputTargets: [
    {
      type: 'www',
    }
  ],  
  globalStyle: 'src/global/app.css',
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()]
    })
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
