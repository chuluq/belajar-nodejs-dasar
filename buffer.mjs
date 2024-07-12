import { Buffer } from "buffer";

const buffer = Buffer.from("Choirul Chuluq");

console.info(buffer);
console.info(buffer.toString());

buffer.reverse();
console.info(buffer.toString());
