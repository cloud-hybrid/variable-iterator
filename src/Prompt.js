import * as Input from "readline";

/*****
 *
 * @param content {string} - Prompt Output
 * @param _ {string} - Object Key Assignment
 * @returns {Object}
 *
 * @constructor
 *
 */

const Prompt = async (content, _) => {
    const Reader = Input.createInterface({ input: process.execArgv.shift() || process.stdin, output: process.stdout, prompt: content });

    process.stdout.write(Reader.getPrompt());

    const Awaitable = (function () {
        const $ = (async function * () {
            for await (const entry of Reader) yield entry;
        })();

        return async () => ((await $.next()).value);
    })();

    const main = async (_) => {
        const $ = {};

        $[_] = await Awaitable();

        Reader.close();

        return $;

    };

    return await main(_);
}

/*****
 *
 * @param content
 * @param assignment
 * @returns {Promise<{}>}
 */

export default async (content, assignment = "Object") => await Prompt(content, assignment);