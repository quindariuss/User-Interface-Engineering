var checkerboard = new Array(8).fill(new Array(8));

for (let index = 0; index < 8; index++) {
  console.log(index);
  console.log("index mod" + (index % 2));
  for (let subindex = 0; subindex < 8; subindex++) {
    if (index % 2 == 0) {
      if (subindex % 2 == 0) {
        console.log(true);
        checkerboard[index][subindex] = "black";
      } else if (subindex == 1) {
        checkerboard[index][subindex] = "white";
      }
    }

    // if (index % 2 == 1) {
    //   if (subindex % 2 === 0) {
    //     checkerboard[index][subindex] = "white";
    //   } else if (subindex == 1) {
    //     checkerboard[index][subindex] = "black";
    //   }
    // }
  }
}

console.log(checkerboard);
