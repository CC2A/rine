"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
exports.RineSymbol = Symbol('Rine');
class Rine {
    constructor() {
        Object.defineProperties(this, {
            [exports.RineSymbol]: { value: this }
        });
    }
}
exports.Rine = Rine;
Object.defineProperties(Rine, {
    [utils_1.TypeId]: { value: exports.RineSymbol }
});
function RineMixin(Base) {
    return class Rine extends Base {
        constructor(...args) {
            super(...args);
            Object.defineProperties(this, {
                [exports.RineSymbol]: { value: this }
            });
        }
    };
}
exports.RineMixin = RineMixin;
//# sourceMappingURL=RineClass.js.map