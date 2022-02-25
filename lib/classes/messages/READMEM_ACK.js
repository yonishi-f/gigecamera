var util = require("util");
var events = require("events");
var GVCP_ACK = require("./GVCP_ACK").GVCP_ACK;
var Constants = require("../Constants");

export let ADD_PROPERTIES = [
  { name: 'address', length: 4, type: 'buffer' },
  { name: 'data', length: 512, type: 'buffer' }
];

export function READMEM_ACK(buffer,sendCommand) {
  var me = this;
  me.name = 'READMEM_ACK';

  GVCP_ACK.call(this,buffer,sendCommand);
  me.properties = me.properties.concat(ADD_PROPERTIES);
  me.readProperties();

  /*
  me.address = me.read(4);
  me.data = me.read(512);
  */
}
util.inherits(READMEM_ACK, GVCP_ACK);
