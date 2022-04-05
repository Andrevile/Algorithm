function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let bridge_status = weight;
  let bridge = [];
  for (let i = 0; i < bridge_length; i++) {
    bridge.push(0);
  }
  do {
    let now_truck = truck_weights.shift();
    bridge_status += bridge.pop();
    if (bridge_status >= now_truck) {
      bridge.unshift(now_truck);
      bridge_status -= now_truck;
    } else {
      bridge.unshift(0);
      truck_weights.unshift(now_truck);
    }
    answer++;
  } while (bridge_status !== weight);

  return answer;
}
