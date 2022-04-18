function solution(cacheSize, cities) {
  var answer = 0;
  let cache = [];

  while (cities.length) {
    let pop = cities.shift().toLowerCase();
    if (cache.includes(pop)) {
      //캐시에 존재
      let index = cache.indexOf(pop);
      let renew = cache.splice(index, 1)[0];
      cache.push(renew);
      answer++;
    } else {
      //캐시에 존재하지 않음
      if (cacheSize > 0) {
        if (cache.length >= cacheSize) {
          //캐시가 꽉참;
          cache.shift();
          cache.push(pop);
        } else {
          //캐시에 공간있음
          cache.push(pop);
        }
      }
      answer += 5;
    }
  }
  return answer;
}
