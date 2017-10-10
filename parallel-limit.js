module.exports = asyncParallel;

function asyncParallel (arr, fnToCall, limit, done) {
  let res = [];
  const arrays = splitArr(arr, limit);
  let len = arrays.length;
  let i = 0;

  prcOrReturn();

  function prcOrReturn (err) {
    if (err) return done(err);

    if (i < len) return run(arrays.slice(i++, i + 1)[0], prcOrReturn);

    done(null, res);
  }

  function run (domains, next) {
    domains.forEach((domain) => {
      fnToCall(domain, (err, val) => {
        if (err) return done(err);

        res = res.concat(val);

        if (domains.indexOf(domain) === domains.length - 1) return next();
      });
    });
  }

  function splitArr (arr, limit) {
    let arrays = [];

    for (let j = 0; j < arr.length; j += limit) {
      arrays.push(arr.slice(j, j + limit))
    }

    return arrays;
  }
}
