var util = require("util");
var events = require("events");
var GVCP_ACK = require("./GVCP_ACK").GVCP_ACK;
var Constants = require("../Constants");

export function WRITEMEM_ACK(buffer,sendCommand) {
  var me = this,i,m=sendCommand.registers.length;
  me.name = 'WRITEMEM_ACK';
  GVCP_ACK.call(this,buffer,sendCommand);

  me.reseverd=me.read(2);
  me.index=me.readInt();

}
util.inherits(WRITEMEM_ACK, GVCP_ACK);
