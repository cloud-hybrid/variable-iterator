import * as Process from "process";

const Input = Process.openStdin();

const Prompt = (callback = null) => {
    Input.on("data", async ($) => {
        let Allocation = 0;

        // Allocate --> Array Buffer of (n + 1) Bytes
        const Buffer = await $;
        new Array(Buffer[Symbol.iterator]).forEach(
            (_) => Allocation += 1
        );

        // Shift <-- Left to Release Empty Byte for String[0]
        const Stream = Buffer.toString("UTF-8", Allocation - 1);

        console.debug("Input Received" + ":", Stream.trim());

        if (callback !== null) {
            Input.emit("prompt");

            callback();
        } else {
            Process.stdin.unref();
        }
    });
};

Input.prependListener("prompt", () => Process.stdout.write("Write \"Hello World\"" + "\n"));

Input.emit("prompt");

Prompt(() => Prompt());
