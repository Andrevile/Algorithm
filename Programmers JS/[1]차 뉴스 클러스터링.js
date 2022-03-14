function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  function getSet(string) {
    const result = [];
    for (let i = 0; i < string.length - 1; i++) {
      let temp = string.substring(i, i + 2);
      if (temp.match(/[a-z]{2}/g)) {
        result.push(temp);
      }
    }
    return result;
  }
  let arr1 = getSet(str1);
  let arr2 = getSet(str2);
  let SET = new Set([...arr1, ...arr2]);
  let intersection = 0;
  let union = 0;
  SET.forEach((item) => {
    let first = arr1.filter((str) => str === item).length;
    let second = arr2.filter((str) => str === item).length;
    intersection += Math.min(first, second);
    union += Math.max(first, second);
  });
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
  //     var answer = 0;
  //     str1 = str1.toLowerCase();
  //     str2 = str2.toLowerCase();
  //     let first_set = {};
  //     let second_set = {};
  //     for(let i = 0; i < str1.length-1; i++){
  //         let first_temp = str1[i] + str1[i+1];
  //         if(!/[^a-z]/g.test(first_temp)){
  //             if(first_temp in first_set){
  //                 first_set[first_temp] ++;
  //             }else{
  //                 first_set[first_temp] = 1;
  //             }
  //         }

  //     }
  //     for(let i = 0; i < str2.length-1; i++){
  //         let second_temp = str2[i] + str2[i+1];
  //         if(!/[^a-z]/g.test(second_temp)){
  //             if(second_temp in second_set){
  //                 second_set[second_temp] ++;
  //             }else{
  //                 second_set[second_temp] = 1;
  //             }
  //         }
  //     }

  //     let top = new Set();
  //     Object.keys(first_set).map((item) => {
  //         if(item in second_set){
  //             top.add(item);
  //         }
  //     });
  //     let bot = new Set();
  //     Object.keys(first_set).map((item) => {
  //         if(!(item in second_set)){
  //             bot.add(item);
  //         }

  //     })
  //     Object.keys(second_set).map((item) => {
  //         if(!(item in first_set)){
  //             bot.add(item);
  //         }
  //     })

  //     let child = 0;
  //     let mom = 0;

  //     for(let item of top){
  //         child += Math.min(first_set[item],second_set[item])
  //         mom += Math.max(first_set[item],second_set[item])
  //     }
  //     for(let item of bot){
  //         mom += item in first_set ? first_set[item] : second_set[item];
  //     }

  //     if(mom === 0){
  //         return 65536
  //     }else{
  //         return Math.floor(child / mom * 65536)
  //     }
}
