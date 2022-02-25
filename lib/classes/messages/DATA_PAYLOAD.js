var util = require("util");
import GVSP_ACK from "./GVSP_ACK";

export let ADD_PROPERTIES = [
  { name: 'payload', length: -1, type: 'buffer' },
];

export default function DATA_PAYLOAD(buffer) {
  var me= this;
  GVSP_ACK.call(this,buffer);

  me.properties = me.properties.concat(ADD_PROPERTIES);
  me.readProperties();
  me.format = 'DATA_PAYLOAD';

  //me.payload = buffer.slice(8,buffer.length);
}
util.inherits(DATA_PAYLOAD, GVSP_ACK);
