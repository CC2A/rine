"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rine_1 = require("./rine");
console.log(rine_1.rine);
exports.Some = rine_1.rine({
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
let o = new exports.Some(1);
console.log(o instanceof rine_1.Rine);
const e = o.empty;
console.log(e);
const eo = e();
console.log(eo);
debugger;
//# sourceMappingURL=test.js.map