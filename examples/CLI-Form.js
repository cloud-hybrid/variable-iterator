import { default as Prompt } from "variable-iterator";

const name = await Prompt("Name" + ":" + " ", "Name");
const height = await Prompt("Height" + ":" + " ", "Height");
const age = await Prompt("Age" + ":" + " ", "Age");

console.debug("Name" + ":", name);
console.debug("Height" + ":", height);
console.debug("Age" + ":", age);

const Data = {};

[name, height, age].forEach(
    (_) => {
        const $ = Object.keys(_).pop();

        Data[$] = Object.values(_).pop();
    }
);

console.debug(Data);

process.exit(0);