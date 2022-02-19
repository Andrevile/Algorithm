function solution(numbers, hand) {
  var answer = "";
  let test = Array.from({ length: 5 }, (v, i) => i);
  console.log(test);
  let left = "*";
  let right = "#";
  for (let num of numbers) {
    if (num === 1 || num === 4 || num === 7) {
      answer += "L";
      left = num;
    } else if (num === 3 || num === 6 || num === 9) {
      answer += "R";
      right = num;
    } else {
      let leftDistance = calculateDistance(left, num);
      let rightDistance = calculateDistance(right, num);
      if (leftDistance < rightDistance) {
        answer += "L";
        left = num;
      } else if (leftDistance > rightDistance) {
        answer += "R";
        right = num;
      } else {
        if (hand === "right") {
          answer += "R";
          right = num;
        } else {
          answer += "L";
          left = num;
        }
      }
    }
  }
  return answer;
}

function calculateDistance(current, target) {
  let prev = getLocation(current);
  let post = getLocation(target);

  let x = Math.abs(prev[0] - post[0]);
  let y = Math.abs(prev[1] - post[1]);
  return x + y;
}

function getLocation(number) {
  switch (number) {
    case "*":
      return [3, 0];
    case "#":
      return [3, 2];
    case 0:
      return [3, 1];
    default:
      return [parseInt((number - 1) / 3), (number - 1) % 3];
  }
}
