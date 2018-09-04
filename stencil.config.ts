import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'adaept',
  bundles: [
    {
      components: ['ae-devlist-component', 'ae-icons-component', 'ae-logo-component', 'ae-spinner-component',
        'ae-svg-component', 'ae-svgcss-component']
    }
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
