export * from './types'
import { IfExtract, KeyNotCrossEachOther, KeyNotCrossEach3, KeyCrossedError } from './types'

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
        get(ctx): Function;
        call?(ctx): Function;
    }
    [key: number]: {
        get(ctx): Function;
        call?(ctx): Function;
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

export interface Rine {

}
export class Rine {

}

export interface RineConstructor<T extends Rine> {
    new(): T
    (): T
}

export type RineType<C extends RineConstructor<any>> = C extends RineConstructor<infer R> ? R : any

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

type CheckRineProperty<P extends RineProperty, R> =
    {} extends P ?
    R :
    R & {
        readonly [K in keyof P]:
        P[K]['call'] extends (ctx) => infer R ?
        {} extends R ?
        ReturnType<ReturnType<P[K]['get']>> :
        ReturnType<ReturnType<P[K]['get']>> & ReturnType<P[K]['call']> :
        ReturnType<ReturnType<P[K]['get']>>
    }

type CheckRineOperate<O extends RineOperate, R> =
    {} extends O ?
    R :
    R & {
        readonly [K in keyof O]:
        ReturnType<O[K]['call']>
    }
    
type CheckRineAttribute<A extends RineAttribute, R> =
    {} extends A ?
    R :
    R & {
        readonly [K in keyof A]:
        ReturnType<A[K]['call']>
    }

type Check_rine<
    A extends RineAttribute,
    P extends RineProperty,
    O extends RineOperate,
    > =
    RineConstructor<CheckRineProperty<P, CheckRineOperate<O, CheckRineAttribute<A, {}>>> & Rine>

export function rine<
    A extends RineAttribute,
    P extends RineProperty,
    O extends RineOperate,
    F extends Function,
    >
    (defs: RineDefine<A, P, O, F>): KeyNotCrossEach3<Check_rine<A, P, O>, never, A, P, O> {
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

function makeProxy<T extends object,
    A extends RineAttribute,
    P extends RineProperty,
    O extends RineOperate,>
    (self: T, attr: A, props: P, opers: O): T {
    if (props != null) {
        for (let k in props) {
            let v = props[k]
            if (typeof v == null) continue

            type t = typeof v.get
        }
    }
    return new Proxy(self, {

    })
}