export * from './types'
import { ParameterTransfer, WithoutKey, IntersectionUniqueKey, KeyNotCrossEach3, KeyCrossedError } from './types'
export const TypeId = Symbol('TypeId')
export const RineSymbol = Symbol('Rine')
export interface Rine {
    [RineSymbol]: this
}
export class Rine {
    [RineSymbol]: this
    constructor() {
        Object.defineProperties(this, {
            [RineSymbol]: { value: this }
        })
    }
    static [TypeId]: typeof RineSymbol
}
Object.defineProperties(Rine, {
    [TypeId]: { value: RineSymbol }
})
export function RineMixin<B extends new (...args: any[]) => any>(Base: B) {
    type $Rine = Rine
    return class Rine extends Base implements $Rine {
        [RineSymbol]: this
        constructor(...args: any[]) {
            super(...args)
            Object.defineProperties(this, {
                [RineSymbol]: { value: this }
            })
        }
    }
}

export type RineConstructor<T extends Rine, F extends Function> = T extends Rine ?
    (new (...args: ParameterTransfer<F>) => T) & ((...args: ParameterTransfer<F>) => T) : never
/** Obtain the `Rine` type of `RineConstructor<Rine, any>`  */
export type RineType<C extends RineConstructor<any, any>> = C extends RineConstructor<infer R, any> ? R : any

export interface RineAttribute {
    [key: string]: {
        call(ctx): Function;
    }
    [key: number]: {
        call(ctx): Function;
    }
}

export interface RineProperty {
    [key: string]: {
        get(this: RinePropertyContext, ctx?: RinePropertyContext): Function;
        call?(this: RinePropertyContext, ctx?: RinePropertyContext): Function;
    }
    [key: number]: {
        get(this: RinePropertyContext, ctx?: RinePropertyContext): Function;
        call?(this: RinePropertyContext, ctx?: RinePropertyContext): Function;
    }
}

export interface RineOperate {
    [key: string]: {
        call(ctx): Function;
    }
    [key: number]: {
        call(ctx): Function;
    }
}

export interface RineDefine<
    A extends RineAttribute,
    P extends RineProperty,
    O extends RineOperate,
    F extends Function,
    > {
    attr?: A,
    props?: P,
    opers?: O,
    onConstruction?: F,
}

export interface RinePropertyContext {

}
class PropertyContext implements RinePropertyContext {

}

interface RineFn { }
abstract class RineFn {
    exec(valfn: Function) {
        let val, evalval = false
        const oncehandler: ProxyHandler<any> = {
            has: (target, property) => {
                checkEval()
                return Reflect.has(val, property)
            },
            get: (target, property) => {
                checkEval()
                return Reflect.get(val, property)
            },
            getPrototypeOf: () => {
                checkEval()
                return Reflect.getPrototypeOf(val)
            },
            setPrototypeOf: (targer, proto) => {
                checkEval()
                return Reflect.setPrototypeOf(val, proto)
            },
            isExtensible: () => {
                checkEval()
                return Reflect.isExtensible(val)
            },
            preventExtensions: () => {
                checkEval()
                return Reflect.preventExtensions(val)
            },
            defineProperty: (target, property, descriptor) => {
                checkEval()
                return Reflect.defineProperty(val, property, descriptor)
            },
            ownKeys: () => {
                checkEval()
                return Reflect.ownKeys(val)
            },
            deleteProperty: (targer, property) => {
                checkEval()
                return Reflect.deleteProperty(val, property)
            },
            apply: (target, thisArg, argumentsList) => {
                checkEval()
                return Reflect.apply(val, thisArg, argumentsList)
            },
            construct(target, argumentsList, newTarget) {
                checkEval()
                return Reflect.construct(val, argumentsList, newTarget)
            }
        }, handler: PropertyDescriptorMap & ThisType<any> = {
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
        }, emptyobj = () => { }
        function checkEval() {
            if (!evalval) {
                val = valfn()
                if (typeof val != 'object') {
                    val = Object(val)
                }
                evalval = true;

                (emptyobj as any).__proto__.__proto__ = val
            }
            Object.defineProperties(oncehandler, handler)
        }
        return new Proxy(emptyobj, oncehandler)
    }
}

class RineFnProperty extends RineFn {
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

function makeProxy<T extends object,
    A extends RineAttribute,
    P extends RineProperty,
    O extends RineOperate,>
    (self: T, attr: A, props: P, opers: O): T {
    const fns = new Map<any, RineFn>()
    if (props != null) {
        for (const k in props) {
            const v = props[k]
            if (typeof v == null) continue
            const { get, call } = v
            if (typeof get != 'function' && typeof call != 'function') continue
            fns.set(k, new RineFnProperty(get, call))
        }
    }
    return new Proxy(self, {
        apply(target, thisArg, argumentsList) {
        },
        construct(target, thisArg, argumentsList) {
            return null//todo
        },
        get(target, property, receiver) {
            if (fns.has(property)) {
                const fn = fns.get(property)
                if (fn instanceof RineFnProperty) {
                    return fn.exec()
                }
            }
        },

    })
}
//#region function rine
/** If the key of `a` `b` `c` has a cross, throw `KeyCrossedError`
 * @param a any obj
 * @param b also any obj
 * @param c still any obj
 */
function keyCrossCheck<A, B, C>(a: A, b: B, c: C): KeyNotCrossEach3<void, never, A, B, C> {
    const names = new Map()
    function check(v) {
        for (const key in v) {
            if (names.has(key)) throw new KeyCrossedError
            names.set(key, null)
        }
    }
    check(a)
    check(b)
    check(c)
    return
}
//#region rine typecheck
type CheckRineProperty<P extends RineProperty, R> =
    {} extends P ?
    R :
    IntersectionUniqueKey<never, R,
    {
        readonly [K in keyof P]:
        P[K]['call'] extends (ctx: RineFnProperty) => infer R ?
        {} extends R ?
        ReturnType<ReturnType<P[K]['get']>> :
        ReturnType<ReturnType<P[K]['get']>> & ReturnType<P[K]['call']> :
        ReturnType<ReturnType<P[K]['get']>>
    }>

type CheckRineOperate<O extends RineOperate, R> =
    {} extends O ?
    R :
    IntersectionUniqueKey<never, R,
    {
        readonly [K in keyof O]:
        ReturnType<O[K]['call']>
    }>

type CheckRineAttribute<A extends RineAttribute, R> =
    {} extends A ?
    R :
    IntersectionUniqueKey<never, R,
    {
        readonly [K in keyof A]:
        ReturnType<A[K]['call']>
    }>
//#endregion
/** Auto make chain obj, with type
 * @param defs definition of chain object
 */
export function rine<
    A extends RineAttribute,
    P extends RineProperty,
    O extends RineOperate,
    F extends Function,
    >
    (defs: RineDefine<A, P, O, F>): RineConstructor<CheckRineProperty<P, CheckRineOperate<O, CheckRineAttribute<A, {}>>> & Rine, F> {
    const { attr, props, opers, onConstruction } = defs
    keyCrossCheck(attr, props, opers)

    return function constructor(...p) {
        if (!(this instanceof constructor))
            return new (constructor as any)()

        if (onConstruction != null) {
            (onConstruction as any).call(this, ...p)
        }

        const proxy = makeProxy(this, attr, props, opers)

        //set __proto__
        const proto = new Rine()
        this.__proto__ = new Proxy(proxy, {
            get(target, property, receiver) {
                if (property == '__proto__') return proto
                return target[property]
            },
            getPrototypeOf(target) {
                return proto
            }
        })
    } as any
}
//#endregion