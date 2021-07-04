var checkerboard = new Array(8);

var canvas = document.getElementById("checkerboard");
var context = canvas.getContext("2d");

for (index = 0; index < 8; index++) {
  checkerboard[index] = new Array(8);
  for (subindex = 0; subindex < 8; subindex++) {
    if (index % 2 == 0) {
      if (subindex % 2 == 0) {
        checkerboard[index][subindex] = {
          color: "#000000",
          width: 50,
          height: 50,
          left: 50 * subindex,
          top: 50 * index,
        };
      } else if (subindex % 2 == 1) {
        checkerboard[index][subindex] = {
          color: "#FF0000",
          width: 50,
          height: 50,
          left: 50 * subindex,
          top: 50 * index,
        };
      }
    } else if (index % 2 == 1) {
      if (subindex % 2 == 0) {
        checkerboard[index][subindex] = {
          color: "#FF0000",
          width: 50,
          height: 50,
          left: 50 * subindex,
          top: 50 * index,
        };
      } else if (subindex % 2 == 1) {
        checkerboard[index][subindex] = {
          color: "#000000",
          width: 50,
          height: 50,
          left: 50 * subindex,
          top: 50 * index,
        };
      }
    }
  }
}

elements = [];

elements.push({
  colour: "#05EFFF",
  width: 50,
  height: 50,
  top: 20,
  left: 15,
});

for (index = 0; index < 8; index++) {
  checkerboard[index].forEach(function (box) {
    console.log(box.top);
    context.fillStyle = box.color;
    context.fillRect(box.left, box.top, box.width, box.height);
  });
}

checkerboard[0].forEach(function (box) {
  console.log(box.top);
  context.fillStyle = box.color;
  context.fillRect(box.left, box.top, box.width, box.height);
});

console.log(checkerboard);
