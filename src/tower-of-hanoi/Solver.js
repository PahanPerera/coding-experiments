export const prepareHanoi = function (n) {
  let initStart = [];
  for (let i = 1; i <= n; i++) {
    initStart.push(i);
  }
  return [initStart, [], []];
};

export const solveHanoi = function (n) {
  let steps = [];

  let log = function () {
    let step = [[...start], [...temp], [...end]].map((step) => step.reverse());
    steps.push(step);
  };

  let validateAndMove = function (arr, val) {
    if (arr.length > 0 && arr[arr.length - 1] < val)
      throw new Error(`Invalid Move... ${val} to move to ${arr}`);
    arr.push(val);
    log();
  };

  let start = [];
  let temp = [];
  let end = [];

  for (let i = n; i > 0; i--) {
    start.push(i);
  }

  let solve = function (i, start, temp, end) {
    if (i === 1) {
      validateAndMove(end, start.pop());
      return;
    }
    solve(i - 1, start, end, temp);
    validateAndMove(end, start.pop());
    solve(i - 1, temp, start, end);
  };

  solve(n, start, temp, end);
  return steps;
};
