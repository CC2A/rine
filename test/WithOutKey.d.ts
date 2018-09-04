export declare type WithoutKey<A, B extends PropertyKey[]> = Pick<A, Exclude<keyof A, B[any]>>;
export declare type Minus<A, B> = Pick<A, Exclude<keyof A, keyof B>>;
