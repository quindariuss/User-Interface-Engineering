const fs = require("fs");

process.argv.forEach(function (file, index, array) {
  fs.readFile(
    "/Volumes/Untitled/Users/quin/Documents/User-Interface-Engineering/Research Project/" +
      file,
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(file + "===========================================");
      console.log(data.split(" ").length);
    }
  );
});
