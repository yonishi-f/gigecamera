
var Device = require("./classes/Device").Device;
var device = new Device();
var filePrefix = 'image';




exports.imageing = function(packetSize,prefix,broadcast,exposure,imgheight){
  filePrefix = prefix;

  var getAVG=false;
  var avg=0;
  var start_avg = 0;
  var stop_avg = 0;
  var einzelbildhoehe = imgheight;
  var imageindex=0;

  var helper = 0;


  var width = 2048;
  var maxPreviewHeight = 768
  var shift = width*einzelbildhoehe;


  /*var childProcess = require('child_process').fork(__dirname + '/worker');
  childProcess.send({ command: 'prefix',prefix: filePrefix });
  process.on('exit', function(code) {
    childProcess.send({ command: 'exit'});
  });
*/

  device.gvcp.on('packetSend',function(id,name){
    console.time('running since last sended packet');
  //  console.log('packetSend',id,name);
  });
  device.packetSize = packetSize;

  device.foundCamera = false;

  device.gvcp.once('dicovered',function(msg){
    //console.timeEnd('discovering devices');
    console.time('set up device');
    device.foundCamera = true;
    device.setDevice(msg.current_ip);
  })

  setTimeout(function(){
    if (device.foundCamera===false){
      console.log('there is no camera');
      process.exit();
    }
  },5000);

  device.on('initialized',function(cam){
    console.timeEnd('set up device');
    setTimeout(function(){
      device.server( );
    },10);
  });



  device.on('initializedServer',function(server){


    /*
    getAVG = true;
    setTimeout(function(){
      console.log('set AVG',avg);
      console.log('you can start!');
      getAVG = false;

      stop_avg = avg * 1.1;
      start_avg = avg * 1.5;

    },5000);
    var isimageing = false;
    var i=0;
    var buffers = [];
    var iscomputing=false;
    server.on('image',function(img){
      //childProcess.send({ command: 'image',id: img.id, img: img });
    });
    */



    device.readRegister( "0x0D04",4,function(err,response){
      server.packetSize = response.readUIntBE(2,2);
      // Height
      device.writeRegister("0xA804", einzelbildhoehe, function (err, response) {
        if (err) {
          throw new Error(err);
        } else {
          // Acquisition Start
          device.writeRegister("0xB004", 1, function (err, response) {
            if (err) {
              throw new Error(err);
            } else {

              /*
              var alive = function(){
                device.readRegister( "0xB004",1, function(err,response){
                  if (err){
                    throw new Error(err);
                  }else{
                    console.log('ALIVE',response)
                  }
                },'ALIVE')
              }
              setInterval(alive,1000);
              */

              // Acquisition Stop
              var stop = function () {
                device.readRegister("0xB008", 1, function (err, response) {
                  if (err) {
                    throw new Error(err);
                  } else {
                    console.log('STOP', response)
                  }
                }, 'STOP')
              }
              setInterval(stop, 10000); // stop after 10 seconds.
            }
          }, 'IMAGE')
        }
      });

    });



  });

  device.gvcp.discover(broadcast);

}
