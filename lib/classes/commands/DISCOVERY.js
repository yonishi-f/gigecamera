var util = require("util");
var events = require("events");
var Constants = require("../Constants");

import COMMAND from "./Command";

export default function DISCOVERY(){
  var me = this;
  COMMAND.call(this);
  me.name = 'DISCOVERY';
  me.command = Constants.CONSTANTS.DISCOVERY_CMD;
  me.setFlagBit(3);
  me.setFlagBit(7);
}
util.inherits(DISCOVERY, COMMAND);
