export * from './KeyNotCrossEachOther'
export * from './IntersectionUniqueKey'
export * from './Subtraction'
export * from './ParameterTransfer'

export type IfExtract<T, F, A, B> = A extends B ? T : F;
export type IfExclude<T, F, A, B> = A extends B ? F : T;

export type ConstructorFn<T> = (new (...args: any[]) => T) | ((...args: any[]) => T)