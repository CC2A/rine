"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RineFn_1 = require("./RineFn");
class PropertyContext {
    self() {
        throw 'todo';
        return null;
    }
}
exports.PropertyContext = PropertyContext;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class RineFnProperty extends RineFn_1.RineFn {
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
            get: (targer, property) => this.ctx[property]
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
    exec() {
        const baseproxy = super.exec(this.$get);
        if (this.$call != null) {
            return new Proxy(baseproxy, {
                apply: (target, thisArg, argumentsList) => Reflect.apply(this.$call, thisArg, argumentsList),
                construct: (target, argumentsList, newTarget) => Reflect.construct(this.$call, argumentsList, newTarget)
            });
        }
        else
            return baseproxy;
    }
}
exports.RineFnProperty = RineFnProperty;
//# sourceMappingURL=property.js.map