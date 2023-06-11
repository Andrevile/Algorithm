function solution(x, y, n) {
  var answer = 0;
  const dp = new Array(y).fill(0);
  if (x === y) {
    return 0;
  }
  BFS(dp, x, y, n);
  if (!dp[x]) {
    return -1;
  }

  return dp[x];
}

function BFS(dp, x, y, n) {
  const queue = [[y, 0]];
  while (queue.length) {
    const [index, count] = queue.shift();
    if (index === x) {
      break;
    }
    const sub = subN(index, n);
    const divTwo = divideTwo(index);
    const divThree = divideThree(index);

    if (sub >= x && (dp[sub] > count + 1 || !dp[sub])) {
      queue.push([sub, count + 1]);
      dp[sub] = count + 1;
    }

    if (index % 2 === 0) {
      if (divTwo >= x && (dp[divTwo] > count + 1 || !dp[divTwo])) {
        queue.push([divTwo, count + 1]);
        dp[divTwo] = count + 1;
      }
    }

    if (index % 3 === 0) {
      if (divThree >= x && (dp[divThree] > count + 1 || !dp[divThree])) {
        queue.push([divThree, count + 1]);
        dp[divThree] = count + 1;
      }
    }
  }
}

function subN(y, n) {
  return y - n;
}

function divideTwo(y) {
  return y / 2;
}

function divideThree(y) {
  return y / 3;
}
