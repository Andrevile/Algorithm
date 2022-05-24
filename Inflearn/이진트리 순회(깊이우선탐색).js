let answer = solution();

function solution() {
  let preOrderResult = "";
  let inOrderResult = "";
  let postOrderResult = "";
  function preOrder(num) {
    if (num > 7) return;
    preOrderResult += num + " ";
    preOrder(num * 2);
    preOrder(num * 2 + 1);
  }

  function inOrder(num) {
    if (num > 7) return;
    inOrder(num * 2);
    inOrderResult += num + " ";
    inOrder(num * 2 + 1);
  }

  function postOrder(num) {
    if (num > 7) return;
    postOrder(num * 2);
    postOrder(num * 2 + 1);
    postOrderResult += num + " ";
  }

  preOrder(1);
  inOrder(1);
  postOrder(1);
  console.log(preOrderResult);
  console.log(inOrderResult);
  console.log(postOrderResult);
}

// function solution(v) {
//   let answer;
//   function DFS(v) {
//     if (v > 7) {
//       return;
//     } else {
//       DFS(v * 2);
//       DFS(v * 2 + 1);
//     }
//   }
//   DFS(v);
//   return answer;
// }
