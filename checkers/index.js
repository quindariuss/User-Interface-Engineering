var boardsize = 8;
var checkerboard = new Array(8);
var canvas = document.getElementById("checkerboard");
var context = canvas.getContext("2d");
var lasttouchindex = 0;
var lasttouchsubindex = 0;
var x;
var y;
var whoseturn = "red_piece";

var blackpiece = new Image();
var blackking = new Image();
var redpiece = new Image();
var redking = new Image();
blackpiece.src = "./black-piece.png";
blackking.src = "./black-king.png";
redpiece.src = "./red-piece.png";
redking.src = "./red-king.png";
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

        move(index, subindex);
        if (checkerboard[index][subindex]) {
        }
        lasttouchindex = index;
        lasttouchsubindex = subindex;
      }
    }
  }
  drawBoard();
});

for (index = 0; index < 8; index++) {
  checkerboard[index] = new Array(8);
  for (subindex = 0; subindex < 8; subindex++) {
    if (index < 2) {
    }
    if (index % 2 == 0) {
      if (subindex % 2 == 0) {
        checkerboard[index][subindex] = {
          color: "#000000",
          width: 50,
          height: 50,
          left: 50 * subindex,
          top: 50 * index,
          board: "empty",
        };
      } else if (subindex % 2 == 1) {
        checkerboard[index][subindex] = {
          color: "#FF0000",
          width: 50,
          height: 50,
          left: 50 * subindex,
          top: 50 * index,
          board: assignPiece(index),
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
          board: assignPiece(index),
        };
      } else if (subindex % 2 == 1) {
        checkerboard[index][subindex] = {
          color: "#000000",
          width: 50,
          height: 50,
          left: 50 * subindex,
          top: 50 * index,
          board: "empty",
        };
      }
    }
  }
}

function drawBoard() {
  for (index = 0; index < 8; index++) {
    checkerboard[index].forEach(function (box) {
      context.fillStyle = box.color;
      context.fillRect(box.left, box.top, box.width, box.height);
      switch (box.board) {
        case "black_piece":
          context.drawImage(blackpiece, box.left, box.top);
          break;
        case "black_king":
          context.drawImage(blackking, box.left, box.top);
          break;
        case "red_piece":
          context.drawImage(redpiece, box.left, box.top);
          break;
        case "red_king":
          context.drawImage(redking, box.left, box.top);
          break;
        case "empty":
          break;
      }
    });
  }
}

console.log(checkerboard);

function assignPiece(index, piece) {
  if (piece != null) {
    console.log("checking ");
    if (index == 0 && piece == "red_piece") {
      return "red_king";
    } else if (index == 7 && piece == "black_piece") {
      return "black_king";
    } else {
      return piece;
    }
  }
  if (index < 3) {
    return "black_piece";
  }
  if (index > 4) {
    return "red_piece";
  } else {
    return "empty";
  }
}
function move(index, subindex) {
  if (checkerboard[index][subindex].board == "empty") {
    console.log("I can move");
    if (validatemove(index, subindex)) {
      console.log(validatemove(index, subindex));
      console.log("Im moving ");
      checkerboard[index][subindex].board =
        checkerboard[lasttouchindex][lasttouchsubindex].board;
      checkerboard[lasttouchindex][lasttouchsubindex].board = "empty";
    }
  }
  checkerboard[index][subindex].board = assignPiece(
    index,
    checkerboard[index][subindex].board
  );
}

redking.onload = () => drawBoard();

function validatemove(index, subindex) {
  console.log(index);
  console.log(subindex);
  console.log(lasttouchindex);
  console.log(lasttouchsubindex);
  if (checkerboard[lasttouchindex][lasttouchsubindex].board == whoseturn) {
    if (
      (index == lasttouchindex - 1 && subindex == lasttouchsubindex + 1) ||
      (index == lasttouchindex - 1 && subindex == lasttouchsubindex - 1) ||
      (index == lasttouchindex + 1 && subindex == lasttouchsubindex + 1) ||
      (index == lasttouchindex + 1 && subindex == lasttouchsubindex - 1)
    ) {
      if (whoseturn == "black_piece") {
        whoseturn = "red_piece";
      } else if (whoseturn == "red_piece") {
        whoseturn = "black_piece";
      }
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}
