"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RineFn {
    exec(valfn) {
        let val, evalval = false;
        const oncehandler = {
            has: (target, property) => {
                checkEval();
                return Reflect.has(val, property);
            },
            get: (target, property) => {
                checkEval();
                return Reflect.get(val, property);
            },
            getPrototypeOf: () => {
                checkEval();
                return Reflect.getPrototypeOf(val);
            },
            setPrototypeOf: (targer, proto) => {
                checkEval();
                return Reflect.setPrototypeOf(val, proto);
            },
            isExtensible: () => {
                checkEval();
                return Reflect.isExtensible(val);
            },
            preventExtensions: () => {
                checkEval();
                return Reflect.preventExtensions(val);
            },
            defineProperty: (target, property, descriptor) => {
                checkEval();
                return Reflect.defineProperty(val, property, descriptor);
            },
            ownKeys: () => {
                checkEval();
                return Reflect.ownKeys(val);
            },
            deleteProperty: (targer, property) => {
                checkEval();
                return Reflect.deleteProperty(val, property);
            },
            apply: (target, thisArg, argumentsList) => {
                checkEval();
                return Reflect.apply(val, thisArg, argumentsList);
            },
            construct(target, argumentsList, newTarget) {
                checkEval();
                return Reflect.construct(val, argumentsList, newTarget);
            }
        }, handler = {
            has: { value: (target, property) => Reflect.has(val, property) },
            get: { value: (target, property) => Reflect.get(val, property) },
            getPrototypeOf: { value: () => Reflect.getPrototypeOf(val) },
            setPrototypeOf: { value: (targer, proto) => Reflect.setPrototypeOf(val, proto) },
            isExtensible: { value: () => Reflect.isExtensible(val) },
            preventExtensions: { value: () => Reflect.preventExtensions(val) },
            defineProperty: { value: (target, property, descriptor) => Reflect.defineProperty(val, property, descriptor) },
            ownKeys: { value: () => Reflect.ownKeys(val) },
            deleteProperty: { value: (targer, property) => Reflect.deleteProperty(val, property) },
            apply: { value: (target, thisArg, argumentsList) => Reflect.apply(val, thisArg, argumentsList) },
            construct: { value: (target, argumentsList, newTarget) => Reflect.construct(val, argumentsList, newTarget) }
        }, emptyobj = () => { };
        function checkEval() {
            if (!evalval) {
                val = valfn();
                if (typeof val != 'object') {
                    val = Object(val);
                }
                evalval = true;
                emptyobj.__proto__.__proto__ = val;
            }
            Object.defineProperties(oncehandler, handler);
        }
        return new Proxy(emptyobj, oncehandler);
    }
}
exports.RineFn = RineFn;
//# sourceMappingURL=RineFn.js.map