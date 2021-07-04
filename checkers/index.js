var checkerboard = new Array(8).fill(new Array(8));

for (let index = 0; index < 8; index++) {
  for (let subindex = 0; subindex < 8; subindex++) {
    if (index % 2 === 0) {
      if (subindex % 2 === 0) {
        checkerboard[index][subindex] = "black";
      } else {
        checkerboard[index][subindex] = "white";
      }
      console.log(index);
    } else {
      if (subindex % 2 === 0) {
        checkerboard[index][subindex] = "white";
      } else {
        checkerboard[index][subindex] = "black";
      }
    }
  }
}

console.log(checkerboard);
