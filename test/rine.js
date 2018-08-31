"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./types"));
const types_1 = require("./types");
class Rine {
}
exports.Rine = Rine;
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
function rine() {
    return new RineDefiner;
}
exports.rine = rine;
class RineDefiner {
    // prop<R, D extends RineProperty<R>>(def: D): R {
    //     return this as any
    // }
    prop(def) {
        return this;
    }
    val() {
        return null; //todo
    }
}
// export function rine<
//     A extends RineAttribute<A>,
//     P extends RineProperty<P>,
//     O extends RineOperate<O>,
//     R extends Rine,
//     F,
//     >
//     (defs: RineDefine<A, P, O, R, F>): IfExtract<KeyNotCrossEach3<F, never, A, P, O>, never, RineConstructor<R>, F> {
//     const { attr, props, opers, onConstruction } = defs
//     keyCrossCheck(attr, props, opers)
//     return function constructor(...p) {
//         if (!(this instanceof constructor))
//             return new (constructor as any)()
//         if (onConstruction != null) {
//             (onConstruction as any).call(this, ...p)
//         }
//         const proxy = makeProxy(this, attr, props, opers)
//         //set __proto__
//         const proto = new Rine()
//         this.__proto__ = new Proxy(proxy, {
//             get(target, property, receiver) {
//                 if (property == '__proto__') return proto
//                 return target[property]
//             },
//             getPrototypeOf(target) {
//                 return proto
//             }
//         })
//     } as any
// }
// function makeProxy<T extends object,
//     A extends RineAttribute<A>,
//     P extends RineProperty<P>,
//     O extends RineOperate<O>,>
//     (self: T, attr: A | null, props: P | null, opers: O | null): T {
//     if (props != null) {
//         for (let k in props) {
//             let v = props[k]
//             if (typeof v == null) continue
//             type t = typeof v.get
//         }
//     }
//     return new Proxy(self, {
//     })
// }
//# sourceMappingURL=rine.js.map