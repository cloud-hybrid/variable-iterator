import { default as Prompt } from "./src/Prompt.js";

const name = await Prompt("Name" + ":" + " ", "Name");
const age = await Prompt("Age" + ":" + " ", "Age");

console.debug(name);
console.debug(age);

process.exit(0);