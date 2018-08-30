"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KeyNotCrossEachOther_1 = require("./KeyNotCrossEachOther");
exports.KeyCrossedError = KeyNotCrossEachOther_1.KeyCrossedError;
const KeyNotCrossEachOther_2 = require("./KeyNotCrossEachOther");
function nameCheck(a, b, c) {
    const names = new Map();
    for (const key in a) {
        if (names.has(key))
            throw new KeyNotCrossEachOther_2.KeyCrossedError;
        names.set(key, null);
    }
    return;
}
function rine(defs) {
    const { attr, props, opers } = defs;
    nameCheck(attr, props, opers);
    return null;
}
exports.rine = rine;
//# sourceMappingURL=rine.js.map