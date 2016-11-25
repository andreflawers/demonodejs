var EventEmitter = require('events').EventEmitter

var ee = new EventEmitter();
ee.on('someEvent',function () {
    console.log('someEvent ocurred');
  });
module.exports=ee;