export * from './KeyNotCrossEachOther';
export * from './IntersectionUniqueKey';
export * from './WithKey';
export declare type IfExtract<T, F, A, B> = A extends B ? T : F;
export declare type IfExclude<T, F, A, B> = A extends B ? F : T;
