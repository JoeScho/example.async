const asyncParallel = require('./parallel-fn-arr-limit.js');

function a (callback) {
  setTimeout(() => {
    callback(null, 'In a')
  }, 1000);
}

function b (callback) {
  setTimeout(() => {
    callback(null, 'In b')
  }, 50);
}

function c (callback) {
  setTimeout(() => {
    callback(null, 'In c')
  }, 8000);
}

function d (callback) {
  setTimeout(() => {
    callback(null, 'In d')
  }, 20);
}

function e (callback) {
  setTimeout(() => {
    callback(null, 'In e')
  }, 5000);
}

function f (callback) {
  setTimeout(() => {
    callback(null, 'In f')
  }, 3000);
}

function g (callback) {
  setTimeout(() => {
    callback(null, 'In g')
  }, 450);
}

const arr = [a, b, c, d, e, f, g];
debugger
asyncParallel(arr, 3, finish);

function finish (err, textArr) {
  debugger
  if (err) return console.log('ERROR', err);

  return console.log('Finished', textArr);
}
