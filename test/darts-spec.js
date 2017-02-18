const chai = require('chai');
chai.should();
const scoreThrows = require('../darts.js');

let scores = [1, 2, 3, 4];
let scoresResult = 140;
let invalidScores = [1, 'hi', 3, true];
let invalidScoresResult = false;
let invalidType = 'wtf';
let invalidTypeResult = false;

describe('scoreThrows function', function() {

  it('should be a function', function() {
    scoreThrows.should.be.a('function');
  });
  it('should return a number', function() {
    scoreThrows(scores).should.be.a('number');
  });
  it('should return proper scoring values', function() {
    scoreThrows(scores).should.be.deep.equal(scoresResult);
  });
  it('should only take in numbers', function() {
    scoreThrows(invalidScores).should.be.deep.equal(invalidScoresResult);
  });
  it('should take in an array', function() {
    scoreThrows(invalidType).should.be.deep.equal(invalidTypeResult);
  });
});