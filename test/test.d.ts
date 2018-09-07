import { RinePropertyContext } from '.';
export declare const Some: (new (a: 1) => import("./TypeCheck").Checker<import("./Defines/define").RineAttribute, {
    empty: {
        get(ctx: RinePropertyContext): () => string;
        call(ctx: any): () => number;
    };
    self: {
        get(ctx: any): any;
    };
}, {
    some: {
        call(ctx: any): () => boolean;
    };
}, (a: 1) => void>) & ((a: 1) => import("./TypeCheck").Checker<import("./Defines/define").RineAttribute, {
    empty: {
        get(ctx: RinePropertyContext): () => string;
        call(ctx: any): () => number;
    };
    self: {
        get(ctx: any): any;
    };
}, {
    some: {
        call(ctx: any): () => boolean;
    };
}, (a: 1) => void>);
