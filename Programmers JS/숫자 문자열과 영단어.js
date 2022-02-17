function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    console.log(arr);
    answer = arr.join(i);
    console.log(answer);
  }
  //     var answer = "";
  //     let numberMap = {
  //         zero: 0,
  //         one: 1,
  //         two:2,
  //         three:3,
  //         four:4,
  //         five:5,
  //         six:6,
  //         seven:7,
  //         eight:8,
  //         nine:9,
  //     }
  //     let temp = '';
  //     s = s.split("")

  //     while(s.length){

  //         let pop = s.shift();
  //         if(pop.match(/[0-9]/)){
  //             answer += pop;
  //         }else{
  //             temp += pop;
  //             if(temp in numberMap){
  //                 answer += numberMap[temp].toString();
  //                 temp = ""
  //             }
  //         }
  //     }
  return Number(answer);
}
