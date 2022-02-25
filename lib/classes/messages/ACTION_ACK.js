var util = require("util");
import GVCP_ACK from "./GVCP_ACK";

export default function ACTION_ACK(buffer,sendCommand) {
  var me = this;
  me.name = 'ACTION_ACK';
  GVCP_ACK.call(this,buffer,sendCommand);

}
util.inherits(ACTION_ACK, GVCP_ACK);
