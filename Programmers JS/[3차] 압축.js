function solution(msg) {
  var answer = [];
  let dictNum = 27;
  let alphaDict = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };
  msg = msg.toUpperCase();
  let msgArr = msg.split("");
  let index = 0;
  let temp = "";

  while (msgArr.length) {
    let pop = msgArr.shift();
    temp += pop;
    if (!alphaDict[temp]) {
      alphaDict[temp] = dictNum++;
      answer.push(alphaDict[temp.substring(0, temp.length - 1)]);
      msgArr.unshift(pop);
      temp = "";
    }
  }
  answer.push(alphaDict[temp]);

  return answer;
}
