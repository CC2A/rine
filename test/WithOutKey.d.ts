declare type TheWithOutKey<A, T extends any> = A extends never ? never : {
    [K in T extends PropertyKey ? T : T]: A[K];
};
export declare type WithOutKey<A, B extends PropertyKey[]> = TheWithOutKey<A, Exclude<keyof A, B[any]>>;
export {};
