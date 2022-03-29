function solution(name) {
  var answer = 0;
  let alphabet = [];
  let move = name.length - 1;
  let index;
  for (let i = 0; i < 26; i++) {
    alphabet.push(String.fromCharCode(65 + i));
  }
  for (let i = 0; i < name.length; i++) {
    answer += topDown(name[i], alphabet);
    index = i + 1;
    while (name[index] === "A" && index < name.length) {
      index++;
    }
    move = Math.min(move, i * 2 + name.length - index);
    move = Math.min(move, (name.length - index) * 2 + i);
  }

  return answer + move;
}

function topDown(char, alphabet) {
  let count = 0;
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] === char) {
      return i > 13 ? 26 - i : i;
    }
  }
}
