export { KeyNotCrossEachOther, KeyNotCrossEach3, KeyCrossedError } from './KeyNotCrossEachOther'
import { KeyNotCrossEach3, KeyCrossedError } from './KeyNotCrossEachOther'

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
    > {
    attr?: A,
    props?: P,
    opers?: O,
}

function nameCheck<A, B, C>(a: A, b: B, c: C): KeyNotCrossEach3<void, never, A, B, C> {
    const names = new Map()
    for (const key in a) {
        if (names.has(key)) throw new KeyCrossedError
        names.set(key, null)
    }
    return
}

export function rine<
    A extends RineAttribute<A>,
    P extends RineProperty<P>,
    O extends RineOperate<O>,
    >
    (defs: RineDefine<A, P, O>) {
    const { attr, props, opers } = defs
    nameCheck(attr, props, opers)

    return null
}