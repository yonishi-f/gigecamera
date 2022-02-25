var util = require("util");
var events = require("events");
var Constants = require("../Constants");

import COMMAND from "./Command";

export default function READREG(){
  var me = this;
  COMMAND.call(this);
  me.name = 'READREG';
  me.command = Constants.CONSTANTS.READREG_CMD;
  me.setFlagBit(7);
  me.registerIndex = 0;
  me.registers = [];
  me.registersLength = [];
  me.registersOffset = [];
}

util.inherits(READREG, COMMAND);

READREG.prototype.parse = function(buffer){
  var length = buffer.readUIntBE(4,2);
  for(var i=8;i<length+8;i+=4){
    this.registers.push(buffer.readUIntBE(i,4));
    this.registerIndex++;
  }
}

READREG.prototype.addRegister = function(reg,length){
  var me= this;
  me.registerIndex++;
  me.length +=4;

  me.registersOffset.push(0);
  me.registersLength.push(length);

  try{
    var b = new Buffer(4);
    b.setAddress(reg,0);
  }catch(e){
    throw new Error('Address is not allowed. '+reg);
  }

  if (typeof reg==='string'){
    me.registers.push(reg);
  }else{
    throw new Error(reg,me.hint);
  }
  return me;
}


READREG.prototype.toBuffer = function(){
  var me= this, buf = me.getHeader(),i,m=me.registers.length;
//  console.log('header',buf);
  for(i=0;i<m;i++){
    buf.setAddress(me.registers[i],8+i*4);
  }
//  console.log('result',buf);
  return buf;
}
