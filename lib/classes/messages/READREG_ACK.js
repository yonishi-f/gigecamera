var util = require("util");
import GVCP_ACK from "./GVCP_ACK";

export let ADD_PROPERTIES = [
  { name: 'data', length: 0, type: 'bufferarray' }
];

export default function READREG_ACK(buffer,sendCommand) {
  var me = this,i,m;

  me.name = 'READREG_ACK';
  GVCP_ACK.call(this,buffer,sendCommand);
  me.properties = me.properties.concat(ADD_PROPERTIES);
  me.data={};

  if (typeof sendCommand==='undefined'){
    //throw new Error('sendCommand is needed');
  }else{
    me.offset = 8;
    m = sendCommand.registers.length;
    for(i=0;i<m;i++){
      me.data[ sendCommand.registers[i] ]=me.read(sendCommand.registersLength[i]);
    }
  }
}


util.inherits(READREG_ACK, GVCP_ACK);
