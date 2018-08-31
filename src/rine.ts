export * from './types'
import { IfExtract, KeyNotCrossEach3, KeyCrossedError } from './types'

export interface RineAttribute<R> {
    call?();
}

export interface RineProperty<R> {
    [key: string]: {
        get(ctx): () => R;
        call?(ctx): Function;
    }
    [key: number]: {
        get(ctx): () => R;
        call?(ctx): Function;
    }
}

export interface RineOperate<R> {
    call?();
}

// export interface RineDefine<
//     A extends RineAttribute<A>,
//     P extends RineProperty<P>,
//     O extends RineOperate<O>,
//     R extends Rine,
//     F,
//     > {
//     attr?: A,
//     props?: P,
//     opers?: O,
//     onConstruction?: F,
// }

export interface Rine {

}
export class Rine {

}

export interface RineConstructor<T extends Rine> {
    new(): T
    (): T
}

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

export function rine(): RineDefiner<Rine> {
    return new RineDefiner
}

class RineDefiner<OUT extends Rine> {
    prop<D extends RineProperty<any>>(def: D):
        D extends RineProperty<infer R> ?
        D[keyof D]['call'] extends (ctx) => infer CR ?
        {} extends CR ? RineDefiner<OUT & { readonly [K in keyof D]: R }> :
        RineDefiner<OUT & { readonly [K in keyof D]: R & CR }> :
        RineDefiner<OUT & { readonly [K in keyof D]: R }> :
        any {
        return this as any//todo
    }
    val(): OUT {
        return null//todo
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