/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // let string_arr = s.split(" ");
  // for(let i=string_arr.length-1; i >= 0; i--){
  //     if(string_arr[i].length > 0){
  //         return string_arr[i].length
  //     }
  // }
  let string_arr = s.trim().split(" ");
  return string_arr[string_arr.length - 1].length;
};
