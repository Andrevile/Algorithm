function solution(numbers) {
  var answer = "";

  let temp = numbers.sort((a, b) => {
    let prev = a.toString() + b.toString();
    let post = b.toString() + a.toString();

    return post - prev;
  });
  answer = temp.join("");

  return answer[0] === "0" ? "0" : answer;
}
