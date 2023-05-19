function solution(book_time) {
  book_time = book_time.map(([start, finish]) => [
    convertTimeToMinute(start),
    convertTimeToMinute(finish) + 10,
  ]);
  book_time.sort((a, b) => a[0] - b[0]);
  const room = [book_time[0][1]];
  for (let [current_start, current_finish] of book_time.slice(1)) {
    let find_available_room = false;
    for (let i = 0; i < room.length; i++) {
      const room_finish_time = room[i];
      if (current_start >= room_finish_time) {
        room[i] = current_finish;
        find_available_room = true;
        break;
      }
    }
    if (!find_available_room) {
      room.push(current_finish);
    }
    // const find_index = room.findIndex((room) => room <= current_start);
    // if(find_index === -1){
    //     room.push(current_finish);
    // }else{
    //     room[find_index] = current_finish
    // }
  }
  return room.length;
}

function convertTimeToMinute(time) {
  const [hour, minute] = time.split(":");
  return parseInt(hour) * 60 + parseInt(minute);
}
