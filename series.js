'use strict';

module.exports = async;

const results = [];

function async (arr, done) {
  if (!arr[0]) return done(null, results);

  runTask(arr.shift(), finishCall);

  function finishCall (err, data) {
    if (err) return done(err);

    results.push(data);
    async(arr, done);
  }
}

function runTask (fn, cb) {
  fn(cb);
}
