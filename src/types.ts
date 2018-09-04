export * from './KeyNotCrossEachOther'
export * from './UnionUniqueKey'
export * from './WithOutKey'

export type IfExtract<T, F, A, B> = A extends B ? T : F;
export type IfExclude<T, F, A, B> = A extends B ? F : T;