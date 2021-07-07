var boardsize = 8;
var checkerboard = new Array(8);
var canvas = document.getElementById("checkerboard");
var context = canvas.getContext("2d");
var lasttouchindex = 0;
var lasttouchsubindex = 0;
var previndex = 0;
var prevsubindex = 0;
var currentmoveindex = 0;
var currentmovesubindex = 0;
var x;
var y;
var whoseturn = "red";

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

  context.fillStyle = "#FFFFFF";
  context.beginPath();
  context.moveTo(
    checkerboard[previndex][prevsubindex].left,
    checkerboard[previndex][prevsubindex].top
  );
  context.lineTo(
    checkerboard[currentmoveindex][currentmovesubindex].left,
    checkerboard[currentmoveindex][currentmovesubindex].top
  );
  context.lineTo(
    checkerboard[currentmoveindex][currentmovesubindex].left - 5,
    checkerboard[currentmoveindex][currentmovesubindex].top - 5
  );
  context.lineTo(
    checkerboard[currentmoveindex][currentmovesubindex].left + 10,
    checkerboard[currentmoveindex][currentmovesubindex].top - 5
  );
  context.lineTo(
    checkerboard[currentmoveindex][currentmovesubindex].left,
    checkerboard[currentmoveindex][currentmovesubindex].top
  );
  context.strokeStyle = "white";
  context.lineWidth = 5;
  context.stroke();
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

function findhyp(x1, y1, x2, y2) {
  var opposite = y2 - y1;
  var adjacent = x2 - x1;

  opposite = opposite * opposite;
  adjacent = adjacent * adjacent;

  return Math.sqrt(opposite + adjacent);
}

function drawArrow(fromx, fromy, tox, toy) {
  //variables to be used when creating the arrow
  var c = document.getElementById("checkerboard");
  var ctx = context.getContext("2d");
  const width = 22;
  var headlen = 10;
  // This makes it so the end of the arrow head is located at tox, toy, don't ask where 1.15 comes from
  tox -= Math.cos(angle) * (width * 1.15);
  toy -= Math.sin(angle) * (width * 1.15);

  var angle = Math.atan2(toy - fromy, tox - fromx);

  //starting path of the arrow from the start square to the end square and drawing the stroke
  ctx.beginPath();
  ctx.moveTo(fromx, fromy);
  ctx.lineTo(tox, toy);
  ctx.strokeStyle = "#cc0000";
  ctx.lineWidth = width;
  ctx.stroke();

  //starting a new path from the head of the arrow to one of the sides of the point
  ctx.beginPath();
  ctx.moveTo(tox, toy);
  ctx.lineTo(
    tox - headlen * Math.cos(angle - Math.PI / 7),
    toy - headlen * Math.sin(angle - Math.PI / 7)
  );

  //path from the side point of the arrow, to the other side point
  ctx.lineTo(
    tox - headlen * Math.cos(angle + Math.PI / 7),
    toy - headlen * Math.sin(angle + Math.PI / 7)
  );

  //path from the side point back to the tip of the arrow, and then again to the opposite side point
  ctx.lineTo(tox, toy);
  ctx.lineTo(
    tox - headlen * Math.cos(angle - Math.PI / 7),
    toy - headlen * Math.sin(angle - Math.PI / 7)
  );

  //draws the paths created above
  ctx.strokeStyle = "#cc0000";
  ctx.lineWidth = width;
  ctx.stroke();
  ctx.fillStyle = "#cc0000";
  ctx.fill();
}
