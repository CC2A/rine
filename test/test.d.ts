import { Rine } from './rine';
export declare const Some: (new (a: 1) => {
    readonly some: () => false;
    readonly empty: "asd" & (() => 123);
} & Rine) & ((a: 1) => {
    readonly some: () => false;
    readonly empty: "asd" & (() => 123);
} & Rine);
