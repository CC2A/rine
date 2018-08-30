declare type _KeyNotCrossEachOther<T, F, A, A2 extends A & {
    [Pa in keyof B]: A2[Pa];
}, B, B2 extends B & {
    [Pb in keyof A]: B2[Pb];
}> = A extends {
    [Pa in keyof B]?: A2[Pa];
} ? F : B extends {
    [Pb in keyof A]?: B2[Pb];
} ? F : T;
export declare type KeyNotCrossEachOther<T, F, A, B> = _KeyNotCrossEachOther<T, F, A, A, B, B>;
export declare type KeyNotCrossEach3<T, F, A, B, C> = KeyNotCrossEachOther<KeyNotCrossEachOther<KeyNotCrossEachOther<T, F, C, B>, F, A, C>, F, A, B>;
export declare class KeyCrossedError extends Error {
    constructor();
}
export {};
