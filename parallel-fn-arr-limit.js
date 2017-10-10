'use strict';

module.exports = asyncParallel;

function asyncParallel (arr, limit, done) {
  const res = [];
  const arrays = splitArr(arr, limit);
  let len = arrays.length;
  let i = 0;

  prcOrReturn();

  function prcOrReturn (err) {
    if (err) return done(err);

    if (i < len) return run(arrays.slice(i++, i + 1)[0], prcOrReturn);

    done(null, res);
  }

  function run (fnArr, next) {
    fnArr.forEach((fn) => {
      fn((err, val) => {
        if (err) return done(err);

        res.push(val);

        if (fnArr.indexOf(fn) === fnArr.length - 1) next();
      });
    });
  }
}

function splitArr (arr, limit) {
  let arrays = [];

  for (let j = 0; j < arr.length; j += limit) {
    arrays.push(arr.slice(j, j + limit))
  }

  return arrays;
}
