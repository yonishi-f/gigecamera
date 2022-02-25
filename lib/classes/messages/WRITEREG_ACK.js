var util = require("util");
var events = require("events");
var GVCP_ACK = require("./GVCP_ACK").GVCP_ACK;
var Constants = require("../Constants");

export let ADD_PROPERTIES = [
  { name: 'reseverd', length: 2, type: 'int' },
  { name: 'index', length: 2, type: 'int' }
];

export function WRITEREG_ACK(buffer,sendCommand) {
  var me = this;
  me.name = 'WRITEREG_ACK';
  GVCP_ACK.call(this,buffer,sendCommand);
  me.properties = me.properties.concat(ADD_PROPERTIES);
  me.readProperties();

  /*
  me.reseverd=me.read(2);
  me.index=me.readInt();
  */

}
util.inherits(WRITEREG_ACK, GVCP_ACK);
