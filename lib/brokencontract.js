'use strict';
const { Contract} = require('fabric-contract-api');

class BrokenContract extends Contract {

   async break(ctx) {
    await ctx.stub.putState('key',Buffer.from(""));
  }
}

module.exports=BrokenContract;
