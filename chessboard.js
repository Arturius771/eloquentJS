var size = 100;
var myString = "";
var x = 1;
var y = 1;

for (var j = 1; j <= size; j++) {
  for (i = 1; i <= size; i++) {
    if ((x + y) % 2 == 0) {
      x += 1;
      myString += "#";
    } else {
      x += 1;
      myString += " ";
    }
  }
  y += 1;
  myString += "\n";
}

console.log(myString);
