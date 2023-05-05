function solution(r1, r2) {
  let answer = 0;

  for (let i = 1; i <= r2; i++) {
    const min = r1 >= i ? Math.ceil(Math.sqrt(r1 ** 2 - i ** 2, 2)) : 0;
    const max = Math.floor(Math.sqrt(r2 ** 2 - i ** 2, 2));
    answer += max - min + 1;
  }

  return answer * 4;
}

// function solution(r1, r2) {
//     let answer = getIntegerCoordinatesCount(r2) -
//                  getIntegerCoordinatesCount(r1) +
//                  getCoordinatesCountOnCircle(r1) ;

//     return answer;
// }

// function getIntegerCoordinatesCount(radius){
//     let count = 0;
//     for(let i = -radius; i <= radius; i++){
//         const y = Math.floor(getMaxRootY(radius,i)) * 2 + 1;
//         count += y;
//     }
//     return count;
// }

// function getMaxRootY(radius,x){
//     return Math.sqrt(Math.pow(radius,2) - Math.pow(x,2),2);
// }

// function getCoordinatesCountOnCircle(radius){
//     let count = 0;
//     for(let i = -radius; i <= radius; i++){
//         if(Number.isInteger(Math.sqrt(Math.pow(radius,2) - Math.pow(i,2),2))){
//             if(Math.pow(i,2) !== Math.pow(radius,2)){
//                 count++;
//             }
//             count++;
//         }
//     }
//     return count;
// }
