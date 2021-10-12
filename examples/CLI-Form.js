import { default as Prompt } from "./../src/Prompt.js";

const name = await Prompt("Name" + ":" + " ", "Name");
const height = await Prompt("Height" + ":" + " ", "Height");
const age = await Prompt("Age" + ":" + " ", "Age");

console.debug(name);
console.debug(age);
console.debug(height);

process.exit(0);