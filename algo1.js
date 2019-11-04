/*
We're building a ticket selling app for a cinema and we need to represent
all the seats in the main room.

In this room, the seats are organized as follows: 
    - There are 26 rows of seats. Each row is numbered from "1" to "26" 
    - Each row has 100 seats. Each seat is numbered from "1" to "100"
    

Create a function that returns an array of seats.
Each item in the array should be in the form: row-seat.

The final array should look something like this:
[
    1-1,
    1-2,
    1-3,
    .
    .
    .
    26-98,
    26-99,
    26-100
]
*/

const rowArr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26
];

function arrOfSeats(rows, seats) {
  var emptyArr = [];
  for (let row = 1; row <= rows; row++) {
    for (let seat = 1; seat <= seats; seat++) {
      var rowSeat = row + "-" + seat;
      emptyArr.push(rowSeat);
      //console.log("seat " + seat);
    }
    //console.log("row " + row);
  }
  return emptyArr;
}
console.log(arrOfSeats(26, 100));
