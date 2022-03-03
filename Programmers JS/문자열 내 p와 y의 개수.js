function solution(s) {
  let str = s.toLowerCase();
  let p_count = 0;
  let y_count = 0;
  str
    .split("")
    .forEach((el) => (el === "p" ? p_count++ : el === "y" ? y_count++ : null));
  return p_count === y_count ? true : false;
}
