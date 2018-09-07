import { KeyNotCrossEach3 } from '../types';
/** If the key of `a` `b` `c` has a cross, throw `KeyCrossedError`
 * @param a any obj
 * @param b also any obj
 * @param c still any obj
 */
export declare function keyCrossCheck<A, B, C>(a: A, b: B, c: C): KeyNotCrossEach3<void, never, A, B, C>;
