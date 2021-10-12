//import * as FS from "fs";
//import * as Path from "path";
//import * as Utility from "util";
//import * as Process from "process";
//import * as Reader from "readline";
//
//const Target = Process.cwd() + Path.sep + "Template1.json";
//
///***
// *
// * @param content = "Create Template.json (Y/N): "
// * @param callback = function()
// * @returns {Promise<void>}
// * @constructor
// */
//
//const Prompt = async () => {
//    const Input = Reader.createInterface({
//        input: process.stdin,
//        output: process.stdout,
//        prompt: "Create Template.json (Y/N): "
//    });
//
//    Input.on("line", async (stream) => {
//        switch (stream) {
//            case "": {
//                Process.stdout.write(["  ↳ Error: Invalid Input", " ",
//                    "(\"", stream.trim(), "\")",
//                    "\n", "\n"
//                ].join(""));
//
//                return Input.prompt();
//            }
//            default: {
//                console.debug("\n" + "Validating Input ..." + "\n");
//
//                const Response = stream.trim().valueOf();
//
//                console.debug("Response" + ":", Response);
//
//                Input.close();
//            }
//        }
//    }).on("close", () => {
//        console.debug("\n" + "Closing Input Stream", "...");
//        console.debug("  ↳ Exit (0)");
//        console.debug("");
//
//        Input.close();
//    });
//
//    return new Promise(() => Input.prompt());
//};
//
//const Export = async () => {
//    return new Promise(() => FS.existsSync(Target)
//        ? console.debug("Validated File-Handler")
//        : Prompt());
//}
//
//export default Utility.callbackify(Export);

import * as readline from "readline";
import * as util from "util";

const rl = readline.createInterface({
    input: process.openStdin(),
    output: process.stdout
});

export default (prompt, callback) => rl.question(prompt, (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${ answer }`);

    return (callback) ? () => callback(): rl.close();
});