"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rine_1 = require("./Rine");
const utils_1 = require("./utils");
const makeProxy_1 = require("./Contexts/makeProxy");
/** Auto make chain obj, with type
 * @param defs definition of chain object
 */
function rine(defs) {
    const { attr, props, opers, onConstruction } = defs;
    utils_1.keyCrossCheck(attr, props, opers);
    return function constructor(...p) {
        if (!(this instanceof constructor))
            return new constructor();
        if (onConstruction != null) {
            onConstruction.call(this, ...p);
        }
        const proxy = makeProxy_1.makeProxy(this, attr, props, opers);
        //set __proto__
        const proto = new Rine_1.Rine();
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
//# sourceMappingURL=fn.rine.js.map