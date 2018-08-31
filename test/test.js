"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rine_1 = require("./rine");
console.log(rine_1.rine);
const obj = rine_1.rine().prop({
    some: {
        get(ctx) {
            return () => 'asd';
        }
    }
}).val();
function some1(a) {
    return null;
}
function some2(a) {
    return null;
}
let out1 = some1({
    a() {
        return 'asd';
    }
});
let out2 = some2({
    a() {
        return 'asd';
    }
});
//# sourceMappingURL=test.js.map