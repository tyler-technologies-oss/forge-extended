"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = execute;
/**
 * Executes a Command and returns its promisified result.
 *
 * @stable
 */
function execute(command, args) {
    const result = args ? command(args) : command();
    if (result instanceof Promise) {
        return result;
    }
    else {
        return Promise.resolve(result);
    }
}
//# sourceMappingURL=command.js.map