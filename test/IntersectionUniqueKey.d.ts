import { KeyNotCrossEachOther } from './KeyNotCrossEachOther';
export declare type IntersectionUniqueKey<F, A, B> = KeyNotCrossEachOther<{
    [K in keyof (A & B)]: K extends keyof A ? A[K] : K extends keyof B ? B[K] : (A & B)[K];
}, F, A, B>;
