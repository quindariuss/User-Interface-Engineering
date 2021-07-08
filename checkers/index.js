var boardsize = 8;
var checkerboard = new Array(8);
var canvas = document.getElementById("checkerboard");
var context = canvas.getContext("2d");
var lasttouchindex = 0;
var lasttouchsubindex = 0;
var previndex = null;
var prevsubindex = null;
var currentmoveindex = null;
var currentmovesubindex = null;
var x;
var y;
var whoseturn = "red";
redcount = 0;
blackcount = 0;

var blackpiece = new Image();
var blackking = new Image();
var redpiece = new Image();
var redking = new Image();
var count = 0;
blackpiece.src = "./black-piece.png";
blackking.src = "./black-king.png";
redpiece.src = "./red-piece.png";
redking.src = "./red-king.png";
canvasX = canvas.offsetLeft;
canvasY = canvas.offsetTop;

canvas.addEventListener("click", function (event) {
  count++;
  console.log({ count });
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
        move(index, subindex);
        lasttouchindex = index;
        lasttouchsubindex = subindex;
      }
    }
  }
  console.log(
    "Previous Index is: " + previndex + prevsubindex + " was pressed"
  );
  console.log(
    "Current Index is: " + lasttouchindex + lasttouchsubindex + " was pressed"
  );
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
  document.getElementById("whosemove").innerHTML =
    "It is " + whoseturn + "'s turn to move";

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
  var tox =
    checkerboard[currentmoveindex][currentmovesubindex].left +
    (checkerboard[currentmoveindex][currentmovesubindex].left -
      checkerboard[previndex][previndex].left <
    0
      ? 20
      : 25);
  var toy =
    checkerboard[currentmoveindex][currentmovesubindex].top +
    (checkerboard[currentmoveindex][currentmovesubindex].top -
      checkerboard[previndex][previndex].top <
    0
      ? 30
      : 20);
  var fromx =
    checkerboard[previndex][prevsubindex].left +
    (checkerboard[currentmoveindex][currentmovesubindex].left -
      checkerboard[previndex][previndex].left <
    0
      ? 25
      : 30);
  var fromy =
    checkerboard[previndex][prevsubindex].top +
    (checkerboard[currentmoveindex][currentmovesubindex].top -
      checkerboard[previndex][previndex].top <
    0
      ? 30
      : 20);
  var x_center = tox;
  var y_center = toy;
  var angle;
  var x;
  var y;
  var r = 10;
  context.beginPath();
  context.moveTo(fromx, fromy);
  context.lineTo(tox, toy);
  context.strokeStyle = "white";
  context.lineWidth = 5;
  context.stroke();

  context.beginPath();

  angle = Math.atan2(toy - fromy, tox - fromx);
  x = r * Math.cos(angle) + x_center;
  y = r * Math.sin(angle) + y_center;

  context.moveTo(x, y);

  angle += (1 / 3) * (2 * Math.PI);
  x = r * Math.cos(angle) + x_center;
  y = r * Math.sin(angle) + y_center;

  context.lineTo(x, y);

  angle += (1 / 3) * (2 * Math.PI);
  x = r * Math.cos(angle) + x_center;
  y = r * Math.sin(angle) + y_center;

  context.lineTo(x, y);

  context.closePath();
  context.fillStyle = "FFFFFF";

  context.fill();
}

console.log(checkerboard);

function assignPiece(index, piece) {
  if (piece != null) {
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
    if (validatemove(index, subindex)) {
      console.log(validatemove(index, subindex));

      checkerboard[index][subindex].board =
        checkerboard[lasttouchindex][lasttouchsubindex].board;
      checkerboard[lasttouchindex][lasttouchsubindex].board = "empty";
      previndex = lasttouchindex;
      prevsubindex = lasttouchsubindex;
      currentmoveindex = index;
      currentmovesubindex = subindex;
    }
  }
  checkerboard[index][subindex].board = assignPiece(
    index,
    checkerboard[index][subindex].board
  );
}

redking.onload = () => drawBoard();

function validatemove(index, subindex) {
  if (
    checkerboard[lasttouchindex][lasttouchsubindex].board.substring(
      0,
      checkerboard[lasttouchindex][lasttouchsubindex].board.indexOf("_", 0)
    ) == whoseturn
  ) {
    if (
      (index == lasttouchindex - 1 && subindex == lasttouchsubindex + 1) ||
      (index == lasttouchindex - 1 && subindex == lasttouchsubindex - 1) ||
      (index == lasttouchindex + 1 && subindex == lasttouchsubindex + 1) ||
      (index == lasttouchindex + 1 && subindex == lasttouchsubindex - 1)
    ) {
      if (whoseturn == "black") {
        whoseturn = "red";
      } else if (whoseturn == "red") {
        whoseturn = "black";
      }
      return true;
    }
    if (index == lasttouchindex + 2 && subindex == lasttouchsubindex - 2) {
      checkerboard[lasttouchindex + 1][lasttouchsubindex - 1].board = "empty";

      if (whoseturn == "black") {
        whoseturn = "red";
      } else if (whoseturn == "red") {
        whoseturn = "black";
      }
      console.log(true);
      return true;
    }
    if (index == lasttouchindex + 2 && subindex == lasttouchsubindex + 2) {
      checkerboard[lasttouchindex + 1][lasttouchsubindex + 1].board = "empty";

      if (whoseturn == "black") {
        whoseturn = "red";
      } else if (whoseturn == "red") {
        whoseturn = "black";
      }
      return true;
    }
    if (index == lasttouchindex - 2 && subindex == lasttouchsubindex - 2) {
      checkerboard[lasttouchindex - 1][lasttouchsubindex - 1].board = "empty";
      console.log("I want to kill 3");
      if (whoseturn == "black_piece") {
        whoseturn = "red_piece";
      } else if (whoseturn == "red_piece") {
        whoseturn = "black_piece";
      }
      return true;
    }
    if (index == lasttouchindex - 2 && subindex == lasttouchsubindex + 2) {
      checkerboard[lasttouchindex - 1][lasttouchsubindex + 1].board = "empty";

      if (whoseturn == "black_piece") {
        whoseturn = "red_piece";
      } else if (whoseturn == "red_piece") {
        whoseturn = "black_piece";
      }
      return true;
    }
  }
  return false;
}
