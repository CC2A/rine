export * from './KeyNotCrossEachOther'
export * from './IntersectionUniqueKey'
export * from './WithKey'

export type IfExtract<T, F, A, B> = A extends B ? T : F;
export type IfExclude<T, F, A, B> = A extends B ? F : T;