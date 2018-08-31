"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./types"));
const types_1 = require("./types");
function nameCheck(a, b, c) {
    const names = new Map();
    function check(v) {
        for (const key in v) {
            if (names.has(key))
                throw new types_1.KeyCrossedError;
            names.set(key, null);
        }
    }
    check(a);
    check(b);
    check(c);
    return;
}
function rine(defs) {
    const { attr, props, opers, onConstruction } = defs;
    nameCheck(attr, props, opers);
    return function constructor(...p) {
        if (!(this instanceof constructor))
            return new constructor();
    };
}
exports.rine = rine;
function makeProxy() {
}
//# sourceMappingURL=rine.js.map