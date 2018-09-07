export * from './KeyNotCrossEachOther';
export * from './IntersectionUniqueKey';
export * from './Subtraction';
export * from './ParameterTransfer';
export declare type IfExtract<T, F, A, B> = A extends B ? T : F;
export declare type IfExclude<T, F, A, B> = A extends B ? F : T;
export declare type ConstructorFn<T> = (new (...args: any[]) => T) | ((...args: any[]) => T);
