export * from './KeyNotCrossEachOther';
export * from './UnionUniqueKey';
export * from './WithOutKey';
export declare type IfExtract<T, F, A, B> = A extends B ? T : F;
export declare type IfExclude<T, F, A, B> = A extends B ? F : T;
