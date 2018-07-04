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
    { components: ['ae-logo-component', 'ae-devlist-component', 'ae-svg-component'] }
  ]
};
