import { default as Prompt } from "variable-iterator";

const name = await Prompt("Name" + ":" + " ", "Name");
const height = await Prompt("Height" + ":" + " ", "Height");
const age = await Prompt("Age" + ":" + " ", "Age");

console.debug(name);
console.debug(age);
console.debug(height);

process.exit(0);