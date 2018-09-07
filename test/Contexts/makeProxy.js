"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const property_1 = require("./property");
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
            fns.set(k, new property_1.RineFnProperty(get, call));
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
                if (fn instanceof property_1.RineFnProperty) {
                    return fn.exec();
                }
            }
        },
    });
}
exports.makeProxy = makeProxy;
//# sourceMappingURL=makeProxy.js.map