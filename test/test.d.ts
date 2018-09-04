interface Some<T> {
    new (a: 1): T;
    (a: 1): T;
}
export declare const obj: Some<{
    readonly some: () => false;
    readonly empty: "asd" & (() => 123);
}>;
export {};
