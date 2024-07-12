import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log");

const log = new Console({
  stdout: file,
  stderr: file,
});

log.info("Hello log");
log.error("Error log");

const person = {
  firstName: "Budi",
  lastName: "Gunawan",
};

log.table(person);
