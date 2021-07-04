var checkerboard = new Array(8);
var canvas = document.getElementById("checkerboard");
var context = canvas.getContext("2d");
var x;
var y;
canvasX = canvas.offsetLeft;
canvasY = canvas.offsetTop;

canvas.addEventListener("click", function (event) {
  x = event.pageX - canvasX;
  y = event.pageY - canvasY;
  console.log(x, y);
  for (index = 0; index < 8; index++) {
    for (subindex = 0; subindex < 8; subindex++) {
      if (
        x < checkerboard[index][subindex].left + 50 &&
        x > checkerboard[index][subindex].left &&
        y < checkerboard[index][subindex].top + 50 &&
        y > checkerboard[index][subindex].top
      ) {
        console.log("Index: " + index + subindex + " was pressed");
        checkerboard[index][subindex].color = "FFFFFF";
        console.log(checkerboard);
        drawBoard();
      }
    }
  }
});

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

function drawBoard() {
  for (index = 0; index < 8; index++) {
    checkerboard[index].forEach(function (box) {
      console.log(box.top);
      context.fillStyle = box.color;
      context.fillRect(box.left, box.top, box.width, box.height);
    });
  }
}

drawBoard();

console.log(checkerboard);

for (index = 0; index < 8; index++) {
  for (subindex = 0; subindex < 8; subindex++) {
    if (
      x < checkerboard[index][subindex].left &&
      x > checkerboard[index][subindex].left + 50
    ) {
      console.log("Index: " + index, subindex + " was pressed");
    }
  }
}
