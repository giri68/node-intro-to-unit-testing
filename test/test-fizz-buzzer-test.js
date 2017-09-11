'use strict';
const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');
describe('fizzBUzzer', function(){
  it('should give fizz buzz sequence', function(){
    const normalCases = [
      {num: 1, expected: 1},
      {num: 3, expected: 'fizz'},
      {num: 5, expected: 'buzz'},
      {num: 15, expected: 'fizz-buzz'}
    ];

    normalCases.forEach(function(input){
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });
});