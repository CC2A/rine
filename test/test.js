"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
console.log(_1.rine);
function SomeDefs() {
    return _1.getType({
        props: {
            empty: {
                get(ctx) {
                    return () => 'asd';
                },
                call(ctx) {
                    return () => 123;
                }
            },
            self: {
                get(ctx) {
                    return null;
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
}
exports.Some = _1.rine({
    props: {
        empty: {
            get(ctx) {
                return () => 'asd';
            },
            call(ctx) {
                return () => 123;
            }
        },
        self: {
            get(ctx) {
                return null;
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
// console.log(o instanceof Rine)
// const e = o.empty
// console.log(e)
// const eo = e()
// console.log(eo)
// debugger
//# sourceMappingURL=test.js.map