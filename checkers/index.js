var checkerboard = new Array(8);

for (index = 0; index < 8; index++) {
  checkerboard[index] = new Array(8);
  for (subindex = 0; subindex < 8; subindex++) {
    if (index % 2 == 0) {
      if (subindex % 2 == 0) {
        checkerboard[index][subindex] = "black";
      } else if (subindex % 2 == 1) {
        checkerboard[index][subindex] = "white";
      }
    } else if (index % 2 == 1) {
      if (subindex % 2 == 0) {
        checkerboard[index][subindex] = "white";
      } else if (subindex % 2 == 1) {
        checkerboard[index][subindex] = "black";
      }
    }
  }
}

console.log(checkerboard);
