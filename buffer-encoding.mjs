import { Buffer } from "buffer";

const buffer = Buffer.from("Choirul Chuluq", "utf-8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("Q2hvaXJ1bCBDaHVsdXE=", "base64");
console.info(bufferBase64.toString("utf-8"));
