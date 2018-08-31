export * from './types'
import { IfExtract, KeyNotCrossEach3, KeyCrossedError } from './types'

export interface RineAttribute<S> {
    [key: string]: {
        call?(ctx);
    };
    [key: number]: {
        call?(ctx);
    };
}

export interface RineProperty<S> {
    [key: string]: {
        get?(ctx);
        call?(ctx);
    };
    [key: number]: {
        get?(ctx);
        call?(ctx);
    };
}

export interface RineOperate<S> {
    [key: string]: {
        call?(ctx);
    };
    [key: number]: {
        call?(ctx);
    };
}

export interface RineDefine<
    A extends RineAttribute<A>,
    P extends RineProperty<P>,
    O extends RineOperate<O>,
    R extends Rine,
    F,
    > {
    attr?: A,
    props?: P,
    opers?: O,
    onConstruction?: F,
}

export interface Rine {

}

export interface RineConstructor<T extends Rine> {
    new(): T
    (): T
}

function nameCheck<A, B, C>(a: A, b: B, c: C): KeyNotCrossEach3<void, never, A, B, C> {
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

export function rine<
    A extends RineAttribute<A>,
    P extends RineProperty<P>,
    O extends RineOperate<O>,
    R extends Rine,
    F,
    >
    (defs: RineDefine<A, P, O, R, F>): IfExtract<KeyNotCrossEach3<F, never, A, P, O>, never, RineConstructor<R>, F> {
    const { attr, props, opers, onConstruction } = defs
    nameCheck(attr, props, opers)

    return function constructor(...p) {
        if (!(this instanceof constructor)) return new (constructor as any)()

    } as any
}

function makeProxy() {

}

