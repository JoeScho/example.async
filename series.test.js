'use strict';

const asyncSeries = require('series.js');

function a (cb) {
  setTimeout(() => {
    cb(null, 'a function ' + (new Date()).getTime())
  }, 3000)
}

function b (cb) {
  setTimeout(() => {
    cb(null, 'b function ' + (new Date()).getTime())
  }, 1000)
}

function c (cb) {
  setTimeout(() => {
    cb(null, 'c function ' + (new Date()).getTime())
  }, 6000)
}

const arr = [a, b, c]

asyncSeries(arr, finish)

function finish (err, res) {
  console.log(res);
  console.log('finished');
}