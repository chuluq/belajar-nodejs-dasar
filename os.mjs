import os from "os";

console.info(os.platform());
console.info(os.arch());
console.info(os.freemem());
console.info(os.totalmem());
console.info(os.hostname());
console.info(os.homedir());
console.table(os.cpus());
console.table(os.networkInterfaces());
