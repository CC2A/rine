import { KeyCrossedError, KeyNotCrossEach3 } from '../types'

/** If the key of `a` `b` `c` has a cross, throw `KeyCrossedError`
 * @param a any obj
 * @param b also any obj
 * @param c still any obj
 */
export function keyCrossCheck<A, B, C>(a: A, b: B, c: C): KeyNotCrossEach3<void, never, A, B, C> {
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