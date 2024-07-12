import util from "util";

const firstName = "Choirul";
const lastName = "Chuluq";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
  firstName: "Choirul",
  lastName: "Chuluq",
};

console.info(`Person: ${JSON.stringify(person)}`);
console.info(util.format("Person: %j", person));
