'use strict';

const asyncParallel = require('parallel-limit.js');

const arr = ['Hello', 'world', 'this', 'is', 'async', 'parallel'];

asyncParallel(arr, logAsync, 3, finish);

function finish (err, textArr) {
  if (err) return console.log('ERROR', err);

  return console.log('Logging array', textArr);
}

function logAsync (text, next) {
  setTimeout(logger, 1000);

  function logger () {
    return next(null, text);
  }
}