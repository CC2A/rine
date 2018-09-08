import { Rine } from '.';
declare function SomeDefs(): {
    readonly some: () => false;
    readonly empty: "asd" & (() => 123);
    readonly self: any;
} & Rine;
export declare type SomeType = ReturnType<typeof SomeDefs>;
export declare const Some: (new (a: 1) => {
    readonly some: () => false;
    readonly empty: "asd" & (() => 123);
    readonly self: any;
} & Rine) & ((a: 1) => {
    readonly some: () => false;
    readonly empty: "asd" & (() => 123);
    readonly self: any;
} & Rine);
export {};
