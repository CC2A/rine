"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rine_1 = require("./rine");
console.log(rine_1.rine);
const obj = rine_1.rine({
    props: {
        empty: {
            get(ctx) {
            }
        }
    },
    onConstruction: (function (a) {
    })
});
new obj(1);
//# sourceMappingURL=test.js.map