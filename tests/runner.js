require.config({
  paths:{
    'dom': '../',
    'class': 'js/class',
    'selector': 'js/selector',
    'mocha': 'vendor/mocha/1.0.1/mocha',
    'chai': 'vendor/chai/0.5.2/chai'
  }
});

require(['require',
         'mocha',
         'chai'],

function(require, _mocha, _chai) {
  mocha.setup('bdd');
  
  require(['test.dom',
           'test.dom.collection',
           'test.dom.manipulation',
           'test.dom.metrics',
           'test.dom.style'],
  function() {
    mocha.run();
  });
});
