var Test = require('mocha');
var bouncingBall = require('./solution1.js');

describe("Tests", function(){
    it ("test1", function(){
         Test.assertEquals(bouncingBall(3.0, 0.66, 1.5), 3);
    });

    it ("test2", function(){
         Test.assertEquals(bouncingBall(30.0, 0.66, 1.5), 15);
    });

});
