var util = require("util");
var events = require("events");
var GVCP_ACK = require("./GVCP_ACK").GVCP_ACK;
var Constants = require("../Constants");

export function ACTION_ACK(buffer,sendCommand) {
  var me = this;
  me.name = 'ACTION_ACK';
  GVCP_ACK.call(this,buffer,sendCommand);

}
util.inherits(ACTION_ACK, GVCP_ACK);
