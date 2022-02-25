var util = require("util");
import GVCP_ACK from "./GVCP_ACK";

export default function WRITEMEM_ACK(buffer,sendCommand) {
  var me = this,i,m=sendCommand.registers.length;
  me.name = 'WRITEMEM_ACK';
  GVCP_ACK.call(this,buffer,sendCommand);

  me.reseverd=me.read(2);
  me.index=me.readInt();

}
util.inherits(WRITEMEM_ACK, GVCP_ACK);
