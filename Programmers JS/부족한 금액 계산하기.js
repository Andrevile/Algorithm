function solution(price, money, count) {
  var answer = -1;
  let total = (price * (count * (count + 1))) / 2;

  return total <= money ? 0 : Math.abs(total - money);
}
