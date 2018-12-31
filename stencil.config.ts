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
      // uncomment the following line to disable service workers in production
      // serviceWorker: null
    }
  ],
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()]
    })
  ]
};