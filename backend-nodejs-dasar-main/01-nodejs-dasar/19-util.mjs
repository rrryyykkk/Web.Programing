import util from "util";

const firstName = "Banyu";
const lastName = "Biru";

console.info(`Assallamualaikum ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
  firstName: "Banyu",
  lastName: "Biru",
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
