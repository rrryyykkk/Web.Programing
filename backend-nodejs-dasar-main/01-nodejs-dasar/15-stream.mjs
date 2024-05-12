import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Pelangi\n");
writer.write("Syawalia\n");
writer.write("Humaira\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
  console.info(data.toString());
});
