declare type TheArrKeys<T extends PropertyKey[]> = {
    [K in (keyof T) extends void ? any : any]: T[K];
};
declare type GetStrKey<T extends any> = T[string];
export declare type Keys<T extends PropertyKey[] | {}> = T extends Array<any> ? GetStrKey<TheArrKeys<T>> : keyof T;
declare type TheWithOutKey<A, T extends any> = A extends never ? never : {
    [K in T extends PropertyKey ? T : T]: A[K];
};
export declare type WithOutKey<A, B extends PropertyKey[]> = TheWithOutKey<A, Exclude<Keys<A>, Keys<B>>>;
export {};
