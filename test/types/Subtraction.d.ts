export declare type WithoutKey<A, B extends PropertyKey[]> = Pick<A, Exclude<keyof A, B[any]>>;
export declare type MinusKey<A, B> = Pick<A, Exclude<keyof A, keyof B>>;
export declare type KeyExpand<A> = {
    [P in keyof A]: {
        [K in P]: A[P];
    };
};
export declare type Expand<A> = KeyExpand<A>[keyof KeyExpand<A>];
export declare type KeyPack<E> = E extends infer O ? keyof O : any;
export declare type Minus<A, B> = Pick<A, KeyPack<Exclude<Expand<A>, Expand<B>>>>;
