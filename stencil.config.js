const sass = require('@stencil/sass');

exports.config = {
  namespace: 'adaept',
  outputTargets:[
    { 
      type: 'dist' 
    },
    { 
      type: 'www',
      serviceWorker: false
    }
  ],
  bundles: [
    { components: ['ae-logo-component', 'ae-devlist-component', 'ae-svg-component', 'ae-spinner-component','ae-icons-component'] }
  ],
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}