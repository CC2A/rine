"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
/** If the key of `a` `b` `c` has a cross, throw `KeyCrossedError`
 * @param a any obj
 * @param b also any obj
 * @param c still any obj
 */
function keyCrossCheck(a, b, c) {
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
exports.keyCrossCheck = keyCrossCheck;
//# sourceMappingURL=keyCrossCheck.js.map