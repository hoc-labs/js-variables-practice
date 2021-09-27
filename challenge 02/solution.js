let myPoints = 3;

// write add3Points function here

function add3Points() {
  myPoints += 3;
}

// write remove1Point function here
function remove1Point() {
  myPoints -=1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

// this should output the value 10.
console.log(myPoints);