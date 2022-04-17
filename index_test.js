var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('testing output equals 5!',() => {
      //config
      const expectedOutput = 120;
      const fatorialNumber = 5;
      //exercice
      const output = Calculate.fatorial(fatorialNumber);
      //verify
      assert.equal(output,expectedOutput);
    });
    it('return 1 when you pass in 0',() => {
       //config
      const expectedOutput = 1;
      const fatorialNumber = 0;
      //exercice
      const output = Calculate.fatorial(fatorialNumber);
      //verify
      assert.equal(output,expectedOutput);
    });
  });
});