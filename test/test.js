"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rine_1 = require("./rine");
console.log(rine_1.rine);
exports.obj = (() => {
    const obj = rine_1.rine({
        props: {
            empty: {
                get(ctx) {
                    return () => 'asd';
                },
                call(ctx) {
                    return () => 123;
                }
            }
        },
        opers: {
            some: {
                call(ctx) {
                    return () => false;
                }
            }
        },
        onConstruction(a) {
        },
    });
    return obj;
})();
let o = new exports.obj(1);
console.log(o instanceof rine_1.Rine);
debugger;
//# sourceMappingURL=test.js.map