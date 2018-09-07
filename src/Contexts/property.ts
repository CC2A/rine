import { IRineConstructor, RineType } from '../Rine'
import { RineFn } from './RineFn'

//public 
export interface RinePropertyContext {
    self<T extends IRineConstructor<any>>(): RineType<T>;
}

export class PropertyContext implements RinePropertyContext {
    self() {
        throw 'todo'
        return null
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class RineFnProperty extends RineFn {
    $get: () => any
    $call: () => any
    ctx: RinePropertyContext
    ctx_proxy: object
    setGet($get) {
        if (typeof $get == 'function')
            this.$get = $get
    }
    setCall($call) {
        if (typeof $call == 'function')
            this.$call = $call
    }
    constructor(get: (ctx: RinePropertyContext) => Function, call: (ctx: RinePropertyContext) => Function) {
        super()
        this.ctx = new PropertyContext
        const ctx = new Proxy({}, {
            get: (targer, property) => this.ctx[property]
        })
        if (typeof get == 'function') {
            const $get = get.call(ctx, ctx)
            this.setGet($get)
        }
        if (typeof call == 'function') {
            const $call = call.call(ctx, ctx)
            this.setCall($call)
        }
    }
    exec() {
        const baseproxy = super.exec(this.$get)
        if (this.$call != null) {
            return new Proxy(baseproxy, {
                apply: (target, thisArg, argumentsList) => Reflect.apply(this.$call, thisArg, argumentsList),
                construct: (target, argumentsList, newTarget) => Reflect.construct(this.$call, argumentsList, newTarget)
            })
        } else return baseproxy
    }
}