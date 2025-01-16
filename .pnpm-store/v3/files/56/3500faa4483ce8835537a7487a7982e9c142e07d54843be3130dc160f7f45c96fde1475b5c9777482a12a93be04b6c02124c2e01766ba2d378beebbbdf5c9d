"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.and = and;
exports.by = by;
exports.isInProgress = isInProgress;
exports.isPending = isPending;
exports.isDirty = isDirty;
exports.isDone = isDone;
const node_1 = require("./node");
function and(...criteria) {
    return (node) => criteria.every(c => c(node));
}
function by(criteria) {
    function fn(args) {
        return criteria(args);
    }
    fn['and'] = function (args) {
        return and(criteria, args);
    };
    return fn;
}
function isInProgress(node) {
    return node.state === node_1.STATE_IN_PROGRESS;
}
function isPending(node) {
    return node.state === node_1.STATE_PENDING;
}
function isDirty(node) {
    return node.state === node_1.STATE_DIRTY;
}
function isDone(node) {
    return node.state === node_1.STATE_DONE;
}
//# sourceMappingURL=select.js.map