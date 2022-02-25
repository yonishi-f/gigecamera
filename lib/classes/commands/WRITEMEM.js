var util = require("util");
var events = require("events");
var Constants = require("../Constants");

import Command from "./Command";

export function WRITEMEM(){
  var me = this;
  Command.call(this);
  me.name = 'WRITEMEM';
  me.command = Constants.CONSTANTS.WRITEMEM_CMD;
  me.setFlagBit(7);
  me.data = {};
}

util.inherits(WRITEMEM, Command);

WRITEMEM.prototype.write = function(reg,data){
  var me= this;
  me.length +=data.length;
  if (typeof reg==='string'){
    if (typeof Constants.REGISTER[reg]==='undefined'){
      throw new Error('the register '+reg+' is not kown');
    }
    me.data={
      address: Constants.REGISTER[reg].address,
      data: data
    };
  }else{
    me.data={
      address: reg,
      data: data
    };
  }
  return me;
}


WRITEMEM.prototype.toBuffer = function(){
  var me= this, buf = me.getHeader(),pos;
  pos = 8;
  me.data.data.copy(me.buf,pos);
  return buf;
}