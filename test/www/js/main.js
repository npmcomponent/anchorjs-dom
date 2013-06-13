require.config({
  baseUrl: 'js/lib',
  paths: {
    'test': '../../..',
    'mocha': 'mocha/mocha',
    'chai': 'chai/chai'
  },
  packages: [
    { name: 'dom', location: '../../../..', main: 'dom' }
  ],
  shim: {
    'mocha': {
      exports: 'mocha'
    }
  }
});

require(['../suite']);
