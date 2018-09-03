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
class PropertyContext {
}
class RineFn {
}
class RineFnProperty extends RineFn {
    setGet($get) {
        if (typeof $get == 'function')
            this.$get = $get;
    }
    setCall($call) {
        if (typeof $call == 'function')
            this.$call = $call;
    }
    constructor(get, call) {
        super();
        this.ctx = new PropertyContext;
        const ctx = new Proxy({}, {
        //todo
        });
        if (typeof get == 'function') {
            const $get = get.call(ctx, ctx);
            this.setGet($get);
        }
        if (typeof call == 'function') {
            const $call = call.call(ctx, ctx);
            this.setCall($call);
        }
    }
    $exec() {
    }
}
function makeProxy(self, attr, props, opers) {
    const fns = new Map();
    if (props != null) {
        for (const k in props) {
            const v = props[k];
            if (typeof v == null)
                continue;
            const { get, call } = v;
            if (typeof get != 'function' && typeof call != 'function')
                continue;
            fns.set(k, new RineFnProperty(get, call));
        }
    }
    return new Proxy(self, {
        apply(target, thisArg, argumentsList) {
        },
        construct(target, thisArg, argumentsList) {
            return null; //todo
        },
        get(target, property, receiver) {
            if (fns.has(property)) {
                const fn = fns.get(property);
                if (fn instanceof RineFnProperty) {
                }
            }
        },
    });
}
//#region function rine
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
//#endregion
/** Auto make chain obj, with type
 * @param defs definition of chain object
 */
function rine(defs) {
    const { attr, props, opers, onConstruction } = defs;
    keyCrossCheck(attr, props, opers);
    return function constructor(...p) {
        if (!(this instanceof constructor))
            return new constructor();
        if (onConstruction != null) {
            onConstruction.call(this, ...p);
        }
        const proxy = makeProxy(this, attr, props, opers);
        //set __proto__
        const proto = new Rine();
        this.__proto__ = new Proxy(proxy, {
            get(target, property, receiver) {
                if (property == '__proto__')
                    return proto;
                return target[property];
            },
            getPrototypeOf(target) {
                return proto;
            }
        });
    };
}
exports.rine = rine;
//#endregion
//# sourceMappingURL=rine.js.map