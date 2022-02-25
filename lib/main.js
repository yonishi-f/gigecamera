// var CLASSES = require('require-all')({

//   dirname : __dirname+'/classes',
//   filter  : /([A-Z].+)\.js$/,
// });

import { CLASSES } from './classes';

for(var className in CLASSES){
  if (typeof CLASSES[className][className]!=='undefined'){
    exports[className] = CLASSES[className][className];
  }else{
    exports[className] = CLASSES[className];
  }
}
